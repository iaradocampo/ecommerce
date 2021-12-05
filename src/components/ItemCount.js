import { useState } from "react";
import Container from 'react-bootstrap/Container';

function ItemCount ({stock, initial, onAdd}) {

    const [count, setCount] = useState (parseInt(initial));

    const aumentar = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    }

    const decrementar = () => {
        if (count > initial){
            setCount(count - 1);
        }
    }

    const add = () => {
     
        if (stock > 0){
            onAdd(count);
        }
    }

    return <>
        <Container>
            <div className="add">
                <div>
                    <p className="description">Agregar: {count}</p>
                    <button className="btn-sumrest" onClick={aumentar}>+</button>
                    <button className="btn-sumrest" onClick={decrementar}>-</button>
                    <button className="add-cart" onClick={add}>ADD TO CART</button>
                </div>
            </div>
        </Container>
    </>
}

export default ItemCount;