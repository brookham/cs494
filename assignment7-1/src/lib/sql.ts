export const INSERT_POST = "INSERT INTO posts (title, content) VALUES (?, ?)";
export const SELECT_ALL_POSTS = "SELECT * FROM posts ORDER BY id DESC";
export const SELECT_POST_BY_ID = "SELECT * FROM posts WHERE id = ?";
export const UPDATE_POST_BY_ID = "UPDATE posts SET title = ?, content = ? WHERE id = ?";
export const DELETE_POST_BY_ID = "DELETE FROM posts WHERE id = ?";