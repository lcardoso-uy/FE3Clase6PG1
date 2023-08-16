import { useState } from "react";

function Form({onAddUser}) {
    const[userName,setUserName]=useState("");
    const[password,setPassword]=useState("");
    
    const validateUserName = (userName) => {

        const withoutSpaces = userName.trim();
        if (withoutSpaces.length > 2) {
            return true;
        } else {
            return false;
        }
    };

    const validatePassword = (password) => {

        const withoutSpaces = password.trim();
        const passwordAsArray = withoutSpaces.split("");

        const hasNumber = passwordAsArray.some((character) => {
            if (isNaN(character)) {
                return false;
            } else {
                return true;
            }
        });

        if (withoutSpaces.length > 5 && hasNumber) {
            return true;
        } else {
            return false;
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const isUsernameValid = validateUserName(userName);
        const isPasswordValid = validatePassword(password);

        console.log(isUsernameValid);
        console.log(isPasswordValid);
        
        if (!isPasswordValid || !isUsernameValid) {
            alert("Alguno de los datos ingresados no son correctos");
        } else {
            onAddUser({userName, password}) 
            alert(`Bienvenido: ${userName}`);
        }
        };


    return(
        <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Ingrese su nombre de usuario " value={userName} onChange={(e)=>setUserName(e.target.value)} />
        <input type="text" placeholder="Ingrese su contraseña " value={password} onChange={(e)=>setPassword(e.target.value)} />
        <button type="submit">Agregar Usuario</button>
    </form>
    )
}
export default Form;