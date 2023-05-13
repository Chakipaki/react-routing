import { Link } from "react-router-dom";

const ProductsPage = (props) => {
    return (
        <>
            <h1>Products Page!</h1>

            <ul>
                <li>
                    <Link to="/products/product-1">Product 1</Link>
                </li>
            </ul>
        </>
    )
}

export default ProductsPage;
