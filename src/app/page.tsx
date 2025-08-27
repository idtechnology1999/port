"use client"

import { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "@/app/Header/page"
import Hero from "@/app/Hero/page"
import Subhero1 from "@/app/Sub_hero1/page"
import Subhero2 from "@/app/sub_hero2/page"
import Subhero3 from "@/app/sub_hero3/page"
import Subhero4 from "@/app/sub_hero4/page"
import Subhero5 from "@/app/sub_hero5/page"
import Subhero6 from "@/app/sub_hero6/page"
import Carousel from "@/app/corousel/page"
import Form from "@/app/form/page"
import Question from "@/app/question/page"
import Footer from "./footer/page";

export default function Home() {
   useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (

    <div>


   <Header/> 
   <Hero/>
   <Subhero1/>
   <Subhero2/>
   <Subhero3 />
   <Subhero4/>
   <Subhero5/>
   <Subhero6/>
   <Carousel/>
   <Form/>
   <Question/>
   <Footer/>





    </div>
  );
}
