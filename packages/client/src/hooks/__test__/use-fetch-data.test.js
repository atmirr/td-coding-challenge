import { renderHook } from '@testing-library/react-hooks';
import 'src/utils/test/mock-server';
import { users, user, errorMessage } from 'src/utils/test/mock-data';
import useFetchData from '../use-fetch-data';

describe('useFetchData() hook', () => {
  it("should return the list of users for the '/users' endpoint", async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchData('/users'),
    );
    // Should wait for the hook to be updated as it works asynchronously
    await waitForNextUpdate();
    expect(result.current.data).toStrictEqual(users);
  });
  it("should return the user's data for the 'users/1' endpoint", async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchData('/users/1'),
    );
    await waitForNextUpdate();
    expect(result.current.data).toStrictEqual(user);
  });
  it("should return the error for any unknown user like 'users/20' endpoint", async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchData('/users/20'),
    );
    await waitForNextUpdate();
    expect(result.current.error).toBe(errorMessage);
  });
});
