import { logo } from "../assets";
const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex w-full mb-10 pt-3 justify-between items-center">
        <img src={logo} alt="logo" className="w-28 object-contain" />
      </nav>
      <h1 className="head_text">
        Summarize Articles with
        <br className="max-md:hidden" />
        <span className="orange_gradient">OpenAI GPT-4</span>
      </h1>
      <h2 className="desc">Summarize your article reading with summize</h2>
    </header>
  );
};

export default Hero;
