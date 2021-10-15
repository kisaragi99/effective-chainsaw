import getBooksData from '../api/api';

const TOGGLE_LOADING = 'TOGGLE';
const SET_POSTS = 'SET_POSTS';
const SET_ERROR = 'SET_ERROR';

const initialState = {
  posts: [],
  isLoading: false,
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_LOADING:
      return { ...state, isLoading: action.payload };

    case SET_POSTS:
      return { ...state, posts: action.payload };

    case SET_ERROR:
      return { ...state, error: action.payload };

    default:
      return state;
  }
};

const toggleLoading = (payload) => ({
  type: TOGGLE_LOADING, payload,
});

const setPosts = (payload) => ({
  type: SET_POSTS, payload,
});

const setError = (payload) => ({
  type: SET_ERROR, payload,
});

export const getPosts = () => async (dispatch) => {
  dispatch(toggleLoading(true));

  const data = await getBooksData();
  const error = data.status;
  if (error) {
    dispatch(setError(error));
    return;
  }
  if (data.length === 0 || !data) {
    dispatch(setError('Some error occured'));
  }
  if (data.length > 0) {
    dispatch(setPosts(data));
  }

  dispatch(toggleLoading(false));
};

export default reducer;
