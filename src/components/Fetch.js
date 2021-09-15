import React, { Component } from 'react';
import Card from './Card';

class Fetch extends Component {
    constructor(props){
        super(props);
        this.state = {
        movies:[],
        search:""
        }
    }

    componentDidMount(){
        this.fetchApiCall();
    }

    fetchApiCall(){
        fetch(`http://www.omdbapi.com/?s=avengers&apikey=7aa2361c`)
        .then((response) => {
            if(response.status !== 200) throw response;
                return response.json();
        })
        .then((data) => {
            //const { Title, Poster } = data;
            this.setState({ movies:data.Search});
            console.log("data", data);
          })
          .catch((error) => {
            alert("Movie Not Found");
          });
    }

    render(){
        const{movies}=this.state;
        return(
            <>
                {movies.map((movie)=>(
                    <Card title={movie.Title} source={movie.Poster} year={movie.Year}/>)
                )}
            </>
        )
    }
}

export default Fetch;

// import React from "react";

// class FetchData extends React.Component{
//     constructor(props){
//         super(props);
//         this.state= {
//             Poster: "",
//             Title: ""

//         };
//     }
    
//     makeApiCall(Title){
//         fetch(`https://www.omdbapi.com/?s=${Title}&apikey=731e0419`)
//       .then((response) => {
//         if (response.status !== 200) throw response;
//         return response.json();
//       })
//       .then((data) => {
//         const { Title, Poster } = data;
//         this.setState({  Title, Poster });
//         console.log("data", data);
//       })
//       .catch((error) => {
//         alert("Movie Not Found");
//       });
//     }
//     render() {
//         const { Title, Poster } = this.state;
//         return (
//           <>
//             <form onSubmit={this.makeApiCall}>
//             <h1>{Title}</h1>
//             <img src={Poster} width="300" height="300" alt="user profile" />
//             </form>
//           </>
//         );
//       }
// }
// export default FetchData;