import axios from './axiosConfig.js';

const events = {
  search: (query = {}) => {
    var params = {
      'location.address': query.location || 'bandung'
    }

    return axios.get('events/search/', {
      params: params
    });
  }
}

export default events;
