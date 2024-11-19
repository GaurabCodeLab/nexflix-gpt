import { route } from "./router";
import { useRoutes } from "react-router-dom";
const App = () => {
  const element = useRoutes(route);
  return <div style={{ overflow: "auto" }}>{element}</div>;
};

export default App;
