import type { JSX } from "react";

export default interface Project extends ProjectWithoutId {
  id: string
}

export interface ProjectWithoutId {
  name: string,
  githubUrl: string,
  icons: JSX.Element[],
  demoUrl: string,
  appUrl: string,
  coverImgUrl: string
}