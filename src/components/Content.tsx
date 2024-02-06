import { ArrowUpRight } from "lucide-react";
import { Button } from "./ui/button";
import { Label } from "./ui/label";

export function Content() {
  return (
    <div className="w-[21.75rem] h-[15.625rem]  px-5 bg-slate-700 p-[1.25rem] rounded-sm ">
      <Button className="flex relative left-[18rem] -top-[1.3rem]">
        <ArrowUpRight size={16} />
      </Button>
      <div className="flex flex-col gap-[0.75rem]">
        <Label className="text-slate-200 font-normal text-sm">
          Adicionar nota
        </Label>
        <span className="text-slate-400 text-sm">
          Grave uma nota em áudio que será convertida para texto
          automaticamente.
        </span>
      </div>
    </div>
  );
}
