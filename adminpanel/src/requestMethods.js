import axios from 'axios';

const BASE_URL = "http://localhost:5000/api/";
const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken;
// const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0Njc1Yzk2ZWQwOTkwNDFhNDZkZDY5NCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4NjI5NDIxOCwiZXhwIjoxNjg4ODg2MjE4fQ.FRDY0D_dA4WjfN_VsEHeFrrvphaoS9HFce4kXuDc0Q4";
// console.log(JSON.parse(JSON.parse(localStorage.getItem("persist:root")).currentUser).accessToken);
// console.log({TOKEN}+"ok");

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers: { token: `Bearer ${TOKEN}` },
});