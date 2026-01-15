function App() { 

    const users = [
        { id: 1, name: 'Jose', role: 'Web Developer' },
        { id: 2, name: 'Estefanía', role: 'Web Designer' },
        { id: 3, name: 'Rubén', role: 'Team Leader' },
        { id: 4, name: 'Klara', role: 'Project Manager' },
        { id: 5, name: 'Miguel', role: 'Backend Developer' }
    ]
    
    const techClass = 'tec-estilo';
    const managementClass = 'equipo-estilo';
    
    return (
        <>
        <p>Lista de usuarios activos:</p>
        <ul>
        {users.map(function(user) {
            let estiloAplicado;

          if (user.role.includes('Developer') || user.role.includes('Designer')) {
            estiloAplicado = techClass;
          } else {
            estiloAplicado = managementClass;
          }            
          
          return (
                <li key={user.id} className={estiloAplicado}>
                    {user.name} - {user.role}
                </li>
                );
        })}
        </ul>
        </>
    )
}

export default App