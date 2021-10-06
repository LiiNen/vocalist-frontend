import axios from 'axios';

const api = axios.create({
  baseURL: 'http://www.vloom.co.kr:3000/'
});

export const LoginApi = {
  isExist: (email, type) =>
    api.get('/login', {
      params: {
        email: email,
        type: type
      }
    }),
  createAccount: (response, type) =>
    api.post('/login', {
      email: response.email,
      name: response.name,
      type: type
    }),
  GoogleApi: response =>
    axios.get('https://www.googleapis.com/oauth2/v3/tokeninfo', {
      params: {
        id_token: response.tokenId
      }
    })
};

export const CurationApi = {
  createCuration: (title, content, ctype_id, music_id_list) =>
    api.post('/curation/add', {
      title: title,
      content: content,
      ctype_id: ctype_id,
      music_id_list: music_id_list
    }),
  getCtype: id =>
    api.get('/ctype', {
      params: { id: id }
    }),
  getCtypeAll: () =>
    api.get('/ctype', {
      params: { id: 0 }
    })
};

export const MusicApi = {
  getMusicAll: () =>
    api.get('/music/search', {
      params: { id: 0, user_id: 0 }
    })
};
