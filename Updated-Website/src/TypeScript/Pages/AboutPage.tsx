import { Link } from "react-router";

function AboutPage() {
  return (
    <div>
      <h1>About</h1>
      <Link to={"/website/"}>Back</Link>
    </div>
  );
}

export default AboutPage;
