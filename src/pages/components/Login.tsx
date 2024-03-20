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
        <div style={{ backgroundColor: '#121212', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <Link to="/" style={{ alignSelf: 'center', cursor: 'pointer', marginBottom: '1.5rem' }}>
                <img src={icon} style={{ width: '100px', height: '90px' }} alt="Icono" />
            </Link>

            <h2 style={{ color: 'white', fontSize: '2.3rem', marginBottom: '1rem', fontFamily: 'Montserrat', fontWeight: 'bold' }}>Inicia Sesion</h2>
            <div style={{ marginTop: '1rem', width: '100%', maxWidth: '500px', textAlign: 'center' }}>
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontFamily: 'Montserrat' }}>
                    <input
                        type="text"
                        id="username"
                        placeholder="Nombre de usuario"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        style={{ width: '100%', padding: '1rem', backgroundColor: '#333', border: 'none', color: 'white', borderRadius: '15px' }}
                    />
                    <input
                        type="password"
                        id="password"
                        placeholder="Contraseña"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        style={{ width: '100%', padding: '1rem', backgroundColor: '#333', border: 'none', color: 'white', borderRadius: '15px' }}
                    />
                </form>
            </div>

            <Link to="/inicio" style={{ maxWidth: '500px', alignSelf: 'center', cursor: 'pointer', textDecoration: 'none', display: 'flex', justifyContent: 'center' }}>
                <div style={{ marginTop: '1rem' }}>
                    <button
                        type="submit"
                        style={{
                            width: '200%', // Cambia el ancho del botón según tus necesidades
                            margin: 'auto', // Centra el botón horizontalmente
                            padding: '1rem',
                            backgroundColor: '#E50914',
                            color: 'white',
                            borderRadius: '15px',
                            cursor: 'pointer',
                            fontFamily: 'Montserrat',
                            fontSize: '1rem',
                            fontWeight: 'bold'
                        }}
                    >
                        Iniciar Sesion
                    </button>
                </div>

            </Link>


            <div className='flex bottom-[20px] right-[20px] relative'>
                <button type="submit" className=' p-[1rem] bg-[#E50914] rounded-[15px] cursor-pointer font-bold text-[1rem] font-["Montserrat"] absolute'>
                    Administrador
                </button>
                <button type="submit" className=' p-[1rem] bg-[#E50914] rounded-[15px] cursor-pointer font-bold text-[1rem] font-["Montserrat"] absolute'>
                    Desarrollador
                </button>
            </div>
        </div>

    );
}

export default Login;
