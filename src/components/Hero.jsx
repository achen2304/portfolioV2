import { FaLocationDot } from 'react-icons/fa6';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { GrDocumentDownload } from 'react-icons/gr';

export const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative"
    >
      {/* Grid overlay */}
      <div
        className="absolute inset-0 bg-grid-pattern bg-grid opacity-20"
        style={{ backgroundPosition: 'center' }}
      />

      {/* Content */}
      <div className="text-center relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-primary">
          Cai Chen
        </h1>
        <p className="text-xl md:text-2xl text-primary/80 mb-2">
          Full Stack Developer
        </p>
        <p className="text-xl md:text-lg text-primary/80 mb-8 flex items-center justify-center gap-2">
          <FaLocationDot className="text-primary" />
          Ames, Iowa
        </p>

        <div className="flex justify-center items-center space-x-6">
          <a
            href="/resume/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline text-primary/80 hover:bg-primary hover:text-base-100 transition-all 
            backdrop-blur-[2px] bg-base-100/5 hover:scale-[1.05] hover:shadow-lg"
          >
            <GrDocumentDownload className="w-5 h-5 mr-1 pb-[1px]" />
            Resume
          </a>

          <a
            href="https://linkedin.com/in/achen2304"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-circle btn-outline text-primary/80 hover:bg-primary hover:text-base-100 transition-all backdrop-blur-[2px] bg-base-100/5 hover:scale-[1.05] hover:shadow-lg"
          >
            <FaLinkedin className="h-6 w-6" />
          </a>

          <a
            href="https://github.com/achen2304"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-circle btn-outline text-primary/80 hover:bg-primary hover:text-base-100 transition-all backdrop-blur-[2px] bg-base-100/5 hover:scale-[1.05] hover:shadow-lg"
          >
            <FaGithub className="h-6 w-6" />
          </a>
        </div>
      </div>
    </section>
  );
};
