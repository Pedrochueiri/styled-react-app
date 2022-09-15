import React, { useState } from 'react'
import Tarefa from './Tarefa'
import { DivLista } from '../style/styled'

const [tarefa, setTarefa] = useState([{
    titulo: 'Lista de Pagamento',
    setor: 'Dep. Vendas',
    descricao: 'Levantar os valores das vendas',
    },
    {
        titulo: 'Planilha de Salarios',
        setor: 'Dep. Pessoal',
        descricao:'Gerar Planilhas',
    },
])
return(
    <DivLista>
        {tarefa.map((tar,i)=>(
            <Tarefa
            key={i}
            titulo={tar.titulo}
            setor={tar.setor}
            descricao={tar.descricao}
            />
        ))}
    </DivLista>
)
export default function ListaTarefas() {
  return (
    <DivLista>
        <p>Lista de Tarefas</p>
        <Tarefa/>
        <Tarefa/>
        <Tarefa/>
    </DivLista>
  )
}
