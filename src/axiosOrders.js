import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://burger-builder-react-app.firebaseio.com/'
})

export default instance