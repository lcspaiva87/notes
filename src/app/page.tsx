'use client';
import { Container } from "@/components/container";
import { NewNoteCard } from "@/components/new-note-card";
import { NoteCard } from "@/components/note-card";
import { ChangeEvent, useState } from "react";
interface Note {
  id: string;
  date: Date;
  content: string;
}


export default function Home() {
  const [search, setSearch] = useState("");
  const [notes, setNotes] = useState<Note[]>(() => {
    const notesOnStorage = localStorage.getItem("notes");

    if (notesOnStorage) {
      return JSON.parse(notesOnStorage);
    }

    return [];
  });

  function onNoteCreated(content: string) {
    const newNote = {
      id: crypto.randomUUID(),
      date: new Date(),
      content,
    };

    const notesArray = [newNote, ...notes];

    setNotes(notesArray);

    localStorage.setItem("notes", JSON.stringify(notesArray));
  }

  function onNoteDeleted(id: string) {
    const notesArray = notes.filter((note) => {
      return note.id !== id;
    });

    setNotes(notesArray);

    localStorage.setItem("notes", JSON.stringify(notesArray));
  }

  function handleSearch(event: ChangeEvent<HTMLInputElement>) {
    const query = event.target.value;

    setSearch(query);
  }

  const filteredNotes =
    search !== ""
      ? notes.filter((note) =>
          note.content.toLocaleLowerCase().includes(search.toLocaleLowerCase())
        )
      : notes;
  return (
    <Container>
      <div className="flex flex-col gap-3  items-start">
        <img src="/logo.svg" alt="Logo" />
        <form action="" className="">
          <input
            type="text"
            className=" w-full border-none bg-transparent text-3xl font-semibold tracking-tight outline-none placeholder:text-slate-500 text-slate-300"
            placeholder="Busque em suas notas"
          />
        </form>

        <div className="h-px w-full bg-slate-700 " />
        <div className="grid grid-cols-3 gap-6 auto-rows-[250px]">
        <NewNoteCard onNoteCreated={onNoteCreated} />
          <NoteCard note={{
            date: new Date(),
            content: "aaa",
          }} />

        </div>
      </div>
    </Container>
  );
}
