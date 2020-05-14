import React from 'react';

function CardPequeno(props){
    return (
        <div>
            <div>
                <p> Email: {props.email}</p>
            </div>
            <div>
                <p>Endereço: {props.endereco}</p>
            </div>
        </div>
    )
}

export default CardPequeno;