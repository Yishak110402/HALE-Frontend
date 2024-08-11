import { useState } from "react";

export default function Resource({ resource }) {
  const [loading, setLoading] = useState(true);
  return (
    <div className="resource">
      <div>
        <h2>{resource.name}</h2>
        <a href={resource.path} download={true}>
          Download
        </a>
      </div>
      <div>
          <img src={resource.imgPath} alt="" />
         {loading &&( <div className="img-loader">
            <div className="wheel" />
          </div>)}
      </div>
    </div>
  );
}
