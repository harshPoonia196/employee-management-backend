import { IUser } from "@/interfaces/user.interface";

function AuthServices() {
  async function logIn(data: IUser) {
    try {
      console.log("login data===========>", data);
      //   const createdTodo = await TodoSchema.create(todo);
      //   return createdTodo;
    } catch (err) {
      console.log("err in create TODO service ===========>", err);
    }
  }

  return { logIn };
}

export default AuthServices;
