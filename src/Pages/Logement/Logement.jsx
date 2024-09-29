import React from "react";
import { useParams } from "react-router-dom";
import data from "../../Data/dataLogement.json";
import Carousel from "../../Components/Carousel/Carousel";
import Dropdown from "../../Components/Dropdown/Dropdown";
import TagValue from "../../Components/TagValue/TagValue";
import Host from "../../Components/Host/Host";
import Stars from "../../Components/Stars/Stars";
import Error from "../Error/Error";
import "./Logement.scss";

// Component pour la section des infos principaux du logement
const LogementInfo = ({ title, location, tags, host, rating }) => (
  <section className="info-logement-part-1 flex-between">
    <div>
      <h1 className="logement__title">{title}</h1>
      <h2 className="logement__location">{location}</h2>
      <TagValue className="logement__tagValue" tags={tags} />
    </div>
    <div className="flex-reverse">
      <Host
        className="logement__host"
        name={host.name}
        picture={host.picture}
      />
      <Stars className="logement__rating" rating={rating} />
    </div>
  </section>
);

// Component pour la section dropdowns (description et equipments)
const LogementDropdowns = ({ description, equipments }) => (
  <section className="info-logement-part-2 flex">
    <Dropdown
      className="logement__dropdownDescription"
      title="Description"
      content={description}
      page="logement"
    />
    <Dropdown
      className="logement__dropdownEquipements"
      title="Equipements"
      content={equipments}
      page="logement"
    />
  </section>
);

function Logement() {
  // extraction du parametre "id" de l'URL
  const { id } = useParams();
  // cherche le logement avec l'id corespondant
  const logement = data.find((item) => item.id === id);

  // la gestion d'erreur si le logement n'est pas trouvé
  if (!logement) return <Error />;

  // la deconstruction des données du logement
  const {
    title,
    description,
    pictures,
    equipments,
    tags,
    location,
    host,
    rating,
  } = logement;

  return (
    <main className="logement">
      <Carousel photos={pictures} />

      <LogementInfo
        title={title}
        location={location}
        tags={tags}
        host={host}
        rating={rating}
      />

      <LogementDropdowns description={description} equipments={equipments} />
    </main>
  );
}

export default Logement;
