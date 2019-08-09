import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers:{
        Authorization: 'Client-ID 09a229ef4ab40861178c50075e84090e16fa77d420941eb17cab84b35e1ee7d1'
    }
});