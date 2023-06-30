import { createBrowserRouter, RouterProvider } from "react-router-dom";

export default function Router() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <App/>,
            children: [
                {
                    path: "/",
                    element: <PortalCatalog/>
                },
                {
                    path: "/services",
                    element: <PortalCatalog/>,
                },
                {
                    path:"/services/renovate",
                    element: <RenovateConfigurePage/>
                }
            ]
        }
    ]);
}