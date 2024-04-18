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

async function getData() {
  try {
    const request = await fetch("http://www.boredapi.com/api/activity/");
    const result = await request.json();
    console.log(result);
  } catch (err) {
    console.log("Something went wrong");
  }

  console.log("This code block is finished");
}

// getData();
// methodTwo();
// methodOne();

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

arrObjects.map((obj) => {
  return obj.character;
});

arrObjects.forEach((obj) => {
        if (obj.weapon === "pen") {
            return obj.weapon
        }
      });

function doSomethingWithArray() {
  for (let obj of arrObjects) {
    if (obj.character.name === "Scott") {
        return obj.character.hairColor
    }
  }
}
let result = doSomethingWithArray();
console.log(result);
