"use client"
import { useEffect, useState } from "react";
import Component1 from "./components/Component1";
import Component2 from "./components/Component2";
import Component3 from "./components/Component3";
import Component4 from "./components/Component4";
import Component5 from "./components/Component5";
import Component6 from "./components/Component6";



export default function Home() {
  const [lista, setLista] = useState([])


  useEffect(() => {
    { /*USEEFFECT PARA API*/ }
    async function carregar() {
      const res = await axios.get(
        "https://valorant-api.com/v1/agents?language=pt-BR"
      );
      setLista(res.data.data);
    }
    carregar();
  }, []);

  return (
    <div>
      <Component1 title={"Bem-vindo!"} />
      <Component4 subtitulo={"Checkpoint5"} />
      <Component2 descricao={"Projeto de consumos de API"} />
      <Component3 />
      <Component5 />
      <ul>
        {lista.map(a => <li key={a}>{a}</li>)}
      </ul>

    </div>
  )
}
