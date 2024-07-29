"use server";
import { SignupFormSchema } from "../_lib/definitions";
import { LoginFormSchema } from "../_lib/definitions";
import bcrypt from "bcrypt";
import client from "../../db/index";
import { createSession } from "../_lib/session";
export async function signup(formdata: FormData) {
  try {
    console.log(formdata);

    const validatedFields = SignupFormSchema.safeParse({
      name: formdata.get("name"),
      email: formdata.get("email"),
      password: formdata.get("password"),
    });
    if (!validatedFields.success) {
      return {
        errors: validatedFields.error.flatten().fieldErrors,
      };
    }

    const { name, email, password } = validatedFields.data;
    console.log(name, email, password);

    const hashpassword = await bcrypt.hash(password, 10);
    const user = await client.user.create({
      data: {
        name,
        password: hashpassword,
        email,
      },
      select: {
        id: true,
        email: true,
        name: true,
      },
    });
    console.log(user);

    if (!user) {
      return {
        success: false,
        message: "An error occurred while creating your account.",
      };
    }
    return { success: true, message: "user signed up", user };
  } catch (error) {
    console.log(error);

    return { success: false, message: "something went wrong" };
  }
}

export async function login(formdata: FormData) {
  try {
    console.log(formdata);

    const validatedFields = LoginFormSchema.safeParse({
      email: formdata.get("email"),
      password: formdata.get("password"),
    });
    if (!validatedFields.success) {
      return {
        errors: validatedFields.error.flatten().fieldErrors,
      };
    }
    const { email, password } = validatedFields.data;
    console.log(email, password);

    const user = await client.user.findFirst({
      where: {
        email,
      },
    });
    console.log(user);

    if (!user) return { message: "unauthorized user", success: false };
    const hashpassword = await bcrypt.compare(password, user.password);
    let session;
    if (hashpassword) {
      session = await createSession(user);
      console.log(session);
    } else return { success: false, message: "wrong password" };
    return {
      message: "User loged in succesfully",
      user,
      success: true,
    };
  } catch (error) {
    console.log(error);

    return { success: false, message: "something went wrong" };
  }
}
