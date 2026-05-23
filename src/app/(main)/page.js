"use server"
import { redirect } from "next/navigation";
// import { auth } from "@/lib/auth"; // তোমার auth path
// import { headers } from "next/headers";

const default_category_id = "01";

const Home = async () => {
  // const session = await auth.api.getSession({
  //   headers: await headers(),
  // });

  // // logged in না থাকলে register page
  // if (!session) {
  //   redirect("/register");
  // }

  // logged in থাকলে home/category page
  redirect(`/category/${default_category_id}`);
};

export default Home;