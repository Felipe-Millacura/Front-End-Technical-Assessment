import { getAbilities } from "../api/getAbilities";

const ability = await getAbilities();

const Ability = () => {

  if (ability.length === 0) return null;

  return (
    <section
      id="aptitudes"
      className="relative py-24 px-6 bg-gradient-to-b from-white to-slate-50 overflow-hidden"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-blue-500/10 blur-3xl rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Aptitudes
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Tecnologías y herramientas con las que trabajo para construir
            soluciones modernas y escalables.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {
          //@ts-ignore
          ability.map((abilityItem, index) => (
            <div
              key={index}
              className="group relative p-6 rounded-2xl bg-white
                         border border-slate-200
                         shadow-sm hover:shadow-xl
                         transition-all duration-300
                         hover:-translate-y-1"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-t-2xl opacity-0 group-hover:opacity-100 transition" />
              <p className="font-semibold text-slate-800 text-center">
                {abilityItem.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Ability;