/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
  ],
  theme: {
    extend: {
      fontFamily:{
        "Circular" : ['Circular' , 'sans-serif' , 'Arial'],
      },
      colors: {
        "app-blue" : "#222831",
        "app-grey" : "#19182580",
        "app-purple" : "#5D50C6",
        "app-pink" : "#F85E9F",
        "app-orange" : "#FF5722",
        "app-darkGrey" : "#393E46",
        "semi-black" : "#191825",
        "app-yellow" : "#FACD49",
      },
      backgroundImage : {
        "backTrust" : "url('img/Layer_1.png')",
      }

    },
  },
  plugins: [],
}

