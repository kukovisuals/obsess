import axios from 'axios';

axios({
	url: '/users',
	method: 'get',
	baseURL: 'https://fakestoreapi.com',

	transformResponse: [function (data) {
    // Do whatever you want to transform the data

    console.log(data)
    return data;
  }],
})