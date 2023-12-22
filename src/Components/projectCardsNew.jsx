import { projects } from "../Constants/constants";
import { githubIcon } from "../assets";


const ProjectCard = ({
    index,
    name,
    description,
    tags,
    image,
    source_code_link,
    demo_link,
  }) => {
    return (
    <>
      <div className="text-grayscale-50 p-5 rounded-lg w-[280px] w-full">
      <div className="relative w-full h-[180px]">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover rounded-lg"
        />
        <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
          <div
            onClick={() => window.open(source_code_link, "_blank")}
            className="black-gradient w-8 h-8 rounded-full flex justify-center items-center cursor-pointer"
          >
            <img
              src={githubIcon}
              alt="github"
              className="w-15 h-15 object-contain"
            />
          </div>
        </div>
      </div>

      <div className="mt-3">
        <h3 className="text-white font-bold text-[20px]">{name}</h3>
        <p className="mt-2 text-secondary text-[14px] leading-[18px]">
          {description}
        </p>
      </div>
      <div className="mt-2 flex flex-wrap gap-1"></div>
      <div className="mt-3 flex justify-center items-center">
        <a
          className="shadow-md shadow-primary m-3 p-2 bg-tertiary w-[60%] rounded-lg flex justify-center"
          href={demo_link}
          target="_blank"
        >
          See the Demo
        </a>
      </div>
      </div>
    </>  
    );
};

const Works = () => {
    return (
      <>
        <div className="mt-20 flex justify-center flex-wrap gap-7">
          {projects.map((project, index) => (
            <ProjectCard key={`project-${index}`} index={index} {...project} />
          ))}
        </div>
      </>
    );
};

export default Works;
