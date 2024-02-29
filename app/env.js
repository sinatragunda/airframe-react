
import axios from "axios";
import errorDispatch from "./containers/directives/ErrorDispatch";

const URL = "https://localhost:8445/fineract-provider/api/v1";

axios.defaults.baseURL = URL ;
axios.defaults.headers["Fineract-Platform-Tenantid"] = "nkwazi";

axios.interceptors.response.use({} ,(error)=>{
    alert('Error Inteceptor');
    //errorDispatch(error);
    <ErrorDispatch response = {error} />
});


export {URL};