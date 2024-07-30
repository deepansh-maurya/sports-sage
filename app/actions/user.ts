"use server";
import { verifySession } from "../_lib/session";
import client from "../../db/index";

export async function checkAuth() {
  const response = await verifySession();
  console.log(response, "asd");

  if (response.success) return true;
  else return false;
}

export async function addTestimonial(text: string) {
  try {
    const res = await verifySession();
    if (!res.user) {
      return { success: false, message: "unauthorized user" };
    }
    const id = res.user?.id;
    if (id == undefined) throw new Error("User ID is undefined");

    console.log(res.user);

    const testimonial = await client.testimonials.create({
      data: {
        userId: id,
        content: text,
      },
    });

    if (!testimonial) {
      return { message: "failed to create testimonial", success: false };
    }
    return { message: "successfully created testimonial", success: true };
  } catch (error) {
    return { message: "failed to create testimonial", success: false };
  }
}

export async function getTestimonial() {
  try {
    const testimonial = await client.testimonials.findMany({
      select: { content: true },
    });

    const userName = await client.user.findMany();

    if (!testimonial) return { message: "no tesimonial found", success: false };
    return { message: " tesimonial found", success: true, testimonial };
  } catch (error) {
    return { message: "no tesimonial found", success: false };
  }
}
