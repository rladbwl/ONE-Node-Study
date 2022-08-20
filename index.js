const express = require("express"),
  app = express(),
  bodyParser = require("body-parser")

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

const user = {
  id: "admin",
  pw: "1234",
}
const userList = []

app.get(`/`, (req, res) => {
  res.send(`Hello world`)
})

app.post(`/login`, (req, res) => {
  const { id, pw } = req.body
  console.log(`ID : ${id}, PW : ${pw}`)
  if (id === user.id) {
    if (pw === user.pw) {
      res.json({ result: true })
    } else {
      res.json({ result: false })
    }
  } else {
    res.json({ result: false })
  }
})

app.post("/register", (req, res) => {
  const { id, pw, name } = req.body,
    user = { id, pw, name }
  userList.push(user)
  console.log(userList)
  res.json({ result: true })
})

const port = 8080
app.listen(port, () => {
  console.log(`SERVER ON! : ${port}`)
})
