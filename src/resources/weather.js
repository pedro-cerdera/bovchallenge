import {request} from '../utils';

export default {
  getWeathers(days, lat, lng) {
    return request({
      url: `v1/forecast/geo/days/${days}?latitude=${lat}&longitude=${lng}`,
      method: 'GET',
    });
  },
};
