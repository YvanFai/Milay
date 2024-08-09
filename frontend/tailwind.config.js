/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Ajouter les chemins vers tes fichiers
    './src/**/*.{js,jsx,ts,tsx}', // Inclure tous les fichiers JavaScript/TypeScript dans le dossier src
    './public/index.html',         // Inclure l'index.html
    '../templates/**/*.html',      // Inclure les fichiers Django HTML
  ],
  theme: {
    extend: {
      // Ajouter des personnalisations ici
    },
  },
  plugins: [],
}
