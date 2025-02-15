import axios from "./axios_customer";

const createUserApi = async (email, name, password) => {
  try {
    const URL_API = "api/register";
    const data = {
      email,
      name,
      password,
    };
    return axios.post(URL_API, data);
  } catch (error) {
    console.log("loi khi call API >>>:", error);
  }
};

const loginApi = async (email, password) => {
  try {
    const URL_API = "api/login";
    const data = {
      email,
      password,
    };
    return axios.post(URL_API, data);
  } catch (error) {
    console.log("loi khi call Api >>>:", error);
  }
};

const getUser = async () => {
  try {
    const URL_API = "api/user";
    return axios.get(URL_API);
  } catch (error) {
    console.log("loi khi call API >>>: ", error);
  }
};

const getCategory = async () => {
  try {
    const URL_API = "api/category";
    return axios.get(URL_API);
  } catch (error) {
    console.log("loi khi call API >>>: ", error);
  }
};

const createProductApi = async (
  name,
  image,
  quantity,
  category_id,
  description,
  price,
  discount
) => {
  try {
    const URL_API = "api/createproduct";
    const data = {
      name,
      image,
      quantity,
      category_id,
      description,
      price,
      discount,
    };
    return axios.post(URL_API, data);
  } catch (error) {
    console.log("loi khi call API >>>: ", error);
  }
};

const getProduct = async () => {
  try {
    const URL_API = "api/product";
    return axios.get(URL_API);
  } catch (error) {
    console.log("loi khi call API >>>: ", error);
  }
};

const deleteProduct = async (id) => {
  try {
    const URL_API = `api/product/${id}`;
    return axios.delete(URL_API);
  } catch (error) {
    console.log("loi khi call API >>>: ", error);
  }
};

export { createUserApi, loginApi, getUser, getCategory, createProductApi, getProduct, deleteProduct };
