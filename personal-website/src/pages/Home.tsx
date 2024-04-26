function Home() {
  return (
    <>
      <section className="flex w-full min-h-screen bg-[#171a1a] text-white">
        <div className="flex w-4/5 items-end justify-around mx-auto">
          <div className="flex flex-col h-full justify-center gap-4">
            <h3>Hello</h3>
            <h1>I'm Yakobus Iryanto Prasethio</h1>
            <h2>Indonesian Web Developer</h2>
            <div className="flex flex-col gap-0">
              <p>Email: yakobusiryantoprasethio@gmail.com</p>
              <p>Phone number: +62 898-748-1816</p>
            </div>
          </div>
          <div>
            <img className="w-[28rem]" src="/public/my-photo.png" />
          </div>
        </div>
      </section>
      <section className="flex w-full min-h-screen bg-white text-white"></section>
    </>
  );
}

export default Home;
