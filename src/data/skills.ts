
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
import generateId from "../services/generateID";


const items = [
  { icon: HTMLIcon(), text: "HTML" },
  { icon: CSSIcon(), text: "CSS" },
  { icon: JSIcon(), text: "JavaScript" },
  { icon: TSIcon(), text: "TypeScript" },
  { icon: ReactIcon(), text: "React" },
  { icon: VueIcon(), text: "Vue" },
  { icon: TailwindcssIcon(), text: "Tailwindcss" },
  { icon: NodejsIcon(), text: "Node.js" },
  { icon: ExpressjsIcon(), text: "Express.js" },
];

const skills: IconItem[] = items.map(item => ({ ...item, id: generateId() }))

export default skills;