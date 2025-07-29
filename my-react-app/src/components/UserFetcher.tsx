import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../store/actions';
import { useEffect } from 'react';

const UserFetcher = () => {
  const dispatch = useDispatch();
  const { loading, users, error } = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div className="p-4">
      <h2 className="text-lg font-bold mb-2">User Fetcher</h2>
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-600">Error: {error}</p>}
      <ul className="list-disc ml-5">
        {users.map((user) => (
          <li key={user.id}>{user.name} ({user.email})</li>
        ))}
      </ul>
    </div>
  );
};

export default UserFetcher;
