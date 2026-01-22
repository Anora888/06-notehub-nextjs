import type { Note } from "@/types/note";

const BASE_URL = "https://notehub-public.goit.study/api";

export interface FetchNotesResponse {
  notes: Note[];
  totalPages: number;
}


export async function fetchNotes(
  page: number = 1,
  search: string = ""
): Promise<FetchNotesResponse> {
  const res = await fetch(
    `${BASE_URL}/notes?page=${page}&search=${search}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_NOTEHUB_TOKEN}`,
      },
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch notes");
  }

  return res.json();
}


export async function fetchNoteById(id: string): Promise<Note> {
  const res = await fetch(`${BASE_URL}/notes/${id}`, {
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_NOTEHUB_TOKEN}`,
    },
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch note");
  }

  return res.json();
}


export async function createNote(
  note: Pick<Note, "title" | "content" | "tag">
): Promise<Note> {
  const res = await fetch(`${BASE_URL}/notes`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_NOTEHUB_TOKEN}`,
    },
    body: JSON.stringify(note),
  });

  if (!res.ok) {
    throw new Error("Failed to create note");
  }

  return res.json();
}

export async function deleteNote(id: string): Promise<Note> {
  const res = await fetch(`${BASE_URL}/notes/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_NOTEHUB_TOKEN}`,
    },
  });

  if (!res.ok) {
    throw new Error("Failed to delete note");
  }

  return res.json();
}
