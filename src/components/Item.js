import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const {Img, Body, Title} = Card;

const Item = ({id, title, price, image}) => {
    return <>
        <Col sm={6} md={4} lg={4}>
            <Card>
                <div className="card-img-container">
                    <Img src={image}/>
                </div>
                <div className="content">
                    <Body>
                        <Title>{title}</Title>
                        <p className="precio">${price}</p>
                    </Body>
                    <Link to={`/detalle/${id}`}>
                        <Button vartiant="dark">caracteristicas</Button>
                    </Link>
                </div>
            </Card>
        </Col>
    </>
}

export default Item;