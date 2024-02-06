import { ArrowUpRight } from "lucide-react";
import { Button } from "./ui/button";

export function Content({bg}: {bg: string}) {
  return (
    <div className={`w-[21.75rem] h-[15.625rem]  px-5 ${bg} p-5 rounded-md `}>
      <Button className="flex relative left-[17.6rem] -top-[1.3rem]">
        <ArrowUpRight size={16} />
      </Button>
      <div className="flex flex-col gap-[0.75rem]">
        <span className="text-slate-200 font-medium text-sm">
          Adicionar nota
        </span>
        <p className="text-slate-400 text-sm leading-6 ">
          Grave uma nota em áudio que será convertida para texto
          automaticamente.
        </p>
      </div>
    </div>
  );
}
