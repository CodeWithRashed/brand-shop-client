import { RouterProvider } from "react-router-dom";
import { router } from "./Router/Router";
import DataContext from "./ContextApi/DataContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <div className="font-rubik mx-[5%]">
        <ToastContainer></ToastContainer>
        <DataContext>
          <RouterProvider router={router}></RouterProvider>
        </DataContext>
      </div>
    </>
  );
}

export default App;
