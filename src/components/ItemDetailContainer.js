import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import ItemDetail from './ItemDetail';
import { getFetch } from "../utilities/getFetch";
import Loader from "./Loader";

const ItemDetailContainer = () => {
    const [item, setItem] = useState([]);

    const [loader, setLoader] = useState();

    const { idProduct } = useParams();
  
    useEffect(() => {

        getFetch.then((res) => {
            setItem(res.find((element)=>element.id === parseInt(idProduct)));
            setLoader(true);
            })

        .catch((error) => console.log(error))
        .finally(() =>
            setTimeout(() => {
                setLoader(false);
            }, 1000)
        );
        
    }, [idProduct]);
  
  
    return (
        <Container>
            <>
            {
                loader ? 
                    <Loader/> 
                : 
                    <ItemDetail item={item} />
            }
            </>
        </Container>
    );
};

export default ItemDetailContainer;