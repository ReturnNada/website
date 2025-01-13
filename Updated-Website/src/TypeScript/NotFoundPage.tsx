import NavBar from "./NavBar";

{
  /*
    Make 404 mask transition into main
  */
}

function NotFoundPage() {
  return (
    <>
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
    </>
  );
}

export default NotFoundPage;
