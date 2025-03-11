import AdaptableIcon from "../icons/AdaptableIcon";
import BrainIcon from "../icons/BrainIcon";
import GlassIcon from "../icons/GlassIcon";
import LearnIcon from "../icons/LearnIcon";
import ProblemSolvingIcon from "../icons/ProblemSolvingIcon";
import TeamIcon from "../icons/TeamIcon";
import type IconItem from "../interfaces/IconItems";
import generateId from "../services/generateID";

const items = [
  { icon: TeamIcon(), text: "Team work" },
  { icon: AdaptableIcon(), text: "Adaptable" },
  { icon: ProblemSolvingIcon(), text: "Problem solving" },
  { icon: GlassIcon(), text: "Attention to detail" },
  { icon: BrainIcon(), text: "Open Mindedness" },
  { icon: LearnIcon(), text: "Continuous Learning" },

]

const softSkills: IconItem[] = items.map(item => ({ ...item, id: generateId() }))

export default softSkills;