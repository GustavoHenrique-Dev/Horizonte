import { useFetchDocuments } from "../../hooks/useFetchDocuments";
import Style from "./Properties.module.css";

const Properties = () => {
  const { documents } = useFetchDocuments("advertisements");

  return (
    <div className={Style.container}>
     {documents && documents.map((doc) => (
      <div key={doc.id}>{doc.title}</div>
     ))}
    </div>
  );
};

export default Properties;
