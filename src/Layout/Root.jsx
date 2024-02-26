import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import { useState } from "react";
import Footer from "../components/Footer/Footer";

const Root = () => {
  const [darkMood, setDarkMood] = useState(false);
  const [theme, setTheme] = useState("dark");

  const onToggleTheme = () => {
      setTheme(!darkMood ? "light" : "dark");
      setDarkMood(!darkMood);
      console.log(theme, darkMood)
  };
  return (
    <div data-theme={theme}>
      <Header darkMood={darkMood} onToggleTheme={onToggleTheme}></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;
