import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import useConversation from "@/zustand/useConversation";

const Home = () => {

  return (
    <>
      <NavBar />
      <Hero />
      <Footer />
    </>
  );
};

export default Home;
