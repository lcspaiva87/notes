export function NoteCard() {
  return (
    <div className="rounded-sm bg-slate-800 p-5 space-y-3 overflow-hidden relative hover:ring-2 hover:ring-slate-600 focus-visible:ring-2 focus-visible:ring-lime-400">
      <span className="text-slate-300 font-medium text-sm">Adicionar nota</span>
      <p className="text-slate-400 text-sm leading-6 ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quaerat
        quas architecto libero voluptates optio dolor delectus fugit iste.
        Quaerat tempora consequatur, vel delectus ratione aliquid hic unde aut
        perferendis?
      </p>
      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-black/0 pointer-events-none" />
    </div>
  );
}
