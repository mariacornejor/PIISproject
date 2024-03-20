import { useState } from 'react';
import { Link } from 'react-router-dom';
import icon from "../../assets/images/icono.png";

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showErrorPopup, setShowErrorPopup] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!username || !password) {
            setErrorMessage('Se tienen que rellenar todos los campos');
            setShowErrorPopup(true);
            setTimeout(() => {
                setShowErrorPopup(false);
            }, 2000);
            return;
        }

        try {
            const response = await fetch('http://localhost:3000/api/login', {
                method: 'POST',
                headers:{
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username,
                    password,
                }),
            });
            const data = await response.json();
            if (response.ok) {

                window.location.href = '/inicio';
            } else {
                throw new Error('Error sistema');
            }
        } catch (error) {

        }

        setUsername('');
        setPassword('');
    };

    return (
        <div className="bg-[#121212] min-h-screen flex flex-col items-center justify-center">
            <Link to="/" className="cursor-pointer mr-0">
                <img src={icon} className="w-[100px] h-[90px] mb-6" alt="Icono" />
            </Link>

            <h2 className="text-white text-2xl mb-4 font-bold font-['Montserrat']">Inicia Sesion</h2>

            <div className="mt-4 w-full max-w-[500px] text-center">
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <input
                        type="text"
                        id="username"
                        placeholder="Nombre de usuario"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="w-full p-4 bg-[#333] border-none text-white rounded-[15px] font-['Montserrat']"
                    />
                    <input
                        type="password"
                        id="password"
                        placeholder="Contraseña"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full p-4 bg-[#333] border-none text-white rounded-[15px] font-['Montserrat']"
                    />
                </form>
            </div>
                <div>
                    <button
                        type="submit"
                        className="w-full mt-4 p-4 bg-[#E50914] text-white rounded-[15px] cursor-pointer font-bold text-lg font-['Montserrat']"
                    >
                        Iniciar Sesión
                    </button>
                </div>
            <Link to="/recuperarContrasena" className="text-white mt-4 hover:text-gray-400 font-['Montserrat'] mr-0">
                Recuperar contraseña
            </Link>
        </div>

    );
}

export default Login;
