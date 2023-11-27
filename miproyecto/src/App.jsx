import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProjectsPage from './projects/ProjectsPage'
import ProjectsPage2 from './projects/ProjectsPage2'
import ProjectsPage3 from './projects/ProjectsPage3'
import ProjectsPage4 from './projects/ProjectsPage4'
import ProjectsPage5 from './projects/ProjectsPage5'
import ProjectsPage6 from './projects/ProjectsPage6'
import ProjectsPage7 from './projects/ProjectsPage7'
import ProjectsPage9 from './projects/ProjectsPage9'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='Empleados'>
      <h1>Empleados de Software:</h1>
      <ProjectsPage4/> Edad: 34 años - Educación: CUE AvH - Lugar de Residencia: Medellín, Colombia - Ocupación: Analista
      <ProjectsPage5/> Edad: 50 años - Educación: U de los Andes - Lugar de Residencia: Pereira, Colombia - Ocupación: Desarrollador
      <ProjectsPage6/> Edad: 24 años - Educación: U del Quindío - Lugar de Residencia: Armenia, Colombia - Ocupación: Programador
      <ProjectsPage7/> Edad: 27 años - Educación: U del Rosario- Lugar de Residencia: Bogotá, Colombia - Ocupación: Documentadora
      </div>
      <ProjectsPage9/>
      
      
      
    </>
  )
}

export default App
