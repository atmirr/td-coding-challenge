import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { TableRow, TableCell } from '@material-ui/core';
import LaunchIcon from '@material-ui/icons/Launch';
import { User as UserType } from 'src/components/Main/components/UsersList';

const useStyles = makeStyles(({ palette }) => ({
  detailIcon: {
    color: palette.text.primary,
  },
}));

function UserRow({ id, name, username }: UserType) {
  const classes = useStyles();
  return (
    <TableRow key={id}>
      <TableCell>{id}</TableCell>
      <TableCell>{name}</TableCell>
      <TableCell>{username}</TableCell>
      <TableCell align="center">
        <Link to={`/user/${id}`}>
          <LaunchIcon className={classes.detailIcon} />
        </Link>
      </TableCell>
    </TableRow>
  );
}

export default UserRow;
