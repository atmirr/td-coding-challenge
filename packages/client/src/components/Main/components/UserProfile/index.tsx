import React from 'react';
import { useParams } from 'react-router-dom';
import { Typography } from '@material-ui/core';
import useFetchData from 'src/hooks/use-fetch-data';
import UserDetail from './components/UserDetail';

export interface UserDetailType {
  name: string;
  username: string;
  rating: number;
  favorites: number;
  visits: number;
  size: string;
  location: string;
}

function UserProfile() {
  const { userId } = useParams<{ userId: string }>();
  const {
    data: user = {},
    error,
  }: {
    data?: Record<string, never> | (UserDetailType & { id: number });
    error: string | null;
  } = useFetchData(`/users/${userId}`);
  return (
    <>
      {user && (
        <UserDetail
          name={user?.name}
          username={user.username}
          rating={user.rating}
          favorites={user.favorites}
          visits={user.visits}
          size={user.size}
          location={user.location}
        />
      )}
      {error && (
        <Typography color="error" align="center">
          {error}
        </Typography>
      )}
    </>
  );
}

export default UserProfile;
