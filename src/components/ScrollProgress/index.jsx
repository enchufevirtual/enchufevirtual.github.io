"use client";

import { useCallback, useContext, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { GlobalContext } from "@/context/GlobalContext";

const homeSections = [
  { id: "Hero", labels: { es: "Inicio", en: "Home" } },
  { id: "Main", labels: { es: "Proyectos", en: "Projects" } },
  { id: "home-cta", labels: { es: "Contacto", en: "Contact" } },
  { id: "footer_container", labels: { es: "Comunidad", en: "Community" } },
];
const projectSections = [
  { id: "Main", labels: { es: "Proyecto", en: "Project" } },
  { id: "footer_container", labels: { es: "Comunidad", en: "Community" } },
];
const scaleValues = Array.from({ length: 101 }, (_, value) => value);
const rulerTopInset = 20;
const rulerBottomInset = 28;

const ScrollProgress = () => {
  const { language } = useContext(GlobalContext);
  const pathname = usePathname();
  const sections = pathname === "/" ? homeSections : projectSections;
  const [scrollMetrics, setScrollMetrics] = useState({
    progress: 0,
    rulerHeight: 0,
    rulerOffset: 58,
    markerPosition: 0,
  });
  const [activeSection, setActiveSection] = useState(0);
  const currentSection = sections[Math.min(activeSection, sections.length - 1)] ?? homeSections[0];
  const sectionLabel = currentSection.labels[language] ?? currentSection.labels.es;
  const percentage = Math.round(scrollMetrics.progress);
  const isKnownPage = pathname === "/" || pathname.startsWith("/page/");

  const updateProgress = useCallback(() => {
    const documentHeight = Math.max(
      document.documentElement.scrollHeight,
      document.body.scrollHeight,
    );
    const headerHeight =
      document.getElementById("Header")?.getBoundingClientRect().height ?? 0;
    const scrollableHeight = Math.max(0, documentHeight - window.innerHeight);
    const nextProgress = scrollableHeight > 0
      ? (window.scrollY / scrollableHeight) * 100
      : 0;
    const boundedProgress = Math.min(100, Math.max(0, nextProgress));
    const rulerHeight = Math.max(
      0,
      documentHeight - headerHeight - rulerTopInset - rulerBottomInset,
    );
    const activeIndex = sections.reduce((currentIndex, section, index) => {
      const element = document.getElementById(section.id);
      const isAtPageEnd =
        index === sections.length - 1 &&
        scrollableHeight > 0 &&
        window.scrollY >= scrollableHeight - 1;
      if (
        element &&
        (element.getBoundingClientRect().top <= window.innerHeight * 0.55 ||
          isAtPageEnd)
      ) {
        return index;
      }
      return currentIndex;
    }, 0);

    setScrollMetrics({
      progress: boundedProgress,
      rulerHeight,
      rulerOffset: headerHeight + rulerTopInset - window.scrollY,
      markerPosition: (boundedProgress / 100) * rulerHeight,
    });
    setActiveSection(activeIndex);
  }, [sections]);

  useEffect(() => {
    let frame = 0;
    const desktopViewport = window.matchMedia("(min-width: 901px)");
    const scheduleUpdate = () => {
      if (!desktopViewport.matches || frame) return;
      frame = window.requestAnimationFrame(() => {
        updateProgress();
        frame = 0;
      });
    };

    document.documentElement.classList.add("has-scroll-progress");
    scheduleUpdate();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);
    window.addEventListener("load", scheduleUpdate);
    if (desktopViewport.addEventListener) {
      desktopViewport.addEventListener("change", scheduleUpdate);
    } else {
      desktopViewport.addListener(scheduleUpdate);
    }
    const resizeObserver = typeof ResizeObserver === "undefined"
      ? null
      : new ResizeObserver(scheduleUpdate);
    resizeObserver?.observe(document.documentElement);
    resizeObserver?.observe(document.body);

    return () => {
      document.documentElement.classList.remove("has-scroll-progress");
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
      window.removeEventListener("load", scheduleUpdate);
      if (desktopViewport.removeEventListener) {
        desktopViewport.removeEventListener("change", scheduleUpdate);
      } else {
        desktopViewport.removeListener(scheduleUpdate);
      }
      resizeObserver?.disconnect();
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [updateProgress]);

  if (!isKnownPage) return null;

  return (
    <div
      className="scroll-progress"
      role="progressbar"
      aria-label={language === "es" ? "Progreso de desplazamiento" : "Scroll progress"}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={percentage}
      aria-valuetext={`${percentage}% - ${sectionLabel}`}
      style={{
        "--ruler-height": `${scrollMetrics.rulerHeight}px`,
        "--ruler-offset": `${scrollMetrics.rulerOffset}px`,
        "--marker-position": `${scrollMetrics.markerPosition}px`,
      }}
    >
      <div className="scroll-progress__heading" aria-hidden="true">
        <span className="scroll-progress__current">{sectionLabel}</span>
      </div>
      <div className="scroll-progress__scale" aria-hidden="true">
        {scaleValues.map((value) => (
          <span
            key={value}
            className={`scroll-progress__tick${value % 5 === 0 ? " is-major" : ""}${value === percentage ? " is-current" : ""}`}
            style={{ top: `${value}%` }}
          >
            {value % 5 === 0 && value !== percentage && (
              <span className="scroll-progress__tick-label">{value}</span>
            )}
          </span>
        ))}
        <span className="scroll-progress__marker">
          <span className="scroll-progress__marker-value">{percentage}%</span>
        </span>
      </div>
    </div>
  );
};

export default ScrollProgress;
