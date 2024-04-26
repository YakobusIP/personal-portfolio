import HomeAbout from "@/components/HomeAbout";
import HomeMain from "@/components/HomeMain";
import HomeSkills from "@/components/HomeSkills";
import { Separator } from "@/components/ui/separator";

function Home() {
  return (
    <>
      <HomeMain />
      <HomeAbout />
      <Separator className="w-4/5" />
      <HomeSkills />
    </>
  );
}

export default Home;
