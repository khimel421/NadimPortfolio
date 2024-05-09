// import Button from "../sharedComponent/Button";

const Intro = () => {
  return (
    <section className="bg-black text-white font-mont  px-4 py-20">
      <div className="container flex flex-col items-center md:flex-row gap-16">
        {/* Intro title */}
        <div className=" flex-grow md:w-[50%] ">
          {/* <div className="relative">
            <div className="blob">
              <img src="https://images.unsplash.com/photo-1583524505974-6facd53f4597?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" />

              <div className="svg-wrap">
                <svg
                  width="1865"
                  height="1865"
                  viewBox="0 0 1865 1865"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M932.46 0C417.47 0 0 417.47 0 932.46C0 1447.45 417.47 1864.92 932.46 1864.92C1447.45 1864.92 1864.92 1447.45 1864.92 932.46C1864.92 417.47 1447.44 0 932.46 0ZM1196.7 1028.36C1182.03 1084.17 1140.69 1137.91 1087.39 1157.76C1034.09 1177.61 968.84 1163.55 892.69 1144.25C817.09 1125.18 730.2 1101.02 688.08 1040.63C645.73 980.8 647.78 884.91 687.68 815.14C727.58 745.37 805.11 702.28 883.84 675.78C962.81 648.72 1043.15 638.63 1093.91 671.5C1144.51 703.98 1165.68 779.81 1182.35 846.86C1199.02 913.91 1211.21 972.16 1196.7 1028.36Z" />
                </svg>
              </div>
            </div>

            <p className="text-4xl md:text-6xl font-semibold z-10 md:absolute  top-0 md:top-44">
              I'm Nadim, a professional video editor & film maker
            </p>
          </div> */}
          <div className="blob">
              <img src="https://images.unsplash.com/photo-1583524505974-6facd53f4597?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" />

              <div className="svg-wrap">
                <svg
                  width="1865"
                  height="1865"
                  viewBox="0 0 1865 1865"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M932.46 0C417.47 0 0 417.47 0 932.46C0 1447.45 417.47 1864.92 932.46 1864.92C1447.45 1864.92 1864.92 1447.45 1864.92 932.46C1864.92 417.47 1447.44 0 932.46 0ZM1196.7 1028.36C1182.03 1084.17 1140.69 1137.91 1087.39 1157.76C1034.09 1177.61 968.84 1163.55 892.69 1144.25C817.09 1125.18 730.2 1101.02 688.08 1040.63C645.73 980.8 647.78 884.91 687.68 815.14C727.58 745.37 805.11 702.28 883.84 675.78C962.81 648.72 1043.15 638.63 1093.91 671.5C1144.51 703.98 1165.68 779.81 1182.35 846.86C1199.02 913.91 1211.21 972.16 1196.7 1028.36Z" />
                </svg>
              </div>
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
