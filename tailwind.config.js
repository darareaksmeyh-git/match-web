import flowbite from "flowbite/plugin";

export default {
  content: [
    "./app/**/*.{vue,js,ts}",
    "./components/**/*.{vue,js,ts}",
    "./pages/**/*.{vue,js,ts}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        gold: "#F8E889",
      },
      borderRadius: {
        "radius-20": "20px",
      },
      backgroundImage: {
        "gold-gradient-horizontal":
          "linear-gradient(to right, #F8E889 0%, #E4B764 100%)",
        "gold-gradient-vertical":
          "linear-gradient(to bottom, #F8E889 0%, #E4B764 100%)",
        "gray-black": "linear-gradient(to bottom, #5C5C5C 0%, #000000 100%)",
      },
    },
  },
  plugins: [flowbite],
};
