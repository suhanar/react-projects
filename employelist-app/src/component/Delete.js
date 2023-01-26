import React from 'react'

function Delete() {

    const [del,setDel] = useState('')
  return (
    <div className='delete'>
        <div>
            <h4>Do you want to delete</h4>
        </div>
        <div>
            <input type="button" value="ok" placeholder='OK' onChange={(e)=> setDel(e.target.value)}/>
            <input type="button" value='cancel' placeholder='Cancel' onChange={(e)=> setDel(e.target.value)}/>



        </div>
    </div>
  )
}

export default Delete