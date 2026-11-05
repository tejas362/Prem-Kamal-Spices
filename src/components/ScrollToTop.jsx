import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Instant scroll to top ensures no jank or jumping during page route animations
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
