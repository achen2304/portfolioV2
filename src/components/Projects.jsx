import { useState, useRef } from 'react';
import { getImageUrl } from '../utils/img';
import content from '../data/content.json';
import { Link } from 'react-router-dom';
import { FiExternalLink } from 'react-icons/fi';

export const Projects = () => {
  const featuredProjects = [
    ...content.projects.featured,
    ...content.projects.certifications,
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselRef = useRef(null);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [touchStartY, setTouchStartY] = useState(null);

  // Minimum swipe distance in pixels
  const minSwipeDistance = 50;

  const scrollToSlide = (index) => {
    if (carouselRef.current) {
      const totalWidth = carouselRef.current.offsetWidth;
      const gap = 32; // 8px gap

      // Calculate slide width including gap
      const slideWidth =
        window.innerWidth >= 768
          ? totalWidth * 0.45 // Desktop: 45% of container width
          : totalWidth * 0.75; // Mobile: 75% of container width

      // Calculate exact scroll position
      const scrollAmount = index * (slideWidth + gap);

      // Ensure we don't scroll past the end
      const maxScroll = (featuredProjects.length - 1) * (slideWidth + gap);
      const finalScroll = Math.min(scrollAmount, maxScroll);

      carouselRef.current.style.scrollBehavior = 'smooth';
      carouselRef.current.scrollLeft = finalScroll;
    }
  };

  const handlePrevious = () => {
    const newSlide =
      currentSlide === 0 ? featuredProjects.length - 1 : currentSlide - 1;
    setCurrentSlide(newSlide);
    scrollToSlide(newSlide);
  };

  const handleNext = () => {
    const newSlide =
      currentSlide === featuredProjects.length - 1 ? 0 : currentSlide + 1;
    setCurrentSlide(newSlide);
    scrollToSlide(newSlide);
  };

  // Touch event handlers
  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
    setTouchStartY(e.targetTouches[0].clientY);
  };

  const onTouchMove = (e) => {
    if (!touchStart) return;

    const currentX = e.targetTouches[0].clientX;
    const currentY = e.targetTouches[0].clientY;
    const deltaX = touchStart - currentX;
    const deltaY = touchStartY - currentY;

    // If horizontal scrolling is detected, prevent vertical scrolling
    if (Math.abs(deltaX) > Math.abs(deltaY)) {
      e.preventDefault();
      setTouchEnd(currentX);
    }
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      handleNext();
    } else if (isRightSwipe) {
      handlePrevious();
    }
  };

  // Mouse event handlers
  const onMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX);
  };

  const onMouseMove = (e) => {
    if (!isDragging) return;

    const currentX = e.pageX;
    const distance = startX - currentX;

    if (Math.abs(distance) > minSwipeDistance) {
      if (distance > 0) {
        handleNext();
      } else {
        handlePrevious();
      }
      setIsDragging(false);
    }
  };

  const onMouseUp = () => {
    setIsDragging(false);
  };

  const onMouseLeave = () => {
    setIsDragging(false);
  };

  const handleDotClick = (index) => {
    setCurrentSlide(index);
    scrollToSlide(index);
  };

  return (
    <section id="projects" className="py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl font-bold mb-12 text-center text-primary">
          Featured Projects and Certifications
        </h2>

        <div className="mb-12 relative">
          <div
            ref={carouselRef}
            className="carousel w-full gap-8 overflow-x-hidden cursor-grab active:cursor-grabbing pl-0 pr-[15%] md:pr-[12.5%]"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
            onMouseDown={onMouseDown}
            onMouseMove={onMouseMove}
            onMouseUp={onMouseUp}
            onMouseLeave={onMouseLeave}
            onTouchCancel={onTouchEnd}
            style={{ touchAction: 'pan-y pinch-zoom' }}
          >
            {featuredProjects.map((project, index) => (
              <div
                key={index}
                className="carousel-item w-[85%] md:w-[45%] px-0"
              >
                <div
                  className="card w-full h-full border border-primary/20 hover:shadow-xl hover:border-primary/30 
                            transition-all duration-300 backdrop-blur-[2px] bg-base-100/5 group"
                >
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
                  <div className="card-body gap-3 p-6">
                    <h3 className="card-title text-primary text-xl font-bold">
                      {project.title}
                    </h3>
                    <p className="text-primary/80 text-sm leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2.5 py-0.5 text-xs font-medium rounded-full bg-base-100/30 
                                   border border-primary/10 text-primary/70 hover:text-primary 
                                   hover:bg-primary/5 transition-all duration-300 backdrop-blur-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="card-actions justify-end mt-2">
                      {project.github && (
                        <a
                          href={project.github}
                          className="btn btn-xs sm:btn-sm normal-case bg-base-100/30 border border-primary/20 
                                   text-primary/80 hover:bg-primary hover:text-base-100 
                                   hover:border-primary transition-all duration-300"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          GitHub
                        </a>
                      )}
                      {project.link && (
                        <a
                          href={project.link}
                          className="btn btn-xs sm:btn-sm normal-case bg-primary/10 border border-primary/30 
                                   text-primary hover:bg-primary hover:text-base-100 
                                   hover:border-primary transition-all duration-300"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {project.isCertification
                            ? 'View Certificate'
                            : 'Live Demo'}
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="absolute flex justify-between transform -translate-y-1/2 left-2 sm:left-[-2rem] right-2 sm:right-[-2rem] top-1/2">
            <button
              onClick={handlePrevious}
              className="btn btn-circle btn-sm sm:btn-md bg-base-100/30 hover:bg-base-100/50 border-primary/20 
                       hover:border-primary/40 text-primary/80 hover:text-primary shadow-lg 
                       backdrop-blur-sm transition-all duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="currentColor"
                className="w-4 h-4 sm:w-6 sm:h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </button>
            <button
              onClick={handleNext}
              className="btn btn-circle btn-sm sm:btn-md bg-base-100/30 hover:bg-base-100/50 border-primary/20 
                       hover:border-primary/40 text-primary/80 hover:text-primary shadow-lg 
                       backdrop-blur-sm transition-all duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="currentColor"
                className="w-4 h-4 sm:w-6 sm:h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          </div>

          <div className="flex justify-center gap-2 mt-4">
            {featuredProjects.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  currentSlide === index
                    ? 'bg-primary scale-125'
                    : 'bg-primary/20 hover:bg-primary/40'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="flex justify-center">
          <Link
            to="/projects"
            className="btn btn-md normal-case bg-base-100/30 border border-primary/80 
                   text-primary/80 hover:bg-primary hover:text-base-100 
                   hover:border-primary transition-all duration-300 px-4"
          >
            View All Projects
            <FiExternalLink className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};
