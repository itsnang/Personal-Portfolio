import React from "react";
import { Profile } from "../components/Profile";
import { Typography } from "../components/Typography";
import { ImageContain } from "../components/ImageContain";
import { ExperienceTabs } from "../components/ExperienceTabs";
import { ProjectCard } from "../components/ProjectCard";
import { projects, projectsType } from "../data/projects";
import Image from "next/image";

export const ProfilePage = () => {
  return (
    <>
      <div className="w-full lg:h-80 md:h-72 h-56 block absolute left-0 ">
        <Image
          src="/assets/kdrama.jpg"
          alt="hero"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <Profile
        className="items-center pt-36 lg:pt-52 md:pt-52"
        name="Samnang Lorn"
        position="Software Engineer"
        image="https://firebasestorage.googleapis.com/v0/b/todo-81bff.appspot.com/o/myprofile.jpg?alt=media&token=e83d02bf-4778-4196-be5c-1b4bdf0ba796"
      />
      <Typography
        className="underline pt-10 font-sans underline-offset-8 decoration-cyan-100 decoration-[8px]"
        variant="h5"
      >
        About
      </Typography>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 box-content gap-2">
        <div className="flex gap-6 flex-col p-4">
          <p className="text-base lg:text-xl md:text-xl whitespace-pre-line lg:pl-4 md:pl-4">
            I&rsquo;m Lorn Samnang you can call me &lsquo;Chhay&rsquo;🎸,
            introverted nobody, a Software Developer, Mobile Developer. I am
            highly perceptive and very imaginative by seeking inspiration in
            every moment and currently living in Phnom Penh, Cambodia.
          </p>
          <p className="text-base lg:text-xl md:text-xl whitespace-pre-line lg:pl-4 md:pl-4">
            My experience comes from working with tech companies. I have worked
            with a wide range of technologies, from mobile development to web
            development. I have a passion for learning and sharing my knowledge
            with others as publicly as possible.
          </p>
        </div>
        <ImageContain alt="habbit" src="/assets/kps2.jpeg" rounded />
      </div>
      <Typography
        className="underline pt-10 font-sans underline-offset-8  decoration-cyan-100 decoration-[8px]"
        variant="h5"
      >
        Experiences
      </Typography>
      <div className="flex justify-center">
        <ExperienceTabs />
      </div>
      <Typography
        className="underline pb-10 font-sans underline-offset-8  decoration-cyan-100 decoration-[8px]"
        variant="h5"
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
