    import { createContext, useEffect, useState } from "react";
    import { getProduct } from "../../utils/api";

    export const productContext = createContext();

    const ProductWrapper = ({children}) => {
        const [product, setProduct] = useState([]);
        useEffect(() => {
            const fetchApi = async () => {
                const result = await getProduct();
                setProduct(result);
            }
            fetchApi()
    },[])
        return (
            <productContext.Provider value={{ product, setProduct }}>
                {children}
            </productContext.Provider>
        )
    }


export default ProductWrapper;