/*==================================================
/src/store/thunks.js

It contains all Thunk Creators and Thunks.
================================================== */

import api from '../api/api';


//FETCH ALL CAMPUSES
export const fetchAllCampusesThunk = async () => {  // The THUNK
  try {
    let res = await api.get(`/api/campuses`)
      .then((res) => res.data)
      .catch((e) => console.log(e))

    // Call Action Creator to return Action object (type + payload with "campuses" data)
    // Then dispatch the Action object to Reducer to update state 
    return res
  } catch (err) {
    console.error(err);
  }
};
//add Campus
//THUNK CREATOR:
export const addCampusThunk = async (campus) => {  // The THUNK
  try {

    // API "post" call to add "student" object's data to database
    let res = await api.post(`/api/campuses`, campus);
    // Call Action Creator to return Action object (type + payload with new students data)
    // Then dispatch the Action object to Reducer to update state 
    console.log(res.data)
    return (res.data);
  } catch (err) {
    console.error(err);
  }
};

// Single Campus
// THUNK CREATOR:
export const fetchCampusThunk = async (id) => {  // The THUNK
  try {
    // API "get" call to get a student data (based on "id")from database
    let res = await api.get(`/api/campuses/${id}`)
      .then((res => res.data))
      .catch(e => console.log(e))
    return res;
  } catch (err) {
    console.error(err);
  }
};
//Edit Campus
//THUNK CREATOR:
export const editCampusThunk = async (campus) => {
  try {
    console.log(campus)
    let updatedCampus = await api.put(`/api/campuses/${campus.id}`, campus);
    return updatedCampus.data;
  }
  catch (e) {
    console.log(e);
  }
}
//Delete Campus
//THUNK CREATOR:
export const deleteCampusThunk = async (id) => {
  try {
    const res = await api.delete(`/api/campuses/${id}`)
    return res.data
  }
  catch (err) {
    console.log(err)
  }
}

// All Students
// THUNK CREATOR:
export const fetchAllStudentsThunk = async () => {  // The THUNK
  try {
    // API "get" call to get "students" data from database
    let res = await api.get(`/api/students`)
      .then((res) => res.data)
      .catch(e => console.log(e))
    // Call Action Creator to return Action object (type + payload with "students" data)
    // Then dispatch the Action object to Reducer to update state 
    console.log(res)
    return res
  } catch (err) {
    console.error(err);
  }
};

// Add Student
// THUNK CREATOR:
export const addStudentThunk = async (student) => {  // The THUNK
  try {

    // API "post" call to add "student" object's data to database
    let res = await api.post(`/api/students`, student);
    // Call Action Creator to return Action object (type + payload with new students data)
    // Then dispatch the Action object to Reducer to update state 
    console.log(res.data)
    return (res.data);
  } catch (err) {
    console.error(err);
  }
};

// Delete Student
// THUNK CREATOR:
export const deleteStudentThunk = async (studentId) => {  // The THUNK
  try {

    // API "delete" call to delete student (based on "studentID") from database
    await api.delete(`/api/students/${studentId}`);
    // Delete successful so change state with dispatch
    return studentId
  } catch (err) {
    console.error(err);
  }
};

// Edit Student
// THUNK CREATOR:
export const editStudentThunk = async (student) => {  // The THUNK
  try {

    // API "put" call to update student (based on "id" and "student" object's data) from database
    let updatedStudent = await api.put(`/api/students/${student.id}`, student);
    // Update successful so change state with dispatch
    return (updatedStudent.data);
  } catch (err) {
    console.error(err);
  }
};

// Single Student
// THUNK CREATOR:
export const fetchStudentThunk = async (id) => {  // The THUNK
  try {

    // API "get" call to get a specific student (based on "id") data from database
    let res = await api.get(`/api/students/${id}`)
    // Call Action Creator to return Action object (type + payload with student data)
    // Then dispatch the Action object to Reducer to display student data 
    return (res.data);
  } catch (err) {
    console.error(err);
  }
};
