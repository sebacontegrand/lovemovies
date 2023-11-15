"use client";
import Link from "next/link";
import film from "../../assets/img/film.jpg";
import burger from "../../assets/img/menu-outline.svg";
import Close from "../../assets/img/close-circle-outline.svg";
import Image from "next/image";

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";

const Nav = () => {
  const [open, setOpen] = useState(true);
  const [openSearch, setOpenSearch] = useState(false);
  const [inputValue, setInputValue] = useState<string>("");
  const navLinksRef = useRef<HTMLDivElement | null>(null);

  const OntoggleMenu = () => {
    setOpen(!open);
    if (navLinksRef.current) {
      navLinksRef.current.classList.toggle("top-[9%]");
    }
  };
  const router = useRouter();
  const handleSearch = () => {
    setOpenSearch(!openSearch);
  };
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <nav className="flex column md:justify-between items-center md:gap-[4vw] gap-[20vw]  border-slate-400 border shadow-md">
      <div>
        <Image className="w-40 h-auto" src={film} alt="..." />
      </div>
      <div
        className={`nav-links md:static absolute bg-white md:min-h-fit min-h-[60vh]  left-0 ${
          open ? "top-[-100%]" : "top-[16%]"
        } md:w-auto w-full items-center px-5`}
        ref={navLinksRef}
      >
        <ul className="flex md:flex-row flex-col md:items-center md:gap-[8vw] gap-6">
          <li>
            <Link
              className="hover:text-gray-500 font-mono"
              href=""
              onClick={handleSearch}
            >
              Search Movies
            </Link>
            {openSearch ? (
              <div>
                <input
                  type="text"
                  className="bg-slate-100 shadow-xl rounded-md w-96 ml-1"
                  value={inputValue}
                  onChange={handleChange}
                />
                <button className="bg-blue-500 rounded-md text-black p-1 shadow-xl hover:bg-sky-700 ">
                  Search
                </button>
              </div>
            ) : (
              ""
            )}
          </li>
          <li>
            <Link className="hover:text-gray-500 font-mono" href="">
              Movies We Love
            </Link>
          </li>
          <li>
            <Link className="hover:text-gray-500 font-mono" href="">
              Fav
            </Link>
          </li>
        </ul>
      </div>
      <div className="flex col items-center gap-6 ">
        <button className="bg-[blue] text-white px-5 py-2 rounded-full hover:bg-slate-500 right-0">
          Sign In
        </button>

        <Image
          className="w-6 h-auto cursor-pointer md:hidden"
          src={open ? burger : Close}
          alt="..."
          onClick={OntoggleMenu}
        />
      </div>
    </nav>
  );
};

export default Nav;
