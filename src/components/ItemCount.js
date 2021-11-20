import { useState } from "react";
import Container from 'react-bootstrap/Container';

function ItemCount ({stock, initial, onAdd}) {

    const [contador, setContador] = useState (parseInt(initial));

    const aumentar = () => {
        if (contador < stock) {
            setContador(contador + 1);
        }
    }

    const decrementar = () => {
        if (contador > initial){
            setContador(contador - 1);
        }
    }

    const add = () => {
        if (onAdd < stock){
            alert("se agrego correctamente la cantidad de item/s seleccionado/s:.\n" + contador);
        }
    }

    return <>
        <Container>
            <p>Ejemplo de contador: {contador}</p>
            <button onClick={aumentar}>sumar</button>
            <button onClick={decrementar}>quitar</button>
            <button onClick={add}>agregar</button>
        </Container>
    </>
}

export default ItemCount;