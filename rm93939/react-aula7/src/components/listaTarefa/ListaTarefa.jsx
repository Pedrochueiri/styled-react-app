import React, { useState } from "react";      
import { DivLista } from "../../style/styled";
import FormTarefa from "../formTarefa/FormTarefa";
import Tarefa from "../tarefa/Tarefa";

export default function ListaTarefas() {
  const [tarefa, setTarefa] = useState([
    {
      titulo: "Lista de Pagamento",
      setor: "Dep. Vendas",
      descricao: "Levar os pagamentos pro lado de lá",
    },

    {
      titulo: "Lista de Gente",
      setor: "Dep. Gente",
      descricao: "Levar os gente pro lado de lá",
    },
  ]);

  //ADD TAREFA

  const addTarefa =(e)=>{
      e.preventDefault()

      //ADICIONANDO UMA NOVA TAREFA
      setTarefa({titulo:"",setor:"",descricao:""})

     // titulo: "Planilha de notas",
     // setor: "Dep. Graduação",
     // descricao: "Lançar notas.",

    //ADICIONANDO MAIS UMA TAREFA A LISTA DE TAREFAS
    //setTarefa([...tarefa, novaTarefa])
  }

//criando state de nova tarefa
  const [nTarefa,setNTarefa]= useState({titulo:"", setor:"", descricao:""})


  //FUNÇÃO PARA CAPTURAR OS DADOS DO FORMULARIO
  const capturarDados = (e) =>{
    const{value,name} = e.target

    if(name === "titulo"){
      setNTarefa({titulo:value, setor:nTarefa.setor, descricao:nTarefa.descricao})
    }else  if(name === "setor"){
      setNTarefa({setor:value, titulo:nTarefa.titulo, descricao:nTarefa.descricao})
    }else if(name === "descricao"){
      setNTarefa({descricao:value, titulo:nTarefa.titulo, setor:nTarefa.setor})
    }
  }

  return (
    <DivLista>

    <FormTarefa 
      funcaoaddTarefa={addTarefa}
      capturarDados={capturarDados}
      nTarefa={nTarefa}
    />

      {tarefa.map((tar, i) => 
        <Tarefa
          key={i}
          tituloProps={tar.titulo}
          setorProps={tar.setor}
          descricaoProps={tar.descricao}
      />
      )}
    </DivLista>
  );
}