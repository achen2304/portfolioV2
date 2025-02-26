export const Projects = () => {
  const projects = [
    {
      title: 'Project One',
      description: 'A full-stack web application built with React and Node.js',
      tech: ['React', 'Node.js', 'MongoDB'],
      link: '#',
      github: '#',
    },
    {
      title: 'Project Two',
      description: 'Mobile-first responsive website with modern animations',
      tech: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
      link: '#',
      github: '#',
    },
    // Add more projects as needed
  ];

  return (
    <section id="projects" className="py-20">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="card bg-neutral-900 hover:shadow-lg transition-shadow"
            >
              <div className="card-body">
                <h3 className="card-title">{project.title}</h3>
                <p className="text-neutral-content/80">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="badge badge-outline">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="card-actions justify-end mt-4">
                  <a href={project.github} className="btn btn-sm btn-outline">
                    GitHub
                  </a>
                  <a href={project.link} className="btn btn-sm btn-primary">
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
