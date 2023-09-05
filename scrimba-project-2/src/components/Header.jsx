const Header = () => {
  return (
    <header className="fixed top-0 w-full z-20 bg-white">
     <nav className="px-10 py-5 shadow-md flex justify-center md:justify-start">
      <img className="w-[4.5rem] md:w-[6rem]" src="/logo.svg" alt="" />
     </nav>
    </header>
  );
};

export default Header;
