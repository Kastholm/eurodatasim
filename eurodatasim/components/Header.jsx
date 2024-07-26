import React from 'react';

const Header = () => {
  return (
    <header className="bg-[#F7F7F7] p-5 flex justify-between items-center fixed top-0 w-full">
      <div className="flex items-center gap-2">   
        <h2 className="font-extrabold text-[18px] lg:ml-10">EURODATASIM</h2>
      </div>
      <nav className="flex items-center gap-10">
        <ul className="flex gap-5">
          <li><a href="#products">Products</a></li>
          <li><a href="#work">How it works</a></li>
          <li><a href="#connection">Info</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;