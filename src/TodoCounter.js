import './TodoCounter.css';
function TodoCounter({total,completed}){
    const messageCongratulations=`¡Felicitaciones! no tienes TODO's pendientes 🎉✨`
    const messageCompleted = `Has completado ${completed}  de ${total} TODO's `
    const todoMessage = (completed===total) ? messageCongratulations:messageCompleted;
    return(
        <h1 className='TodoCounter'>
            <span>{todoMessage}</span>
        </h1>
        //<h1 className='TodoCounter' >Has completado <span>{completed}</span>  de <span>{total}</span>  TODO's</h1>
    )
}
export {TodoCounter};