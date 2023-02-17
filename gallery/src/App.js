import { useState } from "react";
import "./App.css";
import Layout from "./components/Layout/Layout";
import Navbar from "./components/Navbar/Navbar";
import CustomerSupportPage from "./pages/CustomerSupportPage/CustomerSupport";
import GalleryPage from "./pages/GalleryPage/GalleryPage";
import HomePage from "./pages/HomePage/HomePage";

function App() {
  const [homePageVisibility, setHomePageVisibility] = useState("visible");
  const [galleryPageVisibility, setGalleryPageVisibility] = useState("hidden");
  const [customerSupportPageVisibility, setCustomerSupportPageVisibility] =
    useState("hidden");

  const linkToPage = (value) => {
    if (value === "home") {
      setHomePageVisibility("visible");
      setGalleryPageVisibility("hidden");
      setCustomerSupportPageVisibility("hidden");
    } else if (value === "gallery") {
      setGalleryPageVisibility("visible");
      setHomePageVisibility("hidden");
      setCustomerSupportPageVisibility("hidden");
    } else if (value === "customerSupport") {
      setCustomerSupportPageVisibility("visible");
      setGalleryPageVisibility("hidden");
      setHomePageVisibility("hidden");
    }
  };

  return (
    <div>
      <Navbar linkToPage={linkToPage} />

      <Layout>
        <HomePage visibility={homePageVisibility} />
        <GalleryPage visibility={galleryPageVisibility} />
        <CustomerSupportPage visibility={customerSupportPageVisibility} />
      </Layout>
    </div>
  );
}

export default App;
