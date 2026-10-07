"use client"
import { useEffect, useState } from "react";
import axios from "axios";
export default function Lista () {
    { /*USESTATE PARA CONSOLIDAÇÃO DOS DADOS DA API - ele atualiza o estado da lista*/ }
    const [lista, setLista] = useState([])  

    useEffect(() => {
        { /*USEEFFECT PARA CAPTURA DOS DADOS DA API, AO RENDERIZAR A PAGINA - é o efeito colateral de "renderizar a pagina"*/ }
        async function carregar() {
            const res = await axios.get(
                "https://valorant-api.com/v1/agents?language=pt-BR"
            );
            console.log(res)
            setLista(res.data.data);
        }
        carregar();
    }, []);
    return (
    <ul>
            {lista.map((a, i) => <li key={i}>{a.developerName}</li>)}
    </ul>
    )      
}