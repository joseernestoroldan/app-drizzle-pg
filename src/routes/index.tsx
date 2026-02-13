import { component$ } from '@builder.io/qwik';
import { routeLoader$ } from '@builder.io/qwik-city';
import { db } from '~/db';
import { users } from '~/db/schema';

export const useGetUsers = routeLoader$(async () => {
  const allUsers = await db.select().from(users);
  return allUsers;
});

export default component$(() => {
  const usersSignal = useGetUsers();

  return (
    <ul>
      {usersSignal.value.map((user) => (
        <li key={user.id}>{user.name} - {user.email}</li>
      ))}
    </ul>
  );
});