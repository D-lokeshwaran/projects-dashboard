import { fetchApiClient } from './fetchApiClient.js'

export const retrieveAllTasks =
    () => fetchApiClient("/tasks").then(resp => resp.json());

export const retrieveTaskById =
    (oid) => fetchApiClient(`/tasks/${oid}`).then(resp => resp.json());

export const createTaskApi =
    (task) => fetchApiClient('/tasks', {
                   method: "POST",
                   headers: {
                      'content-type': 'application/json'
                   },
                   body: JSON.stringify(task)
              })