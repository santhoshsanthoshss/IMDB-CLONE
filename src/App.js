import React from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Movies from "./components/Movies";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Favourites from "./components/Favourites";
import PageNotFound from "./components/PageNotFound";
const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Banner />
              <Movies />
            </>
          }
        />
        <Route path="/fav" element={<Favourites />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
