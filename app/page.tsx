import Image from "next/image";
import styles from "./page.module.css";
import About from "./about/page"
import Header from "../components/Header/Header"
import NavBar from "../components/NavBAr/navBAr"
import HeroSection from "@/components/Herosection/Herosection";

export default function Home() {
  return (
    <div>
      
      <Header></Header>
      <NavBar/>
      <HeroSection/>
    </div>
  );
}
