import {Document} from 'mongoose'

// this interface defines how the model will look like
export interface ITodo extends Document{
  name: string,
  description: string,
  status: boolean
}