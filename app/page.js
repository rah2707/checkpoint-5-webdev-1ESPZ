"use client"
import { useEffect, useState } from "react";
import Component1 from "./components/Component1";
import Component2 from "./components/Component2";
import Component3 from "./components/Component3";
import Component4 from "./components/Component4";
import Component5 from "./components/Component5";
import Component6 from "./components/Component6";
import Lista from "./components/Lista";
import TratErro from "./components/TratErro";



export default function Home() {

  return (
    <div>
      <Component1 title={"Bem-vindo!"} />
      <Component4 subtitulo={"Checkpoint5"} />
      <Component2 descricao={"Projeto de consumos de API"} />
      <Component3 />
      <Component5 />
      <Component3 />
      <Lista />
      <TratErro />
      <Component3 />
      <Component6 />
    </div>
  )
}
