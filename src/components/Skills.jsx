import { IoIosStar } from "react-icons/io";

const Skills = () => {
  return (
    <section className="bg-black text-white font-mont p-4 md:p-0">
      <div className="container flex flex-col md:flex-row">
        <div className=" flex flex-col md:flex-row gap-10 pt-10">
          <article className="card-style">
            <h1 className="text-xl font-bold flex items-center gap-2"> <IoIosStar className="text-[#FF0066] " /> EFFECIENT</h1>
            <p>
            From concept to completion, I sculpt videos with precision and speed. Experience seamless workflow and dazzling results, all within your deadline. Let's elevate your project with efficiency as our guiding star.
            </p>
          </article>
          <article className=" card-style">

            <h1 className="text-xl font-bold flex items-center gap-2"> <IoIosStar className="text-[#FF0066] " /> PROFESSIONAL</h1>
            <p>
            Seasoned with a year of hands-on experience, I bring expertise and finesse to every frame. Trust in my practiced eye and refined skills to elevate your vision to new heights. Let's craft captivating stories together, backed by a year of proven excellence.
            </p>
          </article>
          <article className="card-style">
            <h1 className="text-xl font-bold flex items-center gap-2"> <IoIosStar className="text-[#FF0066] " />EXPERIENCED</h1>
            <p>
            With a blend of expertise and dedication, I craft visual narratives that captivate audiences. Let's collaborate to transform your vision into a polished masterpiece that resonates with professionalism and creativity.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Skills;
