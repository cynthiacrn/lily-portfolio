import { useRef, useEffect, useState } from "react";

export function useHorizontalScroll() {
  const [spacing, setSpacing] = useState(0);
  const sliderRef = useRef();

  useEffect(() => {
    function resetCenter() {
      setSpacing((window.innerWidth / 2) - 200);
    }

    resetCenter();
    window.addEventListener('resize', resetCenter);

    return () => {
      window.removeEventListener('resize', resetCenter);
    };
  }, []);

  useEffect(() => {
    const slider = sliderRef.current;

    if (slider) {
      slider.style.paddingLeft = `${spacing}px`;
      slider.style.paddingRight = `${spacing}px`;
    }
  }, [spacing]);

  useEffect(() => {
    const slider = sliderRef.current;

    if (slider) {
      let current = 0;
      let target = 0;
      const ease = window.innerWidth >= 768 ? 0.025 : 0.1;
      let isScrolling = false;
      let touchStartX = 0;

      function lerp(start, end, t) {
        return start * (1 - t) + end * t;
      }

      function smoothScroll() {
        if (isScrolling && target !== current) {
          current = lerp(current, target, ease);
          slider.scrollLeft = current;
          requestAnimationFrame(smoothScroll);
        }
      }

      function handleWheel(e) {
        const slider = sliderRef.current;
        const sliderWidth = slider.scrollWidth - slider.clientWidth;
        target = Math.max(0, Math.min(target + e.deltaY, sliderWidth));
        e.preventDefault();

        if (!isScrolling) {
          isScrolling = true;
          smoothScroll();
        }
      }

      function handleTouchStart(e) {
        touchStartX = e.touches[0].clientX;
      }

      function handleTouchMove(e) {
        const touchDelta = touchStartX - e.touches[0].clientX;
        target = Math.max(0, Math.min(target + touchDelta, slider.scrollWidth - slider.clientWidth));
        touchStartX = e.touches[0].clientX;
        e.preventDefault();

        if (!isScrolling) {
          isScrolling = true;
          smoothScroll();
        }
      }

      if (window.innerWidth >= 768) {
        slider.addEventListener("wheel", handleWheel);
      } else {
        slider.addEventListener("touchstart", handleTouchStart);
        slider.addEventListener("touchmove", handleTouchMove);
      }

      return () => {
        slider.removeEventListener("wheel", handleWheel);
        slider.removeEventListener("touchstart", handleTouchStart);
        slider.removeEventListener("touchmove", handleTouchMove);
      };
    }
  }, []);

  return sliderRef;
}
