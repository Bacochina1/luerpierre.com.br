/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,mdx}",
    "./src/components/**/*.{js,jsx,mdx}",
    "./src/app/**/*.{js,jsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        stone: {
          950: '#0a0a0a', // Fundo preto profundo (quase absoluto)
        },
        ruby: {
          DEFAULT: '#702963', // Ametista/Roxo Principal
          light: '#8a3a7a',   // Brilho
          dark: '#4a1a42'     // Sombra
        }
      },
      backgroundImage: {
        // O efeito de luz sutil no fundo
        'luxury-gradient': 'radial-gradient(circle at 20% 30%, rgba(112, 41, 99, 0.15) 0%, rgba(10, 10, 10, 0) 70%), radial-gradient(circle at 80% 80%, rgba(255, 255, 255, 0.05) 0%, rgba(10, 10, 10, 0) 70%)',
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
};