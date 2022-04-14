export default (state, action) => {
  switch (action.type) {
    case 'GET_USER':
      const userSecretKey = sessionStorage.getItem("secretKey") || null;

      return {
        ...state,
        token: userSecretKey,
        isAuthenticated: Boolean(userSecretKey),
        loading: false
      };
    case 'SET_USERS':
      return {
        ...state,
        users: action.payload,
        loading: false
      };
    case 'SET_AUTHENTICATED':
      const secretKey = action.payload;
      // Sets secretKey to session storage
      sessionStorage.setItem("secretKey", secretKey); 

      return {
        ...state,
        token: secretKey,
        isAuthenticated: true,
        loading: false
      };
    case 'SET_LOADING':
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};