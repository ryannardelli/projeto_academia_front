"use client";
import { useState } from 'react';
import { UserPlusIcon } from '@heroicons/react/24/solid'
import Link from 'next/link';

function HeaderMain() {
      const [isMenuOpen, setIsMenuOpen] = useState(false);

      const handleToggleMenu = () =>setIsMenuOpen(!isMenuOpen);
      const handleCloseMenu = () => setIsMenuOpen(false);

  return(
      <header className="flex shadow-[0px_0px_16px_rgba(17,_17,_26,_0.1)] py-4 px-4 sm:px-6 bg-primary text-white min-h-[70px] tracking-wide relative z-50 font-poppins">
      <div className="flex flex-wrap items-center justify-between gap-4 w-full max-w-screen-xl mx-auto">
        <Link href="/" className="max-sm:hidden">
            <img src="assets/img/logo.png" alt="logo" className="w-36" />
        </Link>

        <Link href="/" className="hidden max-sm:block">
            <img src="assets/img/logo.png" alt="logo" className="w-28" />
        </Link>

        <div id="collapseMenu"
          className={`${
          isMenuOpen ? 'block' : 'hidden'
        } lg:block max-lg:before:fixed max-lg:before:opacity-50 max-lg:before:inset-0 max-lg:before:z-50`}>
           <button onClick={handleCloseMenu} id="toggleClose" className={`lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white w-9 h-9 flex items-center justify-center border border-gray-200 cursor-pointer ${isMenuOpen ? 'block' : 'hidden'}`}>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" viewBox="0 0 320.591 320.591">
              <path
                d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                data-original="#000000"></path>
              <path
                d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                data-original="#000000"></path>
            </svg>
          </button>

          <ul
            className="lg:flex gap-x-5 max-lg:space-y-3 max-lg:fixed max-lg:bg-primary max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50">
            <li className="mb-6 hidden max-lg:block">
              <a href="#"><img src="assets/img/logo.png" alt="logo" className="w-36" />
              </a>
            </li>
            <li className="max-lg:border-b max-lg:border-gray-300 max-lg:py-3 px-3">
              <a href='#' className="hover:text-secondary text-white font-medium block text-base">Home</a>
            </li>
            <li className="max-lg:border-b max-lg:border-gray-300 max-lg:py-3 px-3"><a href='#'
              className="hover:text-secondary text-white font-medium block text-base">Treinos Online</a>
            </li>
            <li className="max-lg:border-b max-lg:border-gray-300 max-lg:py-3 px-3"><a href='#'
              className="hover:text-secondary text-white font-medium block text-base">Planos de Treino</a>
            </li>
            <li className="max-lg:border-b max-lg:border-gray-300 max-lg:py-3 px-3"><a href='#'
              className="hover:text-secondary text-white font-medium block text-base">Dieta</a>
            </li>
            <li className="max-lg:border-b max-lg:border-gray-300 max-lg:py-3 px-3"><a href='#'
              className="hover:text-secondary text-white font-medium block text-base">Sobre</a>
            </li>
            <li className="max-lg:border-b max-lg:border-gray-300 max-lg:py-3 px-3"><a href='#'
              className="hover:text-secondary text-white font-medium block text-base">Fale Conosco</a>
            </li>
          </ul>
        </div>

        <div className="flex items-center max-lg:ml-auto space-x-4">
          <a href='/login' className="bg-secondary hover:bg-assets px-4 py-2 rounded-full text-white text-[15px] font-medium flex items-center justify-center gap-2 cursor-pointer">
            <UserPlusIcon className="h-5 w-5" />
            Inscreva-se
          </a>

          <button id="toggleOpen" onClick={handleToggleMenu} className="lg:hidden cursor-pointer">
            <svg className="w-7 h-7" fill="#fff" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"></path>
            </svg>
          </button>

          {/* OVERLAY */}
        {isMenuOpen && (
          <div
            onClick={handleCloseMenu}
            className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40 lg:hidden"
          ></div>
        )}
        </div>
      </div>
    </header>
  );
}

export default HeaderMain;
