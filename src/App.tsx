import { BrowserRouter, Routes, Route } from "react-router-dom";
import Page1 from "./pages/page1";
import Page2 from "./pages/Page2";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Page1 />}></Route>
        <Route path="/page2" element={<Page2 />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
