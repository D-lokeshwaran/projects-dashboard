import { fetchApiClient } from './fetchApiClient'

export const retrieveAllFoldersApi =
    () => fetchApiClient('/folders').then(resp => resp.json());