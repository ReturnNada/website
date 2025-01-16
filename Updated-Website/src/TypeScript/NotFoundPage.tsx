import NavBar from "./NavBar";
import "../App.css";
{
  /*
  Add: 
  -GitHub/LinkedIn logos
  -Footer
  -Gif on Hover
  -Keep position on page
*/
}

function NotFoundPage() {
  return (
    <div
      className="openAnim"
      style={{
        height: "100vh",
      }}
    >
      <NavBar></NavBar>
      <h1
        style={{
          paddingTop: "20%",
          justifySelf: "center",
        }}
      >
        Welcome
      </h1>
      <h1
        style={{
          justifySelf: "center",
        }}
      >
        to Lucas R's domain
      </h1>

      <br />
    </div>
  );
}

export default NotFoundPage;
