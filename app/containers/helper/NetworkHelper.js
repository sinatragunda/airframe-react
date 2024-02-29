
import React  from "react";
import Headers from "./Headers";
import axios from "axios";
import * as env from "./../../env";

class NetworkHelper extends React.Component{

	static buildUrl = (path)=>{
		return new String(env.URL).concat('/').concat(path);
	}
	
	static authenticate = (payload)=>{

		const options = {
			headers:Headers
		};
		
		let promise = new Promise((resolve ,reject)=>{
			
			let url = '/authentication';
			axios.post(url ,payload ,options).then((response)=>{
				resolve(response);
			}).catch((e)=>{
				reject(e);
			});
		})

		return promise;
	}

	
	static get = (url)=>{
		
		let promise = new Promise((resolve ,reject)=>{			
			axios.get(url).then((response)=>{
				//alert("Get Response "+JSON.stringify(response));
				resolve(response);
			}).catch((e)=>{
				alert('Reject here but do we do anything later ?  '+JSON.stringify(e));
				reject(e);
			});
		})
		return promise;
	}

	static isOK = (response)=>{
		if(response.status === 200){
			return true ;
		}
		return false;
	}
}

export default NetworkHelper;