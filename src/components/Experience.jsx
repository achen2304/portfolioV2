export const Experience = () => {
  const experiences = [
    {
      title: 'Student',
      company: 'Iowa State University',
      period: 'Aug 2023 - present',
      description:
        'Currently a student at Iowa State University pursuing a Bachelor of Science in Computer Engineering.',
    },
    // Add more experiences here
  ];

  return (
    <section id="experience" className="py-20">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center text-primary">
          Experience
        </h2>

        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
          {experiences.map((exp, index) => (
            <li key={index}>
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5 text-primary"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>

              <div
                className={`timeline-${
                  index % 2 === 0 ? 'start' : 'end'
                } md:text-${index % 2 === 0 ? 'right' : 'left'}`}
              >
                <div className="card border border-primary/20 backdrop-blur-[2px] bg-base-100/5">
                  <div className="card-body">
                    <h3 className="card-title text-lg text-primary">
                      {exp.title}
                    </h3>
                    <p className="text-sm text-primary/60">
                      {exp.company} | {exp.period}
                    </p>
                    <p className="text-primary/80">{exp.description}</p>
                  </div>
                </div>
              </div>

              <hr className="bg-primary/20" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
