import React, { useEffect, useState } from "react";
import { GrInstagram } from "react-icons/gr";
import { IoCall } from "react-icons/io5";
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Home.css'

// Initialize AOS
AOS.init({
    disable: false,
    startEvent: 'DOMContentLoaded',
    initClassName: 'aos-init',
    animatedClassName: 'aos-animate',
    useClassNames: false,
    disableMutationObserver: false,
    debounceDelay: 50,
    throttleDelay: 99,
    offset: 120,
    delay: 0,
    duration: 400,
    easing: 'ease',
    once: false,
    mirror: false,
    anchorPlacement: 'top-bottom',
});

const Home = () => {
    const [isDesktopOrLaptop, setIsDesktopOrLaptop] = useState(false);

    const handleInstaClickGruv = (link) => {
        window.open(link, '_blank');
    };

    useEffect(() => {
        const mediaQuery = window.matchMedia("(min-width: 768px)");
        setIsDesktopOrLaptop(mediaQuery.matches);

        const handler = (event) => setIsDesktopOrLaptop(event.matches);
        mediaQuery.addListener(handler);

        return () => mediaQuery.removeListener(handler);
    }, []);

    return (
        <div className='w-full pt-4 overflow-hidden'>
            {data.map((item, index) => (
                <div key={index} className={`back min-h-[100vh] mb-4 pt-10 ${item.head}`}>
                    <h1 className="text-center text-[#F3DFC1] text-6xl md:text-9xl font-serif font-bold" data-aos="flip-right" data-aos-duration="1000">{item.head}</h1>
                    <div className="flex flex-col md:flex-row px-4 md:px-16 gap-4 h-[100vh] md:h-[70vh] mt-10 md:mt-20 relative z-10">
                        {isDesktopOrLaptop ? (
                            (index % 2 === 0 ? (
                                <>
                                    <div className="w-[90%] h-64 md:w-1/3 md:h-[85%] md:mt-auto md:mb-auto ml-auto mr-auto md:ml-0 md:mr-0 rounded-[70px] overflow-hidden border-2 border-[#ddbea8]">
                                        <img src={item.pic} alt="" className="object-fill w-full h-full hover:scale-[1.03] transition-all ease-linear" />
                                    </div>
                                    <div className="relative w-[95%] md:w-2/3">
                                        <p className="h-1/2 pt-10 md:pt-20 px-6 text-[#ddbea8] text-2xl md:text-3xl text-center" data-aos="fade-up-left">{item.desc}</p>
                                        <div className="absolute -bottom-24 md:bottom-10 h-16 text-6xl w-full flex justify-center gap-10">
                                            <img src="https://png.pngtree.com/png-vector/20221018/ourmid/pngtree-instagram-icon-png-image_6315974.png" alt="" className="h-14 cursor-pointer text-[#ddbea8] hover:scale-[1.05]" onClick={() => handleInstaClickGruv(item.insta)} />
                                            {/* <GrInstagram className="cursor-pointer text-[#ddbea8] hover:scale-[1.05]" /> */}
                                            <IoCall className="cursor-pointer text-[#ddbea8] hover:scale-[1.05]" />
                                        </div>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div className="relative w-[95%] md:w-2/3">
                                        <p className="h-1/2 pt-10 md:pt-20 px-6 text-[#ddbea8] text-2xl md:text-3xl text-center" data-aos="fade-up-right">{item.desc}</p>
                                        <div className="absolute -bottom-24 md:bottom-10 h-16 text-6xl w-full flex justify-center gap-10">
                                            <img src="https://png.pngtree.com/png-vector/20221018/ourmid/pngtree-instagram-icon-png-image_6315974.png" alt="" className="h-14 cursor-pointer text-[#ddbea8] hover:scale-[1.05]" onClick={() => handleInstaClickGruv(item.insta)} />
                                            {/* <GrInstagram className="cursor-pointer text-[#ddbea8] hover:scale-[1.05]" /> */}
                                            <IoCall className="cursor-pointer text-[#ddbea8] hover:scale-[1.05]" />
                                        </div>
                                    </div>
                                    <div className="w-[90%] h-64 md:w-1/3 md:h-[85%] md:mt-auto md:mb-auto ml-auto mr-auto md:ml-0 md:mr-0 rounded-[70px] overflow-hidden border-2 border-[#ddbea8]">
                                        <img src={item.pic} alt="" className="object-fill w-full h-full hover:scale-[1.03] transition-all ease-linear" />
                                    </div>
                                </>
                            ))
                        ) : (
                            <>
                                <div className="w-[90%] h-64 md:w-1/3 md:h-[85%] md:mt-auto md:mb-auto ml-auto mr-auto md:ml-0 md:mr-0 rounded-[70px] overflow-hidden border-2 border-[#ddbea8]">
                                    <img src={item.pic} alt="" className="object-fill w-full h-full hover:scale-[1.03] transition-all ease-linear" />
                                </div>
                                <div className="relative w-[95%] md:w-2/3">
                                    <p className="h-1/2 pt-10 md:pt-20 px-6 text-[#ddbea8] text-2xl md:text-3xl text-center" data-aos="fade-up">{item.desc}</p>
                                    <div className="absolute -bottom-24 md:bottom-10 h-16 text-6xl w-full flex justify-center items-center gap-10">
                                        <img src="https://png.pngtree.com/png-vector/20221018/ourmid/pngtree-instagram-icon-png-image_6315974.png" alt="" className="h-14 cursor-pointer text-[#ddbea8] hover:scale-[1.05]" onClick={() => handleInstaClickGruv(item.insta)} />
                                        {/* <GrInstagram className="cursor-pointer text-[#ddbea8] hover:scale-[1.05]" /> */}
                                        <IoCall className="cursor-pointer text-[#ddbea8] hover:scale-[1.05]" />
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Home;

const data = [
    {
        head: "DC",
        desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti in impedit alias libero voluptas corporis itaque tempore, odit quas tenetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, qui? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam, unde.',
        pic: "https://plus.unsplash.com/premium_photo-1675448891119-bda089d46450?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8NnNNVmpUTFNrZVF8fGVufDB8fHx8fA%3D%3D",
        bg: './DC.jpg',
        insta: 'https://www.instagram.com/dchbtu?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=='
    },
    {
        head: "GRUV",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat cumque nemo temporibus reiciendis,quaerat quae error soluta molestiae excepturi ipsum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, dolorem? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi, corporis?",
        pic: "https://plus.unsplash.com/premium_photo-1675448891094-0f3acc556fdb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDV8NnNNVmpUTFNrZVF8fGVufDB8fHx8fA%3D%3D",
        bg: './groove.jpg',
        insta: 'https://www.instagram.com/gruv_hbtu?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=='
    },
    {
        head: "OCTAVE",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat cumque nemo temporibus reiciendis quaerat quae error soluta molestiae excepturi ipsum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, dolorem? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi, corporis?",
        pic: "https://plus.unsplash.com/premium_photo-1675448891119-bda089d46450?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8NnNNVmpUTFNrZVF8fGVufDB8fHx8fA%3D%3D",
        bg: './oct.png',
        insta: 'https://www.instagram.com/octave_hbtu?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=='
    },
    {
        head: "KALAKASH",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat cumque nemo temporibus reiciendis,quaerat quae error soluta molestiae excepturi ipsum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, dolorem? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi, corporis?",
        pic: "https://plus.unsplash.com/premium_photo-1675448891094-0f3acc556fdb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDV8NnNNVmpUTFNrZVF8fGVufDB8fHx8fA%3D%3D",
        insta: 'https://www.instagram.com/kalakaksh_hbtu?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=='
    },
];
