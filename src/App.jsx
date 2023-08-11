import "./App.css";
import { Navbar, Header } from "./components";
import CTA from "./components/CTA/CTA";
import Booking from "./components/booking/Booking";
import Category from "./components/category/category";
import Destination from "./components/destination/Destination";
import Footer from "./components/footer/Footer";
import Logowall from "./components/logowall/Logowall";
import Testimonials from "./components/testimonials/Testimonials";
import Mode from "./constant/Mode";

const App = () => {
  return (
    <>
      <Mode />
      <Navbar />
      <Header />
      <Category />
      <Destination />
      <Booking />
      <Testimonials />
      <Logowall />
      <CTA />
      <Footer />
    </>
  );
};

export default App;
