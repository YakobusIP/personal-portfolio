function Navbar() {
  return (
    <nav className="flex w-full m-auto py-4 fixed top-0 text-white bg-[#171a1a]">
      <div className="flex w-4/5 justify-between items-center m-auto">
        <div className="flex items-center justify-center gap-4">
          <img src="/public/main-logo.png" className="w-12" />
          <h4>Yakobus Iryanto Prasethio</h4>
        </div>
        <div className="flex w-1/5 justify-between">
          <p>Home</p>
          <p>Projects</p>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
