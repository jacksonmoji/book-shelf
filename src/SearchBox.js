import React from 'react';

const SearchBox = ( {searchField, searchChange} ) => {

	return(
			<div className='tc pa2'>

				<input
				 className='pa2 ba br3 b--yellow bg-lightest-yellow'
				 type='search' 
				 placeholder='search my books ...'
				 onChange = {searchChange} 
				 
				 />
			
			</div>
		);
}

export default SearchBox;