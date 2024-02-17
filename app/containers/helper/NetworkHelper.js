
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
			
			let url = this.buildUrl('authentication');
			
			axios.post(url ,payload ,options).then((response)=>{
				alert("sucessful authentication");
				resolve(response);
			}).catch((e)=>{
				alert('Reject here but do we do anything later ?  '+JSON.stringify(e));
				reject(e);
			});
		})

		return promise;
	}
}

export default NetworkHelper;