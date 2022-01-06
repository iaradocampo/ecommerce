import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

const OrderData = ({data}) => {

return <>
<div className="cart">
   
    <Container>
        <h1>Mis ordenes</h1>
        <hr/>
    <div>
        <p className="p-empty">Resumen de compra</p>
        <p className="p-compra">item(s):</p>
        <p className="p-compra">{data.items[0].title}</p>
    <p className="p-compra">cantidad:</p>
    <p className="p-compra">x{data.items[0].quantity}</p>
<p className="p-compra">total:</p>
<p className="p-compra">${data.total}</p>
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

    
</Container>
</div>
</>

}

export default OrderData;