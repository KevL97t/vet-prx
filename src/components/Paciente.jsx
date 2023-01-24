import React from 'react'

const Paciente = ({nombrePaciente, nombrePropietario, email, fechaAlta, sintomas, handleEditPaciente, id, handleDeletePaciente}) => {

  return (
    <div className='mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl'>
        <p className='font-bold mb-3 text-gray-700 uppercase'>Nombre: {''}
        <span className='font-normal normal-case'>{nombrePaciente}</span>
        </p>
        <p className='font-bold mb-3 text-gray-700 uppercase'>Propietario: {''}
        <span className='font-normal normal-case'>{nombrePropietario}</span>
        </p>
        <p className='font-bold mb-3 text-gray-700 uppercase'>Email: {''}
        <span className='font-normal normal-case'>{email}</span>
        </p>
        <p className='font-bold mb-3 text-gray-700 uppercase'>Fecha: {''}
        <span className='font-normal normal-case'>{fechaAlta}</span>
        </p>
        <p className='font-bold mb-3 text-gray-700 uppercase'>Sintomas: {''}
        <span className='font-normal normal-case'>{sintomas}</span>
        </p>
        <div className='flex justify-between mt-10'>
          <button
          type='button'
          className='bg-indigo-500 hover:bg-indigo-600 text-white font-bold uppercase rounded-lg px-4 py-2 w-1/2'
          onClick={() => handleEditPaciente(id)}
          >
            Editar
          </button>
          <button
          type='button'
          className='bg-orange-500 hover:bg-orange-600 text-white font-bold uppercase rounded-lg px-4 py-2 w-1/2'
          onClick={() => handleDeletePaciente(id)}
          >
            Eliminar
          </button>
        </div>
    </div>
  )
}

export default Paciente