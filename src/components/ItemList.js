import Item from "./Item";
import Row from 'react-bootstrap/Row';

const ItemList = ({items}) => {
  return (
    <Row>
      {items.map(item =>{
        return(
            <Item key={item.id} id={item.id} title={item.title} precio={item.precio} imagen={item.imagen}/>
        )
      })}
    </Row>
  )
}

export default ItemList;