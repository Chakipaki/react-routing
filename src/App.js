import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";

// Components
import HomePage from "./pages/Home";
import ProductsPage from "./pages/Products";

const router = createBrowserRouter([
    { path: '', element: <HomePage/> },
    { path: '/products', element: <ProductsPage/> },
])

// const routeDefinition = createRoutesFromElements(
//     <Route>
//         <Route path="/" element={<HomePage />} />
//         <Route path="/products" element={<ProductsPage />} />
//     </Route>
// )
// const router = createBrowserRouter(routeDefinition);



function App() {
    return (
        <RouterProvider router={router}/>
    )
}

export default App;
