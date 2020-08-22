import { useCallback, useRef } from "react";

export const useIntersectionObserver = (loading, error, loadMore) => {
  const observer = useRef();
  const loadMoreRef = useCallback(
    (el) => {
      if (loading || error) return;
      if (observer.current) observer.current.disconnect(); //resets the observer
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          loadMore();
        }
      });
      if (el) observer.current.observe(el);
    },
    [loading, loadMore, error]
  );
  return loadMoreRef;
};
