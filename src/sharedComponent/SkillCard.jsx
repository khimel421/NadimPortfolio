const SkillCard = ({ img, title , description }) => {
  return (
    <div className="border-style p-4">
      <figure>
        <img className="w-full" src={img}></img>
      </figure>

      <h1 className="text-2xl font-bold my-4">{title}</h1>
      <p>
        {description}
      </p>
    </div>
  );
};

export default SkillCard;
