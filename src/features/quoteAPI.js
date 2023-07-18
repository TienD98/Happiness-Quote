//quoteAPI.js
import axios from 'axios';

export const getAPI = () => {
    return axios.get('https://api.api-ninjas.com/v1/quotes?category=happiness', {
        headers: {
            'X-Api-Key': 'zCQhD2rU34Rh5FTYnMOMWA==GdGFDieOO2avz8Xd'
        }
    })
}