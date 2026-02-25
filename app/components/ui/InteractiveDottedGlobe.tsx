"use client";

import * as React from "react";
import createGlobe from "cobe";

import { cn } from "../../lib/utils";

interface GlobeMarker {
  lat: number;
  lng: number;
  size?: number;
}

export interface InteractiveDottedGlobeProps
  extends React.HTMLAttributes<HTMLDivElement> {
  mapSamples?: number;
  marker?: GlobeMarker;
  initialLongitude?: number;
  autoRotateSpeed?: number;
}

const DEG_TO_RAD = Math.PI / 180;

export function InteractiveDottedGlobe({
  mapSamples = 22000,
  marker = { lat: -14.235, lng: -51.925, size: 0.18 },
  initialLongitude = -52,
  autoRotateSpeed = 0,
  className,
  ...props
}: InteractiveDottedGlobeProps) {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const canvasRef = React.useRef<HTMLCanvasElement>(null);
  const pointerIdRef = React.useRef<number | null>(null);
  const isDraggingRef = React.useRef(false);
  const lastXRef = React.useRef(0);
  const phiRef = React.useRef(initialLongitude * DEG_TO_RAD);
  const [isDragging, setIsDragging] = React.useState(false);

  React.useEffect(() => {
    phiRef.current = initialLongitude * DEG_TO_RAD;
  }, [initialLongitude]);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let size = 0;
    const updateSize = () => {
      size = canvas.offsetWidth;
    };
    updateSize();

    const resizeObserver = new ResizeObserver(updateSize);
    resizeObserver.observe(canvas);

    const globe = createGlobe(canvas, {
      devicePixelRatio: 2,
      width: size * 2,
      height: size * 2,
      phi: phiRef.current,
      theta: -0.04,
      dark: 1,
      diffuse: 1.05,
      mapSamples,
      mapBrightness: 8.4,
      mapBaseBrightness: 0.06,
      baseColor: [0.055, 0.055, 0.06],
      markerColor: [1, 1, 1],
      glowColor: [1, 1, 1],
      offset: [0, 0.005],
      scale: 1.02,
      markers: [
        {
          location: [marker.lat, marker.lng],
          size: marker.size ?? 0.12,
          color: [1, 1, 1],
        },
        {
          location: [marker.lat, marker.lng],
          size: Math.max(0.055, (marker.size ?? 0.12) * 0.34),
          color: [1, 1, 1],
        },
      ],
      onRender: (state) => {
        if (!isDraggingRef.current && autoRotateSpeed !== 0) {
          phiRef.current += autoRotateSpeed;
        }

        state.phi = phiRef.current;
        state.width = size * 2;
        state.height = size * 2;
      },
    });

    return () => {
      resizeObserver.disconnect();
      globe.destroy();
    };
  }, [autoRotateSpeed, mapSamples, marker.lat, marker.lng, marker.size]);

  const stopDrag = React.useCallback(() => {
    pointerIdRef.current = null;
    isDraggingRef.current = false;
    setIsDragging(false);
  }, []);

  const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
    pointerIdRef.current = event.pointerId;
    isDraggingRef.current = true;
    setIsDragging(true);
    lastXRef.current = event.clientX;
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!isDraggingRef.current || pointerIdRef.current !== event.pointerId) return;
    event.preventDefault();
    event.stopPropagation();

    const deltaX = event.clientX - lastXRef.current;
    lastXRef.current = event.clientX;
    phiRef.current += deltaX * 0.0062;
  };

  const handlePointerUp = (event: React.PointerEvent<HTMLDivElement>) => {
    if (pointerIdRef.current !== event.pointerId) return;
    event.preventDefault();
    event.stopPropagation();
    event.currentTarget.releasePointerCapture(event.pointerId);
    stopDrag();
  };

  const handlePointerCancel = (event: React.PointerEvent<HTMLDivElement>) => {
    if (pointerIdRef.current !== event.pointerId) return;
    event.preventDefault();
    event.stopPropagation();
    stopDrag();
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative h-full w-full select-none touch-pan-y",
        isDragging ? "cursor-grabbing" : "cursor-grab",
        className
      )}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerCancel}
      {...props}
    >
      <canvas
        ref={canvasRef}
        className="h-full w-full"
        style={{
          width: "100%",
          height: "100%",
          contain: "size layout paint",
          cursor: isDragging ? "grabbing" : "grab",
          userSelect: "none",
        }}
      />
      <div className="pointer-events-none absolute inset-0 rounded-full shadow-[inset_0_-34px_54px_rgba(0,0,0,0.58)]" />
    </div>
  );
}
