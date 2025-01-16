import React from "react";
import Hero from "../../components/Hero/Hero";
import Supersite from "../../components/Supersite/Supersite";
import SupersiteCard from "../../components/SupersiteCard/SupersiteCard";
import Voucher from "../../components/Voucher/Voucher";

const Home = () => {
  return (
    <main>
      <Hero />
      <Voucher />
      <Supersite />
      <SupersiteCard />
    </main>
  );
};

export default Home;
