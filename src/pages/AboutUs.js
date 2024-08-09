import { useEffect } from "react";
import CompanyDescription from "../components/AboutUs/CompanyDescription/CompanyDescription";
import CompanyEthics from "../components/AboutUs/CompanyEthics/CompanyEthics";
import CompanyToPrograms from "../components/AboutUs/CompanyToPrograms/CompanyToPrograms";
import CompanyValues from "../components/AboutUs/CompanyValues/CompanyValues";
import CompanyWhatWeDo from "../components/AboutUs/CompanyWhatWeDo/CompanyWhatWeDo";

export default function AboutUs() {
  useEffect(function(){
    window.scrollTo({
      top:0,
      behavior:"instant"    
    })
  },[])
  return (
    <>
      <CompanyDescription />
      <CompanyEthics />
      {/* <CompanyValues/> */}
      {/* <CompanyWhatWeDo/> */}
      {/* <CompanyToPrograms/> */}
    </>
  );
}
