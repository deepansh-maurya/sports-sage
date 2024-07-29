"use server";
import { verifySession } from "../_lib/session";

export async function checkAuth() {
  const response = await verifySession();
  console.log(response);

  if (response.success) return true;
  else false;
}
