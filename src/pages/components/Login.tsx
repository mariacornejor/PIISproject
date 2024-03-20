import { useState } from 'react';
import { Link } from 'react-router-dom';
import icon from "../../assets/images/icono.png";

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Username:', username);
        console.log('Password:', password);
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

            <Link to="/inicio" className="max-w-[500px] cursor-pointer text-decoration-none flex mr-0 mt-4">
                <div>
                    <button
                        type="submit"
                        className="w-full mt-1 p-4 bg-[#E50914] text-white rounded-[15px] cursor-pointer font-bold text-lg font-['Montserrat']"
                    >
                        Iniciar Sesión
                    </button>
                </div>
            </Link>
            <Link to="/recuperarContrasena" className="text-white mt-4 hover:text-gray-400 font-['Montserrat'] mr-0">
                Recuperar contraseña
            </Link>

            <div className="absolute bottom-0 right-0 mb-4 mr-4 flex space-x-2">
                <Link to="/loginAdmin">
                    <button type="button" className="p-4 bg-[#FF7979] rounded-[15px] cursor-pointer font-bold text-white text-lg font-['Montserrat']">
                        Administrador
                    </button>
                </Link>
                <Link to="/loginDev">
                    <button type="button" className="p-4 bg-[#E50914] rounded-[15px] cursor-pointer font-bold text-white text-lg font-['Montserrat']">
                        Desarrollador
                    </button>
                </Link>
            </div>
        </div>

    );
}

export default Login;
