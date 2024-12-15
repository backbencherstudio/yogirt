import VideoBackground from "./VideosSection"
import VideoThree from "./VideoThree"
import VideoTwo from "./VideoTwo"

const ClientTestimonials = () => {


    return (
        <div className=" lg:py-[100px] py-[32px] px-5 bg-[#010d0e] font-plexs">
            <div className="max-w-[1320px] mx-auto ">
            <div className="form-header  text-[#12C6D8] uppercase xl:w-[868px]">
                <p className="text-[12px] md:text-[16px] lg:text-[18px] font-[500] ">[ 007// Client Testimonials ]</p>
                <h2 className="text-white text-[20px]  md:text-[26px] lg:text-[32px] xl:text-[40px] font-[700] pt-[15px]">Don<span className="font-sans">’</span>t just take our word for it. See  <span className=" text-[#12C6D8]">How we<span className="font-sans">’</span>ve helped our clients </span> from  different industries succeed with  our AI solutions.</h2>
            </div>
            <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap:4 lg:gap-8 mt-8 lg:mt-[100px] max-w-[1320px] mx-auto">
            <VideoBackground></VideoBackground>
            <VideoTwo></VideoTwo>
            <VideoThree></VideoThree>
                </div>
            </div>
            </div>
    )
}

export default ClientTestimonials