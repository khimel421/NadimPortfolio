import SkillCard from "../sharedComponent/SkillCard";
import img1 from "/3.png";
import img2 from "/correction.png";
import img3 from "/sound.png";

const SkillSet = () => {
  const skills = [
    {
      img:img1,
      title: "Editing",
      quote: "Where raw footage transforms into compelling stories.",
      desc: `I specialize in precise, dynamic editing that enhances narrative flow and emotional impact. Whether it's a cinematic short film, a corporate promo, or a social media reel, I craft seamless cuts, maintain pacing, and emphasize the story's essence.
  
  My toolkit includes:
  - Adobe Premiere Pro & CapCut for frame-perfect sequencing
  - Creative transitions and rhythmic montages to match tone and tempo
  - VFX integration (compositing, motion graphics) with Adobe After Effects
  - Collaborative revisions to align with your vision
  
  "From assembly to final cut—every frame serves the story."`
    },
    {
      img:img2,
      title: "Color Correction & Grading",
      quote: "Painting emotions, one hue at a time.",
      desc: `I elevate visuals through professional color workflows, ensuring consistency and mood. My process:
  
  - Color Correction: Fixing exposure, white balance, and skin tones
  - Color Grading: Stylizing with cinematic LUTs (moody/vintage/vibrant)
  - HDR & LOG footage expertise for dynamic range
  - Scene-by-scene balancing for visual continuity
  
  "Color isn't just technical—it's the soul of your visuals."`
    },
    {
      img:img3,
      title: "Sound Design",
      quote: "Half the picture is what you hear.",
      desc: `Immerse your audience with rich, layered audio that complements the visuals:
  
  - Dialogue cleanup (noise reduction, clarity enhancement)
  - Custom soundscapes (ambient textures, Foley, SFX)
  - Music synchronization for emotional beats
  - Dynamic mixing for theaters/web/broadcast
  
  "Great editing is felt. Great sound design is heard."`
    }
  ];
  return (
    <section className="font-mont bg-black text-white pt-[120px] px-4 md:px-0">
      <div className="container flex flex-col gap-20">
        <h1 className="text-6xl text-center font-bold">I can help you with</h1>
        <div className="flex flex-col md:flex-row gap-10">
          {skills.map((skill, idx) => {
            return <SkillCard key={idx} img={skill.img} title={skill.title} description={skill.desc}></SkillCard>
          })}


          {/* <SkillCard img={img1} title={"Editing"} ></SkillCard>
          <SkillCard img={img2} title={"Color correction & Grading"}></SkillCard>
          <SkillCard img={img3} title={"Sound design"}></SkillCard> */}
        </div>
      </div>
    </section>
  );
};

export default SkillSet;
