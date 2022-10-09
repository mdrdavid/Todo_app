import { Request, Response } from "express";
import { ITodo } from "../types/todo";
import Todo from "../model/todoModel";

// get all todo items
const getTodo = async (req: Request, res: Response): Promise<void> => {
	try {
		const todo: ITodo[] = await Todo.find();
		res.status(200).json({ todo });
	} catch (err) {
		console.log(err);
	}
};

// create todo
const addTodo = async (req: Request, res: Response): Promise<void> => {
	try {
		const body = req.body as Pick<ITodo, "name" | "description" | "status">;

		const todo: ITodo = new Todo({
			name: body.name,
			description: body.description,
			status: body.status,
		});

		const newTodo: ITodo = await todo.save();
		const allTodo: ITodo[] = await Todo.find();
		res
			.status(201)
			.json({ message: "Todo added", todo: newTodo, tod: allTodo });
	} catch (error) {
		throw error;
	}
};

// Update to do
const updateTodo = async (req: Request, res: Response): Promise<void> => {
	try {
		const {
			params: { id },
			body,
		} = req;
		const updateTodo: ITodo | null = await Todo.findByIdAndUpdate(
			{ _id: id },
			body
		);
		const allTodo: ITodo[] = await Todo.find();
		res.status(200).json({
			message: "Todo updated",
			todo: updateTodo,
			tod: allTodo,
		});
	} catch (error) {
		throw error;
	}
};

const deleteTodo = async (req: Request, res: Response): Promise<void> => {
	try {
		const deletedTodo: ITodo | null = await Todo.findByIdAndRemove(
			req.params.id
		);
		const allTodo: ITodo[] = await Todo.find();
		res.status(200).json({
			message: "Todo deleted",
			todo: deletedTodo,
			tod: allTodo,
		});
	} catch (error) {
		throw error;
	}
};
export { getTodo, addTodo, updateTodo, deleteTodo };
