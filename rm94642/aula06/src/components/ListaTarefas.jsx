import React from 'react'
import styled from 'styled-components'
import Tarefa from './Tarefa'
import { DivLista } from './style/styled'


export default function ListaTarefas() {
  return (
    <DivLista>
        <Tarefa/>
        <Tarefa/>
        <Tarefa/>
    </DivLista>
  )
}
