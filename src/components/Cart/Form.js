import { Container, Modal, Button } from "react-bootstrap";
import firebase from "firebase";
import 'firebase/firestore';
import { dataBase } from "../../firebase/firebase";
import { useCartContext } from "../../context/CartContext";
import { useState } from "react";
import { Link } from "react-router-dom";

const Form = () => {

    const [orderId, setOrderId] = useState('');

    const {cart, total, emptyCart} = useCartContext();

    const [show, setShow] = useState(false);

    const [name, updateName] = useState(undefined);
    const [lastName, updateLastName] = useState(undefined);
    const [email, updateEmail] = useState(undefined);
    const [confirmEmail, updateConfirmEmail] = useState(undefined);
    const [phone, updatePhone] = useState(undefined);

    const close = () => setShow(false);

    const generateOrder = (e) => {
        e.preventDefault()

        setShow(true);
        
        if(cart !== 0 ){

            const order = {
        
                date: firebase.firestore.Timestamp.fromDate(new Date()),
                buyer: {
                    name: name, 
                    lastName: lastName, 
                    email: email,
                    phone: phone
                },
                total: total,
                items: cart.map(item => {
                    return{
                        id: item.item.id,
                        title: item.item.title,
                        price: item.item.price
                    }
        
                }),
        
            }
        
            const db = dataBase;
        
            db.collection('orders').add(order)
            .then(response => successOrder(response))
            .finally();
        }else{
            console.log('no hay productos')
        }

        
        const successOrder = (response) => {
            setOrderId(response.id);
            emptyCart();
        }

    }

    const onChange = () =>{
        updateName(document.getElementById("inputName").value);
        updateLastName(document.getElementById("inputLastName").value);
        updatePhone(document.getElementById("inputPhone").value);
        updateEmail(document.getElementById("inputEmail").value);
    }

    const handleReset = () => {
        Array.from(document.querySelectorAll("input")).forEach(
          input => (input.value = "")
        );
        setShow(false);
      };

    return <>
        <div className="cart">
            <Container>
                <form>
                    <input id="inputName" onChange={onChange} type="text" name="name" placeholder="ingrese su nombre"/>
                    <input id="inputLastName" onChange={onChange} type="text" name="name" placeholder="ingrese su apellido"/>
                    <input id="inputPhone" onChange={onChange} type="text" name="phone" placeholder="ingrese su teléfono"/>
                    <input id="inputEmail" onChange={onChange} type="email" name="email" placeholder="ingrese su mail"/>
                </form>
                <button onClick={generateOrder}>continuar</button>

                <Modal show={show} onHide={close} centered>
                    <Modal.Header closeButton>
                    <Modal.Title>tu orden</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>{orderId !== '' && <p>el id de su orden es: {orderId}</p>}</Modal.Body>
                    <Modal.Footer>
                        <Link to='/'>
                            <Button variant="secondary" onClick={handleReset}>
                                Close
                            </Button>
                        </Link>
                    </Modal.Footer>
                </Modal>

            </Container>
        </div>
    </>
}

export default Form;