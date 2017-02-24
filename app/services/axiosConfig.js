import axios from 'axios';

axios.defaults.baseURL = 'https://www.eventbriteapi.com/v3/';
axios.defaults.params = {}
axios.defaults.params['token'] = 'ZYNZSZ7KZPRASDVTBYPR'

export default axios;
