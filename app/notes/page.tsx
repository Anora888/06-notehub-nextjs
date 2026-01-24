import { dehydrate, QueryClient, HydrationBoundary } from "@tanstack/react-query";
import NotesClient from "@/app/notes/Notes.client";
import { fetchNotes } from "@/lib/api";

interface NotesPageProps {
  searchParams?: {
    tag?: string;
  };
}

export default async function NotesPage({ searchParams }: NotesPageProps) {
  const tag = searchParams?.tag;

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["notes", 1, "", tag],
    queryFn: () => fetchNotes(1, "", tag),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <NotesClient tag={tag} />
    </HydrationBoundary>
  );
}

