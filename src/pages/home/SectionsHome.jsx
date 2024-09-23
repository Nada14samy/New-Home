import React,{useEffect ,useState} from "react";
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css'; //import aos styles
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import image_about_1 from "../../images/homepage/image11.png";
import image_about_2 from "../../images/homepage/image12.png";
import image_about_3 from "../../images/homepage/image13.png";
import image_14 from "../../images/homepage/image14.png";
import image_16 from "../../images/homepage/image16.png";
import image_8 from "../../images/homepage/image8.png";
import Group7 from "../../images/homepage/Group7.png";
import image18 from "../../images/homepage/image18.png";
import bg_image_1 from "../../images/background-image/bg.png";
import bg_image_2 from "../../images/homepage/Ellipse4.png";
import bg_image_3 from "../../images/homepage/Rectangle7.png";
import bg_image_4 from "../../images/background-image/image19.png";
import bg_image_5 from "../../images/homepage/Ellipse3.png";
import bg_image_6 from "../../images/background-image/image22.png";
const SectionsHome = () => {
    useEffect(() => {
        AOS.init(); //Initialize AOS
    }, []);
    const[counterOn, setCounterOn] = useState(false);
    return (
        <>
            <section className="about w-full h-fit bg-contain bg-center bg-no-repeat" 
            style={{backgroundImage: `url(${bg_image_1})`}}>
                <div className="container w-10/12 m-auto">
                    <div className="w-full h-screen flex justify-center items-center">
                        <div className="title mx-1 w-1/2 flex flex-col justify-center" data-aos="fade-right">
                            <h3 className="text-3xl my-5">find your new friend</h3>
                            <p className="w-4/5 mb-7">Lorem ipsum dolor sit amet consectetur adipisicing
                                elit. Mollitia sunt delectus illum explicabo? Dolore
                                laboriosam inventore suscipit obcaecati quam
                                sapiente.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat suscipit eum aut. Ab tempora aperiam qui harum consequuntur impedit dicta.
                            </p>
                            <button className="p-3 bg-cyan-500 text-white rounded-sm w-fit bg-primary">
                                <Link to="/">view pets</Link>
                            </button>
                        </div>
                        <div className="image w-1/2">
                            <ul className="w-full flex justify-center items-center">
                                <li className="w-1/3 mx-3 h-28 mb-14">
                                <img src={image_about_1} alt="" className="w-full" data-aos="fade-up" data-aos-duration="4000"/>
                                </li>
                                <li className="w-1/3 h-80 mx-3 mt-3 ">
                                <img src={image_about_2} alt="" className="w-full" data-aos="fade-up" data-aos-duration="5000"/>
                                </li>
                                <li className="w-1/3 mx-3">
                                <img src={image_about_3} alt="" className="w-full" data-aos="fade-up" data-aos-duration="6000"/>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* <!-- end sec1 --> */}
                </div>
                <div className="container relative px-12 mt-12 bg-contain bg-left bg-no-repeat h-screen" style={{backgroundImage: `url(${bg_image_2 })`}}>
                    <div className="w-11/12 flex flex-col justify-center items-center m-auto">
                        <div className="text-center my-5" data-aos="zoom-in">
                            <span className="text-teal-500 text-2xl text-primary">about us</span>
                            <h3 className="text-3xl">who are you?</h3>
                        </div>
                        <div className="text-title flex mt-10 h-fit">
                            <div className="image w-1/2">
                                <img className="w-full" src={image_14} alt="" data-aos="zoom-in-right" data-aos-duration="3000"/>
                                <img src={image_16} alt="" className="absolute bottom-[0px] left-[0px]" />
                            </div>
                            <div className="w-1/2 my-5 px-5 mx-3" data-aos="fade-up" data-aos-duration="3000">
                                <h3 className="text-3xl font-bold">we save <span className="text-teal-500 text-primary">the pets</span></h3>
                                <p className="my-5 font-medium">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta hic doloremque quod saepe incidunt, culpa fuga veniam fugiat asperiores delectus.
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique exercitationem saepe asperiores reiciendis? Reiciendis praesentium, sint nobis eos ad adipisci odio quisquam animi officiis ipsam. Voluptas asperiores suscipit similique, vitae nulla tenetur quidem doloremque dicta tempora, maiores quibusdam, eveniet nesciunt!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="w-full flex justify-end">
                <img src={image_16} alt="" className="translate-y-[-30px] translate-x-[120px]" />
                <div className="bg-container w-10/12 h-fit flex justify-center items-center bg-contain bg-center bg-no-repeat" style={{backgroundImage: `url(${bg_image_3})`}}>
                    <div className="1/5 flex">
                        <img className="w-full pb-7" src={image_8} alt="" />
                    </div>
                    <ScrollTrigger className="flex justify-center items-center w-4/5" onEnter={()=>setCounterOn(true)} onExit={()=>setCounterOn(false)}>
                    <ul className="flex justify-center items-center w-full">
                        <li className="mx-8 text-center">
                            <span className="text-3xl font-bold">
                               {counterOn && <CountUp start={0} end={1500} duration={2} delay={0}/>}
                                +</span>
                            <p className="text-xl">customers</p>
                        </li>
                        <li className="mx-8 text-center">
                            <span className="text-3xl font-bold">
                            {counterOn && <CountUp start={0} end={10} duration={1} delay={0}/>}
                            </span>
                            <p className="text-xl">years</p>
                        </li>
                        <li className="mx-8 text-center">
                            <span className="text-3xl font-bold">
                            {counterOn && <CountUp start={0} end={120} duration={2} delay={0}/>}
                                +</span>
                            <p className="text-xl">waiting for Home</p>
                        </li>
                        <li className="mx-8 text-center">
                            <span className="text-3xl font-bold">
                            {counterOn && <CountUp start={0} end={40} duration={2} delay={0}/>}
                                +</span>
                            <p className="text-xl">adept last year</p>
                        </li>
                    </ul>
                    </ScrollTrigger>
                </div>
            </section>
            <section className="w-full bg-right-bottom bg-no-repeat h-fit" style={{backgroundImage: `url(${bg_image_4})`, backgroundSize: '1065px'}}>
                <div className="container w-10/12 m-auto flex flex-col justify-center ">
                    <div className="w-full text-center">
                        <h3 className="text-4xl my-5 font-medium" data-aos="zoom-in-down" data-aos-duration="2000">Adoption process</h3>
                    </div>
                    <div className="flex justify-center items-center my-14">
                        <div className="w-1/2 h-fit">
                            <img className="w-96" src={Group7} alt="" data-aos="zoom-in-right" data-aos-duration="2000"/>
                        </div>
                        <div className="w-1/2 my-5">
                            <ul className="flex mb-20 w-full">
                                <li className="w-1/2" data-aos="flip-left">
                                    <span className="p-3 px-5 bg-cyan-500 text-white rounded-full my-5 text-2xl bg-primary">1</span>
                                    <p className="my-7 text-xl font-bold">create account</p>
                                </li>
                                <li className="w-1/2" data-aos="flip-left">
                                    <span className="p-3 px-5 bg-cyan-500 text-white rounded-full my-5 text-2xl bg-primary">2</span>
                                    <p className="my-7 text-xl font-bold">find your pet</p>
                                </li>
                            </ul>
                            <ul className="flex w-full">
                                <li className="w-1/2" data-aos="flip-left">
                                    <span className="p-3 px-5 bg-cyan-500 text-white rounded-full my-5 text-2xl bg-primary">3</span>
                                    <p className="my-7 text-xl font-bold">complete adaption form</p>
                                </li>
                                <li className="w-1/2" data-aos="flip-left">
                                    <span className="p-3 px-5 bg-cyan-500 text-white rounded-full my-5 text-2xl bg-primary">4</span>
                                    <p className="my-7 text-xl font-bold">take your pet home</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <section className="w-full learn my-5 py-5 bg-right-top bg-no-repeat" style={{backgroundImage: `url(${bg_image_5})`, backgroundSize: '400px'}}>
                <div className="learn-bg w-full bg-left-right bg-no-repeat" style={{backgroundImage: `url(${bg_image_6})`, backgroundSize: '1300px'}}>
                    <div className="container w-10/12 m-auto flex flex-col justify-center items-center">
                        <div className="title text-center"  data-aos="zoom-in-down" data-aos-duration="2000">
                            <h3 className="text-4xl">Pet care tips</h3>
                            <p className="text-lg font-medium">learn how to care for your funny friends</p>
                        </div>
                        <div className="w-full h-fit flex flex-col justify-center items-center">
                            <div className="w-full flex rounded-full my-12 bg-secondary" data-aos="fade-right" data-aos-duration="3000">
                                <img className="rounded-full" src={image18} alt="" />
                                <div className="flex flex-col justify-center  mx-10">
                                    <h4 className="text-2xl mb-4">Lorem ipsum dolor sit amet.</h4>
                                    <p className="pe-12">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad pariatur magnam totam excepturi. Similique magnam magni necessitatibus mollitia dignissimos ipsum amet repudiandae ex debitis. Consequuntur expedita excepturi in facilis tenetur.</p>
                                </div>
                            </div>
                            <div className="w-full flex rounded-full my-12 bg-secondary" data-aos="fade-left" data-aos-duration="3000">
                                <img className="rounded-full" src={image18} alt="" />
                                <div className="flex flex-col justify-center  mx-10">
                                    <h4 className="text-2xl mb-4">Lorem ipsum dolor sit amet.</h4>
                                    <p className="pe-12">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad pariatur magnam totam excepturi. Similique magnam magni necessitatibus mollitia dignissimos ipsum amet repudiandae ex debitis. Consequuntur expedita excepturi in facilis tenetur.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SectionsHome;