import { routeLoader$ } from "@builder.io/qwik-city";
import { db } from "~/db";
import { users } from "~/db/schema";    

export const useGetUsers = routeLoader$(async () => {
    const allUsers = await db.select().from(users);
    return allUsers;
});