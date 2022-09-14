import React, { useState } from 'react'
import Tarefa from '../tarefa/Tarefa'
import { DivLista } from '../styled'

export default function ListaTarefas() {
  const[tarefa, setTarefa] = useState([

   {
    titulo: "Lista de pagamento",
    setor: "Dep. Vendas",
    descrição: "Levantar os pagamentos das vendas"
  },
  {
    titulo: "Planilha de salários",
    setor: "Dep. Pessoal",
    descrição: "Gerar planilha"
  }
])


  return (
    <DivLista>
        <p>Lista de tarefas</p>
        <Tarefa/>
        <Tarefa/>
        <Tarefa/>
    </DivLista>
  )
}
