import React, { useState } from "react";
import { DivLista } from "./style/styled";
import Tarefa from "./Tarefa";

const ListaTarefas = () => {
  const [tarefa, setTarefa] = useState([
    {
      titulo: "Lista de pagamento",
      setor: "Dep. vendas",
      descricao: "levantar os valroes da vendas",
    },
    {
      titulo: "Planilha de salários",
      setor: "Dep. Pessoal",
      descricao: "Gerar planilhas",
    },
    {
      titulo: "Lista de gastos",
      setor: "Dep. Pessoal",
      descricao: "Gerar planilhas",
    },
    {
      titulo: "Lista de Relatorios",
      setor: "Dep. Pessoal",
      descricao: "Gerar planilhas",
    },
    {
      titulo: "Docie",
      setor: "Dep. Pessoal",
      descricao: "Gerar planilhas",
    },
    {
      titulo: "Planilha de Folha",
      setor: "Dep. Pessoal",
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
