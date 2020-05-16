import {request} from '../utils';
import api from '../config/api';

export default {
  getWeathers(days, lat, lng) {
    return request({
      url: `v1/forecast/geo/days/${days}?latitude=${lat}&longitude=${lng}&token=${api.TOKEN}`,
      method: 'GET',
    });
  },
};
