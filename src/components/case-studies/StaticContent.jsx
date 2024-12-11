import { useState, useEffect, useRef } from "react";
import { MdClose } from "react-icons/md";



const StaticContent = ({ projects }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const modalRef = useRef(null);
    let [currentIndex, setCurrentIndex] = useState(0)

    const handleIndex = (value) => {
        console.log(value)
        if (value === 0) {
            setCurrentIndex(value)
        } else if (value === 1) {
            setCurrentIndex(value)
        } else if (value === 2) {
            setCurrentIndex(value)
        }
    }

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
        <div>
            <div className="case-id-one">
                <div className="img-div mt-12 sm:mt-20">
                    <img className="h-full w-full" src={projects[0].image} alt="" />
                </div>
                <div className="context-div mt-6">
                    <h1 className="lg:text-[30px] xl:text-[40px] text-[22px] text-md[26px] font-[700] " >{projects[0].id}</h1>
                    <h3 className="xl:text-[32px] text-[22px] lg:text-[26px] xl:mt-6 mt-4 font-[700] text-[#12C6D8] uppercase">{projects[0].title}</h3>
                    <p className="lg:mt-4 mt-3 text-[#D2D2D5] font-helvetica lg:text-lg text-[16px]  font-[400]">
                        <span className=" text-white">Client:</span > {projects[0].client}
                    </p>
                    <p className="lg:mt-4 mt-3 text-[#D2D2D5] lg:text-lg text-[16px]  font-[400] font-helvetica">{projects[0].description}</p>
                   <div className="button-containerNew">
                   <button onClick={() => { setIsModalOpen(true); handleIndex(0) }} className="  corner-buttonNew uppercase corner-btn-bg text-[16px] lg:text-[18px] font-[500] text-white px-[18px]  md:px-[24px]  lg:px-[30px] mt-6"  style={{backgroundColor:"rgba(18, 198, 216, 0.15)"}}><span>View Full Project</span></button>
                   </div>
                </div>
            </div>
            <div className="case-id-two sm:mt-24 mt-14">
                <div className="img-div ">
                    <img className="h-full w-full" src={projects[1].image} alt="" />
                </div>
                <div className="context-div mt-6">
                    <h1 className="lg:text-[30px] xl:text-[40px] text-[22px] text-md[26px] font-[700] " >{projects[1].id}</h1>
                    <h3 className="xl:text-[32px] text-[22px] lg:text-[26px] xl:mt-6 mt-4 font-[700] text-[#12C6D8] uppercase">{projects[1].title}</h3>
                    <p className="lg:mt-4 mt-3 text-[#D2D2D5] font-helvetica lg:text-lg text-[16px]  font-[400]">
                        <span className=" text-white">Client:</span > {projects[1].client}
                    </p>
                    <p className="lg:mt-4 mt-3 text-[#D2D2D5] lg:text-lg text-[16px]  font-[400] font-helvetica">{projects[1].description}</p>
                    <div className="button-containerNew">
                   <button onClick={() => { setIsModalOpen(true); handleIndex(0) }} className="  corner-buttonNew uppercase corner-btn-bg text-[16px] lg:text-[18px] font-[500] text-white px-[18px]  md:px-[24px]  lg:px-[30px] mt-6" style={{backgroundColor:"rgba(18, 198, 216, 0.15)"}} ><span>View Full Project</span></button>
                   </div>
                </div>
            </div>
            <div className="case-id-three sm:mt-24 mt-14">
                <div className="img-div sm:mt-14">
                    <img className="h-full w-full" src={projects[2].image} alt="" />
                </div>
                <div className="context-div mt-6">
                    <h1 className="lg:text-[30px] xl:text-[40px] text-[22px] text-md[26px] font-[700] " >{projects[2].id}</h1>
                    <h3 className="xl:text-[32px] text-[22px] lg:text-[26px] xl:mt-6 mt-4 font-[700] text-[#12C6D8] uppercase">{projects[2].title}</h3>
                    <p className="lg:mt-4 mt-3 text-[#D2D2D5] font-helvetica lg:text-lg text-[16px]  font-[400]">
                        <span className=" text-white">Client:</span > {projects[2].client}
                    </p>
                    <p className="lg:mt-4 mt-3 text-[#D2D2D5] lg:text-lg text-[16px]  font-[400] font-helvetica">{projects[2].description}</p>
                    <div className="button-containerNew">
                   <button onClick={() => { setIsModalOpen(true); handleIndex(0) }} className="  corner-buttonNew uppercase corner-btn-bg text-[16px] lg:text-[18px] font-[500] text-white px-[18px]  md:px-[24px]  lg:px-[30px] mt-6" style={{backgroundColor:"rgba(18, 198, 216, 0.15)"}} ><span>View Full Project</span></button>
                   </div>
                </div>
            </div>
            {/* modal is start from here */}
            {isModalOpen && (
                <div ref={modalRef} className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:w-[80%] w-[90%]  z-50 font-plexs bg-gradient-to-r from-[#010808] via-[#042123] to-[#042b2e] p-4 pt-10 modal-animate">
                    <div className="  rounded-lg gap-4 overflow-scroll h-[85vh] ">
                        <div className="fixed right-2 top-2">
                        <button className="w-6 h-6 flex justify-center items-center bg-red-600 rounded-sm " onClick={() => setIsModalOpen(false)}><MdClose className="text-2xl"/></button>
                        </div>
                        <div className="img-div w-[100%] ">
                            <img className="h-full" src={projects[currentIndex].image} alt="" />
                        </div>
                        <div className="">
                            <h2 className="text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px]  my-2 sm:my-3 text-[#12C6D8]  font-[500] uppercase">{projects[currentIndex]?.modal?.title}</h2>
                            {projects[currentIndex]?.modal?.liText && <ul className="text-white flex flex-wrap gap-2 md:gap-4 my-3">
                                <li className="text-center py-1 px-2 md:py-2 md:px-3 bg-[#04282b] text-sm sm:text-[15px] md:text-[16px]">{projects[currentIndex]?.modal?.liText[0]}</li>
                                <li className="text-centerpy-1 px-2 md:py-2 md:px-3 bg-[#04282b] text-sm sm:text-[15px] md:text-[16px]" ><a href="">{projects[currentIndex]?.modal?.liText[1]}</a></li>
                                <li className="text-center py-1 px-2 md:py-2 md:px-3 bg-[#04282b] text-sm sm:text-[15px] md:text-[16px]" ><a href="">{projects[currentIndex]?.modal?.liText[2]}</a></li>
                                <li className="text-center py-1 px-2 md:py-2 md:px-3 bg-[#04282b] text-sm sm:text-[15px] md:text-[16px]" ><a href="">{projects[currentIndex]?.modal?.liText[3]}</a></li>
                                <li className="text-center py-1 px-2 md:py-2 md:px-3 bg-[#04282b] text-sm sm:text-[15px] md:text-[16px]"><a href="">{projects[currentIndex]?.modal?.liText[4]}</a></li>
                            </ul>}

                            <p className="my-2 sm:my-3 md:my-4 text-sm sm:text-[15px] md:text-[16px] text-[#D2D2D5]">
                                <span className="font-bold text-white">Client:</span> {projects[currentIndex]?.modal?.client}
                            </p>
                            <p className="mb-4 text-[#D2D2D5] text-sm sm:text-[15px] md:text-[16px]">
                                <span className="font-bold text-white">The Challenge</span> {projects[currentIndex]?.modal?.challange}
                            </p>
                            <p className="mb-4 text-[#D2D2D5] text-sm sm:text-[15px] md:text-[16px]">
                                <span className="font-bold text-white">Our Solution</span> {projects[currentIndex].modal.solution}
                            </p>
                            <p className="mb-4 text-[#D2D2D5] text-sm sm:text-[15px] md:text-[16px]">
                                <span className="font-bold text-white">The Result</span> {projects[currentIndex].modal.result}
                            </p>
                        </div>
                    </div>
                </div>
            )}


        </div>
    )
}

export default StaticContent;