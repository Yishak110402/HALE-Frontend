
export default function Resource({ resource }) {
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
      </div>
    </div>
  );
}
