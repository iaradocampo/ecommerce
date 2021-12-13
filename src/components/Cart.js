import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useCartContext } from "../context/CartContext";

function Cart () {

    const { cart, addProduct, onRemove, deleteItem, emptyCart, total } = useCartContext();
    
    return<>
        <div className="cart">
            <Container>
                {cart.length === 0 && 
                <div>
                    <p>El carrito esta vacío</p>
                    <Link to='/'>
                        <button>seguir comprando</button>
                    </Link>
                </div>}

                {cart.map( (item) => 
                <div className="container-cart">  
                    <div className="cart-content">
                        <div className="img-container-cart">
                            <img className="img-cart" src={item.item.imagen}/>
                        </div>
                        <div className="cart-price">
                            <div>
                                <h2 className="h1" key={item.item.id}>{item.item.title} - ${item.item.precio}.00</h2>
                                <p className="h2">{item.cantidad} x ${item.item.precio * item.cantidad}</p>
                                <button onClick={ () => addProduct(item) }>Agregar</button>
                                <button onClick={ () => onRemove(item) }>Eliminar</button>
                                <button onClick={ () => deleteItem(item.item.id) }>eliminar item</button>
                            </div>
                        </div>
                    </div>  
                </div>)}
                {cart.length !== 0 && (
                    <p className="p-cart">total: ${total}.00</p> 
                )}
                <button className="btn-cart" onClick={ () => emptyCart()}>vaciar carrito</button>
            </Container>
        </div>
    </>
}

export default Cart;