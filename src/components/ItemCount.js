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
            <div className="add">
                <div>
                    <p className="description">Agregar: {contador}</p>
                    <button className="btn-sumrest" onClick={aumentar}>+</button>
                    <button className="btn-sumrest" onClick={decrementar}>-</button>
                    <button className="add-cart" onClick={add}>ADD TO CART</button>
                </div>
            </div>
        </Container>
    </>
}

export default ItemCount;