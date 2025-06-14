import { ExperienceType, ProjectStatus } from "@/lib/enums";

export const experienceTypeColors = {
  [ExperienceType.FULL_TIME]:
    "bg-green-500/20 text-green-300 border-green-500/30",
  [ExperienceType.PART_TIME]: "bg-red-500/20 text-red-300 border-red-500/30",
  [ExperienceType.INTERNSHIP]:
    "bg-blue-500/20 text-blue-300 border-blue-500/30",
  [ExperienceType.APPRENTICESHIP]:
    "bg-purple-500/20 text-purple-300 border-purple-500/30"
};

export const projectStatusColors = {
  [ProjectStatus.PROJECT_COMPLETED]:
    "bg-green-500/20 text-green-300 border-green-500/30",
  [ProjectStatus.PROJECT_IN_PROGRESS]:
    "bg-yellow-500/20 text-yellow-300 border-yellow-500/30"
};
