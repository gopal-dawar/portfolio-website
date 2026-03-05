import "./Sphere.css";
const Sphere = () => {
  return (
    <div className="flex justify-center items-center perspective">
      <div className="sphere relative">
        {Array.from({ length: 32 }).map((_, i) => (
          <i key={i} style={{ "--i": i + 1 }}></i>
        ))}
      </div>
    </div>
  );
};

export default Sphere;
