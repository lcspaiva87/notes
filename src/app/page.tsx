import { Container } from "@/components/Container";
import { Content } from "@/components/Content";

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
          <Content bg="bg-slate-700" />
          <div className="overflow-hidden  px-5 bg-slate-800 p-5 rounded-md relative">
            <span className="text-slate-300 font-medium text-sm">
              Adicionar nota
            </span>
            <p className="text-slate-400 text-sm leading-6 ">
              Grave uma nota em áudio que será convertida para texto
              automaticamente.
            </p>
            <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-black/0" />
          </div>
          <div className="overflow-hidden  px-5 bg-slate-800 p-5 rounded-md relative">
            <span className="text-slate-300 font-medium text-sm">
              Adicionar nota
            </span>
            <p className="text-slate-400 text-sm leading-6 ">
              Grave uma nota em áudio que será convertida para texto
              automaticamente.
            </p>
            <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-black/0" />
          </div>
          <div className="overflow-hidden  px-5 bg-slate-800 p-5 rounded-md relative">
            <span className="text-slate-300 font-medium text-sm">
              Adicionar nota
            </span>
            <p className="text-slate-400 text-sm leading-6 ">
              Grave uma nota em áudio que será convertida para texto
              automaticamente.
            </p>
            <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-black/0" />
          </div>
        </div>
      </div>
    </Container>
  );
}
