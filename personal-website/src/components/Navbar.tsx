function Navbar() {
  return (
    <nav className="flex w-full m-auto py-4 fixed top-0 text-white bg-primary">
      <div className="flex w-4/5 justify-between items-center m-auto">
        <div className="flex items-center justify-center gap-4">
          <img src="/main-logo.png" className="w-12" />
          <h3>Yakobus Iryanto</h3>
        </div>
        <div className="flex w-2/5 justify-between">
          <p>Home</p>
          <p>About</p>
          <p>Skills</p>
          <p>Projects</p>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
