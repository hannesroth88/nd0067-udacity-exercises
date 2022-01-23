import express from 'express';
import { promises as fsPromises } from 'fs'
const csv = require("csvtojson/v2");
const csvFilePath = './users.csv'
const outputFile = './users.json'

const app = express();
const port = 3000;

app.get('/users/getjson', async (req: express.Request, res: express.Response) => {
  console.log('/users/getjson');
  csv()
    .fromFile(csvFilePath)
    .then( async (data: { first_name: string; last_name: string; phone: string; }[]) =>{
      const jsonArray = data.map((item) => {
        const firstName = item.first_name
        const lastName = item.last_name
        let phone = item.phone
        if (phone == "") {
          phone = "missing data"
        }
        return { firstName, lastName, phone }
      })
      await fsPromises.writeFile(outputFile, JSON.stringify(jsonArray,null,2))
      res.send(jsonArray)
    })

})

// start the Express server
app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});