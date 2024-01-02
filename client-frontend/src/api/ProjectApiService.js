import { fetchApiClient } from './fetchApiClient'

export const retrieveAllProjectsApi =
    () => fetchApiClient('/projects').then(resp => resp.json());

export const retrieveProjectApi =
    (id) => fetchApiClient(`/projects/${id}`).then(resp => resp.json());

export const createProjectApi =
    (project) => fetchApiClient('/projects', {
                     method: 'POST',
                     headers: {
                        'content-type': 'application/json'
                     },
                     body: JSON.stringify(project)
                 })