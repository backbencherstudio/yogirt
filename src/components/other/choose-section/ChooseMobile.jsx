const ChooseMobile = ({ elements }) => {
    console.log(elements)
    return (
        <div>
            <div className="grid mt-[42px]">
                <div className="p-4 sm:p-6 md:p-10" style={{
                    backgroundImage: `url("images/frame layer.png")`,
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat',
                    
                }}>
                    <div  className="overflow-hidden ">
                        <img src={elements.image} className="w-[100%] sm:w-[90%] md:w-[80%]"  alt="" />
                    </div>
                </div>
                <h1 className="text-[20px] font-[700] text-white font-plexs mt-6">{elements.title}</h1>
                <p className="text-[16px] font-helvetica text-[#D2D2D5] mt-3">{elements.descript}</p>
                <div className="button-containerNew mt-6 bg-[#12C6D826] text-[18px] w-[50%] sm:w-[40%] md:w-[30%] font-[500] mb-12 sm:mb-[60px] md:mb-[80px]">
                    <div className="corner-buttonNew py-1">
                        <span className="text-[16px] lg:text-[18px]">VIEW OUR SERVICE</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChooseMobile;

