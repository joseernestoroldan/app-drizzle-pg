import { component$ } from '@builder.io/qwik';
import { useGetUsers } from '~/loaders/useGetUsers';

export { useGetUsers };

export default component$(() => {
  const usersSignal = useGetUsers();

  return (
    <>
    <h1>Usuarios</h1>
    <ul>
      {usersSignal.value.map((user) => (
        <li key={user.id}>{user.name} - {user.email}</li>
      ))}
    </ul>
    </>
  );
});