import { Progress } from "@/components/ui/progress";

type Props = {
  name: string;
  image_path: string;
  ability: number;
  experience: string;
};

function SkillProgress({ name, image_path, ability, experience }: Props) {
  const proficiencyLabel = (ability: number) => {
    switch (ability) {
      case 60:
        return "Basic";
      case 70:
        return "Comfortable";
      case 80:
        return "Proficient";
      case 90:
        return "Expert";
      case 100:
        return "Master";
      default:
        return "Basic";
    }
  };

  return (
    <div className="flex items-center justify-center gap-2">
      <img src={`${import.meta.env.BASE_URL}${image_path}`} className="w-10" />
      <div className="flex flex-col gap-2 w-full">
        <div className="flex items-center justify-between gap-4">
          <p>{name}</p>
          <p>{proficiencyLabel(ability)}</p>
        </div>
        <Progress value={ability} />
        <p>{experience} Experience</p>
      </div>
    </div>
  );
}

export default SkillProgress;
