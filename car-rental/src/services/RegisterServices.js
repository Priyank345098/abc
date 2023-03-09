import axios from "axios";


const REGISTER_BASE_URL ="http://localhost:9090/api/v1/register"

class RegisterServices{

    getAllRegisterUser(){
    return axios.get(REGISTER_BASE_URL);
}
createRegister(newuser){
    return axios.post(REGISTER_BASE_URL, newuser);
}

}


export default new RegisterServices();