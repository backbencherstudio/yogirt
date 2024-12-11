import '../../index.css'

const FooterHeader = () => {

    return (
        <div className="bg-gradient-to-r from-[#042d31] via-[#042528] to-[#031e20]  pt-12 lg:pt-[150px] px-5  font-plexs uppercase">
           <div className='max-w-[1320px] mx-auto'>
           <div className="gap-8 text-white items-end grid lg:grid-cols-2">
                <div className='w-auto' >
                    <h1 className=' self-stretch font-[700] text-[20px] md:text-[24px] lg:text-[28px] xl:text-[32px] 2xl:text-[40px]'>Stay Updated on AI Innovations</h1>
                </div>
                <div className='col-span-1 '>
                    <input
                        type="text"
                        placeholder="your email"
                        className=" border-b py-2 focus:outline-none bg-transparent w-full  block uppercase "
                    />
                    <div className='button-containerNew'>
                    <button className="corner-buttonNew  mt-8 uppercase text-[16px] lg:text-[18px] font-[500] px-[20px]  md:px-[24px]  lg:px-[30px] " style={{backgroundColor:"rgba(18, 198, 216, 0.15)"}} > <span>SUBSCRIBE</span> </button>
                    </div>
                </div>
            </div>
           </div>
        </div>
    )
}

export default FooterHeader

// corner-buttonNew uppercase  text-[16px] lg:text-[18px] font-[500] text-white px-[30px] py-[12px] md:px-[24px] md:py-[10px] lg:px-[30px] lg:py-[12px] hidden lg:block