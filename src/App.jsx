import { RouterProvider } from "react-router-dom";
import { router } from "./Router/Router";
import DataContext from "./ContextApi/DataContext";

function App() {
  return (
    <>
      <DataContext>
        <RouterProvider router={router}></RouterProvider>
      </DataContext>
    </>
  );
}

export default App;
