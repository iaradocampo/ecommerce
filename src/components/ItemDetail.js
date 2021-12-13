import { useState } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ItemCount from '../components/ItemCount';
import { useCartContext } from '../context/CartContext';

const ItemDetail = ({item}) =>{

    const { addProduct } = useCartContext();

    const [input, setInput] = useState('button');
    
    const onAdd = (cant) =>{

        const add = {
            item : item, 
            cantidad : cant
        }
    
        addProduct(add);

        setInput('input');
    }

    return<>
        <Container>
            <div className="detail-card">
                <div className="detail">
                    <div className="img-container">
                        <img className="img-detail" src={item.imagen} alt="producto" />
                    </div>
                    <h2>{item.title} - ${item.precio}</h2>
                    <p className="description">{item.description}</p>

                    {
                        input === 'button' ?
                        <ItemCount stock= "5" initial={item.stock >= 1 ? 1 : 1} onAdd={onAdd} />
                    :
                        <div className="end-container">
                            <Link to='/cart'>
                                <button className="end-shop">terminar compra</button>
                            </Link>
                        </div>
                    }
                    
                </div>
            </div>
        </Container>
    </>
}

export default ItemDetail;