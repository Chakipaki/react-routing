import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";

// Components
import HomePage from "./pages/Home";
import ProductsPage from "./pages/Products";
import RootLayout from "./pages/Root";
import ErrorPage from "./pages/Error";

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        errorElement: <ErrorPage />,
        children: [
            { path: '/', element: <HomePage/> },
            { path: '/products', element: <ProductsPage/> },
        ]}
])



function App() {
    return (
        <RouterProvider router={router}/>
    )
}

export default App;

// Another way version < 6.4
// const routeDefinition = createRoutesFromElements(
//     <Route>
//         <Route path="/" element={<HomePage />} />
//         <Route path="/products" element={<ProductsPage />} />
//     </Route>
// )
// const router = createBrowserRouter(routeDefinition);
