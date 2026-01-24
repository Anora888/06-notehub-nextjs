"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteNote } from "@/lib/api/notes";
import type { Note } from "@/types/note";
import css from "./NoteList.module.css";

interface Props {
  notes: Note[];
}

export default function NoteList({ notes }: Props) {
  const queryClient = useQueryClient();

  const deleteMutation = useMutation({
    mutationFn: (id: string) => deleteNote(id),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["notes"] }),
  });

  return (
    <ul className={css.list}>
      {notes.map((note) => (
        <li key={note.id} className={css.listItem}>
          <h3 className={css.title}>{note.title}</h3>
          <p className={css.content}>{note.content}</p>
          <span className={css.tag}>{note.tag}</span>
          <button className={css.button} onClick={() => deleteMutation.mutate(note.id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}