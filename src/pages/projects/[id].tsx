import { ImageContain } from "@/components/ImageContain";
import { projects, projectsType } from "../../data/projects";
import Image from "next/image";
import React from "react";
import { MainLayout } from "@/layout/MainLayout";
import { Typography } from "@/components/Typography";

export default function Project({ project }: { project: projectsType }) {
  return (
    <>
      <MainLayout className="pt-10">
        <div className="flex flex-row gap-8">
          <div className="w-[440px] flex h-[260px] border-[3px] border-dashed rounded-2xl border-blue-400">
            <ImageContain alt="projects" src={project.poster} rounded />
          </div>
          <div className="flex flex-1 flex-col">
            <Typography variant="h2">{project.title}</Typography>
            <Typography variant="h6">{project.description}</Typography>
          </div>
        </div>
        <div></div>
      </MainLayout>
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
