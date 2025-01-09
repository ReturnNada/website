import { Link } from "react-router";

function WhatNextPage() {
  return (
    <div>
      <h1>What's Next?</h1>
      <Link to={"/website/"}>Back</Link>
    </div>
  );
}

export default WhatNextPage;
