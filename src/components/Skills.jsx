import { skillCategories } from '../data/skills';

export const Skills = () => {
  return (
    <section id="skills" className="py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl font-bold mb-8 text-center text-primary">
          Skills & Technologies
        </h2>

        <div className="grid md:grid-cols-2 gap-4">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="card border border-primary/20 hover:shadow-xl hover:border-primary/30 
                         transition-all duration-300 backdrop-blur-[2px] bg-base-100/5"
            >
              <div className="card-body p-5 pb-6">
                <h3 className="text-lg font-bold mb-2 text-primary text-center">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-4 text-primary/80">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="flex items-center gap-2 hover:scale-[1.02] transition-all px-3 py-1.5
                             hover:bg-base-200/10 rounded-md group border border-primary/20
                             hover:border-primary/40"
                    >
                      <div
                        className="w-4 h-4 flex items-center justify-center text-primary/90 
                                    group-hover:text-primary group-hover:scale-110 transition-all"
                      >
                        {skill.icon}
                      </div>
                      <span className="text-sm font-medium group-hover:text-primary transition-colors">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
