import { RouterProvider } from "react-router-dom";
import router from "./utilis/router.jsx";

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
