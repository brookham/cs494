import db from "./db";
import { INSERT_POST, SELECT_ALL_POSTS, SELECT_POST_BY_ID, UPDATE_POST_BY_ID, DELETE_POST_BY_ID } from "./sql";

export function createPost(title: string, content: string) {
  const info = db.prepare(INSERT_POST).run(title, content);
  return db.prepare(SELECT_POST_BY_ID).get(info.lastInsertRowid);
}

export function getAllPosts() {
  return db.prepare(SELECT_ALL_POSTS).all();
}

export function getPostById(id: number) {
  return db.prepare(SELECT_POST_BY_ID).get(id);
}

export function updatePost(id: number, title: string, content: string) {
  return db.prepare(UPDATE_POST_BY_ID).run(title, content, id).changes;
}

export function deletePost(id: number) {
  return db.prepare(DELETE_POST_BY_ID).run(id).changes;
}