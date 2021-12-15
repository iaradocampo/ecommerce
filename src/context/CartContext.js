import { createContext, useState, useContext } from "react";

const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext);

function CartContextProvider ({children}){

    const [cart, setCart] = useState([]);

    const addProduct = (item) => {

        const exist = cart.find( (x) => x.item.id === item.item.id);

        if (exist){
            setCart(cart.map( (x) => x.item.id === item.item.id ? { ...exist, cantidad: exist.cantidad + 1 } : x) 
            );
        }else {

            setCart( [...cart, { ...item, cantidad: item.cantidad }] );
        }
    }

    const onRemove = (item) => {

        const exist = cart.find( (x) => x.item.id === item.item.id);

        if (exist.cantidad === 1) {
            setCart(cart.filter( (x) => x.id !== item.item.id));
        } else {
            setCart(cart.map( (x) => x.item.id === item.item.id ? { ...exist, cantidad: exist.cantidad - 1 } : x)
            );
        }
    }

    const deleteItem = (id) => {
        
        const hola = cart.filter( (i) => i.item.id !== id);

        setCart(hola);
    }

    const emptyCart = () => {
        setCart([]);
    }

    const total = cart.reduce((a, b) => a + b.item.price * b.cantidad, 0);

    return(
        <CartContext.Provider value={{cart, addProduct, onRemove, deleteItem, emptyCart, total}}>
            {children}
        </CartContext.Provider>
    );
}

export default CartContextProvider;