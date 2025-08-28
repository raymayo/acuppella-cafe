import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ShowcaseCard from './ShowcaseCard.jsx';

import { ChevronLeft } from 'lucide-react';
import { ChevronRight } from 'lucide-react';

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} custom-arrow display-none`}
            style={{
                ...style,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'none',
                border: '1px solid white',
                borderRadius: '50%',
                width: '40px',
                height: '40px',
                cursor: 'pointer',
                position: 'absolute',
                right: '-3rem',
            }}
            onClick={onClick}>
            <ChevronRight color="white" size={20} />
        </div>
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} custom-arrow `}
            style={{
                ...style,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'none',
                border: '1px solid white',
                borderRadius: '50%',
                width: '40px',
                height: '40px',
                cursor: 'pointer',
                position: 'absolute',
                left: '-3rem',
            }}
            onClick={onClick}>
            <ChevronLeft color="white" size={20} />
        </div>
    );
}
const Showcase = () => {
    var settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    };
    return (
        <div className="bg-zinc-950 text-zinc-100 w-full flex flex-col items-center justify-center px-12  min-w-[320px]">
            <div className="w-full max-w-7xl flex flex-col items-center justify-center mx-auto">
                <h1 className="font-times font-semibold text-2xl sm:text-3xl lg:text-4xl  text-center py-10">
                    Showcase
                </h1>
                <ul className="flex text-center font-times gap-8 text-base md:text-lg lg:text-xl">
                    <li className="underline underline-offset-8">All</li>
                    <li>Branding</li>
                    <li>Mockups</li>
                    <li>Web Design</li>
                </ul>

                <div className="slider-container w-full max-w-[18rem] sm:max-w-[30rem] md:max-w-[38rem] lg:max-w-[55rem] xl:max-w-6xl py-20 ">
                    <Slider {...settings}>
                        <div className="w-full aspect-retro px-1.5">
                            <ShowcaseCard
                                image="https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/524366966_122263714700027101_5958549707648437957_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEEuPlE2wzIH6X0_ebkIHZRZaQeZVWUnQdlpB5lVZSdB1QWl-bCDUrgZod-etbtlHJfjTNs3Qg7f2ir5wVRcTC3&_nc_ohc=d5FQrLs_pY0Q7kNvwHjOLpa&_nc_oc=AdnOARwWmgCsWTlJP5hH-X-duGu1DETHHry6VQSaNpdOoeTZ11E9kF7z6e8_YMWgosHVemevajvXce0hzeJHs7Vs&_nc_zt=23&_nc_ht=scontent.fmnl4-3.fna&_nc_gid=Qrs2-4CU959ZnATl0RbW9A&oh=00_AfXiY_3xRh3arIr0Ac2aQtMn4AckSMESdx8ZRgrgAXtuMg&oe=68B669B0"
                                title="Daft Punk"
                                type="Graphic Design"
                            />
                        </div>
                        <div className="w-full aspect-retro px-1.5">
                            <ShowcaseCard
                                image="https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/524560471_122263709192027101_1987391477005747991_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHP8fR5WzBuIEstpJsGEpIzvAhmHcnPHUa8CGYdyc8dRriznVA7x4RbElgPfjA4MklN6eU13p4KGYMNZWAJaZka&_nc_ohc=JHxBeQ5GjawQ7kNvwH07LOy&_nc_oc=AdneyXWR6W6EvB-4HJI0LOw8yn_MotvgS2xyam4jgsUYLYQP1BL3pK131fqHgMRQDtnHO97AjuIGmFZ5jknRE_ch&_nc_zt=23&_nc_ht=scontent.fmnl4-3.fna&_nc_gid=GHbIYmuIAGVnnvBzb1mD-Q&oh=00_AfW9aauySpRDw4vKLv07yt8P_txgzqSMvoEOLLqs9N9img&oe=68B65E94"
                                title="RWB"
                                type="Graphic Design"
                            />
                        </div>
                        <div className="w-full aspect-retro px-1.5">
                            <ShowcaseCard
                                image="https://scontent.fcrk2-2.fna.fbcdn.net/v/t51.75761-15/479186511_17923963290017187_4806089436405740257_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGy6KDlzBwIzXCFspFJA-nSiJJxbr1piJeIknFuvWmIl8shB4mNDOYPowy8pdWTbGDCMek-ygCgF1UL5KFMhio1&_nc_ohc=nq_zyfH4UdAQ7kNvwHBF4hw&_nc_oc=AdnN8e9J7ExhsJBVjkFbcfqg9CFgFa0qT5zqEhjBxXmSvpumoZ0WXXatT8-G9CaIuRQ&_nc_zt=23&_nc_ht=scontent.fcrk2-2.fna&_nc_gid=2cAWWSeSm8M_BfO1wyc0-w&oh=00_AfUFjHTfvsJnxq1NzwjDZP19sTY6AM9hlcfXx39C6RtUMQ&oe=68B63EC6"
                                title="King Kunta"
                                type="Graphic Design"
                            />
                        </div>
                        <div className="w-full aspect-retro px-1.5">
                            <ShowcaseCard
                                image="https://scontent.fmnl4-4.fna.fbcdn.net/v/t39.30808-6/496411378_122250869660027101_2771148467045596883_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeE-w7y8301Zx6YorU1HmwenkbeYN7oncZGRt5g3uidxkT0i_AWDnTiylFCbXmVJGoockzqX96z9wT7Ynxfz5Daf&_nc_ohc=NaaRqOmqfgAQ7kNvwHYw-O-&_nc_oc=Adk0a3gM-EvYX2Ub6eUtf9ZjHHSOmPVn82hUTeftpNIjjBeY5kvFIk0GWLICvZSPSfg3aCg6Hvhs6PF4wKSQswpz&_nc_zt=23&_nc_ht=scontent.fmnl4-4.fna&_nc_gid=7g4A1oeyzYHWbH8nbpB2fQ&oh=00_AfWR5yLCelKW5lW-zGPtKa3hTGWfe1WDzt-1lPMOk63gBg&oe=68B65C2C"
                                title="A$AP"
                                type="Graphic Design"
                            />
                        </div>
                        <div className="w-full aspect-retro px-1.5">
                            <ShowcaseCard
                                image="https://scontent.fmnl4-6.fna.fbcdn.net/v/t39.30808-6/495653093_122250548240027101_7490492174083654998_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEqQaZy6y8iCDyg9_1poFiXxXLEBvDu0-HFcsQG8O7T4Q22-Wqleh_BgIL8jW3ddvdBF3BGBbrB6SihxSJu92l6&_nc_ohc=WPRTbJrPsjsQ7kNvwGsGpXP&_nc_oc=AdkIyA7GvkfGZuN_Mp9iEbnp5OPUpwjoVjPpFWAnASVCyw2-Po5BSmC4MN5gbizrzJUmY0w5DhA7coLkYU4r0v6p&_nc_zt=23&_nc_ht=scontent.fmnl4-6.fna&_nc_gid=M-Xhk1oXSALW5OAnLrZYmg&oh=00_AfXZ8efyhCWofLLD7o7LLjWzPFa4lleEnSrqOgXnh-rMFA&oe=68B65B69"
                                title="Cupids"
                                type="Graphic Design"
                            />
                        </div>
                        <div className="w-full aspect-retro px-1.5">
                            <ShowcaseCard
                                image="https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/495666292_122250548234027101_8310128047509138385_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGwkgdMyORYiiIMhzJ1XbuabD9XEFYbdPxsP1cQVht0_CuR3icF6IvxLYaCn2UMgCcWSuwDyEL0PH5Wp9Y1ZmGS&_nc_ohc=IlCyi6smnv0Q7kNvwGyFrIt&_nc_oc=AdkAkzK4rLvLMe2zREJjHUadHP81uR_l-NOPoZDvjrCGoe4EploIWhQKld5E93HV5bcU9svZZWBEcYFpDiLrpHGt&_nc_zt=23&_nc_ht=scontent.fmnl4-3.fna&_nc_gid=_-PuM1-STlFhcMCkri1dhA&oh=00_AfXzGp8n6fhcPt_jIAeS9mU65RJWKAnKRLTTQ7kttM9zxw&oe=68B6586B"
                                title="Hearts"
                                type="Graphic Design"
                            />
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default Showcase;