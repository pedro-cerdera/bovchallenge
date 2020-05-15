import {Alert} from 'react-native';
import Config from '../config/api';

import _axios from 'axios';

const apiUrl = `${Config.API_URL}api/`;

const axios = _axios.create({
  baseURL: apiUrl,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json; charset=utf-8',
    'Access-Control-Allow-Headers':
      'Accept, Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With, Access-Control-Allow-Methods',
  },
});

export const request = async ({
  method,
  url,
  headers = undefined,
  params = undefined,
  data = undefined,
  token = undefined,
  onUploadProgress = undefined,
  onRequestFail = (error) => Alert.alert('Erro', error, [{title: 'OK'}]),
}) => {
  let response = {data: {}};
  try {
    response = await axios({
      url,
      method,
      headers: {
        ...headers,
        Authorization: token ? `JWT ${token}` : undefined,
      },
      params,
      data,
      onUploadProgress,
    });

    if (!response.status === 200) {
      throw new Error(response.error);
    }
  } catch (e) {
    response.error = {
      message: e.message,
      ...e.response,
    };
    onRequestFail(e.message);
  } finally {
    return response;
  }
};
