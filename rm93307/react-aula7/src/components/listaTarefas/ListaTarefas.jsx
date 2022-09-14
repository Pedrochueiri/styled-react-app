import React from 'react';
import Tarefa from '../tarefa/Tarefa';
import { DivLista } from '../../style/styled';

export default function ListaTarefas() {
  return(
    <DivLista>
      <p>Lista de Tarefas</p>
      <Tarefa/>
      <Tarefa/>
      <Tarefa/>
    </DivLista>
  )
}

