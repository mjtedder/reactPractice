import React from "react";

// JSX Variable Declaration
const name = "Matt";
const thoughts = "is better than HBS!"

const removeVowels = str => {
  const vowels = ['a', 'e', 'i', 'o', 'u']
  let result = ''
  for (let i = 0; i < str.length; i++) {
    if (!vowels.includes(str[i].toLowerCase())) {
      result += str[i]
    }
  }
  return result
}

function JSXVariables() {
  return (
    <div className="main-container">
      <div className="container">
        <div className="jumbotron">
          <h1>Hi! My name is {name}</h1>
          <h2>My name has {name.length} letters</h2>
          <h2>I think React {thoughts}</h2>
          <h2>My name with no vowels is {removeVowels("matt")}</h2>
        </div>
      </div>
    </div>
  );
}

export default JSXVariables;
