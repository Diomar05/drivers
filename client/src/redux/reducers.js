const initialState = {
    drivers: [],
    teams: [],
    allDrivers: [],
    details: [],
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {

      case "GET_DRIVERS":
        return {
          ...state,
          drivers: action.payload,
          allDrivers: action.payload,
        };

        case "GET_TEAMS":
      return {
        ...state,
        teams: action.payload,
      };
  
      
  
      default:
        return state;
    }
  };
  
  export default rootReducer;