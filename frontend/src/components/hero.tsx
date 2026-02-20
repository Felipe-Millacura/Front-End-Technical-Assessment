import { getHomeContent } from "../api/getHomeContent";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";

const { title, description, image } = await getHomeContent();

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center px-6 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50"
    >
      <div className="absolute top-[-100px] right-[-100px] w-[400px] h-[400px] bg-blue-400/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-120px] left-[-120px] w-[350px] h-[350px] bg-purple-400/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-16 items-center">
        <div className="space-y-7 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
            {title}
          </h1>
          <div className="text-lg md:text-xl text-slate-600 max-w-xl mx-auto md:mx-0 leading-relaxed">
            <BlocksRenderer content={description} />
          </div>
        </div>
        <div className="flex justify-center relative">
          <div className="absolute w-72 h-72 md:w-96 md:h-96 bg-blue-500/20 rounded-full blur-2xl" />
          <img
            src={image}
            alt="Foto de perfil"
            className="relative rounded-3xl object-cover ring-1 ring-black/5 hover:scale-[1.02] transition duration-500"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
