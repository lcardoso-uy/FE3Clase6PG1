function Usuarios({usuarios}){
    return(
        <div>
            <h2>Turnos</h2>
            {usuarios.map((usuario,index)=>(
                <div key={index} className="card">
                    <h3>{usuario.nombre}</h3>
                </div>
            ))}
        </div>
    )
}