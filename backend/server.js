import express from 'express'

const app = express();
const port = process.env.PORT || 3000


// app.get('/', (req, res) => {
//     res.send("Hello there!")
// })

app.get('/api/githubusers', (req,res) => {
    res.send([
        {
            "login": "mojombo",
            "id": 1,
            "node_id": "MDQ6VXNlcjE="
          },
          {
            "login": "defunkt",
            "id": 2,
            "node_id": "MDQ6VXNlcjI="
          },
          {
            "login": "pjhyett",
            "id": 3,
            "node_id": "MDQ6VXNlcjM="
          },
          {
            "login": "wycats",
            "id": 4,
            "node_id": "MDQ6VXNlcjQ="
          },
          {
            "login": "ezmobius",
            "id": 5,
            "node_id": "MDQ6VXNlcjU="
          }
    ])
})


app.listen(port, () => {
    console.log(`listening on port ${port}`);
})
