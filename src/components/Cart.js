import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useCartContext } from "../context/CartContext";
import DeleteOutlineRoundedIcon from '@mui/icons-material/DeleteOutlineRounded';
import { Button, ButtonGroup } from "@mui/material";
import { useEffect, useState } from "react";
import Loader from "./Loader";

function Cart () {

    const { cart, addProduct, onRemove, deleteItem, emptyCart, total } = useCartContext();

    const [loader, setLoader] = useState(true);

    useEffect(() => {

        setLoader(true); 

        setTimeout(() => {

            setLoader(false);

        }, 1000);

    }, []);
    
    return loader ? (
        <Loader />
    )
    : 
    (
        <div className="cart">
            <Container>
                <h1>Mi carrito</h1>
                <hr />
                {cart.length === 0 && 
                    <div>
                        <p className="p-empty">Su carrito esta vacío</p>
                        <p>Para seguir navegando, navegar por las categorias del sitio, o busque su producto.</p>
                        <Link to='/'>
                            <button className="btn-cart">elegir productos</button>
                        </Link>
                    </div>
                }
                <Row>
                    <Col sm={12} md={12} lg={8}>
                        {cart.map( (item) => 
                            <div className="container-cart">  
                                <div className="cart-content">
                                    <div className="img-container-cart">
                                        <img className="img-cart" src={item.item.image}/>
                                    </div>
                                    <div>
                                        <h2 className="h2-cart" key={item.item.id}>{item.item.title}</h2>
                                        <ButtonGroup style={{boxShadow: "none"}} variant="contained" aria-label="outlined primary button group">
                                            <Button 
                                                style={{
                                                    width: "4rem",
                                                    height: "3rem",
                                                    fontSize: "1.6em",
                                                    backgroundColor: "#361d64", 
                                                    color: "#00dbafda", 
                                                    border: "none"
                                                }} 
                                                onClick={() => addProduct(item)}>
                                                +
                                            </Button>
                                            <input readonly="readonly" value={item.cantidad}/>
                                            <Button 
                                                style={{
                                                    width: "4rem",
                                                    height: "3rem",
                                                    fontSize: "1.6em",
                                                    backgroundColor: "#361d64", 
                                                    color: "#00dbafda", 
                                                    border: "none"
                                                }} 
                                                onClick={() => onRemove(item)}>
                                                -
                                            </Button>
                                            <h3>${item.item.price}.00</h3>
                                        </ButtonGroup>
                                        <Button 
                                            style={{
                                                width: "4rem",
                                                height: "3rem",
                                                backgroundColor: "#361d64", 
                                                color: "#00dbafda", 
                                                border: "none"
                                            }} 
                                            onClick={ () => deleteItem(item.item.id) }>
                                            <DeleteOutlineRoundedIcon />
                                        </Button>
                                    </div>
                                </div>  
                            </div>
                        )}
                    </Col>
                    <Col sm={12} md={12} lg={4}>
                        {cart.length !== 0 && (
                            <div className="container-tot">
                                <div className="total">
                                    <p className="p-total">total:</p> 
                                    <p className="p-total">${total}.00</p>
                                </div>
                                <div className="container-btn">
                                    <Button variant="contained" 
                                        style={{
                                            backgroundColor: "#00dbafda",
                                            color: "#361d64", 
                                            fontWeight: "600",
                                            letterSpacing: "1px",
                                            hover: "#00dbafda", 
                                            width: "20rem",
                                            height: "3rem", 
                                            marginBottom: "1rem"
                                        }}>
                                        finalizar compra
                                    </Button>
                                    <Link className="a" to='/'>
                                        <Button variant="outlined" 
                                            style={{
                                                color: "#00dbafda", 
                                                fontWeight: "600",
                                                letterSpacing: "1px",
                                                border: "1px solid #00dbafda", 
                                                '&:hover':{
                                                    backgroundColor: "rgba(6, 190, 161, 0.04)"
                                                },
                                                width: "20rem",
                                                height: "3rem", 
                                            }}>
                                            continuar comprando
                                        </Button>
                                    </Link>
                                </div>
                                <button className="btn-cart" onClick={ () => emptyCart()}>vaciar carrito</button>
                            </div>
                        )}
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Cart;