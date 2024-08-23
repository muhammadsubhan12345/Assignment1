//Q2
let PersonName = "Muhammad Subhan"
console.log("Hello " + PersonName + ", would you like to learn some Python today")


//Q3
function toTitleCase(input: string): string {
    return input.toLowerCase().replace(/(?:^|\s)\w/g, match => match.toUpperCase());
}
let name1 = "muhammad subhan";
console.log(name1.toLowerCase());
console.log(name1.toUpperCase());
let titleCaseName = toTitleCase(name1);
console.log(titleCaseName);


//Q4
console.log("Albert Einstein once said, “A person who never made a mistake never tried anything new.”");


//Q5
let famous_person = "Albert Einstein";
let message = "“A person who never made a mistake never tried anything new.”"
console.log(famous_person + " once said, " + message);

//Q6
const nameWithWhitespace: string = "\t\n  John Doe  \n\t";

console.log("Name with whitespace:");
console.log(`"${nameWithWhitespace}"`);

const nameWithoutWhitespace: string = nameWithWhitespace.trim();

console.log("Name without whitespace:");
console.log(`"${nameWithoutWhitespace}"`);




//Q7
let a = 5;
let b = 11;
let c = 4;
let d = 16;
console.log(a += 3);
console.log(b -= 3);
console.log(c *= 2);
console.log(d /= 2);





//Q9
let favoriteNumber = 56;
let message1 = "My favorite number is: "
console.log(message1 + favoriteNumber);


//Q10
let names: string[] = ["Subhan", "Ahmed", "Daniyal", "Amir"];

for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}



//Q11
const names_: string[] = ["Alice", "Bob", "Charlie", "Diana"];

console.log("List of friends:");
for (let i = 0; i < names_.length; i++) {
    console.log(names_[i]);
}


//Q12
let names1: string[] = ["Subhan", "Ahmed", "Daniyal", "Amir"];

for (let i = 0; i < names.length; i++) {
    console.log("Hellow " + names[i] + ", please come on my birthday party");
}



//Q13
const motorcycles: string[] = ["Honda CBR600RR", "Yamaha YZF-R1", "Kawasaki Ninja ZX-10R", "Suzuki GSX-R1000"];

console.log("Statements about motorcycles:");
for (let i = 0; i < motorcycles.length; i++) {
    console.log(`I would like to own a ${motorcycles[i]}.`);
}


//Q14
const dinnerGuests: string[] = ["Albert Einstein", "Ada Lovelace", "Leonardo da Vinci"];

console.log("Dinner Invitations:");
for (let i = 0; i < dinnerGuests.length; i++) {
    console.log(`Dear ${dinnerGuests[i]},\n\nI would be honored to have you join me for dinner. It would be a pleasure to discuss your incredible contributions and ideas.\n\nSincerely,\n[Subhan]`);
}


//Q15
let dinnerGuests1: string[] = ["Albert Einstein", "Ada Lovelace", "Leonardo da Vinci"];

console.log("Initial Dinner Invitations:");
for (let i = 0; i < dinnerGuests.length; i++) {
    console.log(`Dear ${dinnerGuests[i]},\n\nI would be honored to have you join me for dinner. It would be a pleasure to discuss your incredible contributions and ideas.\n\nSincerely,\n[Your Name]`);
}

const guestWhoCantMakeIt: string = "Ada Lovelace";
console.log(`\nUnfortunately, ${guestWhoCantMakeIt} can't make it to the dinner.`);

dinnerGuests1 = dinnerGuests.filter(guest => guest !== guestWhoCantMakeIt); // Remove the guest
dinnerGuests.push("Marie Curie"); 

console.log("\nUpdated Dinner Invitations:");
for (let i = 0; i < dinnerGuests.length; i++) {
    console.log(`Dear ${dinnerGuests[i]},\n\nI would be honored to have you join me for dinner. It would be a pleasure to discuss your incredible contributions and ideas.\n\nSincerely,\n[Your Name]`);
}


//Q16
let dinnerGuests3: string[] = ["Albert Einstein", "Leonardo da Vinci", "Marie Curie"];

