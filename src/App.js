import PopularMovies from "./components/PopularMovies";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import MovieDetails from "./components/MovieDetails";

function App() {
    return (
        <div className="App">
            <header>
                <Link to="/" style={{ textDecoration: "none", color: "black" }}>
                    <h1 className="app-header">Movies App</h1>
                </Link>
            </header>

            <Routes>
                <Route path="/" element={<PopularMovies />} exact />
                <Route path="/movie/:id" element={<MovieDetails />} />
            </Routes>
        </div>
    );
}

export default App;
