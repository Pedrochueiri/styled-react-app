import React from "react"

const FormTarefa = (props) => {
    return (
        <div>
           <form method="post" onSubmit={props.funcaoaddTarefa}>
                <div>
                    <label>Titulo</label>
                    <input type="text" name="titulo" placeholder="Titulo" value={props.novaTarefa.titulo} onChange = {props.nTarefa}/>
                </div>
                <div>
                    <label>setor</label>
                    <input type="text" name="setor" placeholder="Setor" value={props.novaTarefa.setor} onChange = {props.nTarefa}/>
                </div>
                <div>
                    <label>Descrição</label>
                    <textarea cols="30" rows="10" name="descricao" placeholder="Descricao" value={props.novaTarefa.descricao} onChange = {props.nTarefa}></textarea>
                </div>
                <div>
                    <button type="submit">Adicionar</button>
                </div>
           </form>
        </div>
    )
}
export default FormTarefa
