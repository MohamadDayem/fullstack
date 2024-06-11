import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useUserContext } from "../../../context/userContext";

export default function UpdateOuvrage() {
  const [name, setName] = useState("");
  const [author, setauthor] = useState("");
  const [imageURL, setImage] = useState("");
  const [publication_date, setDate] = useState("");
  const [category_id, setCategory] = useState("");

  const paramsId = useParams();
  const id = paramsId.id;

  const { userData } = useUserContext();
  const navigate = useNavigate();

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleChangeAuthor = (e) => {
    setauthor(e.target.value);
  };

  const handleChangeDate = (e) => {
    setDate(e.target.value);
  };

  const handleChangeCategory = (e) => {
    setCategory(e.target.value);
  };

  const handleChangeImage = (e) => {
    setImage(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(`http://localhost:8500/ouvrage/${id}`, {
      method: "put",
      credentials: "include",
      headers: { Authorization: `Bearer ${userData.token}` },
      body: JSON.stringify({
        name,
        author,
        imageURL,
        publication_date,
        category_id,
        id,
      }),
    })
      .then((response) => {
        if (response.status === 201) {
          navigate(`/ouvrage/update/${id}`);
        } else {
          return response.json().then((data) => {
            console.info(data);
          });
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <section className="generalContainer">
      <h2>Modifier un ouvrage</h2>
      <div className="registerContainer">
        <label htmlFor="prénom">
          Title
          <input
            id="name"
            name="name"
            value={name}
            onChange={handleChangeName}
          />
        </label>
        <label htmlFor="nom">
          Author fullname
          <input
            id="author"
            name="author"
            value={author}
            onChange={handleChangeAuthor}
          />
        </label>
        <label htmlFor="address">
          Publication date
          <input
            id="date"
            name="date"
            value={publication_date}
            onChange={handleChangeDate}
          />
        </label>
        <label htmlFor="nom">
          Category
          <input
            id="category_id"
            name="category_id"
            value={category_id}
            onChange={handleChangeCategory}
          />
        </label>
        <label htmlFor="address">
          Image URL
          <input
            id="image"
            name="image"
            value={imageURL}
            onChange={handleChangeImage}
          />
        </label>
        <button onClick={handleSubmit}>Confirmer</button>
      </div>
    </section>
  );
}
