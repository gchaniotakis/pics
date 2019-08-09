import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';



class App extends React.Component{
   async onSearchSubmit(term){
       const response = await axios.get('https://api.unsplash.com/search/photos',{
           params:{query: term},
           headers:{
               Authorization: 'Client-ID 09a229ef4ab40861178c50075e84090e16fa77d420941eb17cab84b35e1ee7d1'
           }
       });
       console.log(response.data.results);
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