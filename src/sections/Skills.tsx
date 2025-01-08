import Python from '../assets/skills/python-original.svg'
import Cpp from '../assets/skills/cplusplus-original.svg'
import Java from '../assets/skills/java-original.svg'
import JavaScript from '../assets/skills/javascript-original.svg'
import Go from '../assets/skills/go-original-wordmark.svg'
import Vala from '../assets/skills/vala-original.svg'
import Kotlin from '../assets/skills/kotlin-original.svg'
import TypeScript from '../assets/skills/typescript-original.svg'
import HTML from '../assets/skills/html5-original.svg'
import CSS from '../assets/skills/css3-original.svg'
import React from '../assets/skills/react-original.svg'
import Flask from '../assets/skills/flask-original.svg'
import Flutter from '../assets/skills/flutter-original.svg'
import Jetpack from '../assets/skills/jetpackcompose-original.svg'
import PostgreSQL from '../assets/skills/postgresql-original.svg'
import MySQL from '../assets/skills/mysql-original.svg'
import MongoDB from '../assets/skills/mongodb-original.svg'
import MariaDB from '../assets/skills/mariadb-original.svg'
import Git from '../assets/skills/git-original.svg'
import Nginx from '../assets/skills/nginx-original.svg'




function SkillBubble(props: { skill: string; img?: any}) {
    return (
        <div className="group relative flex flex-col items-center">
            <div className="opacity-0 group-hover:opacity-100 absolute -top-8 transform text-center transition-all duration-300 bg-gray-900 px-2 py-1 rounded text-sm">
                {props.skill}
            </div>
            <div className="flex flex-col items-center p-4 bg-gray-800 rounded-full hover:bg-gray-700 transition duration-300 transform hover:translate-y-2">
                <img src={props.img} alt={props.skill} className="w-16 h-16 rounded-full" />
            </div>
        </div>
    );
}

export default function Skills() {

    return (
        <>
            <section className="flex flex-col gap-8 justify-center items-center w-screen h-fit text-white">
                <div className="flex font-semibold text-[8dvw] md:text-[8vh] text-white w-fit">
                    <h1>Skills</h1>
                </div>
                <div className='flex flex-col justify-center items-center gap-8'>
                    <h2 className='text-[2vh] lg:text-[3vh] font-normal text-center p-4'>Programming Languages & Frameworks</h2>
                    <ul className="flex flex-wrap gap-4 justify-center items-center">
                        {[
                            { skill: 'Python', img: Python },
                            { skill: 'C++', img: Cpp },
                            { skill: 'Java', img: Java },
                            { skill: 'JavaScript', img: JavaScript },
                            { skill: 'Go', img: Go },
                            { skill: 'Vala', img: Vala },
                            { skill: 'Kotlin', img: Kotlin },
                            { skill: 'TypeScript', img: TypeScript },
                            { skill: 'HTML', img: HTML },
                            { skill: 'CSS', img: CSS },
                            { skill: 'React', img: React },
                            { skill: 'Flask', img: Flask },
                            { skill: 'Flutter', img: Flutter },
                            { skill: 'Jetpack', img: Jetpack },
                        ].map((skill, index) => (
                            <li key={index}>
                                <SkillBubble skill={skill.skill} img={skill.img} />
                            </li>
                        ))}
                    </ul>
                </div>
                <div className='flex flex-col justify-center items-center gap-8'>
                    <h2 className='text-[2vh] lg:text-[3vh] font-normal text-center p-4'>Databases</h2>
                    <ul className="flex flex-wrap gap-4 justify-center items-center">
                        {[
                            { skill: 'PostgreSQL', img: PostgreSQL },
                            { skill: 'MySQL', img: MySQL },
                            { skill: 'MongoDB', img: MongoDB },
                            { skill: 'MariaDB', img: MariaDB },
                        ].map((skill, index) => (
                            <li key={index}>
                                <SkillBubble skill={skill.skill} img={skill.img} />
                            </li>
                        ))}
                    </ul>
                </div>
                <div className='flex flex-col justify-center items-center gap-8'>
                    <h2 className='text-[2vh] lg:text-[3vh] font-normal text-center p-4'>Tools</h2>
                    <ul className="flex flex-wrap gap-4 justify-center items-center">
                        {[
                            { skill: 'Git', img: Git },
                            { skill: 'Nginx', img: Nginx },
                        ].map((skill, index) => (
                            <li key={index}>
                                <SkillBubble skill={skill.skill} img={skill.img} />
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
        </>
    )

} 