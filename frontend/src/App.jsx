import  { createBrowserRouter, RouterProvider }  from "react-router-dom"
import "./App.css";
import Home from "./components/Home";

function App() {

  const router = createBrowserRouter([
    {path: "/", element:<Home/>}
  ])


  return (
    <>
     
     <RouterProvider router={router}></RouterProvider>    </>
  );
}

export default App;
