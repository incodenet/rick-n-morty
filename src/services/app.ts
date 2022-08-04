import {API_URL} from '../constants/api';
import {Fetcher} from '../utils/fetcher';
import {API} from './constants';

const fetcher = new Fetcher({baseURL: API_URL});

export const getCharactersService = (params?: any): Promise<any> =>
  fetcher.request({
    url: API.characters,
    params,
  });

export const getLocationsService = (params?: any): Promise<any> =>
  fetcher.request({
    url: API.locations,
    params,
  });

export const getEpisodesService = (params?: any): Promise<any> =>
  fetcher.request({
    url: API.episodes,
    params,
  });