console.log("Initial Dinner Invitations:");
for (let i = 0; i < dinnerGuests3.length; i++) {
    console.log(`Dear ${dinnerGuests3[i]},\n\nI would be honored to have you join me for dinner. It would be a pleasure to discuss your incredible contributions and ideas.\n\nSincerely,\n[Your Name]`);
}

console.log("\nGood news! I found a bigger dinner table, so there’s more space available.");

dinnerGuests3.unshift("Nikola Tesla"); 
dinnerGuests3.splice(Math.floor(dinnerGuests3.length / 2), 0, "Grace Hopper"); 
dinnerGuests3.push("Stephen Hawking"); 

console.log("\nUpdated Dinner Invitations:");
for (let i = 0; i < dinnerGuests3.length; i++) {
    console.log(`Dear ${dinnerGuests3[i]},\n\nI would be honored to have you join me for dinner. It would be a pleasure to discuss your incredible contributions and ideas.\n\nSincerely,\n[Your Name]`);
}


//Q17
let dinnerGuests4: string[] = ["Nikola Tesla", "Albert Einstein", "Grace Hopper", "Leonardo da Vinci", "Marie Curie", "Stephen Hawking"];

console.log("Initial Dinner Invitations:");
for (let i = 0; i < dinnerGuests4.length; i++) {
    console.log(`Dear ${dinnerGuests4[i]},\n\nI would be honored to have you join me for dinner. It would be a pleasure to discuss your incredible contributions and ideas.\n\nSincerely,\n[Your Name]`);
}

console.log("\nUnfortunately, the new dinner table won’t arrive in time, and we have space for only two guests.");

while (dinnerGuests4.length > 2) {
    const removedGuest = dinnerGuests4.pop()!;
    console.log(`\nDear ${removedGuest},\n\nI'm so sorry, but due to space constraints, I can no longer invite you to dinner.\n\nSincerely,\n[Your Name]`);
}

console.log("\nUpdated Dinner Invitations for the Remaining Guests:");
for (let i = 0; i < dinnerGuests4.length; i++) {
    console.log(`Dear ${dinnerGuests4[i]},\n\nI’m pleased to confirm that you are still invited to dinner. I look forward to your company.\n\nSincerely,\n[Your Name]`);
}

dinnerGuests4 = []; 

console.log("\nFinal Guest List:");
console.log(dinnerGuests4); 


//Q18
const placesToVisit: string[] = ["Tokyo", "Paris", "New York", "Sydney", "Istanbul"];

console.log("Original Array:");
console.log(placesToVisit);

console.log("\nArray in Alphabetical Order:");
console.log([...placesToVisit].sort());

console.log("\nArray in Original Order (unchanged):");
console.log(placesToVisit);

console.log("\nArray in Reverse Alphabetical Order:");
console.log([...placesToVisit].sort().reverse());

console.log("\nArray in Original Order (unchanged):");
console.log(placesToVisit);

placesToVisit.reverse();
console.log("\nArray After Reversing the Order:");
console.log(placesToVisit);

placesToVisit.reverse();
console.log("\nArray After Reversing the Order Again (Back to Original):");
console.log(placesToVisit);

placesToVisit.sort();
console.log("\nArray Sorted in Alphabetical Order:");
console.log(placesToVisit);

placesToVisit.sort().reverse();
console.log("\nArray Sorted in Reverse Alphabetical Order:");
console.log(placesToVisit);


//Q20
const countries: string[] = ["Canada", "Japan", "Brazil", "France", "Australia", "India", "South Africa"];

console.log("List of Countries:");
console.log(countries);


//Q21
interface Book {
    title: string;
    author: string;
    yearPublished: number;
}

const books: Book[] = [
    {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        yearPublished: 1960
    },
    {
        title: "1984",
        author: "George Orwell",
        yearPublished: 1949
    },
    {
        title: "Moby Dick",
        author: "Herman Melville",
        yearPublished: 1851
    },
    {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        yearPublished: 1925
    },
    {
        title: "Pride and Prejudice",
        author: "Jane Austen",
        yearPublished: 1813
    }
];

