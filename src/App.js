import { BrowserRouter, Routes, Route } from "react-router-dom";

import Addons from "./pages/Addons";
import Info from "./pages/Info";
import Plan from "./pages/Plan";
import Summary from "./pages/Summary";
import Header from "./components/Header";

function App() {
  return (
    <main>
      <div className="container">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Info />} />
            <Route path="/plan" element={<Plan />} />
            <Route path="/addons" element={<Addons />} />
            <Route path="/summary" element={<Summary />} />
          </Routes>
        </BrowserRouter>
      </div>
    </main>
  );
}

export default App;
