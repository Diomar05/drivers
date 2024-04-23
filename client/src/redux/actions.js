import axios from 'axios';

export function getDrivers () {
    return async function (dispatch) {
      var json = await axios.get("http://localhost:3001/drivers");
      return dispatch({
        type: "GET_DRIVERS",
        payload: json.data,
      });
    };
  }

  export function getTeams () {
    return async function (dispatch) {
      var temp = await axios.get("http://localhost:3001/teams");
      var listaTeams = temp.data.map((el) => el.name);
      return dispatch({
        type: "GET_TEAMS",
        payload: listaTeams,
      });
    };
  }