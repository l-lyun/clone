import { Component} from "../core/heropy";
import movieStore, {searchMovies} from '../store/movie.js'

export default class Search extends Component {
    render() {
        this.el.classList.add('search');
        this.el.innerHTML = /*html */ `
            <input value ="${movieStore.state.searchText}"
            placeholder="Enter the movie title to seach!"/>
            <button class="btn btn-primary">
                Search!
            </button>
        `
        
        const inputEl = this. el.querySelector('input');
        inputEl.addEventListener('input', () => {
            movieStore.state.searchText = inputEl.value;
        })
        inputEl.addEventListener('keydown', event => {
            if(event.key === 'Enter' && movieStore.state.searchText.trim()) { // enter 눌리면 검색
                searchMovies(1);
            }
        })
        const btnEl = this.el.querySelector('.btn');
        btnEl.addEventListener('click', () => {
            console.log(movieStore.state.searchText)
            if(movieStore.state.searchText.trim()) { // enter 눌리면 검색
                searchMovies(1);
            }
        })
    }
}