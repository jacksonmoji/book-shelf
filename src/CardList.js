import React from 'react';
import Card from './Card';

const CardList = ( {books} ) => {

	const cardArray = books.map((book,i) => {
		return( 
			<Card 			
				key={i}
				id={books[i].id} 
				title={books[i].title} 
				Genre={books[i].Genre} 
				author={books[i].author} 
				pub_date={books[i].pub_date}
				image={books[i].image}
			/>
			)
	});

	return (

		<div>

		      { cardArray }
		
		</div>

	);
}

export default CardList;