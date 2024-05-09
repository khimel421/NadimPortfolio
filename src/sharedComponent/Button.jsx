const Button = ({name}) => {
  return (
    <button className="text-lg border rounded-xl px-4 py-2 hover:text-black hover:bg-white transition-all">{name}</button>
  );
};

export default Button;
