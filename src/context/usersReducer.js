export default (state, action) => {
    switch (action.type) {
      case 'SET_USERS':
        return {
          ...state,
          users: action.payload,
          loading: false
        };
      case 'SET_AUTHENTICATED':
        return {
          ...state,
          isAuthenticated: action.payload,
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