import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProductByCategoria } from "../../Data/DataItem.jsx";
import ItemList from "../ItemList/ItemList.jsx";
import Loading from "../Loading/Loading.jsx";

export default function ProductsCategory(){
    const [loading, setLoading] = useState(true);

    const [products, setProducts] = useState([]);
    const {categoryId} = useParams();

    useEffect (() => {
        setLoading(true);
        getProductByCategoria(categoryId)
            .then((data) => setProducts(data))
            .catch((err) => console.log(err))
            .finally(() => setLoading(false));
    }, [categoryId]);


    return(
        <div className="container mx-auto max-w-[1170px]">
            {loading ?(
                <div>
                    <Loading />
                </div>
            ):(

                <ItemList productos={products}/>
            )}
        </div>
    )
};