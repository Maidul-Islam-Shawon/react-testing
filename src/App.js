import React, { Component } from "react";
import Header from "./Components/Header/Header";
import "./app.scss";
import Headline from "./Components/Headline/Headline";
import SharedButton from "./Components/SharedButton/SharedButton";
import ListItem from "./Components/ListItem/ListItem";
import { connect } from "react-redux";
import { fetchPosts } from "./Actions/Actions";

const tempArr = [
  {
    fName: "shawon",
    lName: "MI",
    age: 29,
    email: "mi_shawon@yahoo.com",
    onlineStatus: true,
  },
];

class App extends Component {
  constructor(props) {
    super(props);

    this.fetch = this.fetch.bind(this);
  }

  fetch() {
    this.props.fetchPosts();
  }

  render() {
    const { posts } = this.props;

    const configButton = {
      buttonText: "Get Posts",
      emitEvent: this.fetch,
    };

    return (
      <div className="App">
        <Header />
        <section className="main">
          <Headline
            header="Posts"
            desc="Click the button to render posts!"
            tempArr={tempArr}
          />
          <SharedButton {...configButton} />

          {posts.length > 0 && (
            <div>
              {posts.map((post, index) => {
                const { title, body } = post;
                const configItem = {
                  title,
                  desc: body,
                };
                return <ListItem key={index} {...configItem} />;
              })}
            </div>
          )}
        </section>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.PostsReducer,
  };
};

export default connect(mapStateToProps, { fetchPosts })(App);
