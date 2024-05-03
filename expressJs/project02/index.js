const express = require("express");

const bodyParser = require("body-parser");

const jwt = require("jsonwebtoken");
const PORT = process.env.PORT || 8000;
const app = express();
const SECRET_KEY = "secret";

// middle ware functions

app.use(bodyParser.json());

// in memory array management
let users = [];

//routes
// creating register route

app.post("/register", (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res
      .status(400)
      .json({ message: "username and password is required" });
  }
  const newUser = { id: users.length + 1, username, password };
  users.push(newUser);
  return res
    .status(201)
    .json({ message: "user created successfully", user: newUser });
});

// creating login route

app.post("/login", (req, res) => {
  const { username, password } = req.body;
  const user = users.find(
    (user) => user.username === username && user.password === password
  );
  if (!user) {
    return res.status(401).json({ message: "Invalid username or password" });
  }
  const token = jwt.sign({ username: user.username, id: user.id }, SECRET_KEY);
  res.status(200).json({ message: "login successfull", token });
});


// creating a profile route


app.get("/profile",  verifyToken, (req, res) => {
    jwt.verify(req.token, SECRET_KEY, (err, authData) => {
        if(err){
            return res.status(403).json({message: "Forbidden"})
        }
        res.status(200).json({message: "Profile accessed successfully", authData})
    });

})


//verify token middleware function

function verifyToken(req, res, next){
    const bearerHeader =  req.headers["authorization"];
    if(typeof bearerHeader !== "undefined"){
        const bearerToken = bearerHeader.split(" ")[1];
        req.token = bearerToken;
        next();}else{
            res.status(403).json({message: "Forbidden"})
        }
}

// server
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
