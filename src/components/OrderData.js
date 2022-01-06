import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

const OrderData = ({data}) => {

return <>
<div className="cart">
   
    <Container>
        <h1>Mis ordenes</h1>
        <hr/>
    <div className="container-order">
        <div>
        <p className="p-empty">Resumen de compra</p>
        <p className="p-compra">item(s):</p>
        <li className="p-compra">{data.items[0].title}</li>
    <p className="p-compra">cantidad:</p>
    <li className="p-compra">x{data.items[0].quantity}</li>
    <div className="total">
<p className="p-compra">total:</p>
<p className="p-compra">${data.total}</p>
</div>
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
                                            volver
                                        </Button>
                        </Link>
                        </div>
</div>

    
</Container>
</div>
</>

}

export default OrderData;