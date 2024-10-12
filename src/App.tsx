import React, { Suspense } from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
const DefaultLayout = React.lazy(() => import("./layout/DefaultLayout"));
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./assets/css/base.css";

function App() {
  return (
    <>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<DefaultLayout />} />
          </Routes>
        </Suspense>
      </Router>
    </>
  );
}

export default App;
