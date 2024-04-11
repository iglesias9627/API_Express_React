import {
    CREATE_TUTORIAL,
    RETRIEVE_TUTORIALS,
    UPDATE_TUTORIAL,
    DELETE_ALL_TUTORIALS,
    DELETE_TUTORIAL,
} from './types';

import TutorialDataService from '../services/tutorial.service';

export const createTutorial = (title, description) => async (dispatch) => {
    try {
        const res = await TutorialDataService.create({ title, description });
        
        dispatch({
            type: CREATE_TUTORIAL,
            payload: res.data,
        });

        return Promise.resolve(res.data); 

    } catch (error) {
        return Promise.reject(error);
    };
};

export const restrieveTutorials = () => async (dispatch) => {
    try {
        const res = await TutorialDataService.getAll();

        dispatch({
            type: RETRIEVE_TUTORIALS,
            payload: res.data,
        });

    } catch (error) {
        console.log(error);
    };
};

export const updateTutorial = (id, data) => async (dispatch) => {
    try { 
        const res = await TutorialDataService.update(id, data);

        dispatch({
            type: UPDATE_TUTORIAL,
            payload: res.data,
        });

        return Promise.resolve(res.data);

    } catch (error) {
        return Promise.reject(error);
     };
};

export const deleteTutorial = (id) = async (dispatch) => {
    try {
        await TutorialDataService.delete(id);
        dispatch({
            type: DELETE_TUTORIAL,
            payload: { id },
        });
     } catch (error) {
        console.log(error);
    };
};

export const deleteAllTutorials = () => async (dispatch) => {
    try {
        const res = await TutorialDataService.deleteAll();
        
        dispatch({
            type: DELETE_ALL_TUTORIALS,
            payload: res.data
        });
        return Promise.resolve(res.data);
    } catch (error) {
        return Promise.reject(error);
    };
};

export const findTutorialsByTitle = (title) => async (dispatch) => {
    try {
        const res = await TutorialDataService.findByTitle(title);

        dispatch({
            type: RETRIEVE_TUTORIALS,
            payload: res.data,
        })
    } catch (error) {
        console.log(error);
    };
};