import React from 'react';
import {
  Paper,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from '@material-ui/core';
import UserRow from './components/UserRow';
import { User as UserType } from 'src/components/Main/components/UsersList';

function UsersTable({ items }: { items: UserType[] }) {
  return (
    <TableContainer data-testid="users-table" component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Username</TableCell>
            <TableCell align="center">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {items.map(({ id, name, username }: UserType) => (
            <UserRow key={id} id={id} name={name} username={username} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default UsersTable;
