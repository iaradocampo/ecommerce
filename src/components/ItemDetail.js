import { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ItemCount from '../components/ItemCount';
import { useCartContext } from '../context/CartContext';
import Loader from './Loader';

const ItemDetail = ({item}) =>{

    const { addProduct } = useCartContext();

    const [input, setInput] = useState('button');

    const [loader, setLoader] = useState(true);

    useEffect(() => {

        setLoader(true); 

        setTimeout(() => {

            setLoader(false);

        }, 1000);

    }, []);
    
    const onAdd = (cant) =>{

        const add = {
            item : item, 
            cantidad : cant
        }
    
        addProduct(add);

        setInput('input');
    }

    return loader ? (
        <Loader />
    )
    : 
    (
        <Container>
            <div className="detail">
                <Row>
                    <Col sm={12} md={6} lg={6}>
                        <img className="img-detail" src={item.image} alt="producto" />
                    </Col>
                    <Col sm={12} md={6} lg={6}>       
                        <h2>{item.title} - ${item.price}</h2>
                        <p className="description">{item.description}</p>
                        {
                            input === 'button' ?
                            <ItemCount stock={item.stock} initial={item.stock >= 1 ? 1 : 1} onAdd={onAdd} />
                        :
                            <div className="end-container">
                                <Link to='/cart'>
                                    <button className="end-shop">comprar</button>
                                </Link>
                            </div>
                        }
                    </Col>
                </Row>
            </div>
        </Container>
    )
}

export default ItemDetail;