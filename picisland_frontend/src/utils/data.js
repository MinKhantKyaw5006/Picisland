// utils/data.js

export const userQuery = (userId) => {
    // Meaning is to try to get a document of type user and id of the current user
    const query = `*[_type == "user" && _id == '${userId}']`;
    return query; // Return the query string
}
