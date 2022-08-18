import React, { Component } from "react";

export default class Item extends Component {
  render() {
    return (
      <div>
        <div className="container px-5">
          <div className="row">
            {/* Item 1 */}
            <div className="col-lg-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://picsum.photos/500/325"
                  alt="Card image cap"
                />
                <div className="card-body text-center">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
                <div className="card-footer text-center">
                  <a href="#" className="btn btn-primary">
                    Find Out More!
                  </a>
                </div>
              </div>
            </div>

            {/* Item 2*/}
            <div className="col-lg-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://picsum.photos/500/325"
                  alt="Card image cap"
                />
                <div className="card-body text-center">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
                <div className="card-footer text-center">
                  <a href="#" className="btn btn-primary">
                    Find Out More!
                  </a>
                </div>
              </div>
            </div>

            {/* Item 3 */}
            <div className="col-lg-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://picsum.photos/500/325"
                  alt="Card image cap"
                />
                <div className="card-body text-center">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
                <div className="card-footer text-center">
                  <a href="#" className="btn btn-primary">
                    Find Out More!
                  </a>
                </div>
              </div>
            </div>

            {/* Item 4 */}
            <div className="col-lg-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://picsum.photos/500/325"
                  alt="Card image cap"
                />
                <div className="card-body text-center">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
                <div className="card-footer text-center">
                  <a href="#" className="btn btn-primary">
                    Find Out More!
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
