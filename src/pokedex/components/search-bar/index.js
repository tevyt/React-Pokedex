import React from 'react'; //eslint-disable-line no-unused-vars
export default ({ query, onChange }) => {
  const handleChange = (event) => onChange(event.target.value);


  return <div className='pokedexSearch'>
          <input className='pokedexSearch__field' 
          type='text' 
          value={query} 
          onChange={handleChange}
          placeholder='Enter Pokemon Name'
           />
         </div>;
};