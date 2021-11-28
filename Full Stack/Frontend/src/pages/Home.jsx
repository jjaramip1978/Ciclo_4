import { useState, useEffect } from "react";
import '../components/styles/style-home.css';
import '../components/styles/bootstrap-home.css';
import '../components/styles/bootstrap-home.min.css';
import { Header } from "../components/header";
import { Features } from "../components/features";
import { Services } from "../components/services";
import { Testimonials } from "../components/testimonials";
import { Team } from "../components/team";
import JsonData from "../data/data.json";
import SmoothScroll from "smooth-scroll";



export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const Home = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []); 

  return (
    <div>
      <Header data={landingPageData.Header} />
      <Features data={landingPageData.Features} />
      <Services data={landingPageData.Services} />
      <Testimonials data={landingPageData.Testimonials} />
      <Team data={landingPageData.Team} />
    </div>
  );
};

export default Home;
