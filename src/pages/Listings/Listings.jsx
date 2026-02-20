import Style from "./Listings.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faImage } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useFetchDocuments } from "../../hooks/useFetchDocuments";
import { useAuthContext } from "../../context/AuthContext";
import CardImage from "../../assets/view-modern-office.jpg"
import { useDeleteDocument } from "../../hooks/useDeleteDocument";
import { useState } from "react";

const Listings = () => {

  const { user } = useAuthContext()
  const { documents } = useFetchDocuments("advertisements", null, user.uid)
  const {deleteDocument, error, loading} = useDeleteDocument()

  const [cardIsOpen, setCardIsOpen] = useState(false)

  return (
    <div className={`${cardIsOpen ? Style.containerBlack : Style.container}`}>
      <div className={Style.listingHeader}>
        <h2>Meus Anúncios</h2>
        <Link className={Style.linkToCreate} to="/listing/create">
          <FontAwesomeIcon icon={faPlus} className={Style.createButtonIcon} />{" "}
          Criar
        </Link>
      </div>
      <div className={Style.myListing}>
        {loading && <p>Carregando...</p>}
        {documents &&  documents.length > 0 ? (documents.map((doc) => (

        <div key={doc.id} className={Style.card}>
          <div className={Style.cardImage}><img src={CardImage} alt="" /></div>

          <div className={Style.cardContent}>
            <h2>{doc.title}</h2>
            <div className={Style.cardDetails}>
              <ul>
                <li><span>Estado:</span> {doc.state}</li>
                <li><span>Cidade:</span> {doc.city}</li>
                <li><span>Tipo:</span> {doc.propertyType}</li>
                <li><span>Finalidade:</span> {doc.purpose}</li>
                <li><span>Valor:</span> R$ {doc.propertyValue}</li>
                <li>{doc.createdAt.toDate().toLocaleString("pt-BR")}</li>
              </ul>
            </div>

            <div className={Style.cardActions}>
              <Link className={Style.linkToEdit}>Editar</Link>
              <button className={Style.buttonDelete} onClick={() => setCardIsOpen(true)}>Excluir</button>
            </div>
          </div>
        </div>

        )))  : (<p>Seus anuncios aparecerão aqui.</p>)}
      </div>

      {cardIsOpen &&  
      <div className={Style.deleteModal}>
        <p>Deseja excluir o anúncio?</p>
        <div className={Style.deleteModalActions}>
          <button className={Style.buttonCancel} onClick={() => setCardIsOpen(false)}>Cancelar</button>
          <button className={Style.buttonModalDelete} onClick={() => deleteDocument("advertisements", doc.id)}>Sim, Excluir</button>
        </div>
      </div>}
    </div>
  );
};

export default Listings;
