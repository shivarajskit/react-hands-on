import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useTranslation } from 'react-i18next';

const fetchUsers = async () => {
  const { data } = await axios.get('https://jsonplaceholder.typicode.com/users');
  return data;
};

function UserListUseQuery() {
    const { t } = useTranslation();
  const { data, isLoading, error } = useQuery({
    queryKey: ['users'],
    queryFn: fetchUsers
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {(error as Error).message}</p>;

  return (
    <>
    <h2 className='font-bold mb-4'>{t('users.title')}:</h2>
    <ul>
      {data.map(user => (
        <li key={user.id}>{user.name} ({user.email})</li>
      ))}
    </ul>
    </>
  );
}

export default UserListUseQuery;
