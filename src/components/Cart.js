import { Container } from "react-bootstrap";
import { useCartContext } from "../context/CartContext";

function Cart () {

    const {cart, emptyCart, total} = useCartContext();

    return<>
        <div className="cart">
            <Container>
                {cart.map(item => 
                
                <div className="container-cart">  
                    <div className="cart-content">
                        <div className="img-container-cart">
                            <img className="img-cart" src={item.item.imagen}/>
                        </div>
                        <div className="cart-price">
                            <div>
                                <h2 className="h1" key={item.item.id}>{item.item.title} - ${item.item.precio}.00</h2>
                                <p className="h2">{item.cantidad} x ${item.item.precio * item.cantidad}</p>
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