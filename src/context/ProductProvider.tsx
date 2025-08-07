import {createContext, type ReactElement, useState, useEffect } from 'react';

export type ProductType = {
    sku: string,
    name: string,
    price: number,
}

const initState: ProductType[] = []

// const initState: ProductType[]  = [
//     {
//         sku: '12345',
//         name: 'Sample Product',
//         price: 19.99,
//     },
//     {
//         sku: '67890',
//         name: 'Another Product',
//         price: 29.99,
//     },
// ]

export type UseProductsContextType = {
    products: ProductType[]
}


const initContextState: UseProductsContextType = {products:[]}

const ProductContext = createContext<UseProductsContextType>(initContextState)

type childrenType = {
    children: ReactElement | ReactElement[]
}

export const ProductProvider = ({children}: childrenType):ReactElement => {
    const [products,setProducts] = useState<ProductType[]>(initState)

     useEffect(() => {
        const fetchProducts = async (): Promise<ProductType[]> => {
            const data = await fetch('http://localhost:3000/products').then(res => {
                return res.json()
            }).catch(err => {
                if (err instanceof Error) console.log(err.message)
            })
            return data
        }

        fetchProducts().then(products => setProducts(products))
    }, [])

    return (
        <ProductContext.Provider value={{products}}>
            {children}
        </ProductContext.Provider>
    )
}

export default ProductContext