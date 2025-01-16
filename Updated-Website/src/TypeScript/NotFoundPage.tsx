{
  /*
  Add: 
  -GitHub/LinkedIn logos
  -Footer
  -Gif on Hover
  -Keep position on page
*/
}
import NavBar from "./NavBar";
import "../App.css";

function NotFoundPage() {
  return (
    <div
      className="openAnim"
      style={{
        height: "100vh",
        backgroundColor: "#ebeff5",
      }}
    >
      <NavBar></NavBar>
      <h1
        style={{
          paddingTop: "33vh",
          justifySelf: "center",
        }}
        className="openText"
      >
        Welcome
      </h1>
      <h1
        style={{
          justifySelf: "center",
        }}
        className="openText"
      >
        to Lucas R's domain
      </h1>
      <br />
    </div>
  );
}

export default NotFoundPage;
