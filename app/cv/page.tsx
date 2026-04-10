"use client";

import Link from "next/link";
import {
  ArrowDownToLine,
  ArrowUpRight,
  BriefcaseBusiness,
  FileText,
  Github,
  GraduationCap,
  Languages,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Sparkles,
} from "lucide-react";
import { Footer, Navbar } from "../components/layout";
import { useTranslations } from "../components/i18n/LanguageProvider";
import type { Language } from "../lib/i18n";
import { cvContent } from "./resume-content";

export default function CvPage() {
  const { language } = useTranslations();
  const isPortuguese = language === "pt-BR";
  const content = cvContent[language as Language];
  const resumeHref =
    language === "pt-BR"
      ? "/Henrique%20Rocha%20curr%C3%ADculo.pdf"
      : "/Henrique%20Rocha%20curr%C3%ADculoIN.pdf";
  const resumeDownloadName =
    language === "pt-BR"
      ? "Henrique-Rocha-Curriculo-PT-BR.pdf"
      : "Henrique-Rocha-CV-EN.pdf";
  const atsHref = `/cv/ats?lang=${encodeURIComponent(language)}`;
  const locationLabel =
    language === "pt-BR"
      ? "Porto Alegre, Rio Grande do Sul, Brasil"
      : "Porto Alegre, Rio Grande do Sul, Brazil";

  return (
    <div className="min-h-screen font-(family-name:--font-geist-sans)">
      <Navbar />

      <main className="relative z-10 overflow-hidden px-4 pb-20 pt-28 text-white sm:px-6 sm:pb-24 sm:pt-32">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-size-[18px_18px] opacity-35" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-80 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.18),transparent_58%)]" />
        <div className="pointer-events-none absolute bottom-0 left-[-12%] h-96 w-96 rounded-full bg-cyan-400/10 blur-[110px]" />
        <div className="pointer-events-none absolute right-[-10%] top-[22%] h-88 w-88 rounded-full bg-emerald-400/8 blur-[120px]" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-44 bg-[linear-gradient(180deg,rgba(5,8,13,0)_0%,rgba(5,8,13,0.78)_100%)]" />

        <div className="relative mx-auto max-w-6xl">
          <section className="grid gap-6 lg:grid-cols-[1.16fr_0.84fr]">
            <div className="rounded-4xl border border-white/10 bg-[#09101a]/84 p-6 shadow-[0_24px_70px_rgba(0,0,0,0.24)] backdrop-blur-sm sm:p-8">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/38">
                  {content.roleLabel}
                </p>
                <h1 className="mt-3 text-[2.15rem] font-black tracking-tight text-white min-[430px]:text-[2.35rem] sm:text-6xl lg:text-7xl">
                  Henrique{" "}
                  <span className="inline font-(family-name:--font-lust) italic font-normal text-cyan-100/95">
                    Rocha
                  </span>
                </h1>
                <p className="mt-4 text-xl font-semibold tracking-tight text-white/82 sm:text-3xl">
                  {content.role}
                </p>
              </div>

              <p className="mt-6 max-w-3xl text-base leading-relaxed text-white/66 sm:text-lg">
                {content.summary}
              </p>

              <div className="mt-8 border-t border-white/8 pt-6">
                <div className="grid gap-x-8 gap-y-4 sm:grid-cols-2">
                  {content.quickFacts.map((fact) => (
                    <div key={fact.label}>
                      <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-white/36">
                        {fact.label}
                      </p>
                      <p className="mt-2 text-sm font-semibold text-white/84 sm:text-[0.95rem]">
                        {fact.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <aside className="rounded-4xl border border-white/10 bg-[#0a1220] p-6 text-white shadow-[0_28px_80px_rgba(2,6,23,0.32)] sm:p-8">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/36">
                {content.contactTitle}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-white/64 sm:text-base">
                {content.contactIntro}
              </p>

              <div className="mt-6 space-y-3">
                <a
                  href="mailto:henriquerocha1357@gmail.com"
                  className="flex items-center gap-3 rounded-2xl border border-white/8 bg-white/4 px-4 py-3 text-sm text-white/86 transition-colors hover:bg-white/8"
                >
                  <Mail className="h-4 w-4 text-cyan-200" />
                  henriquerocha1357@gmail.com
                </a>
                <a
                  href="tel:+5551991288418"
                  className="flex items-center gap-3 rounded-2xl border border-white/8 bg-white/4 px-4 py-3 text-sm text-white/86 transition-colors hover:bg-white/8"
                >
                  <Phone className="h-4 w-4 text-cyan-200" />
                  +55 51 99128-8418
                </a>
                <div className="flex items-center gap-3 rounded-2xl border border-white/8 bg-white/4 px-4 py-3 text-sm text-white/82">
                  <MapPin className="h-4 w-4 text-cyan-200" />
                  {locationLabel}
                </div>
              </div>

              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <a
                  href="https://github.com/Rochadevj"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-2xl border border-white/8 bg-white/4 px-4 py-3 text-sm text-white/84 transition-colors hover:bg-white/8"
                >
                  <Github className="h-4 w-4 text-cyan-200" />
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/henrique-rocha-389609287/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-2xl border border-white/8 bg-white/4 px-4 py-3 text-sm text-white/84 transition-colors hover:bg-white/8"
                >
                  <Linkedin className="h-4 w-4 text-cyan-200" />
                  LinkedIn
                </a>
              </div>

              <div
                className={`mt-6 gap-3 ${
                  isPortuguese
                    ? "grid grid-cols-1 sm:grid-cols-2"
                    : "flex flex-wrap"
                }`}
              >
                <a
                  href={resumeHref}
                  download={resumeDownloadName}
                  className={`inline-flex items-center justify-center gap-2 rounded-full bg-cyan-300 px-5 py-3 text-sm font-semibold text-slate-950 shadow-[0_18px_38px_rgba(103,232,249,0.28)] transition-transform hover:-translate-y-0.5 hover:bg-cyan-200 ${
                    isPortuguese ? "w-full" : "w-full sm:w-auto"
                  }`}
                >
                  <ArrowDownToLine className="h-4 w-4" />
                  {content.actions.download}
                </a>
                <a
                  href={atsHref}
                  className={`inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/6 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10 ${
                    isPortuguese ? "w-full sm:col-span-2" : "w-full sm:w-auto"
                  }`}
                >
                  <FileText className="h-4 w-4" />
                  {content.actions.downloadAts}
                </a>
                <Link
                  href="/#contact"
                  className={`inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/6 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10 ${
                    isPortuguese ? "w-full sm:row-start-1 sm:col-start-2" : "w-full sm:w-auto"
                  }`}
                >
                  {content.actions.contact}
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </aside>
          </section>

          <section className="mt-10 rounded-4xl border border-white/10 bg-[#09101a]/82 p-5 shadow-[0_22px_56px_rgba(0,0,0,0.22)] sm:p-6">
            <div className="mb-5 flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-cyan-300/16 bg-cyan-300/8 text-cyan-100">
                <Sparkles className="h-4 w-4" />
              </span>
              <h2 className="text-2xl font-bold tracking-tight text-white sm:text-[1.8rem]">
                {content.metricsTitle}
              </h2>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {content.metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="group relative overflow-hidden rounded-[1.4rem] border border-white/8 bg-white/3 px-5 py-5 transition-[background-color,border-color,box-shadow,transform] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:border-cyan-300/20 hover:bg-white/[0.07] hover:shadow-[0_0_0_1px_rgba(34,211,238,0.08),0_0_22px_rgba(34,211,238,0.05)]"
                >
                  <div
                    className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:opacity-100"
                    style={{
                      background:
                        "radial-gradient(160px circle at 18% 14%, rgba(34,211,238,0.11), rgba(34,211,238,0) 62%), radial-gradient(180px circle at 84% 88%, rgba(16,185,129,0.08), rgba(16,185,129,0) 64%)",
                    }}
                  />
                  <p className="relative z-10 text-3xl font-black tracking-tight text-white transition-colors duration-500 group-hover:text-cyan-50">
                    {metric.value}
                  </p>
                  <p className="relative z-10 mt-3 text-sm font-semibold uppercase tracking-[0.14em] text-white/62 transition-colors duration-500 group-hover:text-white/78">
                    {metric.label}
                  </p>
                  <p className="relative z-10 mt-2 text-sm leading-relaxed text-white/50 transition-colors duration-500 group-hover:text-white/58">
                    {metric.detail}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-12 grid gap-6 xl:grid-cols-[1.14fr_0.86fr]">
            <div className="rounded-4xl border border-white/10 bg-[#09101a]/84 p-6 shadow-[0_24px_70px_rgba(0,0,0,0.24)] sm:p-8">
              <div className="mb-8 flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/6 text-white/82">
                  <BriefcaseBusiness className="h-4 w-4" />
                </span>
                <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                  {content.experienceTitle}
                </h2>
              </div>

              <div className="space-y-5">
                {content.experience.map((item) => (
                  <article
                    key={`${item.company}-${item.role}`}
                    className="group relative overflow-hidden rounded-[1.7rem] border border-white/10 bg-white/4 p-5 transition-[background-color,border-color,box-shadow,transform] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 hover:border-cyan-300/16 hover:bg-white/5.5 hover:shadow-[0_0_0_1px_rgba(34,211,238,0.06),0_0_18px_rgba(34,211,238,0.04)]"
                  >
                    <div
                      className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:opacity-100"
                      style={{
                        background:
                          "radial-gradient(180px circle at 12% 12%, rgba(34,211,238,0.08), rgba(34,211,238,0) 60%)",
                      }}
                    />
                    <p className="relative z-10 text-xs font-bold uppercase tracking-[0.18em] text-cyan-100/75">
                      {item.period}
                    </p>
                    <h3 className="relative z-10 mt-2 text-xl font-semibold text-white">
                      {item.role}
                    </h3>
                    <p className="relative z-10 mt-1 text-sm font-medium text-cyan-100/78">
                      {item.company}
                    </p>
                    <ul className="mt-4 space-y-2">
                      {item.bullets.map((bullet) => (
                        <li
                          key={bullet}
                          className="relative z-10 flex items-start gap-3 text-sm leading-relaxed text-white/64"
                        >
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-200" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div className="rounded-4xl border border-white/10 bg-[#09101a]/84 p-6 shadow-[0_24px_70px_rgba(0,0,0,0.24)]">
                <div className="mb-6 flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/6 text-white/82">
                    <GraduationCap className="h-4 w-4" />
                  </span>
                  <h2 className="text-2xl font-bold tracking-tight text-white">
                    {content.educationTitle}
                  </h2>
                </div>
                <div className="space-y-4">
                  {content.education.map((item) => (
                    <div
                      key={`${item.school}-${item.title}`}
                      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/4 p-4 transition-[background-color,border-color,box-shadow,transform] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 hover:border-cyan-300/16 hover:bg-white/5.5 hover:shadow-[0_0_0_1px_rgba(34,211,238,0.06),0_0_18px_rgba(34,211,238,0.04)]"
                    >
                      <div
                        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:opacity-100"
                        style={{
                          background:
                            "radial-gradient(180px circle at 12% 12%, rgba(34,211,238,0.08), rgba(34,211,238,0) 60%)",
                        }}
                      />
                      <p className="relative z-10 text-xs font-bold uppercase tracking-[0.16em] text-cyan-100/75">
                        {item.period}
                      </p>
                      <h3 className="relative z-10 mt-2 text-base font-semibold text-white">
                        {item.title}
                      </h3>
                      <p className="relative z-10 mt-1 text-sm text-white/58">{item.school}</p>
                      <p className="relative z-10 mt-2 text-sm leading-relaxed text-white/50">
                        {item.detail}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-4xl border border-white/10 bg-[#09101a]/84 p-6 shadow-[0_24px_70px_rgba(0,0,0,0.24)]">
                <div className="mb-6 flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/6 text-white/82">
                    <Languages className="h-4 w-4" />
                  </span>
                  <h2 className="text-2xl font-bold tracking-tight text-white">
                    {content.languagesTitle}
                  </h2>
                </div>
                <div className="space-y-3">
                  {content.languages.map((item) => (
                    <div
                      key={item.name}
                      className="group relative overflow-hidden flex items-center justify-between rounded-[1.4rem] border border-white/10 bg-white/4 px-4 py-3 transition-[background-color,border-color,box-shadow,transform] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 hover:border-cyan-300/16 hover:bg-white/5.5 hover:shadow-[0_0_0_1px_rgba(34,211,238,0.06),0_0_18px_rgba(34,211,238,0.04)]"
                    >
                      <div
                        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:opacity-100"
                        style={{
                          background:
                            "radial-gradient(160px circle at 12% 12%, rgba(34,211,238,0.08), rgba(34,211,238,0) 60%)",
                        }}
                      />
                      <span className="relative z-10 text-sm font-medium text-white/86">{item.name}</span>
                      <span className="relative z-10 text-sm text-white/50">{item.level}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-4xl border border-white/10 bg-[#09101a]/84 p-6 shadow-[0_24px_70px_rgba(0,0,0,0.24)]">
                <div className="mb-6 flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/6 text-white/82">
                    <Sparkles className="h-4 w-4" />
                  </span>
                  <h2 className="text-2xl font-bold tracking-tight text-white">
                    {content.skillsTitle}
                  </h2>
                </div>

                <div className="space-y-5">
                  {content.skillGroups.map((group) => (
                    <div key={group.title}>
                      <h3 className="text-xs font-bold uppercase tracking-[0.16em] text-white/42">
                        {group.title}
                      </h3>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {group.items.map((item) => (
                          <span
                            key={item}
                            className="rounded-full border border-white/10 bg-white/4 px-3 py-1.5 text-xs font-medium text-white/70"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <div className="mt-12 flex flex-col gap-3 border-t border-white/8 pt-6 text-sm text-white/42 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-2xl">{content.footerNote}</p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 font-medium text-white/62 transition-colors hover:text-white"
            >
              {content.actions.portfolio}
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
