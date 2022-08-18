import React, { Component } from "react";

export default class Banner extends Component {
  render() {
    return (
      <div className="my-5 ">
        <div className="container px-lg-5">
          <div className="wrap-banner bg-light p-5">
            <h1 className="display-3">A Warm Welcome!</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima
              delectus placeat, exercitationem iusto amet repudiandae eveniet
              ipsum hic earum adipisci libero error molestias voluptate
              repellendus, repellat harum aliquid, temporibus expedita?
            </p>
            <button className="btn btn-primary">Call to action!</button>
          </div>
        </div>
      </div>
    );
  }
}
