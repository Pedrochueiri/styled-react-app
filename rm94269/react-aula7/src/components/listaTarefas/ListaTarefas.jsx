import React from 'react'
import Tarefa from '../tarefa/Tarefa'
import { DivLista } from '../styled'

export default function ListaTarefas() {
  return (
    <DivLista>
        <p>Lista de tarefas</p>
        <Tarefa/>
        <Tarefa/>
        <Tarefa/>
    </DivLista>
  )
}
