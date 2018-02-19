import axios from 'axios'

const ax = axios.create({
 baseURL: 'http://provebgm2.elelco.it/api/',
 timeout: 60000,
})

export default {

	agenti:{
		get:(user) =>
 ax.post( 'agenti', user).then(res => res.data),
	}
}
