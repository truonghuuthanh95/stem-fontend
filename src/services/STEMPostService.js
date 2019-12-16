import {
  BASE_URL,
  CREATE_STEMPOST,
  GET_STEM_POST_BY_ID,
  GET_STEM_POST_BY_TEACHER,
  GET_STEM_POSTS
} from "./contanst";
import axios from "axios";
export const createStemPost = data => {
  return axios.post(`${BASE_URL + CREATE_STEMPOST}`, data);
};

export const getSTEMPostById = id => {
  return axios.get(`${BASE_URL + GET_STEM_POST_BY_ID}/${id}`);
};

export const getSTEMPostByTeacher = teacherId => {
  return axios.get(`${BASE_URL + GET_STEM_POST_BY_TEACHER}/${teacherId}`);
};

export const getSTEMPosts = () => {
  return axios.get(`${BASE_URL + GET_STEM_POSTS}`);
};
