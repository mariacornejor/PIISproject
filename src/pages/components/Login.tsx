import { useState } from 'react';
import icon from "../../assets/images/icono.png";
import google from "../../assets/images/googlelogo.jpg";
import ig from "../../assets/images/iglogo.png";
import apple from "../../assets/images/applelogo.png";

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showErrorPopup, setShowErrorPopup] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    
        if (!email || !password) {
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
                headers: {
                    'Content-Type': 'application/json',
                    'Origin': 'http://localhost:3000',
                },
                body: JSON.stringify({
                    email,
                    password,
                }),
            });
            if (response.ok) {
                const data = await response.json();
                document.cookie = `token=${data.token}; path=/`;                                                        
                window.location.href = '/';
            } else {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Error en el sistema');
            }
        } catch (error) {
            const message = (error instanceof Error) ? error.message : 'Error al iniciar sesión';
            setErrorMessage(message);
            setShowErrorPopup(true);
            setTimeout(() => {
                setShowErrorPopup(false);
            }, 2000);
        }
    };

    return (
        <div className="min-h-screen bg-[#383434] flex flex-col items-center justify-center">
            <a href="/" className="mr-0 self-center cursor-pointer mb-6 mt-8">
                <img src={icon} className="w-[100px] h-[90px]" alt="Icono" />
            </a>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap" />

            <h2 className="text-white text-[2.3rem] mb-[0.6rem] font-bold" style={{ fontFamily: 'Montserrat' }}>Inicia Sesión</h2>

            <div className="flex justify-center mb-[0.5rem] mt-[1rem]">
                <a href="/pagina1" className="mr-3">
                    <img src={google} className="w-[65px] h-[60px] rounded-md mr-[1.5rem]" alt="Icono 1" />
                </a>
                <a href="/pagina2" className="mr-3">
                    <img src={ig} className="w-[68px] h-[60px] mr-[1.5rem]" alt="Icono 2" />
                </a>
                <a href="/pagina3" className="mr-0">
                    <img src={apple} className="w-[65px] h-[60px] rounded-md" alt="Icono 3" />
                </a>
            </div>

            <div className="text-white text-[1.5rem] m-[1rem]">───────────────────────────────────────</div>

            {errorMessage && showErrorPopup && (
                <div style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: 'rgba(255, 0, 0, 0.8)', color: 'white', padding: '1rem', borderRadius: '10px', zIndex: '9999' }}>
                    {errorMessage}
                </div>
            )}

            <div className="w-full max-w-lg text-center">
                <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-[1rem]" style={{ fontFamily: 'Montserrat' }}>
                    <div className="relative">
                        <label htmlFor="email" className="text-white font-bold flex" style={{ left: 0 }}>EMAIL</label>
                        <input
                            type="text"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full py-4 px-4 bg-[#171616] border-none text-white rounded-md mt-2"
                        />
                    </div>

                    <div className="relative">
                        <label htmlFor="password" className="text-white font-bold flex" style={{ left: 0 }}>CONTRASEÑA</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full py-4 pl-4 bg-[#171616] border-none text-white rounded-md mt-2"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-[65%] p-[1rem] bg-[#b85c5c] text-white font-bold rounded-md cursor-pointer text-[1rem] mt-[1.5rem] self-center mb-[8rem]"
                    >
                        INICIAR SESION
                    </button>
                </form>
            </div>
        </div>

    );
}

export default Login;
