import { Container } from "@/components/Container";
import { NoteCard } from "@/components/Note-Card";
import { NewNoteCard } from "@/components/new-note-card";



export default function Home() {
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
          <NewNoteCard />
          <NoteCard />
          <NoteCard />
          <NoteCard />
          <NoteCard />
        </div>
      </div>
    </Container>
  );
}
