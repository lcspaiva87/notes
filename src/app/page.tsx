import { Container } from "@/components/Container";
import { Content } from "@/components/Content";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <Container>
      <div className="flex flex-col gap-3  items-start">
        <img src="/logo.svg" alt="" />
        <Input
          className=" border-none bg-transparent text-4xl font-bold w-full focus:border-none focus:outline-none"
          placeholder="Busque em suas notas"
        />
        <Separator className="text-gray-300/30" />

        <Content/>
      </div>
    </Container>
  );
}
