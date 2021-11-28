import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import ItemList from '../components/ItemList';
import getFetch from "../utilities/getFetch";
import Loader from '../components/Loader';

const ItemListContainer = () => {

    const [items, setItems] = useState([]);

    const [loader, setLoader] = useState();

    const { idCategory } = useParams();

    useEffect(() =>{

        getFetch.then((res) => {
            if(idCategory === undefined){
                setItems(res);
            }else{
                setItems(res.filter((res) => res.category === idCategory))
            }
            setLoader(true);
        })

        .catch((error) => console.log(error))
        .finally(() =>
            setTimeout(() => {
                setLoader(false);
            }, 1000)
        );

    }, [idCategory])

    function load () {
        return loader ? (
            <Loader />
        ) : (<Container>
                <div className="item-list">
                    {items.length < 1 ? <Loader /> : <ItemList items={items} />}
                </div>
            </Container>)
    }
        
    return load();
}

export default ItemListContainer;