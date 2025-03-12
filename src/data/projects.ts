import ExpressjsIcon from "../icons/ExpressjsIcon";
import NodejsIcon from "../icons/NodejsIcon";
import ReactIcon from "../icons/ReactIcon";
import TSIcon from "../icons/TSIcon";
import type Project from "../interfaces/Project";

import { generateIdWithAKey } from "../services/generateID";

const items = [
  { name: "SimpLink", githubUrl: "https://simp-link.vercel.app/", icons: [ReactIcon(), TSIcon(), NodejsIcon(), ExpressjsIcon(),] },

]

const projects: Project[] = items.map(item => ({ ...item, id: generateIdWithAKey(item.name) }))

export default projects;