import Item from "./Item";
import Row from 'react-bootstrap/Row';

const ItemList = ({items}) => {
  return (
    <div className="item-container">
      <Row>
        {items.map(prod =>{
          return(
              <Item key={prod.id} id={prod.id} category={prod.category} title={prod.title} precio={prod.precio} imagen={prod.imagen}/>
          )
        })}
      </Row>
    </div>
  )
}

export default ItemList;