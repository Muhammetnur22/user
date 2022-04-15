const key = process.env.GATSBY_SECRET_KEY;

export default (state, action) => {
  switch (action.type) {
    case 'GET_USER':
      const userSecretKey =
        (typeof window !== "undefined") && window.sessionStorage.getItem("secretKey")
          ? window.sessionStorage.getItem("secretKey") : null;
      
      const isValidKey = userSecretKey === key;

      return {
        ...state,
        token: isValidKey || userSecretKey,
        isAuthenticated: isValidKey,
      };

    case 'SET_AUTH_KEY':
      const secretKey = action.payload;
      // Sets secretKey to session storage
      if (typeof window !== "undefined") {
        window.sessionStorage.setItem("secretKey", secretKey);
      }

      return {
        ...state,
        token: secretKey,
        isAuthenticated: true,
      };
    default:
      return state;
  }
};