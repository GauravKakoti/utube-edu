import axios from 'axios';
console.log(process.env.REACT_APP_YT_API_KEY)
const request = axios.create({
    baseURL: 'https://youtube.googleapis.com/youtube/v3/',
    params: {
        key: 'AIzaSyCpn40DY2EIq0CECa1QBU_VzCCcaG5y70s',
    },
})

export default reuqest