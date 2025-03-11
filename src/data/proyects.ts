import ExpressjsIcon from "../icons/ExpressjsIcon";
import NodejsIcon from "../icons/NodejsIcon";
import ReactIcon from "../icons/ReactIcon";
import TSIcon from "../icons/TSIcon";
import type Proyect from "../interfaces/Proyect";
import generateId from "./generateID";

const items: Proyect[] = [
  { name: "SimpLink", githubUrl: "https://simp-link.vercel.app/", id: generateId(), icons: [ReactIcon(), TSIcon(), NodejsIcon(), ExpressjsIcon(),] },
  { name: "SimpLink", githubUrl: "https://simp-link.vercel.app/", id: generateId(), icons: [ReactIcon(), NodejsIcon(), ExpressjsIcon(),] },
  { name: "SimpLink", githubUrl: "https://simp-link.vercel.app/", id: generateId(), icons: [ReactIcon(), NodejsIcon(), ExpressjsIcon(),] },
  { name: "SimpLink", githubUrl: "https://simp-link.vercel.app/", id: generateId(), icons: [ReactIcon(), NodejsIcon(), ExpressjsIcon(), ReactIcon(), NodejsIcon(), ExpressjsIcon(), ReactIcon(), NodejsIcon(), ExpressjsIcon(),] },

]

export default items;