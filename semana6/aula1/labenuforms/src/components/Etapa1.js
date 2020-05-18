import React from 'react';

class Etapa1 extends React.Component{
    render(){
        return(
            <div>
                <h1>Dados Gerais</h1>
                <h2>Qual o seu nome?</h2>
                <input placeholder="nome"/>
                <h2>Qual o seu email?</h2>
                <input placeholder="email"/>
                <h2>Qual o seu endereço?</h2>
                <input placeholder="endereço"/>
                <h2>Qual sua escolaridade?</h2>
                <input placeholder="escolaridade"/>
            </div>
        )
    }
}

export default Etapa1   