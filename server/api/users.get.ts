import User from '../models/User.model';

export default defineEventHandler(async () => {
  const users = await User.find();
  return { users };
});
