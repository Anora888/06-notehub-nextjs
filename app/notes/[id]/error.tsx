"use client";

import { useEffect } from "react";

interface ErrorProps {
  error: Error;
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div style={{ padding: 40 }}>
      <h2>Something went wrong while loading the note</h2>

      <p style={{ color: "red" }}>{error.message}</p>

      <button onClick={() => reset()}>Try again</button>
    </div>
  );
}
