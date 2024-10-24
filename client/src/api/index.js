import axios from 'axios';


//always doing api call the apllication should application/json (json)
export const axiosInstance = axios.create({
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
    }
});