//  Problem-01: Filter females and map names

const filterFemalesAndMapNames = (people) => {
  const filteredPeople = people.filter((person) => person.gender !== "female");
  const names = filteredPeople.map((person) => person.name);
  console.log("problem-01", names);
};

const people = [
  { name: "Alice", age: 25, gender: "female" },
  { name: "Bob", age: 30, gender: "male" },
  { name: "Charlie", age: 28, gender: "male" },
  { name: "Diana", age: 22, gender: "female" },
];

filterFemalesAndMapNames(people);

// Problem-02: Get book titles

const getBookTitles = (books) => {
  const titles = books.map((book) => book.title);
  return titles;
};

const books = [
  { title: "The Lord of the Rings", author: "J.R.R. Tolkien", year: 1954 },
  { title: "Pride and Prejudice", author: "Jane Austen", year: 1813 },
  { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
];

const bookTitles = getBookTitles(books);
console.log("problem two", bookTitles);

// Problem-03: Square, double, and add five

const square = (number) => number * number;
const double = (number) => number * 2;
const addFive = (number) => number + 5;

const squareDoubleAddFive = (number) => {
  const squared = square(number);
  const doubled = double(squared);
  const result = addFive(doubled);
  return result;
};

const num = 3;
const finalResult = squareDoubleAddFive(num);
console.log("problem three", finalResult);

// Problem-04: Sort cars by year

const sortByYear = (cars) => cars.sort((car1, car2) => car1.year - car2.year);

const cars = [
  { make: "Ford", model: "Mustang", year: 2023 },
  { make: "Toyota", model: "Camry", year: 2020 },
  { make: "Honda", model: "Civic", year: 2022 },
];

const sortedCars = sortByYear(cars);
console.log("problem four", sortedCars);

// Problem-05: Update age by name

const updateAgeByName = (people, name, newAge) => {
  const updatedPeople = people.map((person) => {
    if (person.name === name) {
      return { ...person, age: newAge };
    }
    return person;
  });

  console.log("problem five", updatedPeople);
  return updatedPeople;
};

const peopleArray = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 },
];

updateAgeByName(peopleArray, "Bob", 32);