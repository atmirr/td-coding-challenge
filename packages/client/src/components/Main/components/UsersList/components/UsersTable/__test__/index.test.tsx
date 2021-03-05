import React from 'react';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import { MemoryRouter } from 'react-router-dom';
import { screen, render } from '@testing-library/react';
import UsersTable from '../index';

const props = {
  items: [
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
  ],
};

describe('<UsersTable />', () => {
  it('should renders the component', () => {
    const { container } = render(
      <MemoryRouter initialEntries={['/']}>
        <UsersTable {...props} />
      </MemoryRouter>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it("should display all the users' info which passed by items prop", () => {
    const { container } = render(
      <MemoryRouter initialEntries={['/']}>
        <UsersTable {...props} />
      </MemoryRouter>,
    );
    props.items.forEach((user, index) => {
      expect(screen.queryAllByText(user.id).length).toBe(1);
      expect(screen.queryAllByText(user.name).length).toBe(1);
      expect(screen.queryAllByText(user.username).length).toBe(1);
      const detailButtons = container.querySelectorAll('a');
      expect(detailButtons[index]).toHaveAttribute('href', `/user/${user.id}`);
    });
  });

  it('should display all the column labels', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <UsersTable {...props} />
      </MemoryRouter>,
    );
    expect(screen.queryAllByText(/ID/).length).toBe(1);
    expect(screen.queryAllByText(/Name/).length).toBe(1);
    expect(screen.queryAllByText(/Username/).length).toBe(1);
    expect(screen.queryAllByText(/Actions/).length).toBe(1);
  });
});
