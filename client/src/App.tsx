import "./App.css";
import LiquidadorNomina from "./pages/LiquidadorNomina";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./utilities/Layout";
import Triburaria from "./pages/triburaria/Triburaria";
import Nomina from "./pages/nomina/Nomina";
import Costos from "./pages/costos/Costos";
import Otros from "./pages/otros/Otros";
import Contabilidad from "./pages/contabilidad/Contabilidad";
import PostById from "./components/PostById";
import NewPost from "./pages/newPost/NewPost";
import UpdatePost from "./pages/updatePost/UpdatePost";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/tributaria",
        element: <Triburaria />,
      },
      {
        path: "/nomina",
        element: <Nomina />,
      },
      {
        path: "/contabilidad",
        element: <Contabilidad />,
      },
      {
        path: "/costos",
        element: <Costos />,
      },
      {
        path: "/otros",
        element: <Otros />,
      },
      {
        path: "/liquidadores",
        element: <LiquidadorNomina />,
      },
      {
        path: "/:category/:id",
        element: <PostById />,
      },
      {
        path: "/newPost",
        element: <NewPost />,
      },
      {
        path: "/updatePost/:id",
        element: <UpdatePost />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={routes} />;
}

export default App;
