// schemaTypes/index.js



import comment from './comment';
import pin from './pin';
import postedBy from './postedBy';
import save from './save';
import user from './user';

// Export the schema types, including the user schema
export const schemaTypes = [
  user, pin, comment, postedBy, save
  // ...you can add more schema imports here as you create them
];
