import Header from "../_components/header";
import { format } from "date-fns"
import { ptBR } from "date-fns/locale"

export default function Home() {
  return (
    <div>
      <Header />
      <div className="py-6 px-5 gap-1" id="hello">
        <h2 className="text-xl font-bold">Olá, João</h2>
        <p className="first-letter:capitalize text-sm">
          {format(new Date(), "EEE', 'd 'de' MMMM", {
            locale: ptBR
          })}</p>
      </div>
    </div>
  );
}
