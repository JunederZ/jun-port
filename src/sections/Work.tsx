import React, { useState } from 'react';
import Angkit from "../assets/angkit.png"
import Teacher from "../assets/teacher1.png"
import Gakko from "../assets/gakko.jpeg"
import UNJ from "../assets/unj.png"
import OJS from "../assets/ojs.png"
import Nasa from "../assets/nasa.jpg"
import Ampas from "../assets/ampas.png"
import Toffee from "../assets/toffee.webp"
import Nedmed from "../assets/nedmed.png"

function BoxWrapper(props: {
    company: any; title: any; img: any; setOpenModalId: Function
}) {
    return (
        <div className="flex flex-col justify-between h-full border-transparent border-solid border-2 rounded-2xl py-2 z-0 bg-gray-600 bg-opacity-20 hover:scale-105 transition-all duration-300">
            <div className='flex lg:flex-col justify-center lg:justify-between items-center h-full'>
                <div className='w-[70%] flex flex-col'>
                    <h1 className="text-[1.5vh] lg:text-[2vh] font-normal text-center py-2">
                        {props.title}
                    </h1>
                    <h2 className="text-center text-gray-400 text-[2.2vw] lg:text-[1.3vh] px-4">
                        {props.company}
                    </h2>
                </div>
                <img src={props.img} alt="" className="flex-shrink-0 aspect-square w-20 lg:w-24 h-auto lg:h-auto p-1 lg:m-4 object-contain rounded-3xl overflow-hidden bg-white" />
            </div>
            <div className="mt-auto pt-4 flex justify-center">
                <button
                    onClick={() => props.setOpenModalId(props.title)}
                    className="flex lg:text-[2vh] bg-slate-600 w-[32vw] md:w-[12vw] justify-center py-2 rounded-2xl text-gray-200 hover:text-gray-50 transition-all duration-300 hover:bg-slate-800 hover:scale-105"
                >
                    More Info
                </button>
            </div>
        </div>
    )
}

