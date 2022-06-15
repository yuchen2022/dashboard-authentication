import "./App.css";
import Navbar from "./navbar/navbar";
import Register from "./body/register";
import Dashboard from "./body/dashboard";
import palette from "./styles/palette";
import ThemeContext from "./styles/theme-context";
import { useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {

  const [theme, setTheme] = useContext(ThemeContext);

  return (
    <div className="App" style={{ backgroundColor: palette[theme].primary }}>
      <BrowserRouter>
        <Routes>
          <Route
            index
            path="/"
            element={
              <>
                <Navbar />
                <Register />
              </>
            }
          ></Route>
          <Route path="/Dashboard" element={<Dashboard />}></Route>
          <Route path="/logout" element={<Register/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
