import {
  ContactUs,
  FeaturedDevelopment,
  Footer,
  HeroSection,
  News,
  Testimonial,
  Welcome,
} from "../components";
import LandMarkImages from "../components/LandMarkImages";

const LandingPage = () => {
  return (
    <div className="bg-white ">
      <div className="bg-white">
        <HeroSection />
        <LandMarkImages />
        <Welcome />
        <FeaturedDevelopment />
        <News />
        <Testimonial />
        <ContactUs />
        <Footer />
      </div>
    </div>
  );
};

export default LandingPage;
