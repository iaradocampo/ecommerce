import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const {Img, Body, Title, Text} = Card;

function Item ({id, title, precio, imagen}){
    return <>
        <Col sm={6} md={4} lg={4}>
            <Card>
                <p>{id}</p>
                <Img src={imagen}/>
                <Body>
                    <Title>{title}</Title>
                    <Text>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, similique harum? Natus nesciunt illo amet laborum odio placeat suscipit ea.</Text>
                    <p className="precio">${precio}</p>
                </Body>
                <Button vartiant="dark">Ver más</Button>
            </Card>
        </Col>
    </>
}

export default Item;