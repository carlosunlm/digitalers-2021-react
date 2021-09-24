
function Lista() {

    const valores = [
        'Lucas',
        'Paulo',
        'Juan',
        'Sebastian',
        'Yamila'
    ];

    return(
        <>
            {
                valores.map(nombre => <p>{nombre}</p>)
            }
        </>
    );
}

export default Lista;