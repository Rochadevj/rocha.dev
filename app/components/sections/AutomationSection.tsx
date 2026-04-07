"use client";

import {
  useEffect,
  useRef,
  useState,
  type PointerEvent as ReactPointerEvent,
} from "react";
import {
  Bot,
  Cable,
  GitBranch,
  MousePointer2,
  Play,
  RotateCcw,
  Send,
  Sparkles,
  Webhook,
} from "lucide-react";
import { useTranslations } from "@/app/components/i18n/LanguageProvider";

type NodeKey = "trigger" | "processor" | "router" | "action";

type NodePosition = {
  x: number;
  y: number;
};

type NodePositions = Record<NodeKey, NodePosition>;

const NODE_WIDTH = 168;
const NODE_HEIGHT = 104;
const DEFAULT_CANVAS_WIDTH = 860;
const CANVAS_X_PADDING = 32;
const CANVAS_Y_PADDING = 24;
const FLOW_LAYOUT_WIDTH = 580;
const FLOW_HORIZONTAL_OFFSET = -8;

const createInitialPositions = (
  canvasWidth = DEFAULT_CANVAS_WIDTH
): NodePositions => {
  const safeWidth = Math.max(
    canvasWidth,
    FLOW_LAYOUT_WIDTH + CANVAS_X_PADDING * 2
  );
  const layoutWidth = Math.min(
    FLOW_LAYOUT_WIDTH,
    safeWidth - CANVAS_X_PADDING * 2 - 20
  );

  const flowStartX = Math.max(
    CANVAS_X_PADDING,
    Math.round((safeWidth - layoutWidth) / 2) + FLOW_HORIZONTAL_OFFSET
  );
  const triggerX = flowStartX;
  const processorX = flowStartX + Math.round(layoutWidth * 0.38);
  const routerX = flowStartX + Math.round(layoutWidth * 0.52);
  const actionX = flowStartX + layoutWidth - NODE_WIDTH;

  return {
    trigger: { x: triggerX, y: 114 },
    processor: { x: processorX, y: 68 },
    router: { x: routerX, y: 222 },
    action: { x: actionX, y: 106 },
  };
};

const nodeVisuals: Record<
  NodeKey,
  {
    icon: typeof Webhook;
    eyebrow: string;
    iconClass: string;
    borderClass: string;
    glowClass: string;
  }
> = {
  trigger: {
    icon: Webhook,
    eyebrow: "Trigger",
    iconClass: "bg-cyan-400/12 text-cyan-300",
    borderClass: "border-cyan-300/16",
    glowClass: "from-cyan-400/18 to-cyan-400/0",
  },
  processor: {
    icon: Bot,
    eyebrow: "AI",
    iconClass: "bg-violet-400/12 text-violet-300",
    borderClass: "border-violet-300/16",
    glowClass: "from-violet-400/18 to-violet-400/0",
  },
  router: {
    icon: GitBranch,
    eyebrow: "Logic",
    iconClass: "bg-amber-400/12 text-amber-300",
    borderClass: "border-amber-300/16",
    glowClass: "from-amber-400/18 to-amber-400/0",
  },
  action: {
    icon: Send,
    eyebrow: "Action",
    iconClass: "bg-emerald-400/12 text-emerald-300",
    borderClass: "border-emerald-300/16",
    glowClass: "from-emerald-400/18 to-emerald-400/0",
  },
};

export function AutomationSection() {
  const { copy } = useTranslations();
  const canvasRef = useRef<HTMLDivElement>(null);
  const timeoutsRef = useRef<number[]>([]);
  const dragStateRef = useRef<{
    key: NodeKey;
    pointerId: number;
    offsetX: number;
    offsetY: number;
  } | null>(null);

  const [activePresetIndex, setActivePresetIndex] = useState(0);
  const [positions, setPositions] = useState<NodePositions>(() =>
    createInitialPositions()
  );
  const [draggingKey, setDraggingKey] = useState<NodeKey | null>(null);
  const [runState, setRunState] = useState<"idle" | "running" | "done">("idle");
  const [completedLogs, setCompletedLogs] = useState(0);

  const activePreset = copy.automation.presets[activePresetIndex];
  const activeLogs = activePreset.logs.slice(0, completedLogs);
  const activeEdgeCount =
    runState === "done"
      ? 3
      : runState === "running"
        ? Math.min(completedLogs, 3)
        : 0;

  const clearRunTimeouts = () => {
    timeoutsRef.current.forEach((timeoutId) => window.clearTimeout(timeoutId));
    timeoutsRef.current = [];
  };

  const getInitialPositions = () =>
    createInitialPositions(canvasRef.current?.clientWidth);

  const resetBuilder = () => {
    clearRunTimeouts();
    setRunState("idle");
    setCompletedLogs(0);
    setPositions(getInitialPositions());
  };

  const runFlow = () => {
    clearRunTimeouts();
    setRunState("running");
    setCompletedLogs(0);

    activePreset.logs.forEach((_, index) => {
      const timeoutId = window.setTimeout(() => {
        setCompletedLogs(index + 1);
      }, 320 + index * 520);
      timeoutsRef.current.push(timeoutId);
    });

    const finishTimeoutId = window.setTimeout(() => {
      setRunState("done");
    }, 320 + activePreset.logs.length * 520);

    timeoutsRef.current.push(finishTimeoutId);
  };

  const selectPreset = (index: number) => {
    clearRunTimeouts();
    setActivePresetIndex(index);
    setRunState("idle");
    setCompletedLogs(0);
    setPositions(getInitialPositions());
  };

  const handlePointerDown = (
    key: NodeKey,
    event: ReactPointerEvent<HTMLDivElement>
  ) => {
    if (!canvasRef.current) return;

    event.preventDefault();
    event.stopPropagation();
    event.currentTarget.setPointerCapture(event.pointerId);

    const rect = canvasRef.current.getBoundingClientRect();
    dragStateRef.current = {
      key,
      pointerId: event.pointerId,
      offsetX: event.clientX - rect.left - positions[key].x,
      offsetY: event.clientY - rect.top - positions[key].y,
    };
    setDraggingKey(key);
  };

  useEffect(() => {
    const handlePointerMove = (event: PointerEvent) => {
      const dragState = dragStateRef.current;
      if (
        !dragState ||
        dragState.pointerId !== event.pointerId ||
        !canvasRef.current
      ) {
        return;
      }

      const rect = canvasRef.current.getBoundingClientRect();
      const nextX = event.clientX - rect.left - dragState.offsetX;
      const nextY = event.clientY - rect.top - dragState.offsetY;

      const clampedX = Math.min(
        Math.max(CANVAS_X_PADDING, nextX),
        rect.width - NODE_WIDTH - CANVAS_X_PADDING
      );
      const clampedY = Math.min(
        Math.max(CANVAS_Y_PADDING, nextY),
        rect.height - NODE_HEIGHT - CANVAS_Y_PADDING
      );

      setPositions((current) => ({
        ...current,
        [dragState.key]: {
          x: clampedX,
          y: clampedY,
        },
      }));
    };

    const handlePointerUp = (event: PointerEvent) => {
      if (
        dragStateRef.current &&
        dragStateRef.current.pointerId !== event.pointerId
      ) {
        return;
      }

      dragStateRef.current = null;
      setDraggingKey(null);
    };

    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerup", handlePointerUp);
    window.addEventListener("pointercancel", handlePointerUp);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerup", handlePointerUp);
      window.removeEventListener("pointercancel", handlePointerUp);
    };
  }, []);

  useEffect(() => {
    if (!draggingKey) return;

    const previousUserSelect = document.body.style.userSelect;
    const previousCursor = document.body.style.cursor;

    document.body.style.userSelect = "none";
    document.body.style.cursor = "grabbing";

    return () => {
      document.body.style.userSelect = previousUserSelect;
      document.body.style.cursor = previousCursor;
    };
  }, [draggingKey]);

  useEffect(() => {
    const syncCanvasLayout = () => {
      if (!canvasRef.current || dragStateRef.current) return;
      setPositions(createInitialPositions(canvasRef.current.clientWidth));
    };

    syncCanvasLayout();

    const resizeObserver = new ResizeObserver(() => {
      syncCanvasLayout();
    });

    if (canvasRef.current) {
      resizeObserver.observe(canvasRef.current);
    }

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  useEffect(() => {
    return () => {
      clearRunTimeouts();
    };
  }, []);

  const edges: Array<{ from: NodeKey; to: NodeKey }> = [
    { from: "trigger", to: "processor" },
    { from: "processor", to: "router" },
    { from: "router", to: "action" },
  ];

  const statusLabel =
    runState === "running"
      ? copy.automation.status.running
      : runState === "done"
        ? copy.automation.status.done
        : copy.automation.status.idle;

  return (
    <section id="automation" className="relative py-20 sm:py-28 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 xl:grid-cols-[0.64fr_1.36fr] gap-10 xl:gap-12 items-start">
        <div className="space-y-7">
          <div className="flex justify-center xl:justify-start">
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-300/18 bg-cyan-300/8 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.18em] text-cyan-100">
              <Sparkles className="h-3.5 w-3.5" />
              {copy.automation.label}
            </span>
          </div>

          <div className="space-y-4 text-center xl:text-left">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white">
              {copy.automation.title}{" "}
              <span className="font-serif italic text-cyan-200">
                {copy.automation.titleAccent}
              </span>
            </h2>
            <p className="mx-auto max-w-xl text-gray-400 text-base sm:text-lg leading-relaxed xl:mx-0">
              {copy.automation.description}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {copy.automation.chips.map((chip) => (
              <div
                key={chip.title}
                className="rounded-2xl border border-white/8 bg-black/15 px-4 py-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.02)]"
              >
                <p className="text-sm font-medium text-white/90">{chip.title}</p>
                <p className="mt-1 text-xs leading-relaxed text-gray-500/90">
                  {chip.description}
                </p>
              </div>
            ))}
          </div>

          <div className="flex items-start gap-3 rounded-2xl border border-white/8 bg-black/15 px-4 py-4 text-sm text-gray-500 shadow-[inset_0_1px_0_rgba(255,255,255,0.02)]">
            <MousePointer2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300/85" />
            <p>{copy.automation.canvasHint}</p>
          </div>
        </div>

        <div className="relative w-full overflow-hidden rounded-[1.8rem] border border-white/10 bg-[#07111c]/92 p-3 sm:p-4 shadow-[0_24px_70px_rgba(0,0,0,0.28)] xl:justify-self-end xl:max-w-208">
          <div className="relative flex flex-col gap-4">
            <div className="flex flex-col gap-4 text-center sm:text-left sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-white/35">
                  {copy.automation.canvasTitle}
                </p>
                <p className="mt-1 text-sm text-white/70">{statusLabel}</p>
              </div>

              <div className="flex items-center justify-center gap-2 sm:justify-end">
                <button
                  type="button"
                  onClick={runFlow}
                  className="inline-flex items-center gap-2 rounded-full border border-cyan-300/14 bg-cyan-300/6 px-4 py-2 text-sm font-medium text-cyan-50 transition-colors hover:bg-cyan-300/10"
                >
                  <Play className="h-4 w-4" />
                  {copy.automation.controls.play}
                </button>
                <button
                  type="button"
                  onClick={resetBuilder}
                  className="inline-flex items-center gap-2 rounded-full border border-white/8 bg-white/3 px-4 py-2 text-sm font-medium text-white/72 transition-colors hover:bg-white/5 hover:text-white/88"
                >
                  <RotateCcw className="h-4 w-4" />
                  {copy.automation.controls.reset}
                </button>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {copy.automation.presets.map((preset, index) => (
                <button
                  key={preset.name}
                  type="button"
                  onClick={() => selectPreset(index)}
                  className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                    activePresetIndex === index
                      ? "border-cyan-300/20 bg-cyan-300/7 text-cyan-50"
                      : "border-white/8 bg-white/3 text-white/65 hover:bg-white/5 hover:text-white/82"
                  }`}
                >
                  {preset.name}
                </button>
              ))}
            </div>

            <div className="relative overflow-hidden rounded-[1.6rem] border border-white/10 bg-[#050a12] p-2.5 sm:p-3">
              <div className="-mx-1 overflow-x-auto px-1 no-scrollbar xl:mx-0 xl:px-0">
              <div
                ref={canvasRef}
                className="relative h-[420px] w-155 overflow-hidden rounded-[1.4rem] border border-white/8 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.14),transparent_22%),radial-gradient(circle_at_bottom_left,rgba(16,185,129,0.10),transparent_26%),linear-gradient(180deg,rgba(7,12,20,0.98),rgba(4,8,14,0.98))] no-scrollbar sm:h-99 sm:w-full"
              >
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-size-[28px_28px] opacity-40" />
                <div className="pointer-events-none absolute left-5 top-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/3 px-3 py-1.5 text-[11px] uppercase tracking-[0.18em] text-white/40">
                  <Cable className="h-3.5 w-3.5" />
                  {activePreset.summary}
                </div>

                <svg className="pointer-events-none absolute inset-0 h-full w-full">
                  {edges.map((edge, index) => {
                    const from = positions[edge.from];
                    const to = positions[edge.to];
                    const startX = from.x + NODE_WIDTH;
                    const startY = from.y + NODE_HEIGHT / 2;
                    const endX = to.x;
                    const endY = to.y + NODE_HEIGHT / 2;
                    const controlOffset = Math.max(60, (endX - startX) * 0.48);
                    const path = `M ${startX} ${startY} C ${startX + controlOffset} ${startY}, ${endX - controlOffset} ${endY}, ${endX} ${endY}`;
                    const isActive = index < activeEdgeCount;

                    return (
                      <g key={`${edge.from}-${edge.to}`}>
                        <path
                          d={path}
                          fill="none"
                          stroke={isActive ? "rgba(103, 232, 249, 0.95)" : "rgba(255,255,255,0.12)"}
                          strokeWidth={isActive ? 2.5 : 1.5}
                          strokeDasharray={isActive ? "0" : "6 8"}
                          strokeLinecap="round"
                        />
                      </g>
                    );
                  })}
                </svg>

                {(Object.keys(positions) as NodeKey[]).map((key) => {
                  const node = activePreset.nodes[key];
                  const visual = nodeVisuals[key];
                  const Icon = visual.icon;
                  const isCompleted =
                    (key === "trigger" && completedLogs > 0) ||
                    (key === "processor" && completedLogs > 1) ||
                    (key === "router" && completedLogs > 2) ||
                    (key === "action" && completedLogs > 3);

                  return (
                    <div
                      key={key}
                      onPointerDown={(event) => handlePointerDown(key, event)}
                      onDragStart={(event) => event.preventDefault()}
                      className={`absolute w-42 touch-none select-none rounded-[1.25rem] border bg-[#0b1420]/95 p-4 shadow-[0_18px_38px_rgba(0,0,0,0.28)] ${
                        draggingKey === key
                          ? "cursor-grabbing"
                          : "cursor-grab transition-shadow hover:shadow-[0_22px_44px_rgba(0,0,0,0.34)]"
                      } ${
                        visual.borderClass
                      }`}
                      style={{
                        left: positions[key].x,
                        top: positions[key].y,
                      }}
                    >
                      <div
                        className={`pointer-events-none absolute inset-0 rounded-[1.25rem] bg-linear-to-br ${visual.glowClass} opacity-65`}
                      />
                      <div className="relative z-10 flex items-start justify-between gap-3">
                        <div
                          className={`flex h-10 w-10 items-center justify-center rounded-xl ${visual.iconClass}`}
                        >
                          <Icon className="h-5 w-5" />
                        </div>
                        <span
                          className={`mt-1 h-2.5 w-2.5 rounded-full ${
                            isCompleted
                              ? "bg-emerald-300 shadow-[0_0_10px_rgba(110,231,183,0.75)]"
                              : "bg-white/20"
                          }`}
                        />
                      </div>

                      <div className="relative z-10 mt-4">
                        <p className="text-[10px] uppercase tracking-[0.22em] text-white/35">
                          {visual.eyebrow}
                        </p>
                        <h3 className="mt-1 text-sm font-semibold text-white">
                          {node.title}
                        </h3>
                        <p className="mt-1 text-xs leading-relaxed text-white/55">
                          {node.subtitle}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
              </div>
            </div>

            <div className="grid gap-3 md:grid-cols-[1fr_1.2fr]">
              <div className="rounded-2xl border border-white/8 bg-black/15 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.02)]">
                <p className="text-xs uppercase tracking-[0.18em] text-white/35">
                  {copy.automation.logTitle}
                </p>
                <div className="mt-3 space-y-2">
                  {activeLogs.length > 0 ? (
                    activeLogs.map((log) => (
                      <div
                        key={log}
                        className="flex items-start gap-2 rounded-xl border border-white/6 bg-white/3 px-3 py-2 text-sm text-white/72"
                      >
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-cyan-300/90" />
                        <span>{log}</span>
                      </div>
                    ))
                  ) : (
                    <div className="rounded-xl border border-dashed border-white/8 px-3 py-4 text-sm text-white/40">
                      {copy.automation.emptyLog}
                    </div>
                  )}
                </div>
              </div>

              <div className="rounded-2xl border border-white/8 bg-black/15 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.02)]">
                <p className="text-xs uppercase tracking-[0.18em] text-white/35">
                  {copy.automation.noteTitle}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-gray-500">
                  {copy.automation.note}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