console.log("List of Books:");
books.forEach(book => {
    console.log(`Title: ${book.title}, Author: ${book.author}, Year Published: ${book.yearPublished}`);
});

//Q22
const Countries: string[] = ["Canada", "Japan", "Brazil", "France", "Australia"];

console.log("Country at index 10:", Countries[10]); 
console.log("Country at index 2:", Countries[2]); 

//Q23
let car = 'subaru';
let number = 42;
let name = 'Alice';
let age = 30;
let isStudent = false;
let countries_ = ['Canada', 'Japan', 'Brazil'];
let person = { name: 'Alice', age: 30 };

console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru');

console.log("Is number > 50? I predict False.");
console.log(number > 50); 

console.log("Is name == 'Alice'? I predict True.");
console.log(name == 'Alice'); 

console.log("Is age < 25? I predict False.");
console.log(age < 25); 


console.log("Is 'Canada' in countries array? I predict True.");
console.log(countries.includes('Canada')); 

console.log("Is number == 42? I predict True.");
console.log(number == 42); 
console.log("Is person.age > 25? I predict True.");
console.log(person.age > 25); 

console.log("Is car != 'toyota'? I predict True.");
console.log(car != 'toyota'); 

console.log("Is name != 'Bob'? I predict True.");
console.log(name != 'Bob'); 

console.log("Is number != 50? I predict True.");
console.log(number != 50); 

console.log("Is age == 30? I predict True.");
console.log(age == 30); 

console.log("Is countries.length < 5? I predict True.");
console.log(countries.length < 5); 

console.log("Is name != 'Alice'? I predict False.");
console.log(name != 'Alice'); 

console.log("Is isStudent != false? I predict False.");
console.log(isStudent != false); 


//Q24
let greeting = 'Hello';
let response = 'hello';
let naming= 'Alice';
let anotherName = 'Bob';

let age_ = 30;
let height = 180;
let weight = 75;

let colors = ['red', 'blue', 'green'];
let favoriteColor = 'blue';
let notInArray = 'purple';

console.log("Is greeting == 'Hello'? I predict True.");
console.log(greeting == 'Hello'); 

console.log("Is response != 'hello'? I predict True.");
console.log(response != 'hello'); 

console.log("Is greeting.toLowerCase() == 'hello'? I predict True.");
console.log(greeting.toLowerCase() == 'hello'); 

console.log("Is greeting.toLowerCase() != 'Hello'? I predict False.");
console.log(greeting.toLowerCase() != 'Hello'); 

console.log("Is age == 30? I predict True.");
console.log(age == 30); 

console.log("Is height > 170? I predict True.");
console.log(height > 170); 

console.log("Is weight < 70? I predict False.");
console.log(weight < 70); 

console.log("Is age >= 30? I predict True.");
console.log(age >= 30); 
console.log("Is height <= 180? I predict True.");
console.log(height <= 180); 

console.log("Is age < 40 and height > 175? I predict True.");
console.log(age < 40 && height > 175); 

console.log("Is age > 40 or weight < 80? I predict True.");
console.log(age > 40 || weight < 80);

console.log("Is age < 20 and weight < 70? I predict False.");
console.log(age < 20 && weight < 70); 

console.log("Is age > 40 or weight > 80? I predict False.");
console.log(age > 40 || weight > 80); 

console.log("Is 'blue' in colors array? I predict True.");
console.log(colors.includes('blue')); 

console.log("Is 'yellow' not in colors array? I predict True.");
console.log(!colors.includes('yellow')); 

console.log("Is 'purple' not in colors array? I predict True.");
console.log(!colors.includes(notInArray)); 

console.log("Is 'green' in colors array? I predict True.");
console.log(colors.includes('green')); 


//Q25
let alien_color: string = 'green';

if (alien_color === 'green') {
    console.log('The player just earned 5 points.');
}

let alien_color1: string = 'red';

if (alien_color === 'green') {
    console.log('The player just earned 5 points.');
}


//Q26
let alien_color2: string = 'green';

if (alien_color === 'green') {
    console.log('The player just earned 5 points for shooting the alien.');
} else {
    console.log('The player just earned 10 points for shooting the alien.');
}
let alien_color3: string = 'red';

if (alien_color === 'green') {
    console.log('The player just earned 5 points for shooting the alien.');
} else {
    console.log('The player just earned 10 points for shooting the alien.');
}


//Q27
let alien_color4: string = 'green';

if (alien_color === 'green') {
    console.log('The player earned 5 points.');
} else if (alien_color === 'yellow') {
    console.log('The player earned 10 points.');
} else if (alien_color === 'red') {
    console.log('The player earned 15 points.');
}
let alien_color5: string = 'yellow';

if (alien_color === 'green') {
    console.log('The player earned 5 points.');
} else if (alien_color === 'yellow') {
    console.log('The player earned 10 points.');
} else if (alien_color === 'red') {
    console.log('The player earned 15 points.');
}
let alien_color6: string = 'red';

if (alien_color === 'green') {
    console.log('The player earned 5 points.');
} else if (alien_color === 'yellow') {
    console.log('The player earned 10 points.');
} else if (alien_color === 'red') {
    console.log('The player earned 15 points.');
}

//Q28
let AGE: number = 25; 

if (AGE < 2) {
    console.log('The person is a baby.');
} else if (AGE >= 2 && AGE < 4) {
    console.log('The person is a toddler.');
} else if (AGE >= 4 && AGE < 13) {
    console.log('The person is a kid.');
} else if (AGE >= 13 && AGE < 20) {
    console.log('The person is a teenager.');
} else if (AGE >= 20 && AGE < 65) {
    console.log('The person is an adult.');
} else if (AGE >= 65) {
    console.log('The person is an elder.');
}

//Q29
let favorite_fruits: string[] = ['apple', 'banana', 'mango'];

if (favorite_fruits.includes('apple')) {
    console.log('You really like apples!');
}

if (favorite_fruits.includes('banana')) {
    console.log('You really like bananas!');
}

if (favorite_fruits.includes('mango')) {
    console.log('You really like mangoes!');
}

if (favorite_fruits.includes('orange')) {
    console.log('You really like oranges!');
}

if (favorite_fruits.includes('grapes')) {
    console.log('You really like grapes!');
}

//Q30
let usernames: string[] = ['admin', 'alice', 'bob', 'carol', 'dave'];

for (let username of usernames) {
    if (username === 'admin') {
        console.log('Hello admin, would you like to see a status report?');
    } else {
        console.log(`Hello ${username}, thank you for logging in again.`);
    }
}


//Q32
let current_users: string[] = ['alice', 'bob', 'carol', 'dave', 'eve'];

let new_users: string[] = ['John', 'Alice', 'Michael', 'Bob', 'Sara'];

let current_users_lower = current_users.map(user => user.toLowerCase());

for (let new_user of new_users) {
    let new_user_lower = new_user.toLowerCase();
    
    if (current_users_lower.includes(new_user_lower)) {
        console.log(`Sorry, the username '${new_user}' is already taken. Please enter a new username.`);
    } else {
        console.log(`The username '${new_user}' is available.`);
    }
}

//Q33
let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let number of numbers) {
    let ordinal: string;

    if (number === 1) {
        ordinal = 'st';
    } else if (number === 2) {
        ordinal = 'nd';
    } else if (number === 3) {
        ordinal = 'rd';
    } else {
        ordinal = 'th';
    }

    console.log(`${number}${ordinal}`);
}
//Q34
let favorite_pizzas: string[] = ['pepperoni', 'margherita', 'bbq chicken'];

for (let pizza of favorite_pizzas) {
    console.log(`I like ${pizza} pizza.`);
}

console.log('I really love pizza!');

//Q35
let animals: string[] = ["Dog", "Cat", "Rabbit"];

console.log("Names of the animals:");
for (let i = 0; i < animals.length; i++) {
    console.log(animals[i]);
}

console.log("\nStatements about each animal:");
for (let i = 0; i < animals.length; i++) {
    switch (animals[i]) {
        case "Dog":
            console.log("A dog would make a great pet.");
            break;
        case "Cat":
            console.log("A cat can be a loving companion.");
            break;
        case "Rabbit":
            console.log("A rabbit is cute and can be litter-trained.");
            break;
        default:
            console.log("This animal is interesting but not described.");
    }
}

console.log("\nWhat these animals have in common:");
console.log("Any of these animals would make a great pet!");



//Q36
function make_shirt(size: string, message: string): void {
    console.log(`The shirt size is ${size} and it has the message: "${message}".`);
}

make_shirt('M', 'Hello World!');

//Q37
function make_shirt1(size: string = 'L', message: string = 'I love TypeScript'): void {
    console.log(`The shirt size is ${size} and it has the message: "${message}".`);
}

make_shirt1(); 

make_shirt1('M'); 

make_shirt1('S', 'Hello, TypeScript!'); 

//Q38
function describe_city(city: string, country: string = 'USA'): void {
    console.log(`${city} is in ${country}.`);
}

describe_city('New York'); 
describe_city('Paris', 'France'); 
describe_city('Tokyo', 'Japan'); 

//Q39
function city_country(city: string, country: string): string {
    return `${city}, ${country}`;
}

console.log(city_country('Lahore', 'Pakistan'));
console.log(city_country('Paris', 'France'));
console.log(city_country('Tokyo', 'Japan'));

//Q40
function makeAlbum(artist: string, title: string, tracks?: number): object {
    let album: { [key: string]: any } = {
        artist: artist,
        title: title
    };

    if (tracks !== undefined) {
        album['tracks'] = tracks;
    }

    return album;
}

const album1 = makeAlbum('The Beatles', 'Abbey Road');
const album2 = makeAlbum('Pink Floyd', 'The Dark Side of the Moon', 10);
const album3 = makeAlbum('Led Zeppelin', 'IV', 8);

console.log("Album 1:", album1);
console.log("Album 2:", album2);
console.log("Album 3:", album3);

//Q41
function show_magicians(magicians: string[]): void {
    for (let magician of magicians) {
        console.log(magician);
    }
}

let magician_names: string[] = ['David Copperfield', 'Houdini', 'Penn & Teller'];

show_magicians(magician_names);

//Q42
function show_magicians1(magicians: string[]): void {
    for (let magician of magicians) {
        console.log(magician);
    }
}

function make_great(magicians: string[]): void {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] += ' the Great';
    }
}

let magician_names1: string[] = ['David Copperfield', 'Houdini', 'Penn & Teller'];

make_great(magician_names);

show_magicians1(magician_names);

//Q43
function show_magicians2(magicians: string[]): void {
    for (let magician of magicians) {
        console.log(magician);
    }
}

function make_great2(magicians: string[]): string[] {
    let great_magicians: string[] = magicians.slice(); 
    
    for (let i = 0; i < great_magicians.length; i++) {
        great_magicians[i] += ' the Great';
    }

    return great_magicians;
}

let magician_names3: string[] = ['David Copperfield', 'Houdini', 'Penn & Teller'];

let great_magicians7: string[] = make_great2(magician_names3);

console.log("Original Magicians:");
show_magicians(magician_names);

console.log("\nGreat Magicians:");
show_magicians(great_magicians7);


//Q44
function orderSandwich(...items: string[]): void {
    const itemSummary = items.length > 0 ? items.join(', ') : 'No items selected';
    console.log(`Sandwich ordered with the following items: ${itemSummary}`);
}

console.log("Order 1:");
orderSandwich('lettuce', 'tomato', 'cheese'); 

console.log("\nOrder 2:");
orderSandwich('ham', 'mustard'); 

console.log("\nOrder 3:");
orderSandwich(); 



//Q45
function createCar(manufacturer: string, model: string, ...options: [string, any][]): object {
    let car: { [key: string]: any } = {
        manufacturer: manufacturer,
        model: model
    };

    options.forEach(([key, value]) => {
        car[key] = value;
    });

    return car;
}

const myCar = createCar('Toyota', 'Corolla', ['color', 'blue'], ['year', 2022]);

console.log("Car Information:");
console.log(myCar);
