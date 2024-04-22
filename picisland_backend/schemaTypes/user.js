// schemaTypes/user.js



export default {
  name: 'user',
  title: 'User',
  type: 'document',
  fields: [
  
    {
      name: 'username',
      title: 'UserName',
      type: 'string',
    },
    {
      name: 'uid', // Add a field for storing the UID
      title: 'UID',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'string',
    },
    // Add other fields as needed
  ],
};
