import { useScrollContext } from "@/contexts/ScrollContext";

function Intro() {
  const { introRef } = useScrollContext();
  return (
    <section
      id="intro"
      ref={introRef}
      className="flex w-full h-fit xl:h-[80vh] bg-primary text-white"
    >
      <div className="flex flex-col xl:flex-row w-4/5 items-center xl:items-end justify-around mx-auto gap-4">
        <div className="flex flex-col h-full justify-center text-center xl:text-left gap-4 pt-24 xl:pt-0">
          <h3>Hello</h3>
          <h1>I'm Yakobus Iryanto Prasethio</h1>
          <h2>Web Developer</h2>
          <div className="flex flex-col gap-0">
            <p>Email: yakobusiryantoprasethio@gmail.com</p>
            <p>Phone number: +62 898-748-1816</p>
          </div>
        </div>
        <div>
          <img
            className="w-[28rem] 2xl:w-[26rem] 3xl:w-[32rem]"
            src={`${import.meta.env.BASE_URL}my-photo.png`}
          />
        </div>
      </div>
    </section>
  );
}

export default Intro;
