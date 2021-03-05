import React from 'react';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import { Route, MemoryRouter } from 'react-router-dom';
import { screen, render, fireEvent } from '@testing-library/react';
import UserRow from '../index';

const props = {
  id: 1,
  name: 'Sunny Wucker',
  username: 'madisyn.wuckert51',
};

const Wrapper = ({ children }) => (
  <table>
    <tbody>{children}</tbody>
  </table>
);

describe('<UserRow />', () => {
  it('should renders the component', () => {
    const { container } = render(
      <MemoryRouter initialEntries={['/']}>
        <Wrapper>
          <UserRow {...props} />
        </Wrapper>
      </MemoryRouter>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it("should display the user's name and username when we pass the props", () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Wrapper>
          <UserRow {...props} />
        </Wrapper>
      </MemoryRouter>,
    );
    expect(screen.queryAllByText(props.id).length).toBe(1);
    expect(screen.queryAllByText(props.name).length).toBe(1);
    expect(screen.queryAllByText(props.username).length).toBe(1);
  });

  it("should display the action button to the detail's page of the user", () => {
    const { container } = render(
      <MemoryRouter initialEntries={['/']}>
        <Wrapper>
          <UserRow {...props} />
        </Wrapper>
      </MemoryRouter>,
    );
    const detailButton = container.querySelector('a');
    expect(detailButton).toHaveAttribute('href', `/user/${props.id}`);
  });

  it("clicking on the action button should link to the user's detail page", () => {
    let testLocation;
    const { container } = render(
      <MemoryRouter initialEntries={['/']}>
        <Wrapper>
          <UserRow {...props} />
        </Wrapper>
        <Route
          path="*"
          render={({ location }) => {
            testLocation = location;
            return null;
          }}
        />
      </MemoryRouter>,
    );
    const detailButton = container.querySelector('a');
    fireEvent.click(detailButton);
    expect(testLocation.pathname).toBe(`/user/${props.id}`);
  });
});