function ModalWrapper({ content, onClose }: { content: ModalContent, onClose: () => void }) {
    const [isClosing, setIsClosing] = useState(false);

    const handleClose = () => {
        setIsClosing(true);
        setTimeout(() => {
            onClose();
        }, 300);
    };

    return (
        <>
            <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto outline-none focus:outline-none">
                <div className={`relative w-[95%] md:w-auto max-w-3xl mx-auto my-6 ${isClosing ? 'animate-[modalFadeOut_0.3s_ease-out]' : 'animate-[modalFadeIn_0.3s_ease-out]'}`}>
                    <div className={`relative flex flex-col w-full bg-gray-700 border-0 rounded-lg shadow-lg outline-none focus:outline-none ${isClosing ? 'animate-[modalSlideOut_0.3s_ease-out]' : 'animate-[modalSlideIn_0.3s_ease-out]'}`}>
                        {/* Modal Header - Made sticky */}
                        <div className="sticky top-0 z-50 flex items-start justify-between p-5 border-b border-solid rounded-t border-blueGray-200 bg-gray-700">
                            <div className='flex flex-col pr-8'> {/* Added right padding to prevent text overlap with close button */}
                                <h3 className="text-xl md:text-3xl font-semibold break-words">{content.title}</h3>
                                <p className="text-sm md:text-base">
                                    {
                                        content.end === "none" ?
                                            <span className='text-gray-300'>{content.start}</span> :
                                            <span className='text-gray-300'>{content.start} <span className='text-white'>-</span> {content.end}</span>
                                    }
                                </p>
                                {content.link && (
                                    <a href={content.link
                                    } target="_blank" rel="noreferrer" className="text-xs md:text-sm text-blue-500 underline">
                                        {content.link}
                                    </a>
                                )}
                            </div>

                            <button
                                className="absolute right-2 top-2 p-1 ml-auto text-3xl font-semibold leading-none text-white bg-transparent border-0 outline-none opacity-100 focus:outline-none"
                                onClick={handleClose}
                            >
                                <svg className="w-8 h-8 hover:bg-gray-500 p-2 rounded-lg" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                </svg>
                            </button>
                        </div>

                        {/* Modal Body */}
                        <div className="relative flex-auto px-4 md:px-20 py-10">
                            {content.description.map((desc, index) => (
                                <li key={index} className="my-2 text-base md:text-lg leading-relaxed text-blueGray-500">
                                    {desc}
                                </li>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div
                className={`fixed inset-0 z-40 bg-black ${isClosing ? 'animate-[backdropFadeOut_0.3s_ease-out]' : 'animate-[backdropFadeIn_0.3s_ease-out]'} opacity-60`}
                onClick={handleClose}
            ></div>
        </>
    );
}

type ModalContent = {
    id: string;
    title: string;
    place: string;
    description: string[];
    image: string;
    link?: string;
    start: string;
    end: string;
};

export default function Work() {

    const [openModalId, setOpenModalId] = useState<string | null>(null);

    const experienceContents: ModalContent[] = [
        {
            id: "Website Developer",
            title: "Website Developer at PT Toffee International (ToffeeDev)",
            place: "PT Toffee International (ToffeeDev)",
            description: [
                "Engineered a 30+ page dashboard for 7 company divisions to improve data access",
                "Managed and resolved technical issues for 20+ client websites, ensuring high performance",
                "Executed technical SEO strategies to improve client search engine rankings",
                "Developed and launched new website features, enhancing functionality and user engagement"
            ],
            image: Toffee,
            start: "February 2025",
            end: "Present"
        },
        {
            id: "Private Teacher",
            title: "Private Teacher",
            place: "Freelance",
            description: [
                "Conducted 50+ one-on-one instructional sessions on fundamental Python syntax and Scratch.",
                "Covered 100+ coding problems and exercises across both Python and Scratch to build student programming proficiency.",
                "Developed customized lesson plans to match student curriculum."
            ],
            image: Teacher,
            start: "April 2023",
            end: "Present"
        },
        {
            id: "Full-stack Developer",
            title: "Full-stack Developer at Gakko Eduplatform",
            place: "Gakko Eduplatform",
            description: [
                "Oversaw the technical strategy and implementation of a web platform connecting students with qualified tutors.",
                "On boarded over 50 tutors to the platform, providing support to ensure high-quality instruction for students.",
                "Developed the back-end API services using Python and the Django framework.",
                "Built the front-end web application using React.js, implementing a modern, responsive UI and seamless user experiences."
            ],
            image: Gakko,
            start: "August 2023",
            end: "July 2025"
        },
        {
            id: "OJS Maintainer",
            title: "OJS Maintainer at Chemistry Department, UNJ",
            place: "Chemistry Department, UNJ",
            description: [
                "Redesigned and maintained OJS platform interface, improving overall system performance and user experience.",
                "Implemented security enhancements and regular maintenance to ensure platform stability and data protection.",
                "Managed domain configuration and technical support, maintaining consistent website accessibility."
            ],
            image: OJS,
            start: "October 2024",
            end: "Desember 2024"
        },
        {
            id: "Academic Assistant",
            title: "Academic Assistant at Department of Computer Science, UNJ",
            place: "Department of Computer Science, UNJ",
            description: [
                "Delivered 10 targeted learning sessions for 20+ freshman students in D language and algorithmic fundamentals.",
                "Created training materials to improve students' programming and problem-solving skills.",
                "Provided personalized support to students in a collaborative learning environment."
            ],
            image: UNJ,
            start: "October 2024",
            end: "Desember 2024"
        },
        {
            id: "Backend Developer",
            title: "Backend Developer at Angkit Agro Technology",
            place: "Angkit Agro Technology",
            description: [
                "Designed and implemented a barcode generation and scanning system for livestock monitoring and tracking.",
                "Developed and maintained 10+ RESTful APIs using Flask (Python).",
                "Implemented data encryption protocols and security measures for sensitive livestock data.",
                "Configured and optimized cloud infrastructure and Nginx servers for Flask deployment, achieving 99.9% uptime."
            ],
            image: Angkit,
            start: "October 2023",
            end: "February 2024"
        },
    ];

    const projectContents: ModalContent[] = [
        {
            id: "NASA Space Apps Challenge 2024",
            title: "NASA Space Apps Challenge 2024 - Beyond Us",
            place: "Beyond Us",
            description: [
                "Awarded \"Best Space Project\" for the NASA Space Apps Challenge in 2024.",
                "Developed a web app with 3D interactive exoplanet display and immersive walk-on simulator using Vite, JS, Three.js, HTML, and CSS.",
                "Collaborated effectively with a multidisciplinary team on full software development lifecycle.",
                "Demonstrated strong problem-solving and adaptability in a fast-paced, innovative environment."
            ],
            image: Nasa,
            link: "https://beyond-us.pages.dev/",
            start: "October 2024",
            end: "none"
        },
        {
            id: "Minecraft Server",
            title: "Minecraft Server Deployment and Maintainer",
            place: "Indonesia",
            description: [
                "Established and maintained a Minecraft server infrastructure, ensuring 99.9% uptime for over 700 active players.",
                "Developed and implemented 15+ custom features and plugins to enhance the user experience, including an interactive in-game economy, player ranking system, and automated moderation tools.",
                "Configured and managed the server's proxy and VPS hosting environment.",
                "Optimizing performance and security for better user experience.",
                "Creating a fully automatic web-based top up for in game currency."
            ],
            image: Ampas,
            start: "VPS, Proxy and Top-up System",
            end: "none"
        },
        {
            id: "NedMed",
            title: "NedMed - Full-Stack Media Uploader",
            place: "Personal Project",
            description: [
                "Developed a full-stack media uploader using Go, Svelte, and PostgreSQL.",
                "Built a Go backend API to manage file uploads and a responsive Svelte frontend for user interaction.",
                "Containerized the application with Docker for simplified, one-command deployment.",
                "Implemented secure file handling and database management for efficient media storage."
            ],
            image: Nedmed, // You'll need to import and add the appropriate image
            link: "https://github.com/JunederZ/NedMed",
            start: "January 2025",
            end: "none"
        }
    ];

    return (
        <>
            <section className='m-12 flex flex-col justify-center items-center z-10'>
                <div className="flex items-center justify-center z-0 m-6">
                    <h1 className="flex font-semibold text-[8vw] md:text-[8vh] text-white w-fit">Experiences</h1>
                </div>
                <section className="grid lg:grid-cols-4 w-[70vw] h-full text-white gap-16">

                    {experienceContents.map((content) => (
                        <React.Fragment key={content.id}>
                            <BoxWrapper
                                title={content.id}
                                company={content.place}
                                img={content.image}
                                setOpenModalId={setOpenModalId}
                            />

                            {openModalId === content.id && (
                                <ModalWrapper
                                    content={content}
                                    onClose={() => setOpenModalId(null)}
                                />
                            )}
                        </React.Fragment>
                    ))}

                </section>
                <div className="flex items-center justify-center z-0 m-6">
                    <h1 className="flex font-semibold text-[8vw] md:text-[8vh] text-white w-fit">Projects</h1>
                </div>
                <section className="grid lg:grid-cols-4 w-[70vw] h-full text-white gap-16">

                    {projectContents.map((content) => (
                        <React.Fragment key={content.id}>
                            <BoxWrapper
                                title={content.id}
                                company={content.place}
                                img={content.image}
                                setOpenModalId={setOpenModalId}
                            />

                            {openModalId === content.id && (
                                <ModalWrapper
                                    content={content}
                                    onClose={() => setOpenModalId(null)}
                                />
                            )}
                        </React.Fragment>
                    ))}
                </section>
            </section>
        </>
    )

}
