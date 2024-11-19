import Login from "./components/Login";
import Browse from "./components/Browse";

export const route = [
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/browse",
    element: <Browse />,
  },
];
