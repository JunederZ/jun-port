
export default function AboutMe() {
    return (
        <>
            <div className="absolute inset-0 opacity-100 bg-gradient-to-t from-transparent via-transparent via-60% to-black to-100% pointer-events-none" />
                <div className="relative flex flex-col items-center justify-center h-screen w-screen">
                    <div className="flex items-center justify-center">
                        <h1 className="flex font-bold text-[8dvw] md:text-[8dvh] text-gray-200 w-fit">About Me</h1>
                    </div>
                    <div className="text-gray-200 flex items-center justify-center w-[60vw] text-center pt-8 md:text-[2dvw] text-[5dvw]">
                        <p>
                        I'm a Computer Science student at State University of Jakarta who loves to code. I thrive on challenging projects and am always looking for opportunities to learn and grow.
                        </p>
                    </div>
                </div>
        </>
    );
}