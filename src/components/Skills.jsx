import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
  FaJava,
  FaPython,
  FaMicrosoft,
  FaGoogle,
  FaGitlab,
} from 'react-icons/fa';
import {
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiMongoosedotws,
  SiPostman,
  SiGnubash,
  SiC,
  SiVite,
} from 'react-icons/si';
import { DiMysql } from 'react-icons/di';
import { IoLogoJavascript } from 'react-icons/io5';

export const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'HTML', icon: <FaHtml5 className="w-8 h-8" /> },
        { name: 'CSS', icon: <FaCss3Alt className="w-8 h-8" /> },
        { name: 'Javascript', icon: <IoLogoJavascript className="w-8 h-8" /> },
        { name: 'React', icon: <FaReact className="w-8 h-8" /> },
        { name: 'Tailwind CSS', icon: <SiTailwindcss className="w-8 h-8" /> },
        { name: 'Vite', icon: <SiVite className="w-8 h-8" /> },
      ],
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Java', icon: <FaJava className="w-8 h-8" /> },
        { name: 'C', icon: <SiC className="w-6 h-6" /> },
        { name: 'Node.js', icon: <FaNodeJs className="w-8 h-8" /> },
        { name: 'Express', icon: <SiExpress className="w-8 h-8" /> },
        { name: 'MongoDB', icon: <SiMongodb className="w-8 h-8" /> },
        { name: 'Mongoose', icon: <SiMongoosedotws className="w-8 h-8" /> },
        { name: 'SQL', icon: <DiMysql className="w-8 h-8" /> },
      ],
    },
    {
      title: 'Tools',
      skills: [
        { name: 'Python', icon: <FaPython className="w-8 h-8" /> },
        { name: 'Bash', icon: <SiGnubash className="w-8 h-8" /> },
        { name: 'Git', icon: <FaGitAlt className="w-8 h-8" /> },
        { name: 'PostMan', icon: <SiPostman className="w-8 h-8" /> },
        { name: 'GitLab', icon: <FaGitlab className="w-8 h-8" /> },
        { name: 'Microsoft 365', icon: <FaMicrosoft className="w-8 h-8" /> },
        { name: 'Google Suite', icon: <FaGoogle className="w-8 h-8" /> },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-primary">
          Skills
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="card border border-primary/20 backdrop-blur-[2px] bg-base-100/5"
            >
              <div className="card-body">
                <h3 className="card-title text-xl mb-4 text-primary mx-auto">
                  {category.title}
                </h3>
                <div className="grid grid-cols-3 gap-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="flex flex-col items-center justify-between h-20"
                    >
                      <div className="flex items-center justify-center h-8">
                        {skill.icon}
                      </div>
                      <span className="text-xs text-center w-full">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                  {/* Add empty divs to maintain grid structure */}
                  {[...Array(3 - (category.skills.length % 3))].map((_, i) => (
                    <div key={`empty-${i}`} className="h-20" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
