import content from '../data/content.json';

export const Experience = () => {
  const experiences = content.experiences;

  return (
    <section id="experience" className="py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl font-bold mb-12 text-center text-primary">
          Experience
        </h2>

        {/* Mobile Timeline */}
        <div className="md:hidden relative">
          {/* Timeline line */}
          <div className="absolute left-2 top-0 bottom-0 w-[2px] bg-primary/20"></div>

          <ul className="flex flex-col">
            {experiences.map((exp, index) => (
              <li key={index} className="flex gap-6 mb-8">
                {/* Timeline dot */}
                <div className="relative z-10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-4 w-4 text-primary mt-2"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>

                {/* Card */}
                <div className="flex-1">
                  <div
                    className="card border border-primary/20 backdrop-blur-[2px] bg-base-100/5 
                                 hover:shadow-xl hover:border-primary/30 transition-all"
                  >
                    <div className="card-body p-4">
                      <p className="text-sm text-primary/60">{exp.period}</p>
                      <h3 className="card-title text-lg text-primary -mt-1 mb-0">
                        {exp.company}
                      </h3>
                      <p className="text-primary/80 -mt-1">{exp.title}</p>
                      <p className="text-sm text-primary/60">
                        {exp.description}
                      </p>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Desktop Timeline */}
        <ul className="hidden md:block timeline timeline-snap-icon timeline-vertical">
          {experiences.map((exp, index) => (
            <li key={index}>
              {index !== 0 && <hr className="bg-primary/20" />}
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
                } mb-10`}
              >
                <div
                  className="w-full max-w-sm card border border-primary/20 backdrop-blur-[2px] bg-base-100/5 
                             hover:shadow-xl hover:border-primary/30 transition-all"
                >
                  <div className="card-body p-6">
                    <p className="text-sm text-primary/60">{exp.period}</p>
                    <h3 className="card-title text-lg text-primary -mt-1 mb-0">
                      {exp.company}
                    </h3>
                    <p className="text-primary/80 -mt-1">{exp.title}</p>
                    <p className="text-sm text-primary/60">{exp.description}</p>
                  </div>
                </div>
              </div>
              {index !== experiences.length - 1 && (
                <hr className="bg-primary/20" />
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
