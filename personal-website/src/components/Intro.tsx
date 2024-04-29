import { useScrollContext } from "@/contexts/ScrollContext";

function Intro() {
  const { introRef } = useScrollContext();
  return (
    <section
      id="intro"
      ref={introRef}
      className="flex w-full h-[80vh] bg-primary text-white"
    >
      <div className="flex w-4/5 items-end justify-around mx-auto">
        <div className="flex flex-col h-full justify-center gap-4">
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
            src="/my-photo.png"
          />
        </div>
      </div>
    </section>
  );
}

export default Intro;
