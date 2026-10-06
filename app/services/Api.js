"use client";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Page() {
    const [data, setData] = useState([]); {/*USESTATE PARA API*/ }

    useEffect(() => { {/*USEEFFECT PARA API*/}
        async function carregar() {
            const res = await axios.get(
                "https://valorant-api.com/v1/agents?language=pt-BR"
            );
            setData(res.data.data);
        }
        carregar();
    }, []);


    Page.interceptors.request.use(
        (a) => {
            console.log('Enviando requisição:', a.res);
            return a;
        },
        (error) => {
            return Promise.reject(error);
        }
    );

    p.interceptors.response.use(
        (response) => {
            console.log('Resposta recebida:', response.status);
            return response;
        },
        (error) => {
            console.error('Erro na requisição:', error.message);
            return Promise.reject(error);
        }
    );

    return <pre>{JSON.stringify(data, null, 2)}</pre>;
}




