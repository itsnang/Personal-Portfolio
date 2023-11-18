import Image from "next/image";
import { Inter } from "next/font/google";
import { ProfilePage } from "./ProfilePage";
import { MainLayout } from "@/layout/MainLayout";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <ProfilePage />
    </>
  );
}
