const { response } = require("express");
const express = require("express");
const app = express();
const fs = require("fs");

const player = require("./srv_modules/player");

app.listen(3000, () => console.log("listening at 3000"));
app.use(express.static("public"));
app.use(express.json({ limit: "1mb" }));
app.use(
  express.json({
    type: ["application/json", "text/plain"],
  })
);

app.get("/players/:pName", (req, res) => {
  console.log(req.params.pName);
  console.log("I've got a GET request!");
  fs.readFile("./players.json", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    const players = JSON.parse(data);

    const foundIndex = players.findIndex(
      (element) => element.name === req.params.pName
    );
    if (foundIndex > -1) {
      console.log("we found the player.");
      let currentPlayer = players[foundIndex];
      res.json(currentPlayer);
    } else {
      console.log("haven't found the player, creating new one.");
      let newPlayer = new player.Player(req.params.pName);
      res.json(newPlayer);
    }
  });
});

app.post("/players/:pName", (req, res) => {
  console.log("I've got a request!");
  const currentPlayer = req.body;
  console.log(currentPlayer);

  fs.readFile("./players.json", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    const players = JSON.parse(data);
    const foundIndex = players.findIndex(
      (element) => element.name === currentPlayer.name
    );
    if (foundIndex > -1) {
      players[foundIndex] = currentPlayer;
      const textData = JSON.stringify(players);
      fs.writeFile("./players.json", textData, (err) => {
        if (err) {
          console.log(err);
        }
      });
      return;
    } else {
      players.push(currentPlayer);
      const textData = JSON.stringify(players);
      fs.writeFile("./players.json", textData, (err) => {
        if (err) {
          console.log(err);
        }
      });
      return;
    }
  });

  console.log("Attempting to write file...");
  // fs.writeFile("./players.json", textData, (err) => {
  //   if (err) {
  //     console.log(err);
  //   }
  // });
  res.json({
    status: "success",
  });
});
