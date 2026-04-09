import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Books from "./pages/Books";
import BookDetails from "./pages/BookDetails";
import Quotes from "./pages/Quotes";
import "./App.css";

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Books</Link> |{" "}
        <Link to="/quotes">Quotes</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/book/:id" element={<BookDetails />} />
        <Route path="/quotes" element={<Quotes />} />
      </Routes>
    </Router>
  );
}

export default App;
