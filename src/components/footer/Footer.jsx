import { RiFacebookFill } from "react-icons/ri";
import { TbBrandInstagramFilled } from "react-icons/tb";
import { GrLinkedinOption } from "react-icons/gr";
import './footer.css'
import '../../index.css'



const Footer = () => {

    return(
        <div className=" uppercase footer-container bg-gradient-to-r from-[#06373b] via-[#04272a] to-[#031e20] px-5" >
            <div className="pt-[48px] lg:pt-[100px] max-w-[1320px] mx-auto">
            <div className=" grid sm:grid-cols-2 sm:gap-y-20 lg:grid-cols-3 xl:grid-cols-4 text-white gap-12 xl:gap-12 lg:gap-10 border-t border-[#12C6D826] lg:pt-12 pt-6"  >
                <div className="footer-logo col-span-1 font-helvetica ">
                    <div>
                    <img className=" mb-4 w-[36px] h-[56px] md:w-[52px] md:h-[80px]" src="/public/images/logo.png" alt="" />
                    <h3 className=" mb-6 font-[500] text-[16px] lg:text-[18px]">Custom AI Solutions and AI Consulting | Progressive AI</h3>
                    <p className="normal-case text-[16px] lg:text-[18px] text-[#D2D2D5]  font-[400]">Become an industry leader by strategically integrating AI automation solutions and experience exponential business growth with <span className="font-[500] text-white">Progressive AI.</span>  </p>
                    </div>
                </div>
                <div className="footer-services col-span-1 font-plexs">
                    <h1 className=" text-[#12c6d8]  text-[20px] lg:text-[24px] "><a href="">[ services ]</a></h1>
                    <h3 className="mt-6  text-[16px] lg:text-[18px]">Custom AI-Powered Automation Solutions</h3>
                    <h3 className="mt-4  text-[16px] lg:text-[18px]"> Real-Time Predictive Analytics</h3>
                    <h3 className="mt-4  text-[16px] lg:text-[18px]">Data and AI Consulting</h3>
                    <h3 className="mt-4 xl:mt-4 text-[16px] lg:text-[18px]">AI Training and Capacity Building</h3>
                </div>
                <div className="footer-keywords col-span-1 font-plexs">
                <h1 className=" text-[#12c6d8] text-[20px] lg:text-[24px]  " ><a href="">[ keywords ]</a></h1>
                    <h3 className=" mt-6 text-[16px] lg:text-[18px]">AI solution</h3>
                    <h3 className=" mt-4 text-[16px] lg:text-[18px]">AI automation</h3>
                    <h3>Data and AI Consulting</h3>
                    <h3 className="mt-4 text-[16px] lg:text-[18px]">AI development</h3>
                    <h3>AI governance</h3>
                    <h3 className=" mt-4 text-[16px] lg:text-[18px]">Automation solution</h3>
                    <h3>Artificial intelligence solution</h3>
                    <h3 className=" mt-4 text-[16px] lg:text-[18px]">Artificial intelligence automation</h3>
                </div>
                <div className="footer-social col-span-1 font-plexs ">
                    <h1 className=" text-[#12c6d8] text-[20px] lg:text-[24px]"><a href="">[ social ]</a></h1>
                    <div className="social-icons flex gap-4 mt-6">
                       <a href="https://www.facebook.com"  className="p-2 corner-button" style={{backgroundColor:"rgba(18, 198, 216, 0.15)"}} >< RiFacebookFill className="text-[28px]  text-[#12c6d8]" /></a>
                        <a href="https://www.linkedin.com"  className="p-2 corner-button" style={{backgroundColor:"rgba(18, 198, 216, 0.15)"}}><GrLinkedinOption  className="text-[28px]  text-[#12c6d8]"/></a>
                        <a href="https://www.instagram.com"  className="p-2 corner-button" style={{backgroundColor:"rgba(18, 198, 216, 0.15)"}}> <TbBrandInstagramFilled className="text-[28px] text-[#12c6d8]"/></a>
                        
                       
                    </div>
                </div>
            </div>
            </div>
            <div className="footer-end-title text-center  px-5 lg:mt-8 ">
                <h1 className="font-bold xl:text-[157px] lg:text-[110px] md:text-[70px] text-[39px] mt-6 " style={{color:"#12C6D826"}}> Progressive AI</h1>
                <p className="text-[#A5A5AB] text-base md:text-2xl pb-6 mt-6" >Copyright © 2024 Progressive AI</p>

                
            </div>
        </div>
    )
}

export default Footer;