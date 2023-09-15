import HellWord from "./HellWord";

function ExibirNomeIdade(){
    const nome = "Maite";
    const idade = 25;
    return(
     <div>
         <h1>Meu Nome</h1>
        <p>Nome: {nome}</p>
        <h1>Minha Idade</h1>
        <p>Idade: {idade}</p>
        <h1> Usando o componte HellWord aqui no componte ExibirNomeIdade</h1>
        <HellWord />
     </div>
    )
}
export default ExibirNomeIdade;