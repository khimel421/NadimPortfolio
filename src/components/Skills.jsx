const Skills = () => {
  return (
    <section className="bg-black text-white font-mont p-4 md:p-0">
      <div className="container flex flex-col md:flex-row">
        <div className="md:w-[50%] ">
          <img className=" md:w-[70%] h-[500px] rounded-lg object-cover" src="nadim.jpg"></img>
        </div>
        <div className="md:w-[50%] flex flex-col gap-10 pt-10">
          <article className=" space-y-4">
            <h1 className="text-xl font-bold">EFFECIENT</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa
              mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
              fringilla, mattis ligula consectetur
            </p>
          </article>
          <article className=" space-y-4">
            <h1 className="text-xl font-bold">PROFESSIONAL</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa
              mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
              fringilla, mattis ligula consectetur
            </p>
          </article>
          <article className=" space-y-4">
            <h1 className="text-xl font-bold">EXPERIENCED</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa
              mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
              fringilla, mattis ligula consectetur
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Skills;
