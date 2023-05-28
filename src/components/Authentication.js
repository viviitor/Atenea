import { useNavigate } from "react-router-dom";
import Imagen from "../img/comida.JPG";
import { useState } from 'react';


export function Login({changeLog}) {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        const u = 'vgalvis1';
        const p = '1234';

        if (username === u && password === p) {
            console.log('Bienvenido');
            changeLog(true);
            navigate("/home");

        } else {
            alert('usuario o contraseña invalidos');
        }
    }

    function handleUsername(e) {
        const valorU = e.target.value;
        setUsername(valorU);
    }

    function handlePassword(e) {
        const valorP = e.target.value;
        setPassword(valorP);
    }

    return (
        <main role="main" class="container my-auto">
            <div class="row" id=" ">
                <div id="modelocaja" class="col-lg-4 offset-lg-4 col-md-6 offset-md-3
                    col-12">
                    <h2 class="text-center" id="textTitle">¡BIENVENIDO!</h2>
                    <img id="imagen" class="img-fluid mx-auto d-block rounded"
                        src={Imagen} /><br></br>

                    <form onSubmit={handleSubmit}>
                        <div class="formtextUsuCont-group">
                            <label id="textUsuCont" for="Usuario"><b>Usuario</b></label>
                            <input id="inputUsuCont" name="Usuario"
                                class="form-control" type="text"
                                placeholder="Escriba su usuario"
                                onChange={handleUsername} />
                        </div>
                        <div class="form-group">
                            <label id="textUsuCont" for="palabraSecreta"><b>Contraseña</b></label>
                            <input id="inputUsuCont" name="palabraSecreta"
                                class="form-control" type="password"
                                placeholder="Escriba su contraseña"
                                onChange={handlePassword} />
                        </div>
                        <br></br>
                        <button type="submit" id="boton" class="btn btn-outline-danger">
                            Iniciar Sesión
                        </button>
                        <br></br>

                    </form>
                </div>
            </div>
        </main>
    );
}