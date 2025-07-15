import { fetchJson } from "./api";
import type { TodosResponse } from "../types/Todo";

const BASE_URL = "https://dummyjson.com";

export function getAllTodos() {
  return fetchJson<TodosResponse>(`${BASE_URL}/todos`);
}
