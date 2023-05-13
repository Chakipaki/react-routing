import { useParams } from "react-router-dom";


const ProductDetailsPage = (props) => {
    const params = useParams()
    return (
        <h1>
            Details {params.productId}
        </h1>
    )
}

export default ProductDetailsPage;
