import { getImageUrl } from '../utils/img';

export const Projects = () => {
  const projects = [
    {
      title: 'Chardle.com - Character Guessing Game',
      description:
        'A full-stack web game built with React/Tailwind CSS and Express.js/MongoDB with over 100 Daily Active Users.',
      tech: [
        'JavaScript',
        'React',
        'Tailwind CSS',
        'Node.js',
        'Express',
        'MongoDB',
      ],
      image: 'chardle.png',
      link: 'https://chardle.com/',
    },
    {
      title: 'Portfolio V1',
      description:
        'My First Portfolio Website using React and NodeMailer for a basic backend. Built with Tailwind CSS and Framer Motion. ',
      tech: ['React', 'Node.js', 'Express'],
      image: 'portfolio_v1.png',
      link: 'https://portfolio-website-v1-flame.vercel.app/',
      github: 'https://github.com/achen2304/portfolio-website',
    },
    {
      title: 'Pi Pico KeyBoard',
      description: 'A keyboard made using a Raspberry Pi Pico and custom PCB.',
      tech: ['Raspberry Pi Pico', 'KiCad'],
      image: 'keyboard_v1.png',
      github: 'https://github.com/achen2304/Pi-Pico-Keyboard',
    },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-primary">
          Projects
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="card border border-primary/20 hover:shadow-lg transition-shadow backdrop-blur-[2px] bg-base-100/5"
            >
              {project.image && (
                <figure className="px-4 pt-4">
                  <img
                    src={getImageUrl(project.image)}
                    alt={project.title}
                    className="rounded-xl object-cover w-full h-48"
                    loading="lazy"
                  />
                </figure>
              )}
              <div className="card-body">
                <h3 className="card-title text-primary">{project.title}</h3>
                <p className="text-primary/80">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="badge badge-outline text-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="card-actions justify-end mt-4">
                  {project.github && (
                    <a
                      href={project.github}
                      className="btn btn-sm btn-outline text-primary hover:bg-primary hover:text-base-100"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub
                    </a>
                  )}
                  {project.link && (
                    <a
                      href={project.link}
                      className="btn btn-sm btn-outline text-primary hover:bg-primary hover:text-base-100"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
