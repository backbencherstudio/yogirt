import { RiSendPlaneFill } from "react-icons/ri"
const FormSchedule = () => {

    return (
        <div className=" bg-[#010d0e] font-plexs px-5">
            <div className="pt-[48px] lg:py-[100px] max-w-[1320px] mx-auto">
                <div className="form-header text-[#12C6D8] ">
                    <p className="lg:text-[18px] text-[12px] sm:text-[14px] lg:[16px] font-[500] ">[ 008// Schedule free consultation! ]</p>
                    <h2 className="text-white xl:text-[40px] text-[22px] md:text-[26px] lg:text-[32px] font-[700] pt-[15px] uppercase">Fly to success, <br />
                        propelled by <span className=" text-[#12C6D8]">AI Solutions</span></h2>
                </div>
                <div className=" mt-[50px] lg:mt-[100px] pb-[64px] lg:pb-0 grid lg:grid-cols-2 gap-8">

                    <form className="text-[#A5A5AB] bg-[#042326] py-[24px] px-4 lg:p-8 xl:p-12 border border-[#12C6D8]">
                        <input
                            type="text"
                            placeholder="Name"
                            className=" border-b pb-4 focus:outline-none bg-transparent w-full  "
                            style={{ borderBottom: '1px solid rgba(18, 198, 216, 0.15)' }}
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            className=" border-b pb-4 focus:outline-none bg-transparent w-full  my-6"
                            style={{ borderBottom: '1px solid rgba(18, 198, 216, 0.15)' }}
                        />
                        <input
                            type="text"
                            placeholder="Phone"
                            className=" border-b pb-4  focus:outline-none bg-transparent w-full  "
                            style={{ borderBottom: '1px solid rgba(18, 198, 216, 0.15)' }}
                        />
                        <div className="relative w-full lg:my-6 my-5">
                            <select
                                className=" border-b focus:outline-none bg-transparent w-full pb-4  pl-0 appearance-none"
                                style={{ borderBottom: '1px solid rgba(18, 198, 216, 0.15)' }}
                            >
                                <option className="bg-transparent">
                                    Select Your Budget
                                </option >
                                <option className="bg-transparent">Han Solo</option>
                                <option className="bg-transparent"> Greedo</option>
                            </select>
                            <span className="absolute right-4 top-1/2 pb-4 transform -translate-y-1/2 pointer-events-none ">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5 text-[#12C6D8]"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </span>
                        </div>
                        <input
                            type="text" style={{ borderBottom: '1px solid rgba(18, 198, 216, 0.15)' }}
                            placeholder="Company"
                            className=" border-b pb-4  focus:outline-none bg-transparent w-full  uppercase "
                        />
                        <textarea style={{ borderBottom: '1px solid rgba(18, 198, 216, 0.15)' }} name="" id="" placeholder="Message" className=" pb-4 focus:outline-none bg-transparent w-full  block my-6 mb-0"></textarea>
                        <div className="button-containerNew">
                            <button className="corner-buttonNew mt-8 uppercase corner-btn-form lg:text-[18px] text-[14px]  font-[500] text-white w-full " style={{ background: "#12C6D8" }}><span>schedule your free consultation</span></button>
                        </div>
                    </form>

                    <div className="chat-bar mt-8 lg:mt-0 text-white font-plexs flex flex-col items-stretch justify-between" style={{ background: "rgba(18, 198, 216, 0.10" }} >
                        <div className="">

                            <div className="flex p-4 pl-0 border-b border-b-[#12C6D8] text-[18px] items-center " style={{ background: "rgba(18, 198, 216, 0.60)" }}>
                                <div className="mx-4 p-2 bg-[#12C6D8]  w-[40px]  md:h-[40px] flex ">
                                    <img className="  " src="images/star.png" alt="" />
                                </div>
                                
                                <h3 className="text-[16px] lg:text-[18px]">[ Chat with our AI assistant for a quick response ]</h3>
                            </div>

                            <div className="px-4 text-[18px] ">

                                <div className=" mt-4 mb-6 flex   ">
                                    <div className=" mr-3  " >
                                        <img src="images/star2.png" className="w-[100px] md:w-[80px] " alt="" />
                                    </div>
                                    <p className="text-[16px] lg:text-[18px]">Hello! I’m here to help you explore Progressive AI. Looking for info on our services, case studies, or anything specific? Just ask!</p>
                                </div>

                                <div className=" mt-4 mb-6 flex   ">
                                    <div className=" mr-3  " >
                                        <img src="images/star2.png" className="w-[100px] md:w-[80px] " alt="" />
                                    </div>
                                    <p className="text-[16px] lg:text-[18px]">Welcome to Progressive AI! Need instant answers? Chat with me to learn how we can help solve your AI and data challenges.</p>
                                </div>

                            </div>

                        </div>
                        <div className="p-4">
                            <div className="py-[15px] px-[24px] bg-[#2B4245] text-[18px] text-white flex">
                                <input
                                    type="text"
                                    placeholder="TYPE MESSAGE"
                                    className=" text-[16px] lg:text-[18px] focus:outline-none w-full  block bg-[#2B4245] placeholder:text-white "

                                />
                                <div>
                                    <RiSendPlaneFill className="text-[24px] text-[#12C6D8]" />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default FormSchedule;