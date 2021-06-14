import { useEffect, useState } from "react";

export default function UnsplashImage() {
  const [imageUrl, setImageUrl] = useState([]);
  const endpoint = "https://api.unsplash.com/photos/random";
  const accessKey = "OA6MunjjCS6dxABeantVGTqjxroJWRx1cHNPazTbIrk";
  const query = "Children";
  useEffect(() => {
    const urlRequest = `${endpoint}?query=${query}&client_id=${accessKey}`;
    fetch(urlRequest)
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          setImageUrl(data.urls.small);
        }
      })
      .catch((error) => console.log(error));
  }, []);

  console.log(imageUrl);
  return (
    <div className="unsplash-container">
      <img alt="Imagen de niños" src={imageUrl} className="unsplash-img"></img>
    </div>
  );
}
