import Garagem from "./Componentes/Garagem";
import "./styles.css";

export default function App() {



  const dadosCarro = {
    nome: "meca" ,
    ano: 2003 ,
    cor: "Verde" ,
    flex: false
  }

  
  const nome = 'Felipe'

  const apresentaGaragem = (nome) => {

    alert('Boas Vindas a Garagem de '+ nome)


  }


  return (
    <div>
      
      <Garagem nome={nome}
      apresentaGaragem={apresentaGaragem}
      dadosCarro={dadosCarro}/>
    </div>
  );
}
