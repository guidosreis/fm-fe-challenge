import { ActionReducerMap } from '@ngrx/store';
import { ApplicationState } from '../application-state';
import { uiState } from './uiStateReducer';
import { storeData } from './storeDataReducer';

export const reducers: ActionReducerMap<ApplicationState> = {
  uiState,
  storeData
};