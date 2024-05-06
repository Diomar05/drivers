import axios from "axios";

export function getDrivers() {
  return async function (dispatch) {
    var json = await axios.get("http://localhost:3001/drivers");
    return dispatch({
      type: "GET_DRIVERS",
      payload: json.data,
    });
  };
}

export function getTeams() {
  return async function (dispatch) {
    var temp = await axios.get("http://localhost:3001/teams");
    var listaTeams = temp.data.map((el) => el.name);
    return dispatch({
      type: "GET_TEAMS",
      payload: listaTeams,
    });
  };
}

export function getDriversByName(name) {
  return async function (dispatch) {
    const { data } = await axios.get(
      `http://localhost:3001/drivername?name=${name}`
    );
    return dispatch({
      type: "GET_DRIVERS_BY_NAME",
      payload: data,
    });
  };
}

export function orderByName(payload) {
  return {
      type: 'ORDER_BY_NAME',
      payload
  }
}

export function filterDriversByTeams(payload) {
  return async function (dispatch) {
    const response = await axios.get(`http://localhost:3001/teams/${teamId}/drivers`);
    dispatch({
      type: 'FILTER_DRIVERS_BY_TEAMS',
      payload: response.data,
    });
      }
    }

export function orderByBirthdate(payload) {
    return {
        type: 'ORDER_BY_BIRTHDATE',
        payload
    }
};

export const orderByTeams = (payload) => {
  return {
    type: 'ORDER_BY_TEAMS',
    payload
  };
};

export const filterCreated = (payload) => {
  return {
    type: 'FILTER_CREATED',
    payload
  }
}

export const getDetail = (id) => {
  return async function (dispatch) {
    const response = await axios.get(`http://localhost:3001/drivers/${id}`);
    return dispatch({
      type: 'GET_DETAIL',
      payload: response.data
    });
  };
}

export function postDriver(payload) {
  return async function (dispatch) {
      const response = await axios.post('http://localhost:3001/drivers', payload);
      return dispatch({
        type: 'POST_DRIVER',
        payload: response.data
      });
  }
}

export function getTeamsList() {
  return async function (dispatch) {
      var json = await axios.get('http://localhost:3001/teams');
      var listOfTeams = json.data.map(el => el.name)
      return dispatch({
          type: 'GET_TEAMS_LIST',
          payload: listOfTeams
            });
  }
}