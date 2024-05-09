const SkillCard = ({ img, title }) => {
  return (
    <div>
      <figure>
        <img src={img}></img>
      </figure>

      <h1 className="text-2xl font-bold my-4">{title}</h1>
      <p>
        Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
        suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur
      </p>
    </div>
  );
};

export default SkillCard;
