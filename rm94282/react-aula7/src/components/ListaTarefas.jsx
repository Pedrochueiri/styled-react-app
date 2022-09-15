import React, { useState } from 'react'
import { DivLista } from '../style/styled'
import Tarefa from './Tarefa'

const ListaTarefas = () => {

  const [tarefa, setTarefa] = useState([{
    titulo:'Lista de pagamento',
    setor:'Dep. Vendas',
    descricao:'Levantar os valores das vendas',
  },
  {
    titulo:'Planilha de salarios',
    setor:'Dep. Pessoal',
    descricao:'Gerar planilhas',
  },
])

  return (
    <DivLista>
        {tarefa.map((tar,i) => (
          <Tarefa 
          key={i}
          titulo={tar.titulo}
          setor={tar.setor}
          descricao={tar.descricao}
          />
        ))}
    </DivLista>
  )
}

export default ListaTarefas