import express from 'express';
import users from './data/users.json';

const app = express();

app.listen(3001, () => {
  console.log('🚀 Server running on port 3001');
});

app.get('/users/:userId?', (req: express.Request, res: express.Response) => {
  const { userId } = req.params;
  if (userId) {
    const selectedUser = users.find((user) => user.id === Number(userId));
    if (selectedUser) {
      res.json(selectedUser);
    } else {
      // If the requested user's id could not be found, we return and error message
      res.statusMessage = 'User does not exist.';
      res.status(404).end();
    }
  } else {
    const usersList = users.map(({ id, name, username }) => ({
      id,
      name,
      username,
    }));
    res.json(usersList);
  }
});
