import AdaptableIcon from "../icons/AdaptableIcon";
import BrainIcon from "../icons/BrainIcon";
import GlassIcon from "../icons/GlassIcon";
import LearnIcon from "../icons/LearnIcon";
import ProblemSolvingIcon from "../icons/ProblemSolvingIcon";
import TeamIcon from "../icons/TeamIcon";
import type IconItem from "../interfaces/IconItems";
import generateId from "./generateID";

const items: IconItem[] = [
  { icon: TeamIcon(), text: "Team work", id: generateId() },
  { icon: AdaptableIcon(), text: "Adaptable", id: generateId() },
  { icon: ProblemSolvingIcon(), text: "Problem solving", id: generateId() },
  { icon: GlassIcon(), text: "Attention to detail", id: generateId() },
  { icon: BrainIcon(), text: "Open Mindedness", id: generateId() },
  { icon: LearnIcon(), text: "Continuous Learning", id: generateId() },

]

export default items;