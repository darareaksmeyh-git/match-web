<template>
  <nav class="bg-white border-gray-200">
    <div class="max-w-screen-xl flex flex-wrap items-center mx-auto p-4">
      <div class="grid grid-cols-12 w-full justify-between">
        <!-- Logo 2/2 4/12 -->
        <div
          class="lg:col-span-2 md:col-span-6 sm:col-span-8 col-span-8 row-span-2 flex items-center"
        >
          <a
            href="https://flowbite.com/"
            class="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              class="h-8"
              alt="Flowbite Logo"
            />
            <span class="self-center text-2xl font-semibold whitespace-nowrap"
              >Flowbite</span
            >
          </a>
        </div>

        <!-- Small Screen from LG -->
        <div
          class="md:col-span-6 sm:col-span-4 lg:col-span-0 col-span-4 flex items-center justify-end lg:hidden"
        >
          <!-- Language  -->
          <button
            type="button"
            data-dropdown-toggle="language-dropdown-menu-sm"
            class="inline-flex items-center font-medium justify-center px-4 py-2 text-sm text-gray-900"
          >
            <svg
              class="w-5 h-5 rounded-full me-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 3900 3900"
            >
              <path fill="#b22234" d="M0 0h7410v3900H0z" />
              <path
                d="M0 450h7410m0 600H0m0 600h7410m0 600H0m0 600h7410m0 600H0"
                stroke="#fff"
                stroke-width="300"
              />
              <path fill="#3c3b6e" d="M0 0h2964v2100H0z" />
              <g fill="#fff">
                <g id="d">
                  <g id="c">
                    <g id="e">
                      <g id="b">
                        <path
                          id="a"
                          d="M247 90l70.534 217.082-184.66-134.164h228.253L176.466 307.082z"
                        />
                        <use xlink:href="#a" y="420" />
                        <use xlink:href="#a" y="840" />
                        <use xlink:href="#a" y="1260" />
                      </g>
                      <use xlink:href="#a" y="1680" />
                    </g>
                    <use xlink:href="#b" x="247" y="210" />
                  </g>
                  <use xlink:href="#c" x="494" />
                </g>
                <use xlink:href="#d" x="988" />
                <use xlink:href="#c" x="1976" />
                <use xlink:href="#e" x="2470" />
              </g>
            </svg>
          </button>
          <!-- Dropdown -->
          <div
            class="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow-sm"
            id="language-dropdown-menu-sm"
          >
            <ul class="py-2 font-medium" role="none">
              <li>
                <a
                  href="#"
                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  role="menuitem"
                >
                  <div class="inline-flex items-center">
                    <svg
                      aria-hidden="true"
                      class="h-3.5 w-3.5 rounded-full me-2"
                      xmlns="http://www.w3.org/2000/svg"
                      id="flag-icon-css-us"
                      viewBox="0 0 512 512"
                    >
                      <g fill-rule="evenodd">
                        <g stroke-width="1pt">
                          <path
                            fill="#bd3d44"
                            d="M0 0h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0z"
                            transform="scale(3.9385)"
                          />
                          <path
                            fill="#fff"
                            d="M0 10h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0z"
                            transform="scale(3.9385)"
                          />
                        </g>
                        <path
                          fill="#192f5d"
                          d="M0 0h98.8v70H0z"
                          transform="scale(3.9385)"
                        />
                        <path
                          fill="#fff"
                          d="M8.2 3l1 2.8H12L9.7 7.5l.9 2.7-2.4-1.7L6 10.2l.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7L74 8.5l-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 7.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 24.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 21.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 38.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 35.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 52.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 49.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 66.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 63.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9z"
                          transform="scale(3.9385)"
                        />
                      </g>
                    </svg>
                    English (US)
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  role="menuitem"
                >
                  <div class="inline-flex items-center">
                    <svg
                      class="h-3.5 w-3.5 rounded-full me-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      id="flag-icon-css-de"
                      viewBox="0 0 512 512"
                    >
                      <path fill="#ffce00" d="M0 341.3h512V512H0z" />
                      <path d="M0 0h512v170.7H0z" />
                      <path fill="#d00" d="M0 170.7h512v170.6H0z" />
                    </svg>
                    Deutsch
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  role="menuitem"
                >
                  <div class="inline-flex items-center">
                    <svg
                      class="h-3.5 w-3.5 rounded-full me-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      id="flag-icon-css-it"
                      viewBox="0 0 512 512"
                    >
                      <g fill-rule="evenodd" stroke-width="1pt">
                        <path fill="#fff" d="M0 0h512v512H0z" />
                        <path fill="#009246" d="M0 0h170.7v512H0z" />
                        <path fill="#ce2b37" d="M341.3 0H512v512H341.3z" />
                      </g>
                    </svg>
                    Italiano
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  role="menuitem"
                >
                  <div class="inline-flex items-center">
                    <svg
                      class="h-3.5 w-3.5 rounded-full me-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      id="flag-icon-css-cn"
                      viewBox="0 0 512 512"
                    >
                      <defs>
                        <path
                          id="a"
                          fill="#ffde00"
                          d="M1-.3L-.7.8 0-1 .6.8-1-.3z"
                        />
                      </defs>
                      <path fill="#de2910" d="M0 0h512v512H0z" />
                      <use
                        width="30"
                        height="20"
                        transform="matrix(76.8 0 0 76.8 128 128)"
                        xlink:href="#a"
                      />
                      <use
                        width="30"
                        height="20"
                        transform="rotate(-121 142.6 -47) scale(25.5827)"
                        xlink:href="#a"
                      />
                      <use
                        width="30"
                        height="20"
                        transform="rotate(-98.1 198 -82) scale(25.6)"
                        xlink:href="#a"
                      />
                      <use
                        width="30"
                        height="20"
                        transform="rotate(-74 272.4 -114) scale(25.6137)"
                        xlink:href="#a"
                      />
                      <use
                        width="30"
                        height="20"
                        transform="matrix(16 -19.968 19.968 16 256 230.4)"
                        xlink:href="#a"
                      />
                    </svg>
                    中文 (繁體)
                  </div>
                </a>
              </li>
            </ul>
          </div>
          <!-- Burger Menu -->
        </div>
        <!-- Top Menu 1/2 8/12 -->
        <div
          class="bg-gold-gradient-horizontal py-4 px-2 col-span-10 lg:col-span-10 flex items-center justify-center w-full hidden lg:flex lg:w-auto lg:order-1 space-x-4 text-sm text-gray-700"
          id="navbar-top"
        >
          <ul
            class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0"
          >
            <li>
              <a
                href="#"
                class="block py-2 px-3 text-gray-900 rounded-sm md:bg-transparent md:p-0"
                aria-current="page"
                >lịch trực tiếp</a
              >
            </li>
            <li>
              <a
                href="#"
                class="block py-2 px-3 md:p-0 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700"
                >lịch thi đấu</a
              >
            </li>
            <li>
              <a
                href="#"
                class="block py-2 px-3 md:p-0 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700"
                >tỷ lệ kèo</a
              >
            </li>
            <li>
              <a
                href="#"
                class="block py-2 px-3 md:p-0 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700"
                >kết quả</a
              >
            </li>
            <li>
              <a
                href="#"
                class="block py-2 px-3 md:p-0 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700"
                >phòng chat</a
              >
            </li>
            <li>
              <a
                href="#"
                class="block py-2 px-3 md:p-0 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700"
                >tin tức</a
              >
            </li>
          </ul>
          <a
            href="#"
            type="button"
            class="text-black bg-white rounded-radius-20 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center"
            >đăng ký</a
          >
          <a
            href="#"
            type="button"
            class="text-white bg-gray-black rounded-radius-20 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center"
            >đăng nhập</a
          >
        </div>
        <!-- Main Menu 1/2 8/12 -->
        <div
          class="bg-black py-4 px-2 col-span-10 lg:col-span-10 flex items-center justify-center w-full hidden lg:flex lg:w-auto lg:order-2 space-x-4 text-sm text-gray-700"
          id="navbar-main"
        >
          <div
            class="flex items-center md:order-2 space-x-1 md:space-x-0 rtl:space-x-reverse"
          >
            <ul
              class="ul-li-2 flex flex-col items-center font-medium p-4 md:p-0 mt-4 mr-5 border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0"
            >
              <li>
                <a
                  href="#"
                  class="flex items-center bg-gradient-to-b from-[#F8E889] to-[#E4B764] bg-clip-text text-transparent block py-2 px-3 rounded-sm md:p-0"
                  aria-current="page"
                >
                  <img
                    src="../assets/icons/chat.svg"
                    alt="chat icon"
                    class="me-1"
                  />
                  Bảng Tin</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="flex items-center bg-gradient-to-b from-[#F8E889] to-[#E4B764] bg-clip-text text-transparent block py-2 px-3 md:p-0 rounded-sm hover:bg-gray-100 md:hover:text-blue-700"
                >
                  <img
                    src="../assets/icons/reels.svg"
                    alt="reels icon"
                    class="me-1"
                  />
                  Reels</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="flex items-center bg-gradient-to-b from-[#F8E889] to-[#E4B764] bg-clip-text text-transparent block py-2 px-3 md:p-0 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700"
                  ><img
                    src="../assets/icons/highlight.svg"
                    alt="highlight"
                    class="me-1"
                  />
                  Highlight</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="flex items-center bg-gradient-to-b from-[#F8E889] to-[#E4B764] bg-clip-text text-transparent block py-2 px-3 md:p-0 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700"
                  ><img
                    src="../assets/icons/feedback.svg"
                    alt="feedback"
                    class="me-1"
                  />Tip Kèo</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="flex items-center bg-gradient-to-b from-[#F8E889] to-[#E4B764] bg-clip-text text-transparent block py-2 px-3 md:p-0 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700"
                  ><img
                    src="../assets/icons/Movie.svg"
                    alt="movie"
                    class="me-1"
                  />Phim Ảnh</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="flex items-center bg-gradient-to-b from-[#F8E889] to-[#E4B764] bg-clip-text text-transparent block py-2 px-3 md:p-0 text-gray-900 rounded-sm hover:bg-gray-100"
                >
                  <img src="../assets/icons/book.svg" alt="book" class="me-1" />
                  Truyện Tranh</a
                >
              </li>
              <a
                href="#"
                type="button"
                class="a-m1 flex items-center text-black bg-white rounded-radius-20 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium text-sm pl-0 pr-3 py-1 ml-0"
              >
                <img src="../assets/icons/vn.svg" alt="vn" class="ms-1" />
                <span class="ml-2">tiếng việt</span>
              </a>
            </ul>

            <!-- Toggle Switch -->

            <label class="inline-flex items-center cursor-pointer relative">
              <input type="checkbox" value="" class="sr-only peer" />
              <div
                class="relative w-16 h-8 border border-gold bg-gray-black peer-focus:outline-none rounded-full peer"
              >
                <div
                  class="absolute top-[-1px] start-[0px] h-8 w-8 bg-gray-black border border-gold rounded-full transition-all peer-checked:translate-x-[calc(100%-3rem)] rtl:peer-checked:-translate-x-[calc(100%-3rem)] flex items-center justify-center overflow-hidden"
                >
                  <svg
                    class="w-10 h-10"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 30 31"
                    fill="none"
                  >
                    <path
                      d="M7.81875 9.42345C8.12422 9.72892 8.61875 9.72892 8.92341 9.42345C9.2281 9.11797 9.2281 8.62345 8.92341 8.31879L7.26642 6.66095C6.96095 6.35547 6.46642 6.35547 6.16172 6.66095C5.85625 6.96642 5.85625 7.46095 6.16172 7.76565L7.81875 9.42345ZM8.28905 21.1172L6.64763 22.7586C6.3453 23.0609 6.3453 23.5508 6.64763 23.8531C6.94996 24.1555 7.43983 24.1555 7.74216 23.8531L9.38358 22.2117C9.68591 21.9094 9.68591 21.4195 9.38358 21.1172C9.08125 20.8149 8.59142 20.8148 8.28905 21.1172ZM15 6.90625C15.4312 6.90625 15.7812 6.55625 15.7812 6.125V3.78125C15.7812 3.35 15.4312 3 15 3C14.5687 3 14.2188 3.35 14.2188 3.78125V6.125C14.2188 6.55625 14.5687 6.90625 15 6.90625ZM22.5164 9.0781L24.1578 7.43668C24.4602 7.13436 24.4602 6.64449 24.1578 6.34216C23.8555 6.03983 23.3656 6.03983 23.0633 6.34216L21.4219 7.98358C21.1195 8.28591 21.1195 8.77578 21.4219 9.0781C21.7242 9.38047 22.2141 9.38047 22.5164 9.0781ZM5.625 14.7188H3.28125C2.85 14.7188 2.5 15.0687 2.5 15.5C2.5 15.9312 2.85 16.2812 3.28125 16.2812H5.625C6.05625 16.2812 6.40625 15.9312 6.40625 15.5C6.40625 15.0687 6.05625 14.7188 5.625 14.7188ZM15 24.0938C14.5687 24.0938 14.2188 24.4438 14.2188 24.875V27.2188C14.2188 27.65 14.5687 28 15 28C15.4312 28 15.7812 27.65 15.7812 27.2188V24.875C15.7812 24.4438 15.4312 24.0938 15 24.0938ZM26.7188 14.7188H24.375C23.9438 14.7188 23.5938 15.0687 23.5938 15.5C23.5938 15.9312 23.9438 16.2812 24.375 16.2812H26.7188C27.15 16.2812 27.5 15.9312 27.5 15.5C27.5 15.0687 27.15 14.7188 26.7188 14.7188ZM22.1812 21.5766C21.8758 21.2711 21.3813 21.2711 21.0766 21.5766C20.7711 21.8821 20.7711 22.3766 21.0766 22.6812L22.7336 24.3383C23.0391 24.6438 23.5336 24.6438 23.8383 24.3383C24.143 24.0328 24.1438 23.5383 23.8383 23.2336L22.1812 21.5766ZM15 8.46405C11.1141 8.46405 7.96405 11.6141 7.96405 15.5C7.96405 19.3859 11.1141 22.5359 15 22.5359C18.8859 22.5359 22.0359 19.3859 22.0359 15.5C22.0359 11.6141 18.8859 8.46405 15 8.46405Z"
                      fill="#E4B764"
                    />
                  </svg>
                </div>
              </div>

              <span class="ms-3 text-sm font-medium text-gray-900"></span>
            </label>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
<script setup>
import { onMounted } from "vue";

onMounted(async () => {
  const flowbite = await import("flowbite");
  flowbite.initDropdowns(); // dropdowns
  flowbite.initCollapses(); // collapsible menu
});
</script>
