const Button = ({ name }) => {
  return (
    <button className="overflow-hidden relative w-[100px] h-[40px] p-2 bg-black/50 text-white border-none rounded-md text-xl font-bold cursor-pointer z-10 group shadow-[-1px_-1px_5px_1px_#fff,_4px_4px_10px_2px_#0d2750]">
      {name}
      <span className="absolute w-36 h-32 -top-8 -left-2 bg-white rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-left" />
      <span className="absolute w-36 h-32 -top-8 -left-2 bg-indigo-400 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-left" />
      <span className="absolute w-36 h-32 -top-8 -left-2 bg-indigo-600 rotate-12 transform scale-x-0 group-hover:scale-x-50 transition-transform group-hover:duration-1000 duration-500 origin-left" />
      <span className="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-2 left-1/2 transform -translate-x-1/2  z-10">
        {name}!
      </span>
    </button>
  );
};

export default Button;
