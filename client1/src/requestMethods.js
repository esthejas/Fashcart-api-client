import axios from 'axios';

const BASE_URL = "http://localhost:5000/api/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0Nzg4MDQwY2NlNzFjZTIzMTk4YWNhZCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4NTYxOTAyMiwiZXhwIjoxNjg1ODc4MjIyfQ.s0UIOdkPqs46xvrwsPJX8ZHNw-F66DZsP9HonOIvtPM"; 

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: {token:`${TOKEN}`},
});
