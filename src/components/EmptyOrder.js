import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

const EmptyOrder = () =>{
    return<>
    <div className="cart">
        <Container>
        <h1>Mis ordenes</h1>
        <hr/>
        <p className='p-empty'>No hay ordenes para mostrar</p>
        <p className="p-order">Para seguir navegando, navegar por las categorias del sitio, o busque su producto.</p>
        <Link className='a' to='/'>
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
                                                marginTop: "2rem"
                                            }}>
                                            elegir productos
                                        </Button>
                        </Link>
        </Container>
    </div>
    </>
}
export default EmptyOrder;