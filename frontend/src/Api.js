// export const apiURL = 'https://localhost:8080'

// export const Endpoints = {
//     newImoji: `${apiURL}/api/v1/emojis/`,
// }

import axios from "axios";

export default axios.create({
    baseURL: "http://localhost:8080/api",
    headers: {
        "Content-type": "application/json"
    }
});