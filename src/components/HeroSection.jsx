import { Link } from "react-router-dom";

function HeroSection({ title, image }) {
    return (
      <div className="relative h-[500px] bg-cover bg-center" style={{ backgroundImage: `url("${image}")` }}>
        <div className="absolute inset-0 bg-black bg-opacity-50">
          <div className="container mx-auto h-full flex flex-col justify-center items-center text-white">
            <h1 className=" text-4xl md:text-6xl font-bold mb-4">{title}</h1>
            <div className="flex items-center space-x-2">
              <Link to="/" className="text-white hover:text-green-400">HOME</Link>
              <span>»</span>
              <span>{title}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default HeroSection;
  