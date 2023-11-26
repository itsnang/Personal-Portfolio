import React from "react";
import { Profile } from "../components/Profile";
import { Typography } from "../components/Typography";
import { ImageContain } from "../components/ImageContain";
import { ExperienceTabs } from "../components/ExperienceTabs";
import { ProjectCard } from "../components/ProjectCard";
import { projects, projectsType } from "../data/projects";

export const ProfilePage = () => {
  return (
    <>
      <div className="bg-gradient-to-r  from-cyan-500 to-blue-500 w-full h-72 block absolute left-0 "></div>
      <Profile
        className="items-center pt-52"
        name="Lorn Samnang"
        position="Software Developer | Mobile Developer | Tech Enthusiast"
        image="/assets/profile.jpg "
      />
      <Typography
        className="underline pt-10 font-sans underline-offset-8 decoration-cyan-100 decoration-[8px]"
        variant="h2"
      >
        About
      </Typography>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 box-content gap-2">
        <div className="flex gap-6 flex-col p-4">
          <p className="text-2xl whitespace-pre-line pl-4">
            I&m Lorn Samnang you can call me &lsquo;Chhay&rsquo;🦾, a 19 years
            old, introverted nobody, a Software Developer, Mobile Developer, I
            also have experience in UX/UI design. I am highly perceptive and
            very imaginative by seeking inspiration in every moment and
            currently living in Phnom Penh, Cambodia.
          </p>
          <p className="text-2xl  whitespace-pre-line pl-4">
            My experience comes from working with tech companies. I have worked
            with a wide range of technologies, from mobile development to web
            development. I have a passion for learning and sharing my knowledge
            with others as publicly as possible.
          </p>
        </div>
        <ImageContain alt="habbit" src="/assets/pp.jpg" rounded />
      </div>
      <Typography
        className="underline pt-10 font-sans underline-offset-8  decoration-cyan-100 decoration-[8px]"
        variant="h2"
      >
        Experiences
      </Typography>
      <div className="flex justify-center">
        <ExperienceTabs />
      </div>
      <Typography
        className="underline pb-10 font-sans underline-offset-8  decoration-cyan-100 decoration-[8px]"
        variant="h2"
      >
        Projects
      </Typography>
      <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {projects.map((project: projectsType, index: number) => (
          <ProjectCard
            key={index}
            img={project.poster}
            title={project.title}
            href={"/projects/" + project.id}
          />
        ))}
      </div>
    </>
  );
};
export default ProfilePage;
