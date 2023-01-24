import { useEffect, useState } from "react";
import Formulario from "./components/Formulario"
import Header from "./components/Header"
import ListadoPacientes from "./components/ListadoPacientes"

const initRegisterState = {
  nombrePaciente: '',
  nombrePropietario: '',
  email: '',
  fechaAlta: '',
  sintomas: '',
}

function App() {

  const [pacientes, setPacientes] = useState([]);
  const [paciente, setPaciente] = useState(initRegisterState);
  const [isEditing, setIsEditing] = useState(false);

  const handlePacientes = (newPaciente) => {
    const idExists = pacientes?.map(paciente => paciente.id).includes(newPaciente.id);
    const newList = !idExists ? [...pacientes, newPaciente] : pacientes?.map(p => p.id === newPaciente.id ? {...newPaciente} : p); 

    setPacientes(newList);

    setPaciente(initRegisterState);
  }

  const handleEditPaciente = (id) => {
    const pacienteToEdit = pacientes?.filter(paciente => paciente.id === id);
    setPaciente(pacienteToEdit[0]);
    setIsEditing(true);
  }

  const handleDeletePaciente = (id) => {
    const deletedPacientes = pacientes?.filter(p => p.id !== id);
    const confirmation = window.confirm('Estas seguro que deseas eliminar a este paciente?');
    if(confirmation){
      setPacientes(deletedPacientes);
      setPaciente(initRegisterState);
      setIsEditing(false);
    }
  }

  useEffect(() => {
    const initItems = JSON.parse(localStorage.getItem('pacientes'));
    initItems?.length !== 0 ? setPacientes(initItems) : localStorage.setItem('pacientes', JSON.stringify([])); 

    //No funciona a partir de React 16:

    // const getLS = () => {
    //   const pacientesLS = JSON.parse(localStorage.getItem('pacientes')) ?? [];
    //   console.log(pacientesLS);
    //   setPacientes(pacientesLS);
    // }

    // getLS();

  }, []);

  useEffect(() => {
    localStorage.setItem('pacientes', JSON.stringify(pacientes));
  }, [pacientes]);

  return (
    <div className="container mx-auto">
      <Header />
      <div className="mt-12 md:flex">
        <Formulario 
        setIsEditing={setIsEditing}
        isEditing={isEditing}
        handlePacientes={handlePacientes}
        pacienteToEdit={paciente}
        />
        <ListadoPacientes 
        pacientes={pacientes}
        handleEditPaciente={handleEditPaciente}
        handleDeletePaciente={handleDeletePaciente}
        />
      </div>
    </div>
  )
}

export default App
