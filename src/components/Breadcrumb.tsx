import { Link, useLocation } from "react-router-dom";

function Breadcrumb() {
  const location = useLocation();
  const paths = location.pathname.split("/").filter((path) => path);

  return (
    <div style={styles.container}>
      <nav>
        <Link to="/" style={styles.link}>🏠 Home</Link>
        {paths.map((path, index) => {
          const to = "/" + paths.slice(0, index + 1).join("/");
          return (
            <span key={to}>
              {" > "}
              <Link to={to} style={styles.link}>
                {decodeURIComponent(path)}
              </Link>
            </span>
          );
        })}
      </nav>
    </div>
  );
}

const styles = {
  container: {
    top: 0,
    
    padding: "10px",
    fontSize: "14px",
    backgroundColor: "#f4f4f4",
    borderRadius: "5px",
    textAlign: "center" as "center",
  },
  link: {
    textDecoration: "none",
    color: "#007bff",
    fontWeight: "bold",
  },
};

export default Breadcrumb;
