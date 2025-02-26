export const About = () => {
  return (
    <section id="about" className="py-20 ">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
        <div className="card border border-primary/40 bg-neutral-900">
          <div className="card-body">
            <p className="text-lg text-neutral-content/80">
              I'm a software developer passionate about creating clean,
              efficient solutions to complex problems. With a focus on web
              technologies, I build applications that are both functional and
              user-friendly.
            </p>
            <p className="text-lg text-neutral-content/80 mt-4">
              When I'm not coding, you can find me exploring new technologies,
              contributing to open-source projects, or learning about software
              architecture.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
