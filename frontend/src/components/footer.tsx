import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-slate-950 text-slate-300 overflow-hidden">
      <div className="absolute top-[-80px] left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-blue-500/10 blur-3xl rounded-full pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12 text-center md:text-left">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white tracking-tight">
              Portfolio
            </h3>
          </div>
          <div className="space-y-4">
            <h4 className="font-semibold text-white">Navigation</h4>
            <div className="flex flex-col gap-2">
              <a href="#hero" className="hover:text-white transition">
                Home
              </a>
              <a href="#about-me" className="hover:text-white transition">
                About me
              </a>
              <a href="#aptitudes" className="hover:text-white transition">
                Skills
              </a>
            </div>
          </div>
          <div className="space-y-4">
            <h4 className="font-semibold text-white">Connect</h4>

            <div className="flex justify-center md:justify-start gap-4">
              <a
                href="#"
                className="p-3 rounded-xl bg-white/5 hover:bg-white/10 transition"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>

              <a
                href="#"
                className="p-3 rounded-xl bg-white/5 hover:bg-white/10 transition"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="p-3 rounded-xl bg-white/5 hover:bg-white/10 transition"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-white/10 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} Portfolio. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;