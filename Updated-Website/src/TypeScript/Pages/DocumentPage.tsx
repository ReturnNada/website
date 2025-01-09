import { Link } from "react-router";

function DocumentPage() {
  return (
    <div>
      <h1>Docs</h1>
      <Link to={"/website/"}>Back</Link>
    </div>
  );
}

export default DocumentPage;
