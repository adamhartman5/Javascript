var database = [
  {
    username: "adam",
    password: "supersecret"
  },
  {
    username: "sally",
    password: "123"
  },
  {
    username: "ingrid",
    password: "777"
  }
];

var newsfeed = [
  {
    username: "Bobby",
    timeline: "So tired from all that learning"
  },
  {
    username: "Sally",
    timeline: "Javascript is sooooo coool!"
  },
  {
    username: "Mitch",
    timeline: "Javascript is preeetyy cool!"
  }
]

var userNamePrompt = prompt("What\'s your username?");
var passwordPrompt = prompt("What\'s your password");

function isUserValid(username, password)
{
  for(var i = 0; i < database.length; i++)
  {
    if (database[i].username === username && database[i].password === password)
    {
      return true;
    }
  return false;
  }
}

function signIn(username, password) 
{
  if (isUserValid(username, password))
  {
    console.log(newsfeed);
  }
  else
  {
    alert("Sorry, wrong username and password")
  }
}

signIn(userNamePrompt, passwordPrompt);