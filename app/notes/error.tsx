"use client";

export default function NotesError({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  
  return (
    <div>
      <h2>Something went wrong 😢</h2>
      <p>{error.message}</p>
      <button onClick={reset}>Try again</button>
    </div>
  );

}
