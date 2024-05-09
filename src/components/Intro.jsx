// import Button from "../sharedComponent/Button";

const Intro = () => {
  return (
    <section className="bg-black text-white font-mont  px-4 py-20">
      <div className="container flex flex-col items-center md:flex-row gap-16">
        {/* Intro title */}
        <div className=" flex-grow md:w-[50%] relative">
          <h1 className="absolute top-14 left-4 md:top-[180px] text-white text-4xl md:text-6xl font-bold max-w-[600px]">I’m Nadim, a professional video editor & film maker</h1>
          <div className="w-[300px] md:w-[600px] md:h-[500px]">
            <svg
              viewBox="0 0 500 500"
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              id="blobSvg"
            >
              <path id="blob" fill="#FF0066">
                <animate
                  attributeName="d"
                  dur={"10000ms"}
                  repeatCount={"indefinite"}
                  values="M441,339.5Q393,429,295.5,452.5Q198,476,151,398Q104,320,108.5,252Q113,184,164.5,142Q216,100,288,106Q360,112,424.5,181Q489,250,441,339.5Z;
                
                M409,328.5Q375,407,292.5,415Q210,423,157,372Q104,321,92,244.5Q80,168,145,120.5Q210,73,277,102.5Q344,132,393.5,191Q443,250,409,328.5Z;

                M385,316.5Q356,383,284,399.5Q212,416,119.5,387Q27,358,52,262.5Q77,167,146.5,134Q216,101,281,115.5Q346,130,380,190Q414,250,385,316.5Z;

                M399,312.5Q349,375,275,419Q201,463,130,402.5Q59,342,55.5,248Q52,154,133.5,126.5Q215,99,299,91.5Q383,84,416,167Q449,250,399,312.5Z;

                M441,339.5Q393,429,295.5,452.5Q198,476,151,398Q104,320,108.5,252Q113,184,164.5,142Q216,100,288,106Q360,112,424.5,181Q489,250,441,339.5Z;
                "
                ></animate>
              </path>
            </svg>
          </div>
        </div>
        <div className="flex-grow md:w-[50%]">
          <p className="text-lg">
            Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa
            mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
            fringilla, mattis ligula consectetur, ultrices mauris. Maecenas
            vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor
            ornare leo, non suscipit magna interdum eu.
          </p>
          {/* <div className="mt-10">
            <Button name={"Read more"}></Button>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Intro;
