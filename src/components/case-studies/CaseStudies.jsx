
import React, { useState, useEffect, useRef } from "react";
import StaticContent from "./StaticContent";

const projects = [
    {
        id: "[ 001/003 ]",
        title: "TRANSFORMING URBAN FORESTRY WITH AI DEVELOPMENTS",
        client: "Melbourne Urban Planning Authority",
        description:
            "We developed 'Treesights,' a machine learning platform for the client. Our platform enhanced decision-making efficiency by 40%, along with 85% accuracy in identifying reforestation areas and predicting tree lifespans.",
        image: "/public/images/Rectangle 78.png",
        modal: {
            title: "[ Transforming Urban Forestry with AI Developments ]",
            client: "Melbourne Urban Planning Authority",
            challange: "The client had trouble correlating urban tree data with environmental factors such as weather and population growth, hampering sustainable urban planning decisions.",
            solution: `Progressive AI developed "TreeInsights," a machine learning-driven platform that analysed diverse datasets, including weather patterns, tree lifespans, and population density. Using advanced visualisation tools and real-time data processing, TreeInsights gave actionable insights on oxygen production, tree life expectancy, and urban forest planning.`,
            result: `The Result: With our Artificial Intelligence solutions, the client optimized urban forestry strategies, predicting tree lifespans with 85% accuracy and identifying areas for reforestation. Our system improved decision-making efficiency by 40% and supported sustainable urban development goals.`,
            liText: ["[ KUBERNETES ]", " [ ELASTICSEARCH ] ", '[ FISSION ]', '[ STREMLET ]', '[ MELBOURNE RESEARCH CLOUD ]']
        }
    },
    {
        id: "[ 002/003 ]",
        title: "Using AI-Powered Object Detection to Enhance Airport Security",
        client: "Airport Security Solutions",
        description:
            "We developed a deep learning solution that improved airport security by improving accuracy of detecting prohibited items in X-ray images. Our system reduced false positives, boosted accuracy by 35%, and improved screening efficiency by 40%.",
        image: "/public/images/Rectangle 79.png",
        modal: {
            title: "[ Using AI-Powered Object Detection to Enhance Airport Security ]",
            client: "Airport Security Solutions",
            challange: "Airport Security Solutions had low detection accuracy for identifying prohibited items (e.g., guns, knives) in X-ray images because of object occlusion, variance in size, and complex visual representations, leading to discrepancies and potential security risks.",
            solution: `: Our Artificial intelligence solution increased detection accuracy by 35%, minimised false positives, and enhanced object localisation by leveraging multi-scale feature extraction. The client's screening process saw a 40% hike in efficiency, setting a new benchmark for security scanning solutions in high-traffic environments.`,
            result: `The Result: With our Artificial Intelligence solutions, the client optimized urban forestry strategies, predicting tree lifespans with 85% accuracy and identifying areas for reforestation. Our system improved decision-making efficiency by 40% and supported sustainable urban development goals.`,
            liText: ["[ Python ]", "[ PyTorch ]", '[ RFBNet ]', '[ Faster R-CNN  ]', '[ GPU Accelerated Cloud Training ]'],

        }
    },
    {
        id: "[ 003/003 ]",
        title: "AI Solutions with Tableau Elasticsearch & Apache Airflow",
        client: "A Leading University Planning for Long-Term Growth",
        description:
            "Our work involved developing a real-time dashboard that automated data processes and improved resource allocation. This solution exceeded their expectations by reducing planning time by 40% and enhanced forecast accuracy by 30%.",
        image: "/public/images/Rectangle 80.png",
        modal: {
            title: "[ Using AI-Powered Object Detection to Enhance Airport Security ]",
            client: "A Leading University Planning for Long-Term Growth",
            challange: "Our client faced challenges managing future commitments, including research funding allocation, student capacity planning, and recruitment. The process lacked transparency and adaptability, leading to delays and missed funding opportunities.",
            solution: `We developed a dashboard solution with real-time data integration. Using Apache Airflow, the system automated data pipelines, including funding applications, enrolment databases, and grant schedules. Data was indexed in Elasticsearch for efficient querying, and Tableau provided an intuitive interface to explore future trends, and risks.`,
            result: ` The client has a real-time view of its commitments, enabling optimised resource allocation. The dashboard reduced planning time by 40% and improved the forecast accuracy by 30%. This empowered stakeholders to make proactive adjustments, ensuring long-term sustainability and growth.`,

        }
    },
];



