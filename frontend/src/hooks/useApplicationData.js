import { useReducer, useEffect } from "react";

// Initial state
const initialState = {
  photoData: [],
  topicData: [],
  favorites: [],
  selectedPhoto: null,
  modalOpen: false,
};

// list of actions that application will use
export const ACTIONS = {
  FAV_PHOTO_SELECTED: "FAV_PHOTO_ADDED",
  FAV_PHOTO_REMOVED: "FAV_PHOTO_REMOVED",
  GET_PHOTO_DATA: "GET_PHOTO_DATA",
  GET_TOPIC_DATA: "GET_TOPIC_DATA",
  SET_SELECTED_PHOTO: "SET_SELECTED_PHOTO",
  OPEN_PHOTO_MODAL: "OPEN_PHOTO_MODAL",
  CLOSE_PHOTO_MODAL: "CLOSE_PHOTO_MODAL",
};

// Create reducer functions that take the current state and an action as arguments, and return a new state result
function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.SET_SELECTED_PHOTO:
      return {
        ...state,
        selectedPhoto: action.payload,
      };
    case ACTIONS.FAV_PHOTO_SELECTED:
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    case ACTIONS.FAV_PHOTO_REMOVED:
      return {
        ...state,
        favorites: state.favorites.filter(
          (photoId) => photoId !== action.payload
        ),
      };

    case ACTIONS.OPEN_PHOTO_MODAL:
      return {
        ...state,
        modalOpen: true,
      };

    case ACTIONS.CLOSE_PHOTO_MODAL:
      return {
        ...state,
        modalOpen: false,
      };
    case ACTIONS.GET_PHOTO_DATA:
      return {
        ...state,
        photoData: action.payload,
      };
    case ACTIONS.GET_TOPIC_DATA:
      return {
        ...state,
        topicData: action.payload,
      };
    case ACTIONS.GET_PHOTOS_BY_TOPIC:
      return {
        ...state,
        photoData: action.payload,
      };
    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
  }
}

// One root reducer function is responsible for handling all of the actions that are dispatched, and calculating what the entire new state result should be every time
const useApplicationData = () => {
  // Initialize state and dispatch function using useReducer
  const [state, dispatch] = useReducer(reducer, initialState);

  // open and close modal
  const openModal = () => {
    dispatch({ type: ACTIONS.OPEN_PHOTO_MODAL });
  };

  const closeModal = () => {
    dispatch({ type: ACTIONS.CLOSE_PHOTO_MODAL });
  };

  //add and remove from favorites array
  const toggleFavorite = (photoId) => {
    if (state.favorites.includes(photoId)) {
      dispatch({ type: ACTIONS.FAV_PHOTO_REMOVED, payload: photoId });
    } else {
      dispatch({ type: ACTIONS.FAV_PHOTO_SELECTED, payload: photoId });
    }
  };

  // set selected photo for modal
  const setSelectedPhoto = (photoId) => {
    dispatch({ type: ACTIONS.SET_SELECTED_PHOTO, payload: photoId || null });
  };

  // Get photos by topic
  const getPhotosByTopic = (id) => {
    fetch("http://localhost:8001/api/topics/photos/" + id)
      .then((res) => res.json())
      .then((data) =>
        dispatch({ type: ACTIONS.GET_PHOTOS_BY_TOPIC, payload: data })
      );
  };

  // Fetch photo data
  useEffect(() => {
    fetch("http://localhost:8001/api/photos")
      .then((response) => response.json())
      .then((data) =>
        dispatch({ type: ACTIONS.GET_PHOTO_DATA, payload: data })
      );
  }, []);

  // Fetch topic data
  useEffect(() => {
    fetch("http://localhost:8001/api/topics")
      .then((response) => response.json())
      .then((data) =>
        dispatch({ type: ACTIONS.GET_TOPIC_DATA, payload: data })
      );
  }, []);

  // return actions
  return {
    state,
    actions: {
      openModal,
      closeModal,
      toggleFavorite,
      setSelectedPhoto,
      getPhotosByTopic,
      photoData: state.photoData,
      topicData: state.topicData,
    },
  };
};

export default useApplicationData;
