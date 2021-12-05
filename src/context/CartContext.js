import { createContext, useState, useContext } from "react";

const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext);

function CartContextProvider ({children}){

    const [cart, setCart] = useState([]);

    const addProduct = (item) => {

        const exist = cart.find( (x) => x.item.id === item.item.id);
        if (exist){
            setCart(cart.map( (x) => x.item.id === item.item.id ? { ...exist, cantidad: exist.cantidad + item.cantidad} : x) 
            );
        }else {

            setCart( [...cart, { ...item, cantidad: item.cantidad }] );
        }
    }

    const emptyCart = () => {
        setCart([]);
    }

    const total = cart.reduce((a, b) => a + b.item.precio * b.cantidad, 0);

    return(
        <CartContext.Provider value={{cart, addProduct, emptyCart, total}}>
            {children}
        </CartContext.Provider>
    );
}

export default CartContextProvider;