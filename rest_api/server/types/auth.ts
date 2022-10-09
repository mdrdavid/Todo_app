import {Document} from 'mongoose'

// this interface defines how the model will look like
export interface IUser extends Document{
  name: string,
  email: string,
  password: string,
}
