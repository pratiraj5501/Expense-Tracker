import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import AddExpense from "./components/AddExpense.jsx";
import ViewExpense from "./components/ViewExpense.jsx";
import EditExpense from "./components/EditExpense.jsx";
import Analysis from "./components/Analysis.jsx";
import expenseStore from "./store/index.js";
import { Provider } from "react-redux";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  {
    path: "/addexpense",
    element: <AddExpense />,
  },
  {
    path: "/viewExpense",
    element: <ViewExpense />,
  },
  {
    path: "/editExpense",
    element: <EditExpense />,
  },
  {
    path: "/analysis",
    element: <Analysis />,
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={expenseStore}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
