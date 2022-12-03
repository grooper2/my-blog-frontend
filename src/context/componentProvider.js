import { createContext, useState } from "react";

export const ComponentContext = createContext({
  components: [],
  setComponents: () => {},
});

const ComponentProvider = ({ children }) => {
  const [components, setComponents] = useState([]);
  const { Provider } = ComponentContext;

  return <Provider value={{ components, setComponents }}>{children}</Provider>;
};

export default ComponentProvider;
