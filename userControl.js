import userService from "./userService.js"
let body = {nome: "Darlan", email:"darlan@gmail.com"}
export default function userControl(){
    const{nome, email} = body           // Faz as verificações para que possa seguir para services
    if(!nome||!email){
        return console.log("dados inválidos")
    }else{
       let  resposta =  userService(nome, email)  //executa services
       return resposta
    }
}