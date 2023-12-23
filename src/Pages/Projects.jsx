import SectionTitle from "../Components/SectionTitle";
import ProjectCards from "../Components/projectCardsNew";

const Projects = () => {
  return (
    <div
      id="projects"
      className="w-full h-full flex justify-center"
    >
      <div className="w-full h-full xl:w-[70%] relative mt-40 flex flex-col items-center justify-center pb-36">
        <div className="w-full mt-[-10%] mb-[-5%]">
          <SectionTitle title="PROJECTS" subtitle="What I have done so far" />
        </div>
        <div className="w-full h-full flex justify-center">
          <div className="w-full xl:w-[70%]">
            <ProjectCards />
          </div>
          {/* <div className="absolute w-full h-full top-[100%] right-[-75%] sm:right-[-50%]"></div> */}
        </div>
      </div>
    </div>
  );
};

export default Projects;
