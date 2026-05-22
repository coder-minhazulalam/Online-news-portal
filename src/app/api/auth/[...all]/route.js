import { auth } from "@/lib/auth"; // path to your auth file
import { toNextJsHandler } from "better-auth/next-js"; //এটা Better Auth কে Next.js route handler এ convert করছে।
export const { POST, GET } = toNextJsHandler(auth);