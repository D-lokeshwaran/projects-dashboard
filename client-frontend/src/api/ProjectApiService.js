import { fetchApiClient } from './fetchApiClient'

export const retrieveAllProjectsApi =
    () => fetchApiClient('/projects').then(resp => resp.json());

export const retrieveProjectApi =
    (oid) => fetchApiClient(`/projects/${oid}`).then(resp => resp.json());

export const retrieveTasksByProjectId =
    (oid) => fetchApiClient(`/projects/${oid}/tasks`).then(resp => resp.json());

export const createProjectApi =
    (project) => fetchApiClient('/projects', {
                     method: 'POST',
                     headers: {
                        'content-type': 'application/json'
                     },
                     body: JSON.stringify(project)
                 })

export const createTaskForProjectApi =
    (oid, task) => fetchApiClient(`/projects/${oid}/tasks`, {
                     method: 'POST',
                     headers: {
                        'content-type': 'application/json'
                     },
                     body: JSON.stringify(task)
                 })

export const deleteProjectApi =
    (oid) => fetchApiClient(`/projects/${oid}`, {method: 'DELETE'})