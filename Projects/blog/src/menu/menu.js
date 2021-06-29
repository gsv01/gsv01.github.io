import React from 'react';
import './menu.css';




class Menu extends React.Component{


    showSearch(){
        let search = document.getElementById('searchbar');
        search.style.display = "block";
    }   

    render(){
        return (

        <div>
            
            
            <div className="menu">
                <div className="logo"> Virdi's Blog </div> 
                <div className="link">
                    <div><a href="">Home</a></div>
                    <div><a href="">Popular</a></div>
                    <div><a href="">Trending</a></div>
                    <div><a href="">Educational</a></div>
                    <div><a onClick={this.showSearch}>Search</a></div>
                </div>
                    
            </div>

            <div id="searchbar">
                <form method="post" action="">
                    <input name="keyword" placeholder="type.."></input>
                    <button type="submit">Search</button>
                </form>
            </div>



        </div>
        
        );
    }
}

export { Menu };