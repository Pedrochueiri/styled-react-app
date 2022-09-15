import React from 'react'
import { DivTarefa } from '../style/styled'

//Criando o módulo de estilos

export default function Tarefa(props) {
  return (
    <DivTarefa>
        <h2>{props.titulo}</h2>
        <p>{props.setor}</p>
        <p>{props.descricao}</p>
    </DivTarefa>
  )
}
