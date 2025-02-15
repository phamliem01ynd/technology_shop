import { createContext, useState, useEffect } from "react";
import { getCategory } from "../../utils/api";


export const categoryContext = createContext();
const WrapperCategory = ({children}) => {
    const [category, setCategory] = useState([]);
    useEffect(() => {
        const fetchApi = async () => {
            const result = await getCategory();
            setCategory(result);
        }
        fetchApi()
    },[])
    return (
        <categoryContext.Provider value={{
            category, setCategory
        }}>
            {children}
        </categoryContext.Provider>
    )
}

export default WrapperCategory;