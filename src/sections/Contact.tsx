import { useState } from 'react';
import Github from '../assets/skills/github-circle.svg'
import Instagram from '../assets/skills/instagram.svg'
import LinkedIn from '../assets/skills/linkedin.svg'
import Mail from '../assets/skills/mail.svg'


function ContactContent(props: { skill: string; img?: any, link?: string }) {
    return (
        <div className="group relative flex flex-col items-center" onClick={() => window.open(props.link, '_blank')}>
            <div className="opacity-0 group-hover:opacity-100 absolute -top-8 transform text-center transition-all duration-300 px-2 py-1 rounded text-sm">
                {props.skill}
            </div>
            <div className="flex flex-col items-center p-4 rounded-full transition duration-300 transform hover:translate-y-2">
                <img src={props.img} alt={props.skill} className="w-16 h-16 rounded-full" />
            </div>
        </div>
    );
}

export default function Contact() {
    const [showCopied, setShowCopied] = useState(false);
    const email = 'arjunadimas000@gmail.com';

    const copyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText(email);
            setShowCopied(true);
            setTimeout(() => setShowCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy text: ', err);
        }
    };
    
    return (
        <>
            <div className='flex flex-col gap-8 justify-center items-center w-screen h-fit text-white'>
                <h1 className='flex font-semibold text-[8dvw] md:text-[8vh] text-white w-fit'>Get in Touch</h1>
                <div className='flex flex-col justify-center items-center gap-8'>
                    <button 
                        onClick={copyToClipboard}
                        className="group relative flex justify-center items-center gap-4 bg-gray-800/50 hover:bg-gray-700/50 p-4 rounded-lg transition-all duration-300 hover:scale-105 border border-gray-700 hover:border-gray-500"
                    >
                        <img src={Mail} alt="Mail" className="w-10 h-10 transition-transform duration-300 group-hover:scale-110" />
                        <div className="relative">
                            <h2 className="group-hover:text-blue-400 transition-colors">
                                {email}
                            </h2>
                        </div>
                        {showCopied && (
                            <div className={`${showCopied ? "animate-[emailCopiedFade_2s_ease-in-out]" : ""} absolute inset-0 flex items-center justify-center bg-black/50 rounded-lg transition-all`}>
                                <span className="bg-green-500 text-white px-3 py-1 rounded text-sm">
                                    Copied!
                                </span>
                            </div>
                        )}
                        <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    </button>
                    <ul className="flex flex-wrap gap-4 justify-center items-center">
                        {[
                            { skill: 'Github', img: Github, link: "https://github.com/JunederZ" },
                            { skill: 'Instagram', img: Instagram, link: "https://www.instagram.com/arjunedimas/" },
                            { skill: 'LinkedIn', img: LinkedIn, link: "https://www.linkedin.com/in/arjunadimas/" },
                        ].map((skill, index) => (
                            <li key={index}>
                                <ContactContent skill={skill.skill} img={skill.img} link={skill.link} />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}