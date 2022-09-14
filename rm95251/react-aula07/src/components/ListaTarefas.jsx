import React from 'react'
import Tarefas from './Tarefas'
import { DivLista } from '../style/styled'

export default function ListaTarefas() {
  return (
    <DivLista>
        <p>Lista de Tarefas</p>
        <Tarefas/>
        <Tarefas/>
        <Tarefas/>
    </DivLista>
  )
}
