import React from "react";
import NavBar from "./components/navbar";
import Footer from "./components/Footer";
import {Outlet} from 'react-router-dom';

const Home = () => {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Home;
