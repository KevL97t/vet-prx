import React, { useState, useEffect } from 'react'
import { setId } from '../utils/idSetter';
import Error from './Error';

const initRegisterState = {
  nombrePaciente: '',
  nombrePropietario: '',
  email: '',
  fechaAlta: '',
  sintomas: '',
}

const Formulario = ({handlePacientes, pacienteToEdit, isEditing, setIsEditing}) => {
  const [registro, setRegistro] = useState(initRegisterState);
  const [error, setError] = useState(false);
  const {
    nombrePaciente,
    nombrePropietario,
    email,
    fechaAlta,
    sintomas,
    id
  } = pacienteToEdit;

  useEffect(() => {
    const editedRegistro = {
      nombrePaciente,
      nombrePropietario,
      email,
      fechaAlta,
      sintomas,
      id,
    }
    setRegistro(editedRegistro);
  }, [pacienteToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault(); 
    const isAnInputEmpty = Object.values(registro).includes('');
    if(isAnInputEmpty){
      // const emptyInputSnack = document.createElement('p');
      // emptyInputSnack.textContent = 'Todos los campos son obligatorios!';
      // emptyInputSnack.classList.add('absolute', 'top-0', 'left-0', 'p-4', 'bg-orange-500', 'text-white', 'rounded-md', 'ml-10', 'mt-10', 'text-center',)
      // const body = document.querySelector('body');
      // body.appendChild(emptyInputSnack);
      // setTimeout(() => {
      //   body.removeChild(emptyInputSnack);
      // }, 3000);
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 3000);
      return
    } 

    let registroWithId = {
      ...registro,
      id: registro.id ? registro.id : setId(),
    }

    handlePacientes(registroWithId);

    setRegistro(initRegisterState);

    setIsEditing(false);
  }

  return (
    <div className='md:w-1/2 lg:w-2/5 mx-5'>
      <h2 className='font-black text-3xl text-center'>Seguimiento de Pacientes</h2>
      <p className='text-lg mt-5 text-center mb-10'>
        Agregar Pacientes y {''}
        <span className='text-indigo-500 font-bold'>Administralos</span>
      </p>
      {error 
      ? <Error>
          <p>Todos los campos son obligatorios!</p>
        </Error> 
      : ''
      }
      <form onSubmit={handleSubmit} className='bg-white shadow-md rounded-lg py-10 px-5 mb-10' action="">
        <div className='mb-5'>
          <label 
          className='block text-gray-700 font-bold uppercase mb-2' htmlFor="nombre-mascota">Nombre Mascota</label>
          <input 
          value={registro.nombrePaciente}
          onChange={(e) => setRegistro({...registro, nombrePaciente: e.target.value})}
          id='nombre-mascota' 
          className='border-2 w-full p-2 placeholder-gray-500 rounded-md' 
          type="text" 
          placeholder='Nombre de la mascota'/>
        </div>
        <div className='mb-5'>
          <label 
          className='block text-gray-700 font-bold uppercase mb-2' htmlFor="nombre-propietario">Nombre Propietario</label>
          <input 
          value={registro.nombrePropietario}
          onChange={e => setRegistro({...registro, nombrePropietario: e.target.value})}
          id='nombre-propietario' 
          className='border-2 w-full p-2 placeholder-gray-500 rounded-md' 
          type="text" 
          placeholder='Nombre del propietario'/>
        </div>
        <div className='mb-5'>
          <label 
          className='block text-gray-700 font-bold uppercase mb-2' htmlFor="email">Email</label>
          <input 
          value={registro.email}
          onChange={e => setRegistro({...registro, email: e.target.value})}
          id='email' 
          className='border-2 w-full p-2 placeholder-gray-500 rounded-md' type="email" 
          placeholder='Email'/>
        </div>
        <div className='mb-5'>
          <label 
          className='block text-gray-700 font-bold uppercase mb-2' htmlFor="alta">Alta</label>
          <input 
          value={registro.fechaAlta}
          onChange={e => setRegistro({...registro, fechaAlta: e.target.value})}
          id='alta' 
          className='border-2 w-full p-2 placeholder-gray-500 rounded-md' type="date"/>
        </div>
        <div className='mb-5'>
          <label 
          className='block text-gray-700 font-bold uppercase mb-2' htmlFor="sintomas">Sintomas</label>
          <textarea
          value={registro.sintomas}
          onChange={e => setRegistro({...registro, sintomas: e.target.value})}
          rows={6}
          id='sintomas'
          placeholder='Describe los sintomas'
          className='w-full p-2'
          />
        </div>
        {
          !isEditing
          ? <input
          value='Agregar paciente' 
          type="submit" 
          className='bg-indigo-500 w-full p-3 text-white uppercase font-bold hover:bg-indigo-600 cursor-pointer transition-all'
          />
          : <input
          value='Confirmar edicion' 
          type="submit" 
          className='bg-orange-500 w-full p-3 text-white uppercase font-bold hover:bg-orange-600 cursor-pointer transition-all'
          />
        }
      </form>
    </div>
  )
}

export default Formulario