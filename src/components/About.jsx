export const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="max-w-3xl mx-auto ">
        <h2 className="text-3xl font-bold mb-8 text-center text-primary">
          About Me
        </h2>
        <div
          className="card mx-4 sm:mx-0 border border-primary/20 backdrop-blur-[2px] bg-base-100/5
                          hover:shadow-xl hover:border-primary/30 transition-all"
        >
          <div className="card-body">
            <p className="text-lg text-primary/80">
              I'm a full stack software engineer studying Computer Engineering
              at Iowa State University. I'm passionate about creating efficient,
              user-friendly applications and exploring new technologies.
              Currently, I'm focused on web development and building scalable
              solutions.
            </p>
            <p className="text-lg text-primary/80 mt-4">
              Outside of coding, I enjoy exploring new recipes, eating food, and
              staying active. I believe in continuous learning and am always
              excited to take on new challenges in both technology and personal
              growth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
