const React = require("react");
const isLoggedIn = require("./../utils/isLoggedIn");
function Layout(props) {
  console.log("props on Layout page:", props);
  console.log(
    "props.userid on Layout page:",
    props.user,
    props.userid,
    props.userId
  );
  console.log("isLoggedIn on layout: ", isLoggedIn);

  return (
    <html lang="en">
      <head>
<<<<<<< HEAD
        <meta charSet="utf-8" />
=======
>>>>>>> df24321090acf19ec92eafffc73a5e4044637607
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title> {props.title ? props.title : "Scoop"} </title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700;1,900&display=swap" 
        rel="stylesheet" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"
          integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2"
          crossOrigin="anonymous"
        />
        <link rel="stylesheet" href="/stylesheets/style.css" />
        <link rel="stylesheet" href="/public/stylesheets/createtip.css" />
      </head>
      <body>
        <nav>
          <div className="dropdown">
            <a
              className="btn btn-secondary dropdown-toggle"
              href="#"
              role="button"
              id="dropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Menu
            </a>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
            <a className="dropdown-item" href="/">
              Home
            </a>

            {props.user ? null : (
              <a className="dropdown-item" href="/auth/login">
                Login
              </a>
            )}

            {props.user ? null : (
              <a className="dropdown-item" href="/auth/signup">
                Signup
              </a>
            )}

            {props.user ? (
              <a className="dropdown-item" href="/private/tipslist">
                My private area
              </a>
            ) : (
              <a className="dropdown-item" href="/auth/login">
                Login for private area
              </a>
            )}
            
            {props.user ? (
              <a className="dropdown-item" href="/private/createtip">
                Create tip
              </a>
            ) : null}

            {props.user ? (
              <a className="dropdown-item" href="/private/tips/edit">
                Edit tip
              </a>
            ) : null}

            {props.user ? (
              <a className="dropdown-item" href="/auth/logout">
                Logout
              </a>
            ) : null}
            </div>
          </div>
        </nav>
        <div>{props.children}</div>
        <script
          src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
          integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
          crossOrigin="anonymous"
        >
        </script>
        <script
          src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"
          integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN"
          crossOrigin="anonymous"
        >
        </script>
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.min.js"
          integrity="sha384-w1Q4orYjBQndcko6MimVbzY0tgp4pWB4lZ7lr30WKz0vr/aWKhXdBNmNb5D92v7s"
          crossOrigin="anonymous"
        >
        </script>
      </body>
    </html>
  );
}
module.exports = Layout;
