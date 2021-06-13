import React from "react";

const accessKey = "OA6MunjjCS6dxABeantVGTqjxroJWRx1cHNPazTbIrk";
const endpoint = "https://api.unsplash.com/photos/random";
//https://api.unsplash.com/photos/random?query=children&client_id=jrbeJd_ZGZtthA_W4nZjas5A07IvPtRCeQBwHXXNtb8

export default class UnsplashImage extends React.Component {
  constructor(props) {
    super(props);
    this.query = props.itemSearch;
    this.state = {
      imgUrl:
        "https://images.unsplash.com/photo-1593642532871-8b12e02d091c?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    };
  }

  getImageURL() {
    const endpointURL = `${endpoint}?query=${this.query}&client_id=${accessKey}`;
    console.log("endpoint" + endpointURL);
    fetch(endpointURL)
      .then((response) => {
        return response.json();
      })
      .then((jsonresponse) => {
        this.setState({
          imgUrl: jsonresponse.urls.small,
        });
      });
  }

  render() {
    return (
      <img src={this.state.imgUrl} alt="Niños" className="unsplash-img"></img>
    );
  }
}
