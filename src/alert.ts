"use client";
import { useEffect, useRef } from "react";

export function Alert() {
  const hasFiredRef = useRef(false);
  useEffect(() => {
    if (hasFiredRef.current) {
      return;
    }
    hasFiredRef.current = true;
    alert("Full page load!");
  }, []);

  return null;
}
