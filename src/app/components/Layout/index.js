import React from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";

export default function Layout({ children }) {
  return (
    <div
      style={{
        position: "relative",
        maxWidth: "1700px",
        width: "100%",
        margin: "0 auto",
      }}
    >
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
