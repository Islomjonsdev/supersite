import Hero from "../../components/Hero/Hero";
import Services from "../../components/Services/Services";
import Supersite from "../../components/Supersite/Supersite";
import SupersiteCard from "../../components/SupersiteCard/SupersiteCard";
import Voucher from "../../components/Voucher/Voucher";
import telegramIcon from "../../assets/icons/telegram.svg";
import callIcon from "../../assets/icons/call.svg";
import "./Home.scss";
import OurWork from "../../components/OurWork/OurWork";
import Application from "../../components/Application/Application";
import Branches from "../../components/Branches/Branches";

const Home = () => {
  return (
    <main>
      <div className="contact">
        {/* <a href="tel:+998998107090">
          <img src={telegramIcon} alt="" />
        </a>
        <a href="tel:+998998107090">
          <img src={callIcon} alt="" />
        </a> */}
      </div>
      <Hero />
      <Voucher />
      <Supersite />
      <SupersiteCard />
      <Services />
      <OurWork />
      <Application />
      {/* <Branches /> */}
    </main>
  );
};

export default Home;
