import Lista from "./Lista";
export default function TratErro(){
    try {
        { /*Try e Catch para tratamento de erro da chamada de API*/ }
        <Lista />
    } catch (error) {
        console.log("Erro no carregamento da API...")
    }
}