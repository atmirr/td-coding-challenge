import React from 'react';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import { MemoryRouter } from 'react-router-dom';
import { screen, render } from '@testing-library/react';
import UsersList from '../index';

const mockUsers = [
  {
    id: 1,
    name: 'Sunny Wucker',
    username: 'madisyn.wuckert51',
  },
  {
    id: 2,
    name: 'Indigo Shady',
    username: 'hilda_turcotte',
  },
];

const mockError = 'Users not found!';

jest.mock('src/hooks/use-fetch-data', () => {
  return () => ({ data: mockUsers, error: mockError });
});

describe('<UsersList />', () => {
  it('should renders the component', () => {
    const { container } = render(
      <MemoryRouter initialEntries={['/']}>
        <UsersList />
      </MemoryRouter>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should display the users table with the users rows', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <UsersList />
      </MemoryRouter>,
    );

    expect(screen.getAllByTestId('users-table').length).toBe(1);
    mockUsers.forEach((user) => {
      expect(screen.queryAllByText(user.id).length).toBe(1);
      expect(screen.queryAllByText(user.name).length).toBe(1);
      expect(screen.queryAllByText(user.username).length).toBe(1);
    });
  });

  it('should display the error if we had one', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <UsersList />
      </MemoryRouter>,
    );

    expect(screen.queryAllByText(mockError).length).toBe(1);
  });
});
