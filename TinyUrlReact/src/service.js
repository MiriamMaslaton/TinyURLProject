import axios from 'axios';
axios.defaults.baseURL = process.env.REACT_APP_BaseUrl;
axios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    console.log(error);
    return Promise.reject("Error in api call: " + error);
  }
);

export default {
  getUrlById: async (id) => {
    const result = await axios.get('/links')
    return result.data.links.find((l) => l.id == id);

  },

  addUrl: async (name, id) => {
    console.log('addUrl', name)
    const result = await axios.post('/links', { "id": id, "originalUrl": name, "clicks": [] })
    return result.data;
  },
  deleteUrl: async (id) => {
    console.log('deleteUrl')
    const result = await axios.delete(`/links/?id=${id}`)
  },
  getData:  async (id) => {
    const result = await axios.get(`/links/data/${id}`)
    return result.data;
  }
};
