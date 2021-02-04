import React, { useState } from 'react';
import { ItemCount } from '../components/ItemCount';

export const ItemListContainer = (props) => {
    const [contador, setContador] = useState(1)
    const onAdd = (stock) => {
        if(contador < stock) {
            setContador(contador+1);
        }else{
            alert("No hay mas stock");
        }
    }
    const onSub = () => {
        if(contador > 1) {
            setContador(contador-1);
        }else{
            alert("Cantidad mínima");
        }
    }

    return (
        <>
        <p className="h1">{props.text}</p>
        <br />
        <ItemCount stock={10} contador={contador} onAdd={onAdd} onSub={onSub} />
        </>
    )
}