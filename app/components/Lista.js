"use client"
import { useEffect, useState } from "react";
import axios from "axios";
export default function Lista () {

    const [lista, setLista] = useState([])

    useEffect(() => {
        { /*USEEFFECT PARA API*/ }
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