import React, { Component} from 'react';
import CardList from './CardList';
import { books } from './Books';
import SearchBox from './SearchBox';
import './App.css';
 
class App extends Component {
	constructor() {
 		super()
		this.state = {
			
			books: books,
			searchField: ''

		}
	} 

	onSearchChange = (event) => {
		this.setState( { searchField : event.target.value});
		
	}

	render() {

		const filterFriends = this.state.books.filter(book => {
			return book.title.toLowerCase().includes(this.state.searchField.toLowerCase());
		
		})

		return(
			<div className='tc'>
				<h1> My Book Collection </h1>
				<SearchBox searchChange = {this.onSearchChange}/>
				<CardList books = { filterFriends }/>

			</div>
		);
	}
}

export default App;