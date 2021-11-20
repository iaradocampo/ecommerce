import { useEffect, useState } from "react";
import Container from 'react-bootstrap/Container';
import ItemCount from '../components/ItemCount';
import ItemList from '../components/ItemList';
import { images } from "../images/Images";

const productos = [
    {
        id: 1, 
        title: "Auriculares GEMINI VSG", 
        precio: 8000, 
        imagen: images.auriculares
    },
    {   
        id: 2, 
        title: "Mouse Aurora VSG", 
        precio: 4000, 
        imagen: images.mouse
    },
    {
        id: 3, 
        title: "Teclado mecánico Yama K550 Redragon", 
        precio: 8000, 
        imagen: images.keyboard
    },
    {
        id: 4, 
        title: "Webcam Logitech G920", 
        precio: 10000, 
        imagen: images.webcam
    },
    {
        id: 5, 
        title: "Parlantes Logitech Z120", 
        precio: 2300, 
        imagen: images.parlantes
    },
    {
        id: 6, 
        title: "Joystick PS5 Dualsense", 
        precio: 13000, 
        imagen: images.joystick
    }
]

const ItemListContainer = () => {

    const [items, setItems] = useState([]);

    useEffect(() =>{

        let promesa = new Promise((res, rej) =>{
            setTimeout(() =>{
                res(productos)
            }, 2000)
        })

        promesa.then(res=>{
            setItems(res);
        })

        .catch(error =>{
            console.log(error);
        })

    }, [])
        
    return <>
        <Container>
            <ItemCount stock= "5" initial= "1" onAdd= "" />
            <div className="item-list">
                <ItemList items={items}/>
            </div>
        </Container>
    </>
}

export default ItemListContainer;