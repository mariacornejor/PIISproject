import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import icon from "../../assets/images/icono.png";
import google from "../../assets/images/googlelogo.jpg";
import ig from "../../assets/images/iglogo.png";
import apple from "../../assets/images/applelogo.png";


function Register() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [showSuccessPopup, setShowSuccessPopup] = useState(false);
    const [showErrorPopup, setShowErrorPopup] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    
        // Verificar si algún campo está vacío
        if (!username || !email || !password) {
            setErrorMessage('Se tienen que rellenar todos los campos');
            setShowErrorPopup(true); // Mostrar el popup de error
            return; // Evitar que el formulario se envíe
        }
    
        try {
            const response = await fetch('http://localhost:3000/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Origin': 'http://localhost:3000', // Agregar el encabezado de origen (Origin)
                    // Puedes agregar otros encabezados si son necesarios
                },
                body: JSON.stringify({ username, email, password }),
            });
    
            if (!response.ok) {
                throw new Error('Error sistema');
            }
    
            // Si la respuesta es exitosa, mostrar mensaje de éxito
            setSuccessMessage('Registro exitoso'); // Establecer mensaje de éxito
            setShowSuccessPopup(true); // Mostrar el popup de éxito
    
            // Ocultar los popups después de 2 segundos
            setTimeout(() => {
                setSuccessMessage('');
                setShowSuccessPopup(false);
                window.location.href = '/'; // Redirigir a la página de inicio de sesión
            }, 2000);
        } catch (error) {
            if (error instanceof Error) {
                console.error('Error:', error.message);
                setErrorMessage(`Error al registrar usuario: ${error.message}`);
                setShowErrorPopup(true);
            } else {
                console.error('Ocurrió un error desconocido:', error);
                setErrorMessage('Error al registrar usuario');
                setShowErrorPopup(true);
            }
        }
    };    
    
    
    // Función para manejar cambios en los campos de entrada
    const handleInputChange = () => {
        // Ocultar el popup de error cuando se comienza a escribir de nuevo
        setShowErrorPopup(false);
    };

    return (
        <div style={{ backgroundColor: '#383434', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <Link to="/" style={{ alignSelf: 'center', cursor: 'pointer', marginBottom: '1.5rem', marginTop: '2rem'}}>
                <img src={icon} style={{ width: '100px', height: '90px' }} alt="Icono" />
            </Link>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap" />

            <h2 style={{ color: 'white', fontSize: '2.3rem', marginBottom: '0.6rem', fontFamily: 'Montserrat', fontWeight: 'bold'  }}>Crea tu Cuenta</h2>
            
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '0.5rem', marginTop: '1rem'}}>
                <Link to="/pagina1" className="mr-2">
                    <img src={google} style={{ width: '65px', height: '60px', borderRadius: '7px', marginRight: '1.5rem' }} alt="Icono 1" />
                </Link>
                <Link to="/pagina2" className="mr-2">
                    <img src={ig} style={{ width: '68px', height: '60px', marginRight: '1.5rem'}} alt="Icono 2" />
                </Link>
                <Link to="/pagina3" className="mr-8.5">
                    <img src={apple} style={{ width: '65px', height: '60px', borderRadius: '7px'}} alt="Icono 3" />
                </Link>
            </div>
            
            <div style={{ color: 'white', fontSize: '1.5rem', margin: '1rem 0', justifyContent: 'center'}}>───────────────────────────────────────</div>

            {/* Mostrar mensaje de error si existe */}
            {errorMessage && showErrorPopup && (
                <div style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: 'rgba(255, 0, 0, 0.8)', color: 'white', padding: '1rem', borderRadius: '10px', zIndex: '9999' }}>
                    {errorMessage}
                </div>
            )}

            {/* Popup de éxito */}
            {successMessage && showSuccessPopup && (
                <div style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: 'rgba(0, 255, 0, 0.8)', color: 'white', padding: '1rem', borderRadius: '10px', zIndex: '9999' }}>
                    {successMessage}
                </div>
            )}

            <div style={{ marginTop: '1rem', width: '100%', maxWidth: '600px', textAlign: 'center'}}>
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontFamily: 'Montserrat'}}>
                    <div style={{ position: 'relative' }}>
                        <label htmlFor="username" style={{ color: 'white', fontFamily: 'Montserrat', position: 'absolute', left: 0, fontWeight: 'bold' }}>USERNAME</label>
                        <input
                            type="text"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            style={{ width: '100%', padding: '1rem', backgroundColor: '#171616', border: 'none', color: 'white', borderRadius: '7px', marginTop: '2rem' }}
                            onInput={handleInputChange} // Manejar cambios en el campo de nombre de usuario
                        />
                    </div>

                    <div style={{ position: 'relative' }}>
                        <label htmlFor="email" style={{ color: 'white', fontFamily: 'Montserrat', position: 'absolute', left: 0, fontWeight: 'bold' }}>CORREO ELECTRÓNICO</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            style={{ width: '100%', padding: '1rem', backgroundColor: '#171616', border: 'none', color: 'white', borderRadius: '7px', marginTop: '2rem' }}
                            onInput={handleInputChange} // Manejar cambios en el campo de correo electrónico
                        />
                    </div>

                    <div style={{ position: 'relative' }}>
                        <label htmlFor="password" style={{ color: 'white', fontFamily: 'Montserrat', position: 'absolute', fontWeight: 'bold', left: 0 }}>CONTRASEÑA</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            style={{ width: '100%', padding: '1rem', backgroundColor: '#171616', border: 'none', color: 'white', borderRadius: '7px', marginTop: '2rem' }}
                            onInput={handleInputChange} // Manejar cambios en el campo de contraseña
                        />
                    </div>

                    <button
                        type="submit"
                        style={{
                            width: '65%',
                            padding: '1rem',
                            backgroundColor: '#b85c5c',
                            color: 'white',
                            borderRadius: '7px',
                            cursor: 'pointer',
                            fontFamily: 'Montserrat',
                            fontSize: '1rem',
                            fontWeight: 'bold',
                            marginTop: '1.5rem',
                            alignSelf: 'center',
                            marginBottom: '2rem'
                        }}
                    >
                        CREAR CUENTA
                    </button>
                </form>
            </div>
        </div> 
    );
}

export default Register;
