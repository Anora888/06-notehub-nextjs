import { Suspense } from "react";
import NoteDetailsClient from "./NoteDetails.client";

interface Props {
  params: { id: string };
}

export default function NoteDetailsPage({ params }: Props) {
  return (
    <Suspense fallback={<p>Loading, please wait...</p>}>
      <NoteDetailsClient noteId={params.id} />
    </Suspense>
  );
}