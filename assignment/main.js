//Q2
var PersonName = "Muhammad Subhan";
console.log("Hello " + PersonName + ", would you like to learn some Python today");
//Q3
function toTitleCase(input) {
    return input.toLowerCase().replace(/(?:^|\s)\w/g, function (match) { return match.toUpperCase(); });
}
var name1 = "muhammad subhan";
console.log(name1.toLowerCase());
console.log(name1.toUpperCase());
var titleCaseName = toTitleCase(name1);
console.log(titleCaseName);
//Q4
console.log("Albert Einstein once said, “A person who never made a mistake never tried anything new.”");
//Q5
var famous_person = "Albert Einstein";
var message = "“A person who never made a mistake never tried anything new.”";
console.log(famous_person + " once said, " + message);
//Q6
var nameWithWhitespace = "\t\n  John Doe  \n\t";
console.log("Name with whitespace:");
console.log("\"".concat(nameWithWhitespace, "\""));
var nameWithoutWhitespace = nameWithWhitespace.trim();
console.log("Name without whitespace:");
console.log("\"".concat(nameWithoutWhitespace, "\""));
//Q7
var a = 5;
var b = 11;
var c = 4;
var d = 16;
console.log(a += 3);
console.log(b -= 3);
console.log(c *= 2);
console.log(d /= 2);
//Q9
var favoriteNumber = 56;
var message1 = "My favorite number is: ";
console.log(message1 + favoriteNumber);
//Q10
var names = ["Subhan", "Ahmed", "Daniyal", "Amir"];
for (var i = 0; i < names.length; i++) {
    console.log(names[i]);
}
//Q11
var names_ = ["Alice", "Bob", "Charlie", "Diana"];
console.log("List of friends:");
for (var i = 0; i < names_.length; i++) {
    console.log(names_[i]);
}
//Q12
var names1 = ["Subhan", "Ahmed", "Daniyal", "Amir"];
for (var i = 0; i < names.length; i++) {
    console.log("Hellow " + names[i] + ", please come on my birthday party");
}
//Q13
var motorcycles = ["Honda CBR600RR", "Yamaha YZF-R1", "Kawasaki Ninja ZX-10R", "Suzuki GSX-R1000"];
console.log("Statements about motorcycles:");
for (var i = 0; i < motorcycles.length; i++) {
    console.log("I would like to own a ".concat(motorcycles[i], "."));
}
//Q14
var dinnerGuests = ["Albert Einstein", "Ada Lovelace", "Leonardo da Vinci"];
console.log("Dinner Invitations:");
for (var i = 0; i < dinnerGuests.length; i++) {
    console.log("Dear ".concat(dinnerGuests[i], ",\n\nI would be honored to have you join me for dinner. It would be a pleasure to discuss your incredible contributions and ideas.\n\nSincerely,\n[Your Name]"));
}
//Q15
//Q16
//Q17
//Q18
//Q19
//Q20
//Q21
//Q22
//Q23
//Q24
//Q25
//Q26
//Q27
//Q28
//Q29
//Q30
//Q31
//Q32
//Q33
//Q34
//Q35
var animals = ["Dog", "Cat", "Rabbit"];
console.log("Names of the animals:");
for (var i = 0; i < animals.length; i++) {
    console.log(animals[i]);
}
// Print a statement about each animal
console.log("\nStatements about each animal:");
for (var i = 0; i < animals.length; i++) {
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
//Q37
//Q38
//Q39
//Q40
