import type { JSX } from "react";

export default interface Project {
  id: string,
  name: string,
  githubUrl: string,
  icons: JSX.Element[]
}