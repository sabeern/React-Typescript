import { BrowserRouter, Routes, Route } from "react-router-dom";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import Page3 from "./pages/Page3";
import Page4 from "./pages/Page4";
import Page5 from "./pages/Page5";
import Page6 from "./pages/Page6";
import { ThemeContextProvider } from "./store/ThemeContext";
import Page7 from "./pages/Page7";
import { UserContextProvider } from "./store/UserContext";
import Page8 from "./pages/Page8";
import Page9 from "./pages/Page9";
import Page10 from "./pages/Page10";
import Dashboard from "./components/Dashboard";
import Page11 from "./pages/Page11";
import Page12 from "./pages/Page12";
import Page13 from "./pages/Page13";
import Page14 from "./pages/Page14";

function App() {
  return (
    <div>
      <ThemeContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Page1 />}></Route>
            <Route path="/page2" element={<Page2 />}></Route>
            <Route path="/page3" element={<Page3 />}></Route>
            <Route path="/page4" element={<Page4 />}></Route>
            <Route path="/page5" element={<Page5 />}></Route>
            <Route path="/page6" element={<Page6 />}></Route>
            <Route path="/page7" element={<Page7 />}></Route>
            <Route path="/page9" element={<Page9 />}></Route>
            <Route path="/page11" element={<Page11 />}></Route>
            <Route path="/page12" element={<Page12 />}></Route>
            <Route path="/page13" element={<Page13 />}></Route>
            <Route path="/page14" element={<Page14 />}></Route>
            <Route
              path="/page10"
              element={<Page10 isLogged={true} component={Dashboard} />}
            ></Route>
          </Routes>
        </BrowserRouter>
      </ThemeContextProvider>
      <UserContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/page8" element={<Page8 />}></Route>
          </Routes>
        </BrowserRouter>
      </UserContextProvider>
    </div>
  );
}

export default App;
