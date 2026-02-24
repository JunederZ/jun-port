
export default function AboutMe() {
    return (
        <>
            <div className="absolute inset-0 opacity-100 bg-gradient-to-t from-transparent via-transparent via-60% to-black to-100% pointer-events-none z-0" />
            <div className="relative flex flex-col items-center justify-center h-screen w-screen">
                <div className="flex items-center justify-center">
                    <h1 className="flex font-bold text-[8vw] md:text-[8vh] text-gray-200 w-fit">About Me</h1>
                </div>
                <div className="text-gray-200 flex items-center justify-center w-[60vw] text-center pt-8 md:text-[2vw] text-[5vw]">
                    <p>
                    Hello! I'm Arjuna, but you can call me Ned. I am a passionate Full-Stack Software Engineer who thrives on challenging projects. I am constantly seeking opportunities to learn new technologies and grow as a developer.
                    </p>
                </div>
            </div>
        </>
    );
}