const CaseStudies = () => {


    const [currentIndex, setCurrentIndex] = useState(0);
    const [isSliding, setIsSliding] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const sliderRef = useRef(null);
    const modalRef = useRef(null);


    const handleWheel = (e) => {


        if (!isModalOpen) {
            const delta = e.deltaY;
            console.log(delta)
            if (delta > 0 && currentIndex < projects.length - 1) {
                setCurrentIndex((prev) => prev + 1);
            } else if (delta < 0 && currentIndex > 0) {
                setCurrentIndex((prev) => prev - 1);
            }
            setIsSliding(true);
        }
    };

    useEffect(() => {
        const slider = sliderRef.current;

        const handleTransitionEnd = () => setIsSliding(false);
        if (slider) {
            slider.addEventListener("transitionend", handleTransitionEnd);
        }

        return () => {
            if (slider) {
                slider.removeEventListener("transitionend", handleTransitionEnd);
            }
        };
    }, []);

    const progressPercentage = ((currentIndex + 1) / projects.length) * 100;




    const closeModal = (e) => {

        // Close modal only if click is outside modal content
        if (e.type === "mousedown" && modalRef.current && !modalRef.current.contains(e.target)) {
            setIsModalOpen(false);
        } else if (e.key === "Escape") {
            setIsModalOpen(false);
        }

    };




    useEffect(() => {



        if (isModalOpen) {
            // Add event listeners for both mouse and keyboard
            document.addEventListener("mousedown", closeModal);
            document.addEventListener("keydown", closeModal);
        }

        return () => {
            // Cleanup: Remove event listeners when modal is closed or component unmounts
            document.removeEventListener("mousedown", closeModal);
            document.removeEventListener("keydown", closeModal);
        };
    }, [isModalOpen]);


    //for responsive
    const [isLargeScreen, setIsLargeScreen] = useState(true);

    useEffect(() => {
        const handleResize = () => {
            setIsLargeScreen(window.innerWidth >= 1024); // Tailwind's `lg` breakpoint is 1024px
        };

        // Set initial value and add event listener
        handleResize();
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        if (isModalOpen) {
            document.body.style.overflow = "hidden"; // Disable scrolling
        } else {
            document.body.style.overflow = ""; // Restore scrolling
        }

        // Cleanup on component unmount
        return () => {
            document.body.style.overflow = "";
        };
    }, [isModalOpen]);



    return (
        <div className="pt-[29px]  lg:py-[100px] px-5  md:px-5  bg-[#021617] font-plexs vh relative z-0 " onWheel={handleWheel}  >
            <div className="sticky-0  padding-correction ">
                <div className="case-studies-header text-[#12C6D8] uppercase xl:w-[1021px]">
                    <p className="text-[12px] md:text-[16px] lg:text-[18px] font-[500] ">[ 006// Case Studies ]</p>
                    <h2 className="text-white text-[20px]  md:text-[26px] lg:text-[32px] xl:text-[40px] font-[700] pt-[15px] font-plexs">Our team has successfully <span className="text-[#12C6D8]" >helped businesses from various industries</span> , by providing AI powered solutions to their complex business specific problems. Take a look at how we did it.</h2>
                </div>


                <div className="">
                    <div
                        className="grid lg:grid-cols-5 gap-4 text-white  mt-[32px] md:mt-[40px] lg:mt-[100px] font-plexs " >
                        {isLargeScreen ? (<> <div className="lg:col-span-2 col-span-5">
                            <h1 className="text-[22px] xl:text-[40px]  font-[700] leading-none" >{projects[currentIndex].id}</h1>
                            <h3 className="text-[24px] xl:text-[32px] text-lg:[28px] h3-ch mt-3  xl:mt-6 font-[700] text-[#12C6D8] uppercase leading-[130%] ">{projects[currentIndex].title}</h3>
                            <p className="xl:mt-4 my-2 text-[#D2D2D5] font-helvetica lg:text-lg text-[14px]  font-[400]">
                                <span className=" text-white">Client:</span > {projects[currentIndex].client}
                            </p>
                            <p className="xl:mt-4 text-[#D2D2D5] xl:text-[18px] text-[14px] lg:text-[16px] font-[400] font-helvetica">{projects[currentIndex].description}</p>

                        </div>

                            {/* Slider Section */}
                            <div className="lg:col-span-3 col-span-5 items-center justify-center overflow-hidden ml-3 h-full">
                                <div
                                    ref={sliderRef}
                                    className="flex gap-6 transition-transform duration-500 ease-in-out h-full slide-image-translate"
                                    style={{
                                        transform: (window.innerWidth >= 1500 && window.innerWidth <= 2000)
                                            ? `translateX(-${currentIndex * 71}%)` // For width >= 1536px

                                            : (window.innerWidth >= 1300 && window.innerWidth < 1500)
                                                ? `translateX(-${currentIndex * 82}%)` // For width between 1024px and 1536px
                                                : `translateX(-${currentIndex * 104}%)`
                                    }}


                                >
                                    {projects.map((project, index) => (
                                        <img
                                            key={index}
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-ful object-cover "
                                        />
                                    ))}
                                </div>


                            </div> </>) : (
                            <StaticContent projects={projects} ></StaticContent>
                        )}
                    </div>

                    {/* button section start from here  */}

                    <div className="grid grid-cols-5 content-center items-center mt-12">
                        <div className="lg:col-span-2 col-span-5 ">
                            <div className="button-containerNew" >
                                <button onClick={() => setIsModalOpen(true)} className="corner-buttonNew uppercase  text-[16px] lg:text-[18px] font-[500] text-white py-[6px] lg:px-[20px]   hidden lg:block" style={{backgroundColor:"rgba(18, 198, 216, 0.15)"}} ><span>View Full Project</span></button>
                            </div>
                        </div>
                        <div className="h-[45px] hidden lg:block  col-span-3 ml-4 2xl:max-w-[70%] xl:max-w-[93%]" style={{ background: "rgba(18, 198, 216, 0.15)" }}>
                            <div
                                className="h-full bg-[#12C6D8] transition-all duration-500 ease-in-out "
                                style={{ width: `${progressPercentage}%` }}
                            ></div>
                        </div>
                    </div>
                    {/* //modal content start from here--------------------- */}
                    {isModalOpen && (
                        <div ref={modalRef} className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%] items-center justify-center  z-50  xl:max-w-[1320px]  mx-auto font-plexs bg-gradient-to-r from-[#010808] via-[#042123] to-[#042b2e] xl:p-12 p-4 modal-animate">
                            <div className="   gap-[64px] grid grid-cols-[auto_auto] overflow-hidden">
                                <div className="">
                                    <h2 className="xl:text-[32px] text-[24px] mb-3  text-[#12C6D8] xl:mb-4 font-[500] uppercase ">{projects[currentIndex]?.modal?.title}</h2>
                                    {projects[currentIndex]?.modal?.liText && <ul className="text-white flex flex-wrap  xl:gap-4 gap-2">
                                        <li className="text-center xl:py-2 xl:px-3 py-1 px-2 bg-[#04282b] text-[14px] xl:text-[18px]">{projects[currentIndex]?.modal?.liText[0]}</li>
                                        <li className="text-center  xl:py-2 xl:px-3 py-1 px-2 bg-[#04282b] text-[14px] xl:text-[18px]" ><a href="">{projects[currentIndex]?.modal?.liText[1]}</a></li>
                                        <li className="text-center xl:py-2 xl:px-3 py-1 px-2 bg-[#04282b] text-[14px] xl:text-[18px]" ><a href="">{projects[currentIndex]?.modal?.liText[2]}</a></li>
                                        <li className="text-center xl:py-2 xl:px-3 py-1 px-2 bg-[#04282b] text-[14px] xl:text-[18px]" ><a href="">{projects[currentIndex]?.modal?.liText[3]}</a></li>
                                        <li className="text-center xl:py-2 xl:px-3 py-1 px-2 bg-[#04282b] text-[14px] xl:text-[18px]"><a href="">{projects[currentIndex]?.modal?.liText[4]}</a></li>
                                    </ul>}

                                    <p className="xl:my-4 my-3  text-[#D2D2D5] text-sm xl:text-[18px] ">
                                        <span className="font-bold text-white">Client:</span> {projects[currentIndex]?.modal?.client}
                                    </p>
                                    <p className="xl:mb-4 mb-3 text-[#D2D2D5] text-sm  xl:text-[18px]">
                                        <span className="font-bold text-white">The Challenge</span> {projects[currentIndex]?.modal?.challange}
                                    </p>
                                    <p className="xl:mb-4 mb-3 text-[#D2D2D5] text-sm xl:text-[18px]">
                                        <span className="font-bold text-white">Our Solution</span> {projects[currentIndex].modal.solution}
                                    </p>
                                    <p className="xl:mb-4 mb-3 text-[#D2D2D5] text-sm  xl:text-[18px]">
                                        <span className="font-bold text-white">The Result</span> {projects[currentIndex].modal.result}
                                    </p>
                                </div>
                                {/* img-div */}
                                <div className="overflow-hidden">
                                    <img className="h-full w-full object-cover" src={projects[currentIndex].image} alt="" />
                                </div>

                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
export default CaseStudies;