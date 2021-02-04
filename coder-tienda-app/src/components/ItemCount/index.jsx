export const ItemCount = ({stock, contador, onAdd, onSub}) => {

    return (
        <>

            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <span className="d-block p-2 bg-dark text-white">Unidades</span>
                        <span className="d-block p-2 bg-primary text-white">{contador}</span>
                    </div>
                    <div className="modal-footer">
                        <button className="btn btn-dark" onClick={onSub}> - </button>
                        <button className="btn btn-dark" onClick={() => {onAdd(stock)}}> + </button>
                    </div>
                </div>
            </div>
        </>
    )
}