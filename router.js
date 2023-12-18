import userControl from "./userControl.js"
let pathHttp = "/user" //Simula a rota acessada pelo usuário
const router =(path, controler)=>{ //simula a rota 
 path = pathHttp
 if("/user"){  //Se rota estiver correta executa controller
    return controler()
 }
 else{
    return "Rota não encontrada"  //retorna erro
 }
}
const resposta = router("/user", userControl)  //chama a função rota com o callback useControl
console.log(resposta)