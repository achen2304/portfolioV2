export const Experience = () => {
  const experiences = [
    {
      title: 'Student',
      company: 'Iowa State University',
      period: '2023 - present',
      description:
        'Currently a student at Iowa State University pursuing a Bachelor of Science in Computer Engineering.',
    },
  ];

  return (
    <section id="experience" className="py-20">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="card bg-neutral-900">
              <div className="card-body">
                <h3 className="card-title">{exp.title}</h3>
                <p className="text-sm text-neutral-content/60">
                  {exp.company} | {exp.period}
                </p>
                <p className="text-neutral-content/80">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
