import {
  BASE_URL,
  CREATE_STEM_REPORT,
  GET_STEM_REPORTS,
  GET_STEM_REPORTS_BY_TEACHER,
  CREATE_COMMENT_STEM_REPORT,
  GET_STEMREPORT_STATUS,
  GET_STEM_REPORTS_BY_ID,
  UPDATE_STEM_REPORT,
  UPLOAD_IMAGE_STEM_REPORT
} from "./contanst";
import axios from "axios";
export const createStemReport = data => {
  return axios.post(`${BASE_URL + CREATE_STEM_REPORT}`, data);
};

export const getSTEMReportById = id => {
  return axios.get(`${BASE_URL + GET_STEM_REPORTS_BY_ID}/${id}`);
};

export const getSTEMReportByTeacher = teacherId => {
  return axios.get(`${BASE_URL + GET_STEM_REPORTS_BY_TEACHER}/${teacherId}`);
};

export const getSTEMReports = () => {
  return axios.get(`${BASE_URL + GET_STEM_REPORTS}`);
};

export const commentSTEMReport = data => {
  return axios.Report(`${BASE_URL + CREATE_COMMENT_STEM_REPORT}`, data);
};

export const getSTEMReportStatus = () => {
  return axios.get(`${BASE_URL + GET_STEMREPORT_STATUS}`);
};

export const updateSTEMReport = (id, data) => {
  return axios.post(`${BASE_URL + UPDATE_STEM_REPORT}?id=${id}`, data);
};

export const uploadSTEMReportImage = (id, data) => {
  return axios.post(
    `${BASE_URL + UPLOAD_IMAGE_STEM_REPORT}?sTEMPlanId=${id},`,
    data
  );
};
