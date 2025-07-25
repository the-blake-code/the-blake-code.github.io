import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { HashRouter, Route, Routes } from "react-router-dom";
import {
  Header,
  Footer,
  Home,
  Events,
  About,
  Blog,
  Posts,
  Post,
} from "./components";
import './styles/App.scss';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/events" element={<Events />} />
      <Route path="/about" element={<About />} />{/* 
      <Route path="/blog" element={<Blog />}>
        <Route path="" element={<Posts />} />
        <Route path=":postSlug" element={<Post />} />
      </Route> */}
    </Routes>
    <Footer />
  </HashRouter>,

  // document.getElementById("root")
);

serviceWorker.unregister();
