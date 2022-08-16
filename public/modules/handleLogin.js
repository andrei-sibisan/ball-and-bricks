export default async function handleLogin(value) {
  try {
    const res = await fetch(`http://localhost:3000/players/${value}`);
    console.log(res);
    const data = await res.json();

    const player = data;
    console.log(player);
    return player;
  } catch (err) {
    console.error(err);
  }
}

//     const foundIndex = players.findIndex((element) => element.name === value);
//     console.log(foundIndex);
//     if (foundIndex > -1) {
//       console.log(`L-am gasit.`);
//       let currentPlayer = players[foundIndex];
//       const options = {
//         method: "POST",
//         header: {
//           "Content-Type": "application/json",
//           Allow: "POST",
//         },
//         body: JSON.stringify(players),
//       };

//       fetch("/api", options);
//       return [currentPlayer, foundIndex];
//     } else {
//       console.log(`Nu l-am gasit.`);
//       const newPlayer = new Player(value);
//       players.push(newPlayer);
//       console.log(players);
//       console.log(`New player named ${value} added to the pool.`);
//       const newJson = JSON.stringify(players);
//       console.log(newJson);
//       const trata = { a: 40 };
//       const options = {
//         method: "POST",
//         header: {
//           "Content-Type": "application/json",
//           Allow: "POST",
//         },
//         body: JSON.stringify(players),
//       };

//       fetch("/api", options);
//       const newIndex = players.findIndex((element) => element.name === value);
//       return [newPlayer, newIndex];
//     }
//   } catch (err) {
//     console.error(err);
//   }
// }
