import { useState } from "react";
import { Content, Footer, Header, SideBar } from "./components";
import { ThemeContext } from "./Context";

export const Context = () => {
  const [theme, setTheme] = useState("light");
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div>
        <Header />
        <div>
          <SideBar />
          <Content />
        </div>
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
};
