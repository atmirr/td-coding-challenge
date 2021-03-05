import React from 'react';
import { Typography } from '@material-ui/core';
import UsersTable from './components/UsersTable';
import useFetchData from 'src/hooks/use-fetch-data';

export interface User {
  id: number;
  name: string;
  username: string;
}

function UsersList() {
  const {
    data: users,
    error,
  }: { data: User[] | undefined; error: string | null } = useFetchData(
    '/users',
  );
  return (
    <>
      {users && <UsersTable items={users} />}
      {error && (
        <Typography color="error" align="center">
          {error}
        </Typography>
      )}
    </>
  );
}

export default UsersList;
