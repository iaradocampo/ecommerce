import { Container } from 'react-bootstrap';
import ItemCount from '../components/ItemCount';
import { useCartContext } from '../context/CartContext';

const ItemDetail = ({item}) =>{

    const { addProduct } = useCartContext();

    const onAdd = (cant) =>{

        const add = {
            item : item, 
            cantidad : cant
        }
    
        addProduct(add);
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
                    <ItemCount stock= "5" initial={item.stock >= 1 ? 1 : 1} onAdd={onAdd} />
                </div>
            </div>
        </Container>
    </>
}

export default ItemDetail;