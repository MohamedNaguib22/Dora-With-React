import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { NavDora } from "./components/Pages/Home/Nav";
import { Ground, ThreeCard } from "./components/Pages/Home/BackGround";
import { Services } from "./components/Pages/Home/ServicesSection";
import { Progress } from "./components/Pages/Home/Progress";
import { Portfolio } from "./components/Pages/Home/PortfolioSection";
import { RiseLoader } from "react-spinners";
import { FeedbackClients } from "./components/Pages/Home/Feedback";
import Blog from "./components/Pages/Home/Blog/Blog";
import { ContactUs } from "./components/Pages/Home/Form";
import Footer from "./components/Pages/Home/Footer/Footer";



const App = () => {
  const [loader, setLoader] = useState(false);
  useEffect(() => {
    setLoader(true);
    setTimeout(() => {
      setLoader(false);
    }, 2000);
  }, []);
  useEffect(() => {
    AOS.init({
      easing: "ease",
      duration: 1000,
    });
  }, []);
  return (
    <>
      {loader === true ? (
        <div className="RiseLoade">
          <RiseLoader
            color="#fd6e0a"
            margin={12}
            size={25}
            speedMultiplier={1}
          />
        </div>
      ) : (
        <>
          <NavDora />
          <Ground />
          <ThreeCard />
          <Services />
          <Progress />
          <Portfolio />
          <FeedbackClients />
          <Blog />
          <ContactUs />
          <Footer />
        </>
      )}
    </>
  );
};

export default App;
