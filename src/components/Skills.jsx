export const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: [''],
    },
    {
      title: 'Backend',
      skills: [''],
    },
    {
      title: 'Tools',
      skills: [''],
    },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div key={index} className="card bg-neutral-900">
              <div className="card-body">
                <h3 className="card-title text-xl mb-4">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className="badge badge-outline">
                      {skill}
                    </span>
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
