import Component1 from "./components/Component1";
import Component2 from "./components/Component2";
import Component3 from "./components/Component3";
export default function Home() {
  return (
  <div>
    <Component1 title={"bem vindo"} />
    <Component2 descricao={"Projeto de consumos de API"} />
  </div>
  )
}
