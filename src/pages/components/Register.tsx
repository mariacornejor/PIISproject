import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import icon from "../../assets/images/icono.png";

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
        <div style={{ backgroundColor: '#121212', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <Link to="/" style={{ alignSelf: 'center', cursor: 'pointer', marginBottom: '1.5rem' }}>
                <img src={icon} style={{ width: '100px', height: '90px' }} alt="Icono" />
            </Link>

            <h2 style={{ color: 'white', fontSize: '2.3rem', marginBottom: '0.6rem', fontFamily: 'Montserrat', fontWeight: 'bold' }}>Registrar nuevo usuario</h2>
            
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

            <div style={{ marginTop: '1rem', width: '100%', maxWidth: '500px', textAlign: 'center'}}>
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontFamily: 'Montserrat'}}>
                    <input
                        type="text"
                        id="username"
                        placeholder="Nombre de usuario"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        style={{ width: '100%', padding: '1rem', backgroundColor: '#333', border: 'none', color: 'white', borderRadius: '15px' }}
                        onInput={handleInputChange} // Manejar cambios en el campo de nombre de usuario
                    />
                    <input
                        type="email"
                        id="email"
                        placeholder="Correo electrónico"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        style={{ width: '100%', padding: '1rem', backgroundColor: '#333', border: 'none', color: 'white', borderRadius: '15px' }}
                        onInput={handleInputChange} // Manejar cambios en el campo de correo electrónico
                    />
                    <input
                        type="password"
                        id="password"
                        placeholder="Contraseña"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        style={{ width: '100%', padding: '1rem', backgroundColor: '#333', border: 'none', color: 'white', borderRadius: '15px' }}
                        onInput={handleInputChange} // Manejar cambios en el campo de contraseña
                    />
                    <button
                        type="submit"
                        style={{
                            width: '77%',
                            padding: '1rem',
                            backgroundColor: '#E50914',
                            color: 'white',
                            borderRadius: '15px',
                            cursor: 'pointer',
                            fontFamily: 'Montserrat',
                            fontSize: '1rem',
                            fontWeight: 'bold',
                            marginTop: '1rem',
                            alignSelf: 'center',
                        }}
                    >
                        Crear Cuenta
                    </button>
                </form>
            </div>
        </div> 
    );
}

export default Register;
