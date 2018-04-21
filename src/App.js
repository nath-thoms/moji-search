import React, { Component } from "react";
import Search from "./components/search";
import Results from "./components/results";
import emojiList from "./data/emojiList";
import './App.css';

class App extends Component {
  state = {
    emojiList,
    searchTerm: null
  };

  render() {
    const { emojiList, searchTerm } = this.state;
    const emojisToShow = this.findEmojis(emojiList, searchTerm)
    return (
      <div className="app">
        Emoji Search
        <Search changeSearchTerm={this.changeSearchTerm} />
        <Results emojisToShow={emojisToShow} />
      </div>
    );
  }
  findEmojis = (emojiList, searchTerm) => {
    const emojisToShow = emojiList.filter((emojiObj) => {
      return emojiObj.keywords.includes(searchTerm);
    })

    return emojisToShow
  }

  changeSearchTerm = (term) => {
    this.setState({ searchTerm: term })
  }



}




export default App;



// findEmojis = (emojiList, searchTerm) => {
//   const emojisToShow = emojiList.reduce((acc, curr) => {

//     if (curr.keywords.includes(searchTerm)) acc.push(curr.symbol)
//     return acc
//   }, [])
// }