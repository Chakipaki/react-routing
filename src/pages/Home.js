import { Link } from "react-router-dom";

const HomePage = () => {
    return (
        <main>
            Home Page

            <p>
                Go to <Link to="/products">the list of products</Link>
            </p>
        </main>
    )
}

export default HomePage;
