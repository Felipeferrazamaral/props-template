import Carro from "./Carro";

function Garagem(props) {
  const {nome, apresentaGaragem, dadosCarro} = props

  return (
    <div>
      <h1>Garagem da {nome}</h1>
      <Carro dadosCarro={dadosCarro} />
      <Carro dadosCarro={dadosCarro} />
      <Carro dadosCarro={dadosCarro} />
      <Carro dadosCarro={dadosCarro} />
      <button onClick= { ()=> apresentaGaragem(nome)}>Botao</button>
    </div>
  );
}

export default Garagem;
