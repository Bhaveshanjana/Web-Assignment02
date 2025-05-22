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
} from "lucide-react";
import img from "./assets/bhavesh.jpg";

const PersonalDashboard = () => {
  return (
    <div className="p-4">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
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
                  <span>Chittorgargh, Rajasthan</span>
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
      </div>
    </div>
  );
};

export default PersonalDashboard;
