import { Container } from 'react-bootstrap';
import ItemCount from '../components/ItemCount';


const ItemDetail = ({item}) =>{

    return<>
        <Container>
            <div className="detail-card">
                <div className="detail">
                    <div className="img-container">
                        <img className="img-detail" src={item.imagen} alt="producto" />
                    </div>
                    <h2>{item.title} - ${item.precio}</h2>
                    <p className="description">{item.description}</p>
                    <ItemCount stock= "5" initial= "1" onAdd= "" />
                </div>
            </div>
        </Container>
    </>
}

export default ItemDetail;