import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { routes } from "./Routes";
import { ToastContainer } from "react-toastify";

function App() {
  // console.log(routes);
  return (
    <BrowserRouter>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={"Zoom"}
      />
      <Routes>
        {routes.map((route) => {
          return (
            <Route
              key={route.id}
              path={route.path}
              Component={route.component}
            />
          );
        })}

        {/* <Route path="/" Component={Home} />
        <Route path="/array-map-demo" Component={ArrayMapDemo} />
        <Route path="/products" Component={Products} />
        <Route path="/Props" Component={Props} />
        <Route path="/Props2" Component={Props2} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
