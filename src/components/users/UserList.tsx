import React, { useEffect, useState } from 'react';
import UserItem from './UserItem';

const UserList = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchUsers = async () => {
    const response = await fetch(`${process.env.REACT_APP_GITHUB_URL}/users`);
    const data = await response.json();

    setUsers(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  if (!loading) {
    return (
      <div className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2'>
        {users.map(user => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  } else {
    return <h3>Loading...</h3>;
  }
};

export default UserList;
