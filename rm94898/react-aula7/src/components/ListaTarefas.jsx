import React, {useState} from "react";
import { DivLista } from "./style/styled";
import Tarefa from "./Tarefa";

const ListaTarefas = () => {
  const [tarefa, setTarefa] = useState([
    {
      titulo: "lista de pagamento",
      setor: "Dep. vendas",
      descricao: "levantar os valroes da vendas",
    },
    { titulo: "Planilha de salários", setor: 'Dep. Pessoal',
  descricao: "Gerar planilhas",
},
  ]);
  return (
    <DivLista>
      {tarefa.map((tar, i) => (
        <Tarefa
        key={i}
        titulo={tar.titulo}
        setor={tar.setor}
        descricao={tar.descricao}
        />
      ))}
    </DivLista>
  );
};

export default ListaTarefas;
