/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'riot':['Protest Riot','sans-serif']
      },
      boxShadow: {
        bottom: '0px 4px 6px -1px rgba(0, 0, 0, 0.1), 0px 2px 4px -1px rgba(0, 0, 0, 0.06)',
      },
      animation:{
        drop:"drop 2s linear infinite ",
        move:"move 10s linear infinite",
        move2:"move2 8s linear infinite "
      },
      keyframes:{
        drop:{
          "0%,100%":{
            transform: 'translateY(0)',
            opacity:0.2,
          },
          "25%":{
            transform: 'translateY(26px)  scale(0.4)',
            opacity:0.5,
          },
          "50%":{
            transform: 'translateY(100%) scale(1.3)',
            opacity:1,
            
          },
          "65%":{
            transform: 'translateY(50%)  sclae(1)',
            opacity:0.7,
          },
          "85%":{
            transform: 'translateY(20%) scale(0.7)',
            opacity:0.4,
          },

        },
        move:{
          "0%,100%":{
            // transform: 'tr',
            opacity:0.2,
          },
          "45%":{
            transform: 'translateY(-20%)  translateX(4%)',
          },
        "65%":{
          transform: 'translateY(30%)  translateX(8%)',
        },
          "85%":{
            transform:'translateY(50%) translateX(26%) '
          }
        },
        move2:{
          "0%":{
            // transform: 'translateY(23%) translateX(-56px)',
            opacity:0.2,
          },
          "25%":{
            transform: 'translateY(-20%) translateX(-40%) ',
          },
          "65%":{
            transform: 'translateY(-30%) translateX(35%)',
          },
          "85%":{
            transform:'translateY(-50%) translateX(5%)'
          },
          "100%":{
            transform:'translateY(-20%) translateX(2%)'
          }
        }
      },

    },
  },
  plugins: [
    // require('flowbite/plugin'),
  ],
}

