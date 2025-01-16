import React from "react";
import Hero from "../../components/Hero/Hero";
import Supersite from "../../components/Supersite/Supersite";
import Voucher from "../../components/Voucher/Voucher";

const Home = () => {
  return (
    <main>
      <Hero />
      <Voucher />
      <Supersite />
    </main>
  );
};

export default Home;
