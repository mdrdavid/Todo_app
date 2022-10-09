
import { Router } from "express"
import { getTodo, addTodo, updateTodo, deleteTodo } from "../controllers/todoController"

const router: Router = Router()

router.get("/tod", getTodo)

router.post("/add-todo", addTodo)

router.put("/edit-todo/:id", updateTodo)

router.delete("/delete-todo/:id", deleteTodo)

export default router