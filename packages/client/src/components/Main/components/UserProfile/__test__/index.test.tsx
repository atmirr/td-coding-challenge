import React from 'react';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import { MemoryRouter } from 'react-router-dom';
import { screen, render } from '@testing-library/react';
import UserProfile from '../index';

const mockUser = {
  id: 1,
  name: 'Sunny Wucker',
  username: 'madisyn.wuckert51',
  rating: 1.6,
  favorites: 5,
  visits: 65,
  size: 'medium',
  location: '-24.3906 179.7276',
};

const mockError = 'User not found!';

jest.mock('src/hooks/use-fetch-data', () => {
  return () => ({ data: mockUser, error: mockError });
});

describe('<UserProfile />', () => {
  it('should renders the component', () => {
    const { container } = render(
      <MemoryRouter initialEntries={['/user/1']}>
        <UserProfile />
      </MemoryRouter>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it("should display the user's details", () => {
    render(
      <MemoryRouter initialEntries={['/user/1']}>
        <UserProfile />
      </MemoryRouter>,
    );

    expect(screen.queryAllByText(mockUser.name).length).toBe(1);
    expect(screen.queryAllByText(mockUser.username).length).toBe(1);
    expect(screen.queryAllByText(mockUser.rating).length).toBe(1);
    expect(screen.queryAllByText(mockUser.favorites).length).toBe(1);
    expect(screen.queryAllByText(mockUser.visits).length).toBe(1);
    expect(screen.queryAllByText(mockUser.size).length).toBe(1);
    expect(screen.queryAllByText(mockUser.location).length).toBe(1);
  });

  it('should display the error if we had one', () => {
    render(
      <MemoryRouter initialEntries={['/user/1']}>
        <UserProfile />
      </MemoryRouter>,
    );

    expect(screen.queryAllByText(mockError).length).toBe(1);
  });
});
