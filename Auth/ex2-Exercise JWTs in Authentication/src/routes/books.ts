import express, { Request, Response } from "express"
import { Book, BookStore } from "../models/book"
import verifyAuthToken from "./authenticate"

const store = new BookStore()

const index = async (_req: Request, res: Response) => {
  const books = await store.index()
  res.json(books)
}

const show = async (_req: Request, res: Response) => {
  const book = await store.show(_req.params.id)
  res.json(book)
}

const create = async (_req: Request, res: Response) => {
  try {
    const book: Book = {
      id: null,
      title: _req.body.title,
      author: _req.body.author,
      totalPages: _req.body.totalPages,
      summary: _req.body.summary
    }

    const newBook = await store.create(book)
    res.json(newBook)
  } catch (err) {
    res.status(400)
    res.json(err)
  }
}

const destroy = async (_req: Request, res: Response) => {
  const deleted = await store.delete(_req.params.id)
  res.json(deleted)
}

const bookRooutes = (app: express.Application) => {
  app.get("/books", index)
  app.get("/books/:id", show)
  app.post("/books", verifyAuthToken, create)
  app.delete("/books/:id", verifyAuthToken, destroy)
}

export default bookRooutes
