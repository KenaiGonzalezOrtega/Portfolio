import ExpressjsIcon from "../icons/ExpressjsIcon";
import HexagonIcon from "../icons/HexagonIcon";
import NodejsIcon from "../icons/NodejsIcon";
import ReactIcon from "../icons/ReactIcon";
import TSIcon from "../icons/TSIcon";
import type Project from "../interfaces/Project";
import type { ProjectWithoutId } from "../interfaces/Project";

import { generateIdWithAKey } from "../services/generateID";

const items: ProjectWithoutId[] = [
  {
    name: "SimpLink",
    appUrl: "https://simp-link.vercel.app/",
    githubUrl: "https://github.com/KenaiGonzalezOrtega/SimpLink",
    icons: [
      ReactIcon(),
      TSIcon(),
      NodejsIcon(),
      ExpressjsIcon(),
      HexagonIcon()
    ],
    demoUrl: "https://vleztvuwggqccychzzli.supabase.co/storage/v1/object/public/simplink//SimpLink_DEMO.webm",
    coverImgUrl: "https://vleztvuwggqccychzzli.supabase.co/storage/v1/object/public/simplink//img1.png"
  },

]

const projects: Project[] = items.map(item => ({ ...item, id: generateIdWithAKey(item.name) }))

export default projects;