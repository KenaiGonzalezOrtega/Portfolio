
import CSSIcon from "../icons/CSSIcon";
import ExpressjsIcon from "../icons/ExpressjsIcon";
import HTMLIcon from "../icons/HTMLIcon";
import JSIcon from "../icons/JSIcon";
import NodejsIcon from "../icons/NodejsIcon";
import ReactIcon from "../icons/ReactIcon";
import TSIcon from "../icons/TSIcon";
import TailwindcssIcon from "../icons/TailwindcssIcon";
import VueIcon from "../icons/VueIcon";
import type IconItem from "../interfaces/IconItems";
import generateId from "./generateID";


const items: IconItem[] = [
  { icon: HTMLIcon(), text: "HTML", id: generateId() },
  { icon: CSSIcon(), text: "CSS", id: generateId() },
  { icon: JSIcon(), text: "JavaScript", id: generateId() },
  { icon: TSIcon(), text: "TypeScript", id: generateId() },
  { icon: ReactIcon(), text: "React", id: generateId() },
  { icon: VueIcon(), text: "Vue", id: generateId() },
  { icon: TailwindcssIcon(), text: "Tailwindcss", id: generateId() },
  { icon: NodejsIcon(), text: "Node.js", id: generateId() },
  { icon: ExpressjsIcon(), text: "Express.js", id: generateId() },


];

export default items;