import React from 'react';

const Card = ( { title,Genre,author,pub_date,image } ) => {
	
	//destructuring arrays
	/*const {name,relationship,email} = props;*/

	return(
       <div className='imager tc bg-light-yellow dib br3 pa2 ma1 grow bw0 shadow-5'>
		<img alt='' src={`${image}`} height = '400px'/>
			<div className='imager'>
				<h4>{title} </h4>
				<p> {author} </p> 
				<p> {Genre} </p>
				<p> {pub_date}</p>
			</div>
		</div>
	);
}

export default Card;