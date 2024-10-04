
const initialState = {
  isAuthenticated: false,
  user: null,
};

export const loginSuccess = (user) => ({
  type: 'LOGIN_SUCCESS',
  payload: user,
});

export const logout = () => ({
  type: 'LOGOUT',
});

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
      };
    case 'LOGOUT':
      return {
        ...state,
        isAuthenticated: false,
        user: null,
      };
    default:
      return state;
  }
};

export default authReducer;
