import express, { Request, Response } from "express"
import bodyParser from "body-parser"
import userRoutes from "./routes/users"
import bookRooutes from "./routes/books"
import verifyAuthToken from "./routes/authenticate"

const app: express.Application = express()
const address: string = "0.0.0.0:3000"

app.use(bodyParser.json())

app.get("/", function (req: Request, res: Response) {
  res.send("Hello World!")
})

app.get("/topsecret", verifyAuthToken, function (req: Request, res: Response) {
  res.send("Top Secret Text!")
})

userRoutes(app)
bookRooutes(app)

app.listen(3000, function () {
  console.log(`starting app on: ${address}`)
})
