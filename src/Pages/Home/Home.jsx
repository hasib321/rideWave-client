import { Helmet } from "react-helmet-async";
import Banner from "../../components/Banner/Banner";
import ContactUs from "../../components/ContactUs/ContactUs";
import CustomerReview from "../../components/CustomerReview/CustomerReview";
import FAQ from "../../components/FAQ/FAQ";
import MobileApp from "../../components/MobileApp/MobileApp";
import PopularServices from "../../components/PopularService/PopularServices";
import Progress from "../../components/Progress/Progress";
import TravelExperience from "../../components/TravelExperienece/TravelExperience";

const Home = () => {
  return (
    <div>
      {/* site name*/}
      <Helmet>
        <title>RideWave | Home</title>
      </Helmet>
      <Banner></Banner>
      <PopularServices></PopularServices>
      <TravelExperience></TravelExperience>
      <MobileApp></MobileApp>
      <Progress></Progress>
      <CustomerReview></CustomerReview>
      <FAQ></FAQ>
      <ContactUs></ContactUs>
    </div>
  );
};

export default Home;
