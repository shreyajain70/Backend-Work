// import React, { useEffect, useState } from "react";

// function ImagesList() {
//   const [images, setImages] = useState([]);

//   useEffect(() => {
//     // Fetch all image data from backend
//     fetch("http://localhost:5000/images")
//       .then((res) => res.json())
//       .then((data) => setImages(data))
//       .catch((err) => console.error("Failed fetching images:", err));
//   }, []);

//   return (
//     <div>
//       {images.map((img) => (
//         <div key={img._id}>
//           <p>{img.name}</p>
//           <img src={`http://localhost:5000${img.image}`} alt={img.name} width={200} />
//         </div>
//       ))}
//     </div>
//   );
// }

// export default ImagesList;