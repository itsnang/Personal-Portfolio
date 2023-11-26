import { ImageContain } from "@/components/ImageContain";
import { projects, projectsType } from "../../data/projects";
import Image from "next/image";
import React from "react";
import { MainLayout } from "@/layout/MainLayout";
import { Typography } from "@/components/Typography";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function Project({ project }: { project: projectsType }) {
  return (
    <>
      <Breadcrumbs />

      <div className="flex justify-center overflow-hidden rounded-2xl bg-gray-100">
        <div className="relative aspect-[2/1] w-full md:h-[28rem] md:w-auto">
          <Image
            src={project.poster}
            className="rounded-2xl object-cover border"
            fill
            alt={project.title}
          />
        </div>
      </div>
      <div className="flex flex-1 flex-col pt-4">
        <Typography variant="h4">{project.title}</Typography>
        <Typography variant="h6">{project.description}</Typography>
      </div>

      <div className="mt-4 flex flex-wrap gap-4 items-center">
        <h3 className="font-bold text-lg">Technologies : </h3>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, index) => {
            return (
              <div
                key={index}
                className={`
                      p-1 px-4 flex space-x-2
                      items-center justify-start
                    `}
              >
                {tech.logo && <img src={tech.logo} alt="" className="h-5" />}
                {tech.name && <span>{tech.name}</span>}
              </div>
            );
          })}
        </div>
      </div>

      <Typography className="pt-8" variant="h6">
        Project Screenshots:
      </Typography>

      <div className="pt-8 grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {project.images?.map((image, index) => (
          <div key={index}>
            <Image
              width={400}
              height={400}
              key={index}
              src={image}
              alt={project.title}
            />
          </div>
        ))}
      </div>
    </>
  );
}

export async function getServerSideProps({ params }: { params: any }) {
  const project = projects.find(
    (project: projectsType) => project.id === params.id
  );

  return {
    props: {
      project: project,
    },
  };
}
