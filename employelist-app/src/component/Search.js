import React from 'react'

function Search({search,setSearch,isSearch, setIsSearch,item}) {

    // const searchSubmit = (e)=>{
    //     e.preventDefault();
    //     setIsSearch(!isSearch);
    //     searchItem(search);
       
    //     setSearch('');
       
    // }

    const handleChange = (e)=>{
      setSearch(e.target.value);
   
      
    }

  return (
    
        <div className='home-input'>
           
            <input placeholder='Search By Employer Name...' type="text" onChange={handleChange} value={search} />
            {/* <button className='home-btn'>Search</button> */}
            <i class="fa fa-search home-btn"></i>
           
        </div>
    
  )
}

export default Search