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
  login: async (email,password) => {
    const result = await axios.post('users/login', { "email": email,"password": password })
    return result.data;
  },
  signUp:async (email,password,name) => {
    const result = await axios.post('users', { "email": email,"password": password,"name":name })
    return result.data;
  },
  pushLink:async (user)=>{
    console.log(user)
    const result=await axios.put(`users/${user._id}`,user)
    return result.data
  }
};
