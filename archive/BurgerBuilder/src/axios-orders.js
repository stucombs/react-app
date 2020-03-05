import axios from 'axios';

//this creates an instance of axios with the base URL for reaching firebase while placing an order. This is 
//alternative to setting global base url for all axios calls

const instance = axios.create({
	baseURL: 'https://cheeseburger-in-react.firebaseio.com/'
});

export default instance;