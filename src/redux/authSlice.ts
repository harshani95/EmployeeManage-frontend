interface User {
  email: string;
  password: string;
}

type AuthAction = { type: "LOGIN_SUCCESS"; payload: User } | { type: "LOGOUT" };

const initialState = {
  isAuthenticated: false,
  user: null as User | null,
};

// export const loginSuccess = <T>(user: T) => ({
//   type: "LOGIN_SUCCESS",
//   payload: user,
// });

// export const logout = () => ({
//   type: "LOGOUT",
// });

const authReducer = (state = initialState, action: AuthAction) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
      };
    case "LOGOUT":
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
