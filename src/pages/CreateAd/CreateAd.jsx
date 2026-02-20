import { useState } from "react";
import Style from "./CreateAd.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useInsertDocument } from "../../hooks/useInsertDocument";
import { useAuthContext } from "../../context/AuthContext";
import { NumericFormat } from "react-number-format";


export const CreateAd = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [purpose, setPurpose] = useState("");
  const [propertyValue, setPropertyValue] = useState("");

  const [state, setState] = useState("")
  const [city, setCity] = useState("")
  const [neighborhood, setNeighborhood] = useState("")

  const [area, setArea] = useState("")
  const [bedrooms, setBedrooms] = useState("")
  const [bathrooms, setBathrooms] = useState("")
  const [parkingSpaces, setParkingSpaces] = useState("")
  
  const [differentiators, setDifferentiators] = useState({
    pool: false,
    grill: false,
    balcony: false,
    elevator: false,
    furnished: false,
    petsAccepted: false
  })

  const [image, setImage] = useState("")

  const [brokerName, setBrokerName] = useState("")
  const [brokerContact, setBrokerContact] = useState("")
  const [brokerEmail, setBrokerEmail] = useState("")
  const [formError, setFormError] = useState("")

  const {insertDocument, response} = useInsertDocument("advertisements")
  const {user} = useAuthContext()
  const navigate = useNavigate()

  const HandleDifferentiators = (e) => {
    const {name, checked} = e.target

    setDifferentiators((prev => ({
      ...prev, [name]: checked,
    })))
  }

  const onHandleClick = async (e) => {
    e.preventDefault();

    if(!title || !description || !propertyType || !purpose || !propertyValue || !state || !city || !neighborhood || !area || !bedrooms || !bathrooms || !parkingSpaces || !differentiators || !brokerName || !brokerContact){
      setFormError("Preencha todos os campos.")
      return
    } else {
      await insertDocument({
      title,
      description,
      propertyType,
      purpose,
      propertyValue,
      state,
      city,
      neighborhood,
      area,
      bedrooms,
      bathrooms,
      parkingSpaces,
      differentiators,
      brokerName,
      brokerContact,
      brokerEmail,
      uid: user.uid
    })
    setFormError("")

    navigate("/listing")
    }
  };

  return (
    <main className={Style.registerProperty}>
      <form className={Style.registerPropertyForm} onSubmit={onHandleClick}>
        <fieldset className={`${Style.formSection} ${Style.mainInformation}`}>
          <legend>Informações Principais</legend>
          <div className={`${Style.formFields} ${Style.mainInformationLabels}`}>
            <label>
              Título do Anuncio:
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </label>
            <label>
              Descrição:
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </label>
            <label>
              Tipo do Imóvel:
              <select
                value={propertyType}
                onChange={(e) => setPropertyType(e.target.value)}
              >
                <option value="">Selecione</option>
                <option value="house">Casa</option>
                <option value="apartment">Apartamento</option>
                <option value="land">Terreno</option>
                <option value="commercial">Comercial</option>
              </select>
            </label>
            <label>
              Finalidade:
              <select
                value={purpose}
                onChange={(e) => setPurpose(e.target.value)}
              >
                <option value="">Selecione:</option>
                <option value="sale">Venda</option>
                <option value="rent">Aluguel</option>
              </select>
            </label>
            <label>
              Valor:
              <NumericFormat
                value={propertyValue}
                onValueChange={({ floatValue }) => {
                  setPropertyValue(floatValue || 0);
                }}
                thousandSeparator="."
                decimalSeparator=","
                prefix="R$ "
                decimalScale={2}
                fixedDecimalScale
                allowNegative={false}
              />
            </label>
          </div>
        </fieldset>
        <fieldset className={`${Style.formSection} ${Style.propertyLocation}`}>
          <legend>Localização</legend>
          <div className={`${Style.formFields} ${Style.propertyLocationLabels}`}>
            <label>
              Estado:
              <input type="text" value={state} onChange={(e) => setState(e.target.value)} />
            </label>
            <label>
              Cidade:
              <input type="text" value={city} onChange={(e) => setCity(e.target.value)}/>
            </label>
            <label>
              Bairro:
              <input type="text" value={neighborhood} onChange={(e) => setNeighborhood(e.target.value)}/>
            </label>
          </div>
        </fieldset>
        <fieldset className={`${Style.formSection} ${Style.propertyFeatures}`}>
          <legend>Características do Imóvel</legend>
          <div className={`${Style.formFields} ${Style.propertyFeaturesLabels}`}>
            <label>
              Área: (m2)
              <input type="number" value={area} onChange={(e) => setArea(e.target.value)}/>
            </label>
            <label>
              Quartos:
              <input type="number" value={bedrooms} onChange={(e) => setBedrooms(e.target.value)}/>
            </label>
            <label>
              Banheiros:
              <input type="number" value={bathrooms} onChange={(e) => setBathrooms(e.target.value)}/>
            </label>
            <label>
              Vagas na Garagem:
              <input type="number" value={parkingSpaces} onChange={(e) => setParkingSpaces(e.target.value)}/>
            </label>
          </div>
        </fieldset>
        <fieldset className={`${Style.formSection} ${Style.propertyDifferentiators}`}>
          <legend>Diferenciais</legend>
          <div className={`${Style.formFields} ${Style.propertyDifferentiatorsLabels}`}>
            <label>
              <input type="checkbox" name="pool" onChange={HandleDifferentiators} checked={differentiators.pool}/>
              Pscina
            </label>
            <label>
              <input type="checkbox" name="grill" onChange={HandleDifferentiators} checked={differentiators.grill}/>
              Churrasqueira
            </label>
            <label>
              <input type="checkbox" name="balcony" onChange={HandleDifferentiators} checked={differentiators.balcony}/>
              Varanda
            </label>
            <label>
              <input type="checkbox" name="elevator" onChange={HandleDifferentiators} checked={differentiators.elevator}/>
              Elevador
            </label>
            <label>
              <input type="checkbox" name="furnished" onChange={HandleDifferentiators} checked={differentiators.furnished}/>
              Mobilado
            </label>
            <label>
              <input type="checkbox" name="petsAccepted" onChange={HandleDifferentiators} checked={differentiators.petsAccepted}/>
              Aceita Pets
            </label>
          </div>
        </fieldset>
        <fieldset className={`${Style.formSection} ${Style.propertyImages}`}>
          <legend>Fotos</legend>
          <div className={`${Style.formFields} ${Style.propertyImagesInput}`}>
            <input type="file" multiple onChange={(e) => setImage(e.target.files[0])} />
          </div>
        </fieldset>
        <fieldset className={`${Style.formSection} ${Style.sellerContact}`}>
          <legend>Contato</legend>
          <div className={`${Style.formFields} ${Style.sellerContactLabels}`}>
            <label>
              Nome do corretor:
              <input type="text" value={brokerName} onChange={(e) => setBrokerName(e.target.value)}/>
            </label>
            <label>
              Numero para Contato:
              <input type="tel" inputMode="numeric" autoComplete="tel" value={brokerContact} onChange={(e) => setBrokerContact(e.target.value)}/>
            </label>
            <label>
              Email: (opcional)
              <input type="email" value={brokerEmail} onChange={(e) => setBrokerEmail(e.target.value)}/>
            </label>
          </div>
        </fieldset>
        {formError && <p className={Style.alertError}>{formError}</p>}
        <fieldset className={Style.optionsForm}>
          <Link to="/listing" className={Style.linkToListing}>
            Cancelar
          </Link>
          {!response.loading && <button type="submit" className={Style.buttonSave}>
            Salvar
          </button>}
          {response.loading && <button type="submit" disabled className={Style.buttonSave}>
            Aguarde...
          </button>}
        </fieldset>
      </form>
    </main>
  );
};
