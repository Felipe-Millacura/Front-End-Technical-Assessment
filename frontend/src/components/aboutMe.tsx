import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import { getAboutMe } from "../api/getAboutMe";

const { title, subTitle, description, imageAM } = await getAboutMe();

const AboutMe = () => {
  return (
    <section
      id="about-me"
      className="relative py-24 px-6 overflow-hidden
                 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
    >
      <div className="absolute top-[-80px] right-[-80px] w-[320px] h-[320px] bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-100px] left-[-100px] w-[300px] h-[300px] bg-purple-500/20 rounded-full blur-3xl pointer-events-none" />
      <div className="relative max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white tracking-tight">
            {title}
          </h2>
          <p className="max-w-2xl mx-auto text-slate-300 text-lg">
            {subTitle}
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-14 items-center">
          <div className="flex justify-center relative">
            <div className="absolute w-72 h-72 md:w-96 md:h-96 bg-blue-500/20 rounded-full blur-2xl" />
            <img
              src={imageAM}
              alt="Sobre mí"
              className="relative md:w-80 rounded-3xl object-cover
                         shadow-2xl ring-1 ring-white/10
                         hover:scale-[1.02] transition duration-500"
            />
          </div>
          <div className="space-y-6 text-center md:text-left">
            <div className="text-slate-300 leading-relaxed text-lg">
              <BlocksRenderer content={description} />
            </div>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto md:mx-0" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;