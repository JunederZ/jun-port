import React, { useState } from 'react';
import Angkit from "../assets/angkit.png"
import Teacher from "../assets/teacher1.png"
import Gakko from "../assets/gakko.jpeg"
import UNJ from "../assets/unj.png"

function WorkBox(props: {
    company: any; title: any; img: any; setOpenModalId: Function 
}) {
    return (
        <div className="flex flex-col justify-center items-center border-transparent border-solid border-2 rounded-2xl p-4 z-[1] bg-gray-600 bg-opacity-20 hover:scale-105 transition-all duration-300 ">
            <div className='flex lg:flex-col justify-center items-center'>
                <div className=''>
                    <h1 className="text-[2dvh] lg:text-[3dvh] font-normal text-center p-4">
                        {props.title}
                    </h1>
                    <h2 className="text-center text-gray-400 text-[1.4dvh] lg:text-[1.8dvh]">
                        {props.company}
                    </h2>
                </div>
                <img src={props.img} alt="" className="flex-shrink-0 aspect-square w-24 lg:w-32 h-auto lg:h-auto p-1 lg:m-8 object-contain rounded-3xl overflow-hidden bg-white" />
            </div>
            <button 
                    onClick={() => props.setOpenModalId(props.title)}
                    className="flex lg:text-[2dvh] bg-slate-600 w-[32dvw] md:w-[12dvw] justify-center mt-4 lg:mt-0 py-2 rounded-2xl text-gray-200 hover:text-gray-50 transition-all duration-300 hover:bg-slate-800 hover:scale-105"
                >
                    More Info
            </button>
        </div>
    )
}

function WorkModal({ content, onClose }: { content: ModalContent, onClose: () => void }) {
    const [isClosing, setIsClosing] = useState(false);

    const handleClose = () => {
        setIsClosing(true);
        setTimeout(() => {
            onClose();
        }, 300);
    };

    return (
        <>
            <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto outline-none focus:outline-none pointer-events-none">
                <div className={`relative w-[95%] md:w-auto max-w-3xl mx-auto my-6 ${isClosing ? 'animate-[modalFadeOut_0.3s_ease-out]' : 'animate-[modalFadeIn_0.3s_ease-out]'}`}>
                    <div className={`relative flex flex-col w-full bg-gray-700 border-0 rounded-lg shadow-lg outline-none focus:outline-none ${isClosing ? 'animate-[modalSlideOut_0.3s_ease-out]' : 'animate-[modalSlideIn_0.3s_ease-out]'}`}>
                        {/* Modal Header - Made sticky */}
                        <div className="sticky top-0 z-50 flex items-start justify-between p-5 border-b border-solid rounded-t border-blueGray-200 bg-gray-700">
                            <div className='flex flex-col pr-8'> {/* Added right padding to prevent text overlap with close button */}
                                <h3 className="text-xl md:text-3xl font-semibold break-words">{content.title}</h3>
                                <p className="text-sm md:text-base">
                                    <span className='text-gray-300'>{content.start}</span> - <span className='text-gray-300'>{content.end}</span>
                                </p>
                            </div>
                            
                            <button
                                className="absolute right-2 top-2 p-1 ml-auto text-3xl font-semibold leading-none text-white bg-transparent border-0 outline-none opacity-100 focus:outline-none"
                                onClick={handleClose}
                            >
                                <svg className="w-8 h-8 hover:bg-gray-500 p-2 rounded-lg" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
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
    description: string[];
    image: string;
    start: string;
    end: string;
};

export default function Work() {

    const [openModalId, setOpenModalId] = useState<string | null>(null);

    const modalContents: ModalContent[] = [
        {
            id: "Backend Developer",
            title: "Backend Developer at Angkit Agro Technology",
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
        {
            id: "Private Teacher",
            title: "Private Teacher",
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
            description: [
                "Oversaw the technical strategy and implementation of a web platform connecting students with qualified tutors.",
                "On boarded over 50 tutors to the platform, providing support to ensure high-quality instruction for students.",
                "Developed the back-end API services using Go programming language and PostgreSQL database.",
                "Built the front-end web application using React.js, implementing a modern, responsive UI and seamless user experiences."
            ],
            image: Gakko,
            start: "August 2023",
            end: "Present"
        },
        {
            id: "Academic Assistant",
            title: "Academic Assistant at Department of Computer Science, UNJ",
            description: [
                "Delivered 10 targeted learning sessions for 20+ freshman students in D language and algorithmic fundamentals.",
                "Created training materials to improve students' programming and problem-solving skills.",
                "Provided personalized support to students in a collaborative learning environment."
            ],
            image: UNJ,
            start: "October 2024",
            end: "Present"
        }
    ];


    return (
        <>
            <section className='m-12 flex flex-col justify-center items-center'>
                <div className="flex items-center justify-center z-10 m-6">
                    <h1 className="flex font-semibold text-[8dvw] md:text-[8dvh] text-white w-fit">Experiences</h1>
                </div>
                <section className="grid md:grid-cols-3 w-[70dvw] h-full text-white gap-16 z-10">
    
                    {modalContents.map((content) => (
                        <React.Fragment key={content.id}>
                            <WorkBox 
                                title={content.id} 
                                company={content.title.split(' at ')[1] || ''} 
                                img={content.image} 
                                setOpenModalId={setOpenModalId}
                            />
                            
                            {openModalId === content.id && (
                                <WorkModal 
                                    content={content} 
                                    onClose={() => setOpenModalId(null)} 
                                />
                            )}
                        </React.Fragment>
                    ))}
    
                </section>
                <img src="https://stopify.co/profile.php?id=K8OVLY" alt="" className='invisible absolute' />
            </section>
        </>
    )

}