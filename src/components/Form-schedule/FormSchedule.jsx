const FormSchedule = () => {

    return (
        <div className="lg:px-40 py-[100px] px-5 sm:px-20 md:px-32  2xl:px-[300px] bg-[#010d0e] font-plexs">
            <div className="form-header text-[#12C6D8] uppercase">
                <p className="text-[18px] font-[500] ">[ 008// Schedule free consultation! ]</p>
                <h2 className="text-white text-[40px] font-[700] pt-[15px]">Fly to success, <br />
                    propelled by <span className=" text-[#12C6D8]">AI Solutions</span></h2>
            </div>
            <div className="form-section  my-[100px] grid grid-cols-2 gap-4">
                <form className="text-[#A5A5AB] bg-[#042326] p-12 border border-[#12C6D8]">
                    <input
                        type="text"
                        placeholder="Name"
                        className=" border-b pb-4 focus:outline-none bg-transparent w-full  block  "
                        style={{borderBottom:'1px solid rgba(18, 198, 216, 0.15)'}}
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        className=" border-b pb-4 focus:outline-none bg-transparent w-full  block  my-6"
                        style={{borderBottom:'1px solid rgba(18, 198, 216, 0.15)'}}
                    />
                    <input 
                        type="text"
                        placeholder="Phone"
                        className=" border-b pb-4  focus:outline-none bg-transparent w-full  block "
                        style={{borderBottom:'1px solid rgba(18, 198, 216, 0.15)'}}
                    />
                    <div className="relative w-full my-6 ">
                        <select
                            className="select border-b focus:outline-none bg-transparent w-full block pb-4  pl-0 appearance-none"
                            style={{borderBottom:'1px solid rgba(18, 198, 216, 0.15)'}}
                        >
                            <option disabled selected>
                                Select Your Budget
                            </option>
                            <option>Han Solo</option>
                            <option>Greedo</option>
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
                        type="text" style={{borderBottom:'1px solid rgba(18, 198, 216, 0.15)'}}
                        placeholder="Company"
                        className=" border-b pb-4  focus:outline-none bg-transparent w-full  block uppercase "
                    />
                    <textarea style={{borderBottom:'1px solid rgba(18, 198, 216, 0.15)'}} name="" id="" placeholder="Message" className=" pb-4 focus:outline-none bg-transparent w-full  block my-6 mb-0"></textarea>
                    <button  className="corner-button mt-8 uppercase corner-btn-form text-[18px] font-[500] text-white w-full" style={{padding:'12px 30px'}} >schedule your free consultation</button>
                </form>
                <div className="chat-bar text-white px-4" >
                    <div className="flex"><span className="mx-3">icon</span> <h3>[ Chat with our AI assistant for a quick response ]</h3></div>
                    <div className="flex"><span className="mx-3">icon</span> <p>Hello! I’m here to help you explore Progressive AI. Looking for info on our services, case studies, or anything specific? Just ask!</p></div>
                    <div className="flex"><span className="mx-3">icon </span> <p> Welcome to Progressive AI! Need instant answers? Chat with me to learn how we can help solve your AI and data challenges.</p></div>
                </div>
            </div>

        </div>
    )
}

export default FormSchedule;