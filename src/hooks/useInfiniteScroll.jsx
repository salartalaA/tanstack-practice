import { useEffect, useRef } from "react";

export function useInfiniteScroll(callback, options = {}) {
  const {
    root = null,
    rootMargin = "0px",
    threshold = 0.5,
    enabled = true,
  } = options;

  const targetRef = useRef(null);

  useEffect(() => {
    if (!enabled) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const target = entries[0];
        if (target.isIntersecting) callback();
      },
      { root, rootMargin, threshold }
    );

    const current = targetRef.current;
    if (current) observer.observe(current);

    return () => {
      if (current) observer.unobserve(current);
    };
  }, [callback, root, rootMargin, threshold, enabled]);

  return targetRef;
}
