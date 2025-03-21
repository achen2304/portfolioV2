import { getImageUrl } from '../utils/img';
import content from '../data/content.json';
import { useEffect } from 'react';

export const ProjectsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const Certifications = [
    ...content.projects.certifications,
    ...content.projects.allCertifications,
  ];

  return (
    <section className="min-h-screen pt-32 pb-20">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center text-primary">
          All Projects
        </h2>

        {/* Featured Projects Section */}
        {content.projects.featured.length > 0 && (
          <>
            <h3 className="text-2xl font-bold mb-6 text-primary text-center">
              Featured Projects
            </h3>
            <div className="grid md:grid-cols-2 gap-6 mb-16">
              {content.projects.featured.map((project, index) => (
                <div
                  key={`featured-${index}`}
                  className="mx-4 sm:mx-0 card border border-primary/20 hover:shadow-xl hover:border-primary/30 transition-all duration-300 backdrop-blur-[2px] bg-base-100/5 group"
                >
                  <ProjectCardContent project={project} />
                </div>
              ))}
            </div>
          </>
        )}

        {/* Certifications Section */}
        {Certifications.length > 0 && (
          <>
            <h3 className="text-2xl font-bold mb-6 text-primary text-center">
              Certifications
            </h3>
            <div className="grid md:grid-cols-2 gap-6 mb-16">
              {Certifications.map((project, index) => (
                <div
                  key={`cert-${index}`}
                  className="mx-4 sm:mx-0 card border border-primary/20 hover:shadow-xl hover:border-primary/30 transition-all duration-300 backdrop-blur-[2px] bg-base-100/5 group"
                >
                  <ProjectCardContent project={project} />
                </div>
              ))}
            </div>
          </>
        )}

        {/* All Projects Section */}
        {content.projects.allProjects.length > 0 && (
          <>
            <h3 className="text-2xl font-bold mb-6 text-primary text-center">
              Other Projects
            </h3>
            <div className="grid md:grid-cols-2 gap-6 mb-16">
              {content.projects.allProjects.map((project, index) => (
                <div
                  key={`all-${index}`}
                  className="mx-4 sm:mx-0 card border border-primary/20 hover:shadow-xl hover:border-primary/30 transition-all duration-300 backdrop-blur-[2px] bg-base-100/5 group"
                >
                  <ProjectCardContent project={project} />
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

// Separate the card content into its own component
const ProjectCardContent = ({ project }) => (
  <>
    {project.image && (
      <figure className="px-4 pt-4">
        <img
          src={getImageUrl(project.image)}
          alt={project.title}
          className="rounded-xl object-cover w-full h-48 group-hover:scale-[1.02] transition-transform duration-300"
          loading="lazy"
        />
      </figure>
    )}
    <div className="card-body gap-3">
      <h3 className="card-title text-primary text-xl font-bold">
        {project.title}
      </h3>
      <p className="text-primary/80 text-sm leading-relaxed">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-1.5">
        {project.tech.map((tech, techIndex) => (
          <span
            key={techIndex}
            className="px-2.5 py-0.5 text-xs font-medium rounded-full bg-base-100/30 border border-primary/10 
                     text-primary/70 hover:text-primary hover:bg-primary/5 transition-all duration-300 backdrop-blur-sm"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="card-actions justify-end mt-2">
        {project.github && (
          <a
            href={project.github}
            className="btn btn-sm normal-case bg-base-100/30 border border-primary/20 text-primary/80 
                     hover:bg-primary hover:text-base-100 hover:border-primary transition-all duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        )}
        {project.link && (
          <a
            href={project.link}
            className="btn btn-sm normal-case bg-primary/10 border border-primary/30 text-primary 
                     hover:bg-primary hover:text-base-100 hover:border-primary transition-all duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            {project.isCertification ? 'View Certificate' : 'Live Demo'}
          </a>
        )}
      </div>
    </div>
  </>
);
