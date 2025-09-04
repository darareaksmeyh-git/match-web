<template>
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
          <img src="../assets/icons/chat.svg" alt="chat icon" class="me-1" />
          Bảng Tin</a
        >
      </li>
      <li>
        <a
          href="#"
          class="flex items-center bg-gradient-to-b from-[#F8E889] to-[#E4B764] bg-clip-text text-transparent block py-2 px-3 md:p-0 rounded-sm hover:bg-gray-100 md:hover:text-blue-700"
        >
          <img src="../assets/icons/reels.svg" alt="reels icon" class="me-1" />
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
          ><img src="../assets/icons/Movie.svg" alt="movie" class="me-1" />Phim
          Ảnh</a
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
</template>
