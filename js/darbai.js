


/* let films = [
  ["Matrica", "Sci-Fi", 8.7],
  ["Titanikas", "Romance", 7.8],
  ["Avengers: Endgame", "Action", 8.4],
  ["Krikstatevis", "Crime", 9.2],
  ["Srekas", "komedija", 8.8]
];
let favoriteGenre = "Sci-Fi"; // Mėgstamas žanras
let desiredRating = 8.5; // Norimas įvertis

function recommendMovies(genre, rating) 
  let recommendedMovies = [];
*/ 
  
     let films = [
      ["The Matrix", "Sci-Fi", 8.7],
      ["Titanic", "Romance", 7.8],
      ["Avengers: Endgame", "Action", 8.4],
      ["The Godfather", "Crime", 9.2],
      ["Inception", "Sci-Fi", 8.8]
    ];

    let favoriteGenre = "Sci-Fi"; // Mėgstamas žanras
    let desiredRating = 8.5; // Norimas įvertinimas

    function recommendMovies(genre, rating) {
      let recommendedMovies = [];

      for (let i = 0; i < films.length; i++) {
        let movie = films[i];

        if (movie[1] === genre && movie[2] >= rating) {
          recommendedMovies.push(movie[0]);
        }
      }

      if (recommendedMovies.length > 0) {
        console.log("Rekomenduojami filmai pagal jūsų kriterijus:");
        recommendedMovies.forEach(movie => console.log(movie));
      } else {
        console.log("Nėra filmų, kurie atitiktų jūsų kriterijus.");
      }
    }

    recommendMovies(favoriteGenre, desiredRating);

console.log('sekantiuzduotis----------------')


    // 1. Skaičiaus tipo kintamieji
let num1 = 10;
let num2 = 20;

// Palyginimai skaičiams
console.log("Palyginimai tarp skaičių:");
console.log(num1 > num2 ? "Pomidoras" : "Bandykite kitą kartą.");
console.log(num1 < num2 ? "Pomidoras" : "Bandykite kitą kartą.");
console.log(num1 === num2 ? "Pomidoras" : "Bandykite kitą kartą.");
console.log(num1 !== num2 ? "Pomidoras" : "Bandykite kitą kartą.");
console.log(num1 >= num2 ? "Pomidoras" : "Bandykite kitą kartą.");
console.log(num1 <= num2 ? "Pomidoras" : "Bandykite kitą kartą.");

// 2. Teksto tipo kintamieji
let str1 = "JavaScript";
let str2 = "Java";

// Išvedame teksto ilgį
console.log("\nTeksto ilgiai:");
console.log(`Pirmo teksto ilgis: ${str1.length}`);
console.log(`Antro teksto ilgis: ${str2.length}`);

// Palyginimai tarp teksto ilgių
console.log("\nPalyginimai tarp teksto ilgių:");
console.log(str1.length > str2.length ? "Pomidoras" : "Bandykite kitą kartą.");
console.log(str1.length < str2.length ? "Pomidoras" : "Bandykite kitą kartą.");
console.log(str1.length === str2.length ? "Pomidoras" : "Bandykite kitą kartą.");
console.log(str1.length !== str2.length ? "Pomidoras" : "Bandykite kitą kartą.");
console.log(str1.length >= str2.length ? "Pomidoras" : "Bandykite kitą kartą.");
console.log(str1.length <= str2.length ? "Pomidoras" : "Bandykite kitą kartą.");

// 3. Sąrašo tipo kintamieji
let list1 = [1, 2, 3, 4];
let list2 = [5, 6, 7];

// Išvedame sąrašo ilgį
console.log("\nSąrašo ilgiai:");
console.log(`Pirmo sąrašo ilgis: ${list1.length}`);
console.log(`Antro sąrašo ilgis: ${list2.length}`);

// Palyginimai tarp sąrašo ilgių
console.log("\nPalyginimai tarp sąrašo ilgių:");
console.log(list1.length > list2.length ? "Pomidoras" : "Bandykite kitą kartą.");
console.log(list1.length < list2.length ? "Pomidoras" : "Bandykite kitą kartą.");
console.log(list1.length === list2.length ? "Pomidoras" : "Bandykite kitą kartą.");
console.log(list1.length !== list2.length ? "Pomidoras" : "Bandykite kitą kartą.");
console.log(list1.length >= list2.length ? "Pomidoras" : "Bandykite kitą kartą.");
console.log(list1.length <= list2.length ? "Pomidoras" : "Bandykite kitą kartą.");
