import "./App.css";
import AddTask from "./pages/AddTask";
import Home from "./pages/Home";
import Nav from "./Components/Nav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add-task" element={<AddTask />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
