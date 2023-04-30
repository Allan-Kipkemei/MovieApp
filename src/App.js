import "./App.css";
import Banner from "./components/Banner/Banner";
import Header from "./components/Header/Header";
import SearchBox from "./components/SearchBox/SearchBox";
import Trending from "./movies/trending/Trending";
import Popular from "./movies/popular/Popular";
import TopRated from "./movies/topRated/TopRated";
import Upcoming from "./movies/upcoming/Upcoming";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MovieDetails from "./MovieDetails";
import Search from "./components/Search";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <header className="header">
                  <Header />
                  <SearchBox />
                </header>
                <main>
                  <Banner />
                  <Upcoming />
                  <Trending />
                  <Popular />
                  <TopRated />
                </main>
                <Footer />
              </>
            }
          />
          <Route path="/movie/:id" element={<MovieDetails />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
