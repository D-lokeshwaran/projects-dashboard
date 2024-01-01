import { fetchApiClient } from './fetchApiClient'

export const retrieveAllProjects =
    () => fetchApiClient('/projects').then(resp => resp.json());