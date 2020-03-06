import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3333',
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjEsImlhdCI6MTU4MzMzOTcwOX0.IIG0kI-cHJYal35TdcHNBugJihQDqrxiy3f21Uh2qS4',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
    }
})

export default api;