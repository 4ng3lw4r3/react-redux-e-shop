const Modal = () => {
  return (
    <div>
        <aside className="modal-container">
            <div className="modal">
                <h4>Remove all items from your shopping cart?</h4>
                <div className="btn-container">
                    <button type="button" className="btn confirm-btn">Confirm</button>
                    <button type="button" className="btn confirm-btn">Cancel</button>
                </div>
            </div>
        </aside>
    </div>
  )
}

export default Modal