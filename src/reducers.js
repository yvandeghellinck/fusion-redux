import { combineReducers, createStore } from 'redux'
import { end, start } from './utils';
// Actions
const LOAD   = 'fusion-redux/teams/LOAD';
const CREATE   = 'fusion-redux/teams/CREATE';
const UPDATE   = 'fusion-redux/teams/UPDATE';

// Action Creators
import { createAction } from 'redux-actions';
export const load = createAction(LOAD);
export const create = createAction(CREATE);
export const update = createAction(UPDATE);

import { handleActions } from 'redux-actions';
export default handleActions({
	[end(LOAD)]: {
		next: (state, action) => {
			return state;
		}
	}
}, {});