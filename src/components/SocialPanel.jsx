import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

const SocialPanel = () => {
  return (
    <div className="fixed bottom-6 left-4 flex flex-col items-center gap-4 z-50">
      {/* Vertical Line */}
      <div className="w-[2px] h-24 bg-[#915EFF]" />

      {/* Icons */}
      <a href="mailto:siddharthjain1220@gmail.com">
        <FaEnvelope className="text-[#915EFF] hover:scale-110 transition-transform cursor-pointer" size={20} />
      </a>

      <a href="https://www.linkedin.com/in/siddharthj2002/" target="_blank" rel="noopener noreferrer">
        <FaLinkedin className="text-[#915EFF] hover:scale-110 transition-transform cursor-pointer" size={20} />
      </a>

      <a href="https://github.com/Siddharthj2002" target="_blank" rel="noopener noreferrer">
        <FaGithub className="text-[#915EFF] hover:scale-110 transition-transform cursor-pointer" size={20} />
      </a>
    </div>
  );
};

export default SocialPanel;
