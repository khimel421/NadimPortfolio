import SkillCard from "../sharedComponent/SkillCard";
import img1 from "/3.png";
import img2 from "/correction.png";
import img3 from "/sound.png";

const SkillSet = () => {
  return (
    <section className="font-mont bg-black text-white pt-[120px] px-4 md:px-0">
      <div className="container flex flex-col gap-20">
        <h1 className="text-6xl text-center font-bold">I can help you with</h1>
        <div className="flex flex-col md:flex-row gap-10">
          <SkillCard img={img1} title={"Editing"}></SkillCard>
          <SkillCard img={img2} title={"Color correction & Grading"}></SkillCard>
          <SkillCard img={img3} title={"Sound design"}></SkillCard>
        </div>
      </div>
    </section>
  );
};

export default SkillSet;
