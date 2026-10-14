"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const SmoothScroll = () => {
  const pathname = usePathname();

  useEffect(() => {
    const desktopViewport = window.matchMedia(
      "(any-pointer: fine)",
    );
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const root = document.documentElement;
    const previousScrollBehavior = root.style.scrollBehavior;
    let currentPosition = window.scrollY;
    let targetPosition = currentPosition;
    let animationFrame = 0;
    let previousFrameTime = 0;

    const restoreScrollBehavior = () => {
      root.style.scrollBehavior = previousScrollBehavior;
    };

    const stopAnimation = () => {
      if (animationFrame) {
        window.cancelAnimationFrame(animationFrame);
        animationFrame = 0;
      }
      currentPosition = window.scrollY;
      targetPosition = currentPosition;
      previousFrameTime = 0;
      restoreScrollBehavior();
    };

    const scrollImmediately = (position) => {
      root.style.scrollBehavior = "auto";
      window.scrollTo(0, position);
    };

    const animateScroll = (time) => {
      animationFrame = 0;
      const elapsed = previousFrameTime
        ? Math.min(time - previousFrameTime, 64)
        : 16;
      previousFrameTime = time;
      const easing = 1 - Math.exp(-elapsed / 95);
      currentPosition += (targetPosition - currentPosition) * easing;

      if (Math.abs(targetPosition - currentPosition) < 0.5) {
        currentPosition = targetPosition;
        scrollImmediately(currentPosition);
        previousFrameTime = 0;
        restoreScrollBehavior();
        return;
      }

      scrollImmediately(currentPosition);
      animationFrame = window.requestAnimationFrame(animateScroll);
    };

    const hasScrollableAncestor = (target, deltaY) => {
      let element = target instanceof Element ? target : target.parentElement;
      while (element && element !== root && element !== document.body) {
        const { overflowY } = window.getComputedStyle(element);
        const canScroll = /(auto|scroll|overlay)/.test(overflowY);
        const maxScrollTop = element.scrollHeight - element.clientHeight;
        if (
          canScroll &&
          maxScrollTop > 0 &&
          (deltaY < 0 ? element.scrollTop > 0 : element.scrollTop < maxScrollTop)
        ) {
          return true;
        }
        element = element.parentElement;
      }
      return false;
    };

    const onWheel = (event) => {
      if (
        !desktopViewport.matches ||
        reducedMotion.matches ||
        event.defaultPrevented ||
        event.ctrlKey ||
        event.metaKey ||
        event.deltaY === 0 ||
        Math.abs(event.deltaX) > Math.abs(event.deltaY) ||
        hasScrollableAncestor(event.target, event.deltaY)
      ) {
        return;
      }

      const lineHeight = Number.parseFloat(
        window.getComputedStyle(document.body).lineHeight,
      ) || 16;
      const deltaMultiplier = event.deltaMode === WheelEvent.DOM_DELTA_LINE
        ? lineHeight
        : event.deltaMode === WheelEvent.DOM_DELTA_PAGE
          ? window.innerHeight
          : 1;
      if (!animationFrame) {
        currentPosition = window.scrollY;
        targetPosition = currentPosition;
      }
      const maxScroll = Math.max(
        0,
        root.scrollHeight - window.innerHeight,
      );
      const nextTarget = Math.min(
        maxScroll,
        Math.max(0, targetPosition + event.deltaY * deltaMultiplier),
      );

      if (nextTarget === targetPosition && !animationFrame) return;

      event.preventDefault();
      if (!animationFrame) scrollImmediately(currentPosition);
      targetPosition = nextTarget;
      root.style.scrollBehavior = "auto";
      if (!animationFrame) {
        animationFrame = window.requestAnimationFrame(animateScroll);
      }
    };

    const onKeyDown = (event) => {
      if (
        ["ArrowDown", "ArrowUp", "PageDown", "PageUp", "Home", "End", " "]
          .includes(event.key)
      ) {
        stopAnimation();
      }
    };

    const onNavigation = () => stopAnimation();
    const onAnchorClick = (event) => {
      if (
        event.target instanceof Element &&
        event.target.closest("a[href]")
      ) {
        stopAnimation();
      }
    };
    const onMotionPreferenceChange = () => {
      if (reducedMotion.matches || !desktopViewport.matches) stopAnimation();
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("click", onAnchorClick, true);
    window.addEventListener("hashchange", onNavigation);
    window.addEventListener("popstate", onNavigation);
    const addMediaListener = (mediaQuery) => {
      if (mediaQuery.addEventListener) {
        mediaQuery.addEventListener("change", onMotionPreferenceChange);
      } else {
        mediaQuery.addListener(onMotionPreferenceChange);
      }
    };
    const removeMediaListener = (mediaQuery) => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener("change", onMotionPreferenceChange);
      } else {
        mediaQuery.removeListener(onMotionPreferenceChange);
      }
    };
    addMediaListener(desktopViewport);
    addMediaListener(reducedMotion);

    return () => {
      stopAnimation();
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("click", onAnchorClick, true);
      window.removeEventListener("hashchange", onNavigation);
      window.removeEventListener("popstate", onNavigation);
      removeMediaListener(desktopViewport);
      removeMediaListener(reducedMotion);
    };
  }, [pathname]);

  return null;
};

export default SmoothScroll;
