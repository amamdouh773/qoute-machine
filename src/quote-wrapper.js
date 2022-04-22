import React, { Component } from "react";
import "./quote-wrapper.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

library.add(faFacebookF);
class QuoteMachine extends Component {
  constructor(props) {
    super(props);
    this.colors = ["#7ecf89", "#6d96cc", "#c7a866", "#8366c7"];
    this.state = {
      quotes: [
        {
          author: "Albert Einstein",
          quote: "Strive not to be a success, but rather to be of value.",
        },
        {
          author: "Socrates",
          quote: "An unexamined life is not worth living.",
        },
        {
          author: "Eren Yeeger",
          quote: "Nani!",
        },
        {
          author: "George Eliot",
          quote: "It is never too late to be what you might have been.",
        },
        {
          author: "Eleanor Roosevelt",
          quote:
            "Remember no one can make you feel inferior without your consent.",
        },
        {
          author: "Zig Ziglar",
          quote:
            "People often say that motivation doesn’t last. Well, neither does bathing. That’s why we recommend it daily.",
        },
      ],
      selectedColor: 0,
      selectedQuote: 0,
      animate: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    this.setState({ animate: false });
    do {
      var randCol = Math.floor(Math.random() * this.colors.length);
      var randQuote = Math.floor(Math.random() * this.state.quotes.length);
    } while (
      this.state.selectedColor === randCol ||
      this.state.selectedQuote === randQuote
    );

    this.setState({
      selectedColor: randCol,
      selectedQuote: randQuote,
      animate: true,
    });

    setTimeout(() => this.setState({ animate: false }), 500);
  }

  render() {
    return (
      <div
        className="wrapper"
        style={{ backgroundColor: this.colors[this.state.selectedColor] }}
      >
        <div className="quote-box">
          <h1
            className={this.state.animate ? "fadeQuote" : "quote"}
            style={{
              color: this.colors[this.state.selectedColor],
            }}
          >
            "{this.state.quotes[this.state.selectedQuote].quote}"
          </h1>
          <p
            className={this.state.animate ? "fadeAuthor" : "author"}
            style={{
              color: this.colors[this.state.selectedColor],
            }}
          >
            -{this.state.quotes[this.state.selectedQuote].author}
          </p>
          <div className="buttons">
            <div className="social">
              <button
                className="twitter"
                style={{
                  backgroundColor: this.colors[this.state.selectedColor],
                }}
              >
                <FontAwesomeIcon icon={faTwitter} />
              </button>
              <button
                className="facebook"
                style={{
                  backgroundColor: this.colors[this.state.selectedColor],
                }}
              >
                <FontAwesomeIcon icon={faFacebookF} />
              </button>
            </div>
            <button
              className="new"
              onClick={this.handleSubmit}
              style={{ backgroundColor: this.colors[this.state.selectedColor] }}
            >
              New Quote
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default QuoteMachine;
