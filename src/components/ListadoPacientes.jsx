import React from 'react'
import Paciente from './Paciente'

const ListadoPacientes = ({pacientes, handleEditPaciente, handleDeletePaciente}) => {
  return (
    <div className='md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll'>
      {
        pacientes?.length === 0
        ? <>
            <h2 className='text-2xl text-center'><span className='text-indigo-500 font-bold'>Los pacientes</span> que agregues se mostraran aca.</h2>
          </>
        : <>
            <p className='text-xl mt-5 mb-10 text-center'>Administra tus {''} 
            <span className='text-indigo-500 font-bold'>Pacientes y citas</span>
            </p>
            <h2 className='font-black text-3xl text-center'>Listado Pacientes</h2>
          </>
      }
      {pacientes?.map((paciente) => {
        return <Paciente
        handleDeletePaciente={handleDeletePaciente} 
        key={paciente.id} 
        handleEditPaciente={handleEditPaciente} {...paciente}/>
      })}
    </div>
  )
}

export default ListadoPacientes