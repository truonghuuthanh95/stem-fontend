import {
  BASE_URL,
  CREATE_STEM_PLAN,
  GET_STEM_PLANS,
  GET_STEM_PLANS_BY_TEACHER,
  CREATE_COMMENT_STEM_PLAN,
  GET_STEMPLAN_STATUS,
  GET_STEM_PLANS_BY_ID,
  UPDATE_STEM_PLAN,
  UPLOAD_IMAGE_STEM_PLAN
} from "./contanst";
import axios from "axios";
export const createStemPlan = data => {
  return axios.post(`${BASE_URL + CREATE_STEM_PLAN}`, data);
};

export const getSTEMPlanById = id => {
  return axios.get(`${BASE_URL + GET_STEM_PLANS_BY_ID}/${id}`);
};

export const getSTEMPlanByTeacher = teacherId => {
  return axios.get(`${BASE_URL + GET_STEM_PLANS_BY_TEACHER}/${teacherId}`);
};

export const getSTEMPlans = () => {
  return axios.get(`${BASE_URL + GET_STEM_PLANS}`);
};

export const commentSTEMPlanPlan = data => {
  return axios.Plan(`${BASE_URL + CREATE_COMMENT_STEM_PLAN}`, data);
};

export const getSTEMPlanStatus = () => {
  return axios.get(`${BASE_URL + GET_STEMPLAN_STATUS}`);
};

export const updateSTEMPlan = (id, data) => {
  return axios.post(`${BASE_URL + UPDATE_STEM_PLAN}?id=${id}`, data);
};

export const uploadSTEMPlanImage = (id, data) => {
  return axios.post(
    `${BASE_URL + UPLOAD_IMAGE_STEM_PLAN}?sTEMPlanId=${parseInt(id)}`,
    data
  );
};
