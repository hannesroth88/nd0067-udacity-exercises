import express from 'express'

const logger2 = (req:express.Request, res:express.Response, next:Function): void => {
let url =req.url
console.log(`${url} was visited (logger 2)`)
next()
}

export default logger2