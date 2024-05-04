import HeroSection from "@/components/UI/HomePgae/HeroSection";
import Specialities from "@/components/UI/Specialities/Specialities";
import TopRatedDoctors from "@/components/UI/TopRatedDoctors/TopRatedDoctors";
import WhyUs from "@/components/UI/WhyUs/WhyUs";
import { Button } from "@mui/material";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <Specialities />
      <TopRatedDoctors />
      <WhyUs />
    </>
  );
};

export default HomePage;
