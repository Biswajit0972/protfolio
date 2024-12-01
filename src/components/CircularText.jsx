const CircularText = () => {
    const textArray = ["Full Stack developer . MERN Stack Developer"]
    return (
        <div className="relative flex items-center justify-center h-full w-full mx-auto">
            {/* Circle Container */}
            <div className="absolute inset-0 rounded-full border border-gray-400"></div>
            <div className="absolute w-full h-full grid place-content-center bg-red">
                {
                    textArray.map((text, i) => (<span key={i} style={{
                        transform: `rotate(${i * 360}deg)`,
                        transformOrigin: "0 8rem",
                    }}>{}</span>))
                }
            </div>
        </div>
    );
};

export default CircularText;
