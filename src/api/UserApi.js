import axios from "axios";
import axiosClient from "./axiosClient";
import { BASE_USER_URL } from "../constant/StaticConst";

const UserApi = {
  findUser: (userList, userAccount) => {
    const checkUser = userList.find(user => user.account === userAccount);
    return checkUser;
  },
  addUser: async function (user) {
    const response = await axiosClient.get(BASE_USER_URL);
    if (!this.findUser(response, user.account)) {
      axios.post(BASE_USER_URL, user);
      return true;
    } else return false;
  },
  get: id => {
    return axiosClient.get(`${BASE_USER_URL}/${id}`);
  },
  turnOnLoginMode: (id, newValue) => {
    axios.put(`${BASE_USER_URL}/${id}`, newValue);
  },
  findToken: async (account, password) => {
    const response = await axiosClient.get(BASE_USER_URL);
    const user = response.find(user => {
      if (user.account === account && user.password === password) {
        return user;
      }
    });
    return user.id;
  },
};

export default UserApi;
