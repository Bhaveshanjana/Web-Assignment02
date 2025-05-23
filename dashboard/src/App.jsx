import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Calendar,
  Award,
  Target,
  Heart,
  ExternalLink,
} from "lucide-react";
import img from "./assets/bhavesh.jpg";

const PersonalDashboard = () => {
  const projects = [
    {
      title: "DiagnoBot",
      description:
        "DiagnoBot analyzes symptoms to suggest conditions, actions, and trusted resources.",
      techStack: ["React", "TailwindCss", "Rapid-Api", "Express.js", "Node.js"],
      color: "orange-500",
      githubLink: "https://github.com/Bhaveshanjana/DiagnoBot",
      liveLink: "https://diagno-bot.vercel.app/",
    },
    {
      title: "BuzzBot",
      description: "Tool for AI agents to post tweets via MCP and Twitter API.",
      techStack: ["Express.js", "Node.js", "Gemini Flash 2.0"],
      color: "purple-500",
      githubLink: "https://github.com/Bhaveshanjana/BUZZBOT",
    },
    {
      title: "TravoBot",
      description:
        "TravoBot plans personalized trips using AI based on user preferences.",
      techStack: [
        "React",
        "TailwindCss",
        "Google Place Api",
        "Gemini Flash 2.0",
        "Express.js",
        "Node.js",
      ],
      color: "green-500",
      githubLink: "https://github.com/Bhaveshanjana/TravoBot",
      liveLink: "https://travo-bot.vercel.app/",
    },
  ];

  return (
    <div className="p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2 border-b-2 border-b-cyan-600 text-left ">
            Personal Dashboard
          </h1>
        </div>

        {/* Profile Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            <div className="flex-shrink-0">
              <img
                src={img}
                alt="Profile Photo"
                className="w-48 h-48 rounded-full object-cover border-4 border-blue-200 shadow-lg"
              />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-3xl font-bold text-gray-800 mb-2">
                Bhavesh Anjana
              </h2>
              <p className="text-xl text-blue-600 mb-4">Full Stack Developer</p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                BCA student & passionate full-stack developer with a strong
                foundation in frontend and backend technologies. I focus on
                building fast, clean, and user-friendly digital experiences that
                solve real-world problems.
              </p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <div className="flex items-center gap-2 text-gray-600">
                  <Mail size={18} />
                  <span>bhaveshanjana58@gmail.com</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Phone size={18} />
                  <span>+91 6378978141</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <MapPin size={18} />
                  <span>Chittorgarh, Rajasthan</span>
                </div>
              </div>
              <div className="flex gap-4 mt-4 justify-center md:justify-start">
                <a
                  href="https://github.com/Bhaveshanjana"
                  className="p-2 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition-colors"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/bhavesh-anjana-71b30b24a/"
                  className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Education Section */}
          <div className="bg-white rounded-2xl shadow-xl p-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
              <Award className="text-blue-600" size={24} />
              Education
            </h3>
            <div className="space-y-6">
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="text-lg font-semibold text-gray-800">
                  Vision group of colleges, Chittorgarh
                </h4>
                <p className="text-blue-600 font-medium">
                  Bachelor in Computer Application
                </p>
                <p className="text-gray-600 flex items-center gap-1 mt-1">
                  <Calendar size={16} />
                  2022-2025
                </p>
              </div>
              <div className="border-l-4 border-green-500 pl-4">
                <h4 className="text-lg font-semibold text-gray-800">
                  Vidya Niketan High Sr. Sec. School
                </h4>
                <p className="text-green-600 font-medium">12th (science)</p>
                <p className="text-gray-600 flex items-center gap-1 mt-1">
                  <Calendar size={16} />
                  2021
                </p>
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div className="bg-white rounded-2xl shadow-xl p-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Tech Stack
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-700 mb-2">Frontend</h4>
                <div className="flex flex-wrap gap-2">
                  {["React", "HTML5", "CSS3", "Tailwind CSS", "Motion"].map(
                    (skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                      >
                        {skill}
                      </span>
                    )
                  )}
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-gray-700 mb-2">Backend</h4>
                <div className="flex flex-wrap gap-2">
                  {["Node.js", "Express.js", "MongoDB", "REST APIs"].map(
                    (skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium"
                      >
                        {skill}
                      </span>
                    )
                  )}
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-gray-700 mb-2">
                  Tools & Others
                </h4>
                <div className="flex flex-wrap gap-2">
                  {["Git", "Git-Hub", "Vercel", "Render"].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Projects */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center">
                <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
              </div>
              <h2 className="text-xl font-semibold text-gray-800">Projects</h2>
            </div>

            <div className="space-y-4">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className={`border-l-4 border-${project.color} pl-4`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-800 mb-1">
                        {project.title}
                      </h3>
                      <p className="text-sm text-gray-600 mb-2">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-1 mb-2">
                        {project.techStack.map((tech, idx) => (
                          <span
                            key={idx}
                            className={`${
                              tech === "Node.js" ||
                              tech === "MongoDB" ||
                              tech === "Express.js"
                                ? "bg-green-100 text-green-800"
                                : "bg-blue-100 text-blue-800"
                            } text-xs px-2 py-1 rounded`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex gap-2 ml-2">
                      <a
                        href={project.githubLink}
                        className="text-gray-400 hover:text-gray-600 transition-colors"
                      >
                        <Github size={16} />
                      </a>
                      {project.liveLink ? (
                        <a
                          href={project.liveLink}
                          className="text-gray-400 hover:text-gray-600 transition-colors"
                        >
                          <ExternalLink size={16} />
                        </a>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Goals & Hobbies */}
          <div className="bg-white rounded-2xl shadow-xl p-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Additional Info
            </h3>

            {/* Goals */}
            <div className="mb-6">
              <h4 className="font-semibold text-gray-700 mb-3 flex items-center gap-2">
                <Target className="text-red-500" size={18} />
                Career Goals
              </h4>
              <ul className="text-gray-600 space-y-2 list-disc ml-5">
                <li> Become a senior full-stack developer within a years</li>
                <li> Contribute to open-source projects</li>
                <li> Crack any Internship or Job until the end of 2025</li>
              </ul>
            </div>

            {/* Hobbies */}
            <div className="mb-6">
              <h4 className="font-semibold text-gray-700 mb-3 flex items-center gap-2">
                <Heart className="text-pink-500" size={18} />
                Hobbies & Interests
              </h4>
              <div className="flex flex-wrap gap-2">
                {["Gaming", "Travel", "Movies"].map((hobby) => (
                  <span
                    key={hobby}
                    className="px-3 py-1 bg-pink-100 text-pink-800 rounded-full text-sm font-medium"
                  >
                    {hobby}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* Footer */}
        <div className="text-center mt-8 p-1 bg-white rounded-lg shadow-xl">
          <p className="text-gray-700">Design and Developed by Bhavesh</p>
        </div>
      </div>
    </div>
  );
};

export default PersonalDashboard;
