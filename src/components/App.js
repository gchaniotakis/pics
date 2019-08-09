import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';



class App extends React.Component{
    onSearchSubmit(term){
       axios.get('https://api.unsplash.com/search/photos',{
           params:{query: term},
           headers:{
               Authorization: 'Client-ID 09a229ef4ab40861178c50075e84090e16fa77d420941eb17cab84b35e1ee7d1'
           }
       }); 
    }

    render(){
        return (
        <div className="ui container" style={{marginTop: '10px'}}>
            <SearchBar onSubmit={this.onSearchSubmit} />
        </div>
        );
    }
}

export default App;