import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useUserContext } from "../../../context/userContext";
import "./OuvrageCard.css";

export default function OuvrageCard({ id, image, name, author, date }) {
  const { userData } = useUserContext();
  const role = userData && userData.user ? userData.user.role : null;

  const handleDelete = (event) => {
    event.preventDefault();
    fetch(
      `http://localhost:8500/ouvrage/${id}
        `,
      {
        method: "delete",
        headers: { Authorization: `Bearer ${userData.token}` },
        credentials: "include",
      }
    )
      .then((response) => {
        if (response.status === 200) {
          console.info("ouvrage deleted.");
          window.location.reload();
        }
      })
      .catch((err) => {
        console.error("Error deleting ouvrage:", err);
      });
  };
  return (
    <section className="cardContainer">
      <img src={image} alt={name} />
      <div className="info">
        <p>{name}</p>
        <p className="author">{author}</p>
        <p>{date}</p>
        {role === "Admin" && (
          <div>
            <Link to={`/ouvrage/update/${id}`}>
              {" "}
              <button>Modifier</button>
            </Link>{" "}
            <button onClick={handleDelete}>Supprimer</button>
          </div>
        )}
      </div>
    </section>
  );
}

OuvrageCard.propTypes = {
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};
