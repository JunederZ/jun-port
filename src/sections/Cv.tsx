import { useEffect, useState } from "react";
import Resume from "../assets/resume.pdf";

export default function CV() {
    const [showPdf, setShowPdf] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        if (showPdf) {
            // Trigger animation after component is mounted
            requestAnimationFrame(() => {
                setIsAnimating(true);
            });
        }
    }, [showPdf]);

    function handleCV() {
        if (showPdf) {
            setIsAnimating(false);
            setTimeout(() => setShowPdf(false), 500);
            return;
        }
        setShowPdf(true);
    }

    return (
        <>
            <div className='flex flex-col h-screen mt-8 justify-center items-center w-screen gap-8'>
                <div className="flex items-center justify-center">
                    <h1 className="flex font-semibold text-[8dvw] md:text-[8vh] text-gray-200 w-fit">
                        Curriculum Vitae
                    </h1>
                </div>
                <button 
                    className="transition-all duration-500 h-[6vh] w-[20vh] bg-blue-900 hover:bg-blue-600 hover:scale-105 flex justify-center items-center rounded-2xl z-10" 
                    onClick={handleCV}
                >
                    <p className="flex justify-center items-center text-3xl font-bold text-white opacity-70 hover:opacity-100 w-full h-full">
                        {showPdf ? 'CLOSE' : 'OPEN'}
                    </p>
                </button>
                {showPdf && (
                    <div 
                        className={`transition-all duration-500 ease-linear overflow-hidden
                            ${isAnimating ? 'h-full opacity-100' : 'h-0 opacity-0'}`}
                    >
                        <object 
                            data={Resume} 
                            type="application/pdf" 
                            className="w-[90dvw] lg:w-[50dvw] h-[70vh]"
                        />
                    </div>
                )}
            </div>
        </>
    );
}