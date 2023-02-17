import React from 'react'

function Modal({show,onClose,itemList}) {
  return (
    <div className='modal'>
        <div className='close'>
        <button className="close" onClick={onClose}><i class="fa fa-times"></i></button>
        </div>
        <div className='modal-h4'><h4>Employee</h4></div>
        
                
                <div className='modal-img-name'>
                <div className='modal-img'>
                <img src={itemList.img1} />
                </div>
                <div className='modal-name'>
                    <h4>{itemList.name}</h4>
                </div>
              
            </div>
             <div className='modal-details'>
             <div className='modal-des'>
                 <h4>Designation</h4>
                 <p>{itemList.designation}</p>
             </div>
             <div className='modal-email'>
                 <h4>Email</h4>
                 <p>{itemList.email}</p>
             </div>
             <div className='modal-ph'>
                 <h4>Phone Number</h4>
                 <p>{itemList.ph}</p>
             </div>
         </div>
         

            
       
       
       
    </div>
  )
}

export default Modal