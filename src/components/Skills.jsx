import { skillCategories } from '../data/skills';

export const Skills = () => {
  return (
    <section id="skills" className="py-20">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-primary">
          Skills
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="card border border-primary/20 hover:shadow-xl hover:border-primary/30 transition-all duration-300 backdrop-blur-[2px] bg-base-100/5"
            >
              <div className="card-body">
                <h3 className="card-title text-xl mb-4 text-primary mx-auto">
                  {category.title}
                </h3>
                <div className="grid grid-cols-3 gap-4 text-primary/80">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="flex flex-col items-center justify-between h-20 hover:text-primary hover:scale-[1.02] transition-all"
                    >
                      <div className="flex items-center justify-center h-8">
                        {skill.icon}
                      </div>
                      <span className="text-xs text-center w-full">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                  {/* Add empty divs to maintain grid structure */}
                  {[...Array(3 - (category.skills.length % 3))].map((_, i) => (
                    <div key={`empty-${i}`} className="h-20" />
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
