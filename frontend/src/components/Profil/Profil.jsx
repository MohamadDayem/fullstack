import { useState, useEffect } from "react";
import { useUserContext } from "../../context/userContext";

export default function Profil() {
  const [user, setUser] = useState(0);

  const { userData } = useUserContext();
console.log(userData, 'data');
  useEffect(() => {
    {
      const apiUrl = `http://localhost:8500/user/${userData.user.userID}`;

      fetch(apiUrl, {
        method: "get",
        credentials: "include",
        headers: { Authorization: `Bearer ${userData.token}` },
      })
        .then((response) => response.json())
        .then((data) => {
          setUser(data);
        })
        .catch((error) =>
          console.error(
            "Erreur lors de la récupération des infromations utilisateur:",
            error
          )
        );
    }
  }, [userData]);

  return (
    <>
      {userData && (
        <div>
          <p>Prénom : {user.firstname}</p>
          <p>Nom : {user.lastname}</p>
          <p>email : {user.email}</p>
          <p>Role : {user.role}</p>
        </div>
      )}
    </>
  );
}
