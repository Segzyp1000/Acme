import { useContext } from "react";
import ProductsContext from "../context/ProductProvider";
import type { UseProductsContextType  } from "../context/ProductProvider";


const useProduct = (): UseProductsContextType  => {
    return  useContext(ProductsContext)
}

export default useProduct