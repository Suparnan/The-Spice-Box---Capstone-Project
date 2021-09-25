import axios from 'axios';

const API_URL = "https://spice-box-heroku.herokuapp.com/auth/";

const getRecipe = () => {
    return axios.get(API_URL+"getrecipe");
}

const addRecipe = (myData) => {
    return axios.post(API_URL+"addrecipe", myData);
}

const removeRecipe = (myData) => {
    console.log("send Data", myData);
    return axios.delete(API_URL+`removerecipe/${myData}`);
}

export { getRecipe, addRecipe, removeRecipe };