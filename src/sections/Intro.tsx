import meBW from "../assets/me-bw.jpg"
import { TypeAnimation } from "react-type-animation";

function typing() {
    return (
        <TypeAnimation
            sequence={[
                'Back-end Developer',
                1000,
                'Front-end Developer',
                1000,
                'Full-stack Developer',
                1000,
            ]}
            speed={50}
            style={{ color: "0b2663" }}
            repeat={Infinity}
        />
    )
}

function App() {

    return (
        <>
            <div className="invisible md:visible absolute -left-6 -z-0 overflow-x-hidden">
                <div>
                    <img src={meBW} alt="" className="h-screen w-auto z-0 filter brightness-[100%] pl-32" />
                    <div className="absolute inset-0 opacity-100 bg-gradient-to-b from-transparent via-transparent to-black to-100% pointer-events-none" />
                    <div className="absolute inset-0 opacity-100 bg-gradient-to-l from-transparent via-transparent to-black to-70% pointer-events-none" />
                    <div className="absolute inset-0 opacity-100 bg-gradient-to-r from-transparent via-transparent to-black to-90% pointer-events-none" />
                </div>
            </div>
            <div className="absolute left-0 w-screen h-screen bg-transparent -z-30"></div>

            <div className="absolute left-0 w-screen h-screen -z-10 overflow-hidden bg-black"></div>

            <div className="flex z-0 justify-center lg:justify-end items-center h-screen lg:pr-0 text-left gap-8">
                <div className="z-10 flex flex-col justify-center items-start w-full px-10 md:w-1/2 text-white text-[2.6vh] md:text-5xl font-bold">
                    <h1>Hi, Ned here.</h1>
                    <h1>I'm a <span className="text-blue-600">{typing()}</span></h1>
                </div>
            </div>
        </>
    );
}

export default App;