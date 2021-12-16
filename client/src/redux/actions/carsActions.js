import { message } from "antd";
import axios from "axios";

export const getAllCars = () => async (dispatch) => {
  dispatch({ type: "LOADING", payload: true });
  // const baseurl = "http://localhost:4500";
  try {
    const response = await axios.get(`/api/cars/getallcars`);
    dispatch({ type: "GET_ALL_CARS", payload: response.data });
    dispatch({ type: "LOADING", payload: false });
  } catch (err) {
    console.log(err);
    dispatch({ type: "LOADING", payload: false });
  }
};

export const addCar = (reqObj) => async (dispatch) => {
  dispatch({ type: "LOADING", payload: true });
  // const baseurl = "http://localhost:4500";
  try {
    await axios.post(`/api/cars/addcar`, reqObj);
    message.success("New Car Added Successfully");
    setTimeout(() => {
      window.location.href = "/admin";
    }, 500);
    dispatch({ type: "LOADING", payload: false });
  } catch (err) {
    console.log(err);
    dispatch({ type: "LOADING", payload: false });
  }
};

export const editCar = (reqObj) => async (dispatch) => {
  dispatch({ type: "LOADING", payload: true });
  // const baseurl = "http://localhost:4500";
  try {
    await axios.post(`/api/cars/editcar`, reqObj);
    message.success("Car Details Updated Successfully");
    setTimeout(() => {
      window.location.href = "/admin";
    }, 500);
    dispatch({ type: "LOADING", payload: false });
  } catch (err) {
    console.log(err);
    dispatch({ type: "LOADING", payload: false });
  }
};

export const deleteCar = (reqObj) => async (dispatch) => {
  dispatch({ type: "LOADING", payload: true });
  // const baseurl = "http://localhost:4500";
  try {
    await axios.post(`/api/cars/deletecar`, reqObj);
    message.success("Car Deleted Successfully");
    setTimeout(() => {
      window.location.reload();
    }, 500);
    dispatch({ type: "LOADING", payload: false });
  } catch (err) {
    console.log(err);
    dispatch({ type: "LOADING", payload: false });
  }
};
