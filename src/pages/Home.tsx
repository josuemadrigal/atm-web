import AboutUs from "../components/AboutUs";
import Benefits from "../components/Benefits";
import Contacts from "../components/Contacts";
import Hero2 from "../components/Hero2";
import Team from "../components/Team";

// import Instagram from "../components/Instagram";

const Home = () => {
  return (
    <>
      <Hero2 />
      <AboutUs />

      <Benefits />

      <Team />
      <Contacts />

      <p>
        Phone +1 (561) 608-0446 - Addresses 13727 SW 152ND ST NUM 660 MIAMI FL
        33177
      </p>
      <h1>Logo USA VETERAN</h1>
      <img src="/veteran-business.png" className="w-40 h-full" />
    </>
  );
};

export default Home;
