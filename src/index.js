import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Converstion from "./Component/Converstion";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
import App from "./App";
import Welcome from "./Component/Welcome";
import { PersistGate } from "redux-persist/integration/react";


// routes
const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Welcome /> }, 
      { path: "/:id", element: <Converstion /> }, 
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>  
        <RouterProvider router={routes} />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
