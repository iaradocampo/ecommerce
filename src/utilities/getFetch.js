import { products } from './json/products'

export const getFetch = new Promise ((res) => {
    setTimeout(()=> {
        res(products);
    }, 2000)
})

export default getFetch;