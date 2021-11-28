import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const {Img, Body, Title} = Card;

const Item = ({id, title, precio, imagen}) => {
    return <>
        <Col sm={6} md={4} lg={4}>
                <Card>
                    <Img src={imagen}/>
                    <div className="content">
                        <Body>
                            <Title>{title}</Title>
                            <p className="precio">${precio}</p>
                        </Body>
                        <Link to={`/detalle/${id}`}>
                            <Button vartiant="dark">Ver más</Button>
                        </Link>
                    </div>
                </Card>
        </Col>
    </>
}

export default Item;