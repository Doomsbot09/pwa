import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  firstname: String,
  lastname: String,
  grade: Number,
  section: String,
  game: String,
  score: String,
  date: String
});

export default mongoose.models.User || mongoose.model('User', UserSchema);
