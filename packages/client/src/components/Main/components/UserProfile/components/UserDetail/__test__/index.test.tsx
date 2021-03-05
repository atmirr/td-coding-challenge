import React from 'react';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import { Route, MemoryRouter } from 'react-router-dom';
import { screen, render, fireEvent } from '@testing-library/react';
import UserDetail from '../index';

const props = {
  name: 'Sunny Wucker',
  username: 'madisyn.wuckert51',
  rating: 1.6,
  favorites: 5,
  visits: 65,
  size: 'medium',
  location: '-24.3906 179.7276',
};

describe('<UserDetail />', () => {
  it('should renders the component', () => {
    const { container } = render(
      <MemoryRouter initialEntries={['/user/1']}>
        <UserDetail />
      </MemoryRouter>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should display the labels', () => {
    render(
      <MemoryRouter initialEntries={['/user/1']}>
        <UserDetail />
      </MemoryRouter>,
    );
    expect(screen.queryAllByText(/Rating/).length).toBe(1);
    expect(screen.queryAllByText(/Favorites/).length).toBe(1);
    expect(screen.queryAllByText(/Visits/).length).toBe(1);
    expect(screen.queryAllByText(/Size/).length).toBe(1);
    expect(screen.queryAllByText(/Location/).length).toBe(1);
  });

  it("should display the detail's text when we pass the props", () => {
    render(
      <MemoryRouter initialEntries={['/user/1']}>
        <UserDetail {...props} />
      </MemoryRouter>,
    );
    expect(screen.queryAllByText(props.name).length).toBe(1);
    expect(screen.queryAllByText(props.username).length).toBe(1);
    expect(screen.queryAllByText(props.rating).length).toBe(1);
    expect(screen.queryAllByText(props.favorites).length).toBe(1);
    expect(screen.queryAllByText(props.visits).length).toBe(1);
    expect(screen.queryAllByText(props.size).length).toBe(1);
    expect(screen.queryAllByText(props.location).length).toBe(1);
  });

  it('clicking on the back button should take us to the first page', () => {
    let testLocation;
    render(
      <MemoryRouter initialEntries={['/user/1']}>
        <UserDetail />
        <Route
          path="*"
          render={({ location }) => {
            testLocation = location;
            return null;
          }}
        />
      </MemoryRouter>,
    );
    const backLink = screen.getByText(/Back/);
    fireEvent.click(backLink);
    expect(testLocation.pathname).toBe('/');
  });
});
