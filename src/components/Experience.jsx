const Experience = () => {
  const experiences = [
    {
      year: "2023",
      role: "Frontend Developer",
      company: "ABC Tech",
      description:
        "Worked on developing user interfaces and improving user experiences.",
      technologies: ["React.js", "Next.js", "Tailwind CSS"],
    },
    {
      year: "2022",
      role: "Backend Developer",
      company: "XYZ Corp",
      description: "Conducted testing and ensured product quality.",
      technologies: ["Jest", "Cypress", "Selenium"],
    },
    {
      year: "2024",
      role: "Quality Assurance Intern",
      company: "PT.BiruTekno.itc",
      description: "Conducted testing and ensured product quality.",
      technologies: ["Laravel", "Mysql", "MongoDB"],
    },
  ];

  return (
    <div className="border-b border-neutral-50 pb-4">
      <h1 className="my-20 text-center text-4xl">EXPERIENCE</h1>
      <div>
        {experiences.map((experience, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <div className="w-full lg:w-1/4">
              <p className="mb-2 text-sm text-neutral-400">{experience.year}</p>
            </div>
            <div className="w-full max-w-xl lg:w-3/4">
              <h6 className="mb-2 font-semibold">
                {experience.role} -{" "}
                <span className="text-sm text-purple-100">
                  {experience.company}
                </span>
              </h6>
              <p className="mb-4 text-neutral-400">{experience.description}</p>
              {experience.technologies.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
