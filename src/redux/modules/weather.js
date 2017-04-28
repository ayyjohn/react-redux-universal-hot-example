const GET_WEATHER = 'redux-example/weather/GET_WEATHER';
const CLEAR_WEATHER = 'redux-example/weather/GET_WEATHER';
const ERROR_WEATHER = 'redux-example/weather/ERROR_WEATHER';

const initialState = {
  errors: [],
  temperature: ''
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case GET_WEATHER:
      return {
        temperature: action.temperature,
        errors: []
      };
    case CLEAR_WEATHER:
      return initialState;
    case ERROR_WEATHER:
      return {
        errors: ['That zip code was invalid']
      };
    default:
      return state;
  }
}

export function getWeather(zipCode) {
  return {
    type: GET_WEATHER,
    promise: (client) => client.get(`api.openweathermap.org/data/2.5/weather?zip=${zipCode}`)
  };
}
