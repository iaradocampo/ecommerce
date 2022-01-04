import { Col } from "react-bootstrap";
import DeleteOutlineRoundedIcon from '@mui/icons-material/DeleteOutlineRounded';
import { Button, ButtonGroup } from "@mui/material";
import { useCartContext } from "../../context/CartContext";

const CartDetail = () =>{

    const { cart, addProduct, onRemove, deleteItem } = useCartContext();

    return<>
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
    </>
}

export default CartDetail;