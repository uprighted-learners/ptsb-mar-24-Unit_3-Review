/*
    Promises

    resolve - function callback that happens when you FULFILL a promise
    reject - function callback that happens when you DONT fullfill a promise
*/

const promise = new Promise((resolve, reject) => {
  const willGoOverZorkington = true;

  // Outcome results
  if (willGoOverZorkington) {
    resolve("Yes, I will go over zorkington"); //Fulfilling
  } else {
    reject("No, I will NOT go over zorkington"); //Not fulfilling
  }
});

/*
    Methods of dealing with promises
*/

// Method 1: then(), catch(), finally()
function methodOne() {
  var var1 = null;
  promise
    .then((result) => {
      // then clause gets reached if your promise is FULFILLED
      console.log(result);
      var1 = "A valid value";
      console.log("Line 34 here! The value of var1 is: " + var1);
      console.log("The value of var1 is: " + var1);
    })
    .catch((err) => {
      // catch clause gets reached if your promise is NOT fullilled
      console.log(err);
    })
    .finally(() => {
      // OPTIONAL clause: will run not matter if promise is FULFILLED or NOT FULFILLED
    });
}

// Method 2: async/await. Don't forget to use try/catch with this.
async function methodTwo() {
  try {
    let result = await promise;
    console.log(result);
  } catch (err) {
    console.log(err);
  }

  console.log("This code block is finished.");
}

// methodTwo();
// methodOne();

// You might see some complex objects like this or more complex with more data.
let obj = {
  food: ["Apple", "Orange", "Banana"],
  visitedRooms: [],
  character: {
    name: "CJ",
    hairColor: "black",
    height: "tall",
  },
  weapon: "sword",
  level: 1,
  hungry: true,
};

function getValueFromObj(key) {
  // key => Our key that we want to access within our object
  return obj[key];
}

const propertyValue = getValueFromObj("character");
// console.log(propertyValue)

/*
    Make an array of objects. Use map/foreach to iterate.
*/
const arrObjects = [
  {
    food: ["Apple", "Orange", "Banana"],
    visitedRooms: [],
    character: {
      name: "CJ",
      hairColor: "black",
      height: "tall",
    },
    weapon: "sword",
    level: 1,
    hungry: true,
  },
  {
    food: ["Pancakes", "Yogurt", "Gronola"],
    sport: "soccer",
    character: {
      name: "Frank",
      hairColor: "black",
      height: "short",
    },
    weapon: "pickleball paddle",
    role: "instructor",
  },
  {
    character: {
      name: "Scott",
    },
    weapon: "pen",
    role: "TA",
    messageFromFrank: "love having Scott around",
  },
];

// Map - built in array method that allows us to transform our array elements.
// In this example, I am breaking down and making a list of the 'character' objects from each big object
arrObjects.map((obj) => {
  return obj.character;
});

// Foreach - built in array method that allows us to iterate through our array elements.
// In this example, I am going through each big object and seeing if the weapon is equal to 'pen'. If so, then I am returning that weapon ("red")
// I prefer to use a standard for...of loop or a base for loop to iterate through an array because foreach cannot return an element.
arrObjects.forEach((obj) => {
  if (obj.weapon === "pen") {
      console.log(obj.weapon)
  }
});

// Preferred method to iterate through an array.
function doSomethingWithArray() {
  for (let obj of arrObjects) { // Looping through the array of objects.
    if (obj.character.name === "Scott") { // Checking to see if the object character name is Scott
        return obj.character.hairColor // If so, return Scott's hair color. If this key does not exist, it will return undefined
    }
  }
}
let result = doSomethingWithArray();


// Look at our index.html file + script.js for a more practical example of this where we get data and do something with it other than just console logging
async function getData() {
    try {
      const request = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
      const result = await request.json();
      const abilities = result.abilities;

      let urlFromObj = null;
      for (let ability of abilities) {
        if (ability.ability.name === "limber") {
            urlFromObj = ability.ability.url
        }
      }

      // Now that we have the url that corresponds to the name 'limber' inside of this , do something with this.
      console.log(urlFromObj);
    } catch (err) {
      console.log("Something went wrong");
    }
  
    console.log("This code block is finished");
}


getData();