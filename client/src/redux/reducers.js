const initialState = {
    drivers: [],
    allDrivers: [],
    teams: [],
    details: [],
    allDriversFilter: [],
    listTeams: []
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

      case "GET_DRIVERS_BY_NAME":
        return {
         ...state,
          allDrivers: action.payload,
        };

        case 'ORDER_BY_NAME':
          const sortedArr = action.payload === 'asc' ?
              [...state.drivers].sort(function (a, b) {
                  if (a.name > b.name) { return 1 }
                  if (b.name > a.name) { return -1 }
                  return 0;
              }) :
              [...state.drivers].sort(function (a, b) {
                  if (a.name > b.name) { return -1; }
                  if (b.name > a.name) { return 1; }
                  return 0;
              })
              return {
                ...state,
                allDrivers: sortedArr
            }

            case 'ORDER_BY_BIRTHDATE':
            const sortBirthdate = action.payload === 'asc' ?
                [...state.drivers].sort(function (a, b) {
                    if (a.birthdate > b.birthdate) { return 1 }
                    if (b.birthdate > a.birthdate) { return -1 }
                    return 0;
                }) :
                [...state.drivers].sort(function (a, b) {
                    if (a.birthdate > b.birthdate) { return -1; }
                    if (b.birthdate > a.birthdate) { return 1; }
                    return 0;
                })
            return {
                ...state,
                allDrivers: sortBirthdate
            }

            // ordenar por equipos
            case 'ORDER_BY_TEAMS':
              const sortTeams = action.payload === 'asc' ?
                [...state.drivers].sort(function (a, b) {
                    if (a.teams > b.teams) { return 1 }
                    if (b.teams > a.teams) { return -1 }
                    return 0;
                }) :
                [...state.drivers].sort(function (a, b) {
                    if (a.teams > b.teams) { return -1; }
                    if (b.teams > a.teams) { return 1; }
                    return 0;
                })
            return {
                ...state,
                allDrivers: sortTeams
            }


            case 'GET_TEAMS_LIST':
            return {
                ...state,
                listTeams: action.payload
            }

              case 'POST_DRIVER':
              return {
                  ...state,
                  drivers: action.payload
              }


            case 'GET_DETAIL':
              return {
                  ...state,
                  details: action.payload
              }





            
  
      default:
        return state;
    }
  };
  
  export default rootReducer;