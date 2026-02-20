import Style from "./Home.module.css";
import Background1 from "../../assets/herobanner3 - Horizonte.jpg";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faArrowUpRightFromSquare} from "@fortawesome/free-solid-svg-icons"

const Home = () => {

  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <div className={Style.div}>
      <div className={`${Style.hero} ${isLoaded ? Style.loaded : ""}` }>
        <img src={Background1} alt="" />
        <div className={Style.heroInfos}>
          <h2>O imóvel ideal para o seu próximo passo começa aqui.</h2>
          <Link to="/properties" className={Style.linkHero}>Ver Imóveis <FontAwesomeIcon icon={faArrowUpRightFromSquare} className={Style.linkHeroIcon}/></Link>
        </div>
      </div>
      <div className={Style.divTest}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio nemo
          doloremque, vitae numquam suscipit illum illo dolores vel delectus
          nihil architecto? Fuga nulla omnis error neque! Alias natus architecto
          iure ab impedit laudantium beatae praesentium, quos nemo voluptatibus
          autem nulla magni nostrum expedita rem qui tempore, fugiat ex amet
          deleniti nihil hic earum ipsam. Sequi excepturi et numquam suscipit
          quisquam quam dicta consequatur cupiditate modi voluptatibus obcaecati
          quibusdam totam, perspiciatis veniam illum error. Quam, earum debitis
          explicabo dignissimos beatae quo, libero natus dicta obcaecati
          mollitia molestias officia ullam a tempore, commodi aperiam amet
          exercitationem nemo minima? Minus dolor quis mollitia accusantium quo
          eligendi nobis saepe consectetur iste et. Praesentium maiores quas sit
          saepe voluptatibus inventore quisquam eum consequatur suscipit alias
          nostrum in quibusdam libero ex, laudantium eligendi ipsa esse
          doloremque perferendis blanditiis est voluptate id? Itaque incidunt
          ipsam impedit beatae nisi provident neque iusto sequi maxime dicta
          voluptatem repudiandae iure laborum corporis asperiores aliquid, vitae
          a porro quia voluptatum. Quod cum reprehenderit id consequatur
          aliquid, voluptates voluptatum harum amet illo exercitationem quasi
          cupiditate necessitatibus maiores quia omnis. Adipisci facere ipsam
          dolor quis quidem doloribus aliquid at consequatur necessitatibus
          minus reiciendis praesentium ducimus maxime distinctio natus in modi
          cupiditate, ex placeat ab porro obcaecati pariatur debitis! Esse
          pariatur, facere, voluptatibus reprehenderit architecto dolores saepe
          harum eum blanditiis vero labore provident sit voluptas optio unde
          nisi eos. Corrupti est ipsum vero eligendi officia quis reprehenderit
          sapiente iusto quia necessitatibus, eveniet consequuntur eaque. Fuga
          quisquam commodi animi. Neque labore iure doloremque! Quae culpa
          consequatur autem veniam enim amet facilis corrupti perspiciatis
          expedita, animi iure maxime voluptatem ipsum asperiores labore officia
          error distinctio maiores ut nulla dolore. Commodi laudantium quis
          excepturi itaque. Temporibus aspernatur aliquid labore debitis
          repellat tempore facilis numquam ipsum unde expedita, voluptas itaque
          aperiam alias magnam deserunt quidem veritatis consequatur eligendi
          assumenda accusamus, ut quod! Eum tenetur tempora assumenda
          consectetur vitae delectus cupiditate laboriosam dolor, alias
          obcaecati. Itaque magnam id cupiditate sint ut quaerat quidem corrupti
          cumque, at velit, inventore soluta ipsum dolores officia beatae
          voluptates, quas consequatur eum praesentium. Veritatis molestias
          sequi minus aliquam eligendi. Nobis, dolore voluptate. Quaerat illo
          aspernatur, voluptates magnam nam totam enim beatae veritatis impedit
          quibusdam recusandae maxime nulla similique, deserunt eos maiores
          fugiat ut libero soluta! Provident, exercitationem eius harum dolore
          quam veniam deserunt suscipit! Quas nisi perspiciatis laboriosam ut
          natus fuga nemo doloremque atque optio a culpa eaque porro eius eos
          dolore ullam, tempore doloribus veniam eum sint modi maxime facilis
          quibusdam minus. Vitae, quam? Pariatur voluptatem accusamus,
          voluptates, architecto ipsam temporibus quibusdam voluptate velit
          maiores excepturi molestiae optio, explicabo placeat rerum dolor in
          soluta? A molestiae facilis fugit suscipit autem earum tempora
          ducimus. Mollitia rerum laboriosam quos voluptas doloremque natus vero
          reiciendis non ratione blanditiis ipsa minus praesentium veritatis
          fugiat quam nihil quibusdam, maiores amet, asperiores voluptatibus
          cumque molestias ducimus dolor ea. Itaque doloribus ex rem dolorum
          provident magnam natus? Beatae assumenda iusto omnis vel nulla, natus
          architecto? Quia, fugiat similique dolorem eaque consectetur assumenda
          nihil in? Deleniti hic porro corporis architecto ut ea dolore
          pariatur? Nihil ratione ullam minus quia, natus, magnam, facilis
          possimus molestiae culpa maiores quis aliquid ipsa enim? Nam voluptate
          veritatis eos sint corporis velit ratione, atque beatae accusantium et
          adipisci quibusdam, voluptatem culpa eveniet tempora in debitis rerum
          officia voluptates eligendi illo dolorum nemo, possimus dolorem! Quod
          animi rerum, vitae facere a placeat molestiae commodi quae? Quisquam,
          nemo. Assumenda nisi rerum autem velit similique consequatur earum,
          amet dicta dignissimos consectetur veritatis quisquam ratione,
          deleniti architecto ut voluptate eveniet, laborum perspiciatis
          consequuntur! Deleniti, beatae corporis iusto sapiente inventore, nisi
          laborum sit quibusdam minima ex, tempore enim expedita quam animi
          odit? Excepturi facilis explicabo nesciunt, culpa ipsa voluptas
          veritatis impedit optio? Pariatur tempora deleniti, tempore atque ex
          veniam consequatur saepe totam officia laborum esse qui porro, aliquam
          est quidem ut voluptas recusandae rerum, odio ipsam expedita quod.
          Neque similique exercitationem earum cumque harum dicta modi tempora
          temporibus autem perspiciatis voluptatibus ut, rerum provident dolore
          ipsa ex qui quos quod debitis! Facere quibusdam rerum minima at iure
          voluptate id veniam fugit. Saepe libero ipsa numquam aspernatur
          minima, beatae inventore. Maxime deserunt ipsum adipisci commodi,
          corporis blanditiis autem. Consectetur ducimus fugit doloremque ullam
          nulla dolorum aliquam, accusantium optio architecto eligendi delectus
          at fuga rerum! Sit animi ut corporis impedit qui? Corporis quaerat
          vitae, amet incidunt possimus dolor totam tempore consequatur autem
          corrupti repudiandae repellendus iusto vel rerum esse velit ipsam. Ex
          nisi culpa quas illo, aliquid corrupti voluptate cumque. Inventore
          nesciunt in, repellat fugiat dolores ipsa accusamus quaerat
          perspiciatis, nulla quidem ipsum, commodi mollitia impedit
          consequuntur repellendus quia. Incidunt aperiam explicabo, aut
          molestias illum alias enim, ratione quibusdam temporibus distinctio
          quasi id tempora vero soluta nobis necessitatibus quas consequatur sit
          repudiandae dolorem quod aliquid? Quidem repellendus inventore quos
          obcaecati pariatur ab saepe adipisci, corporis reprehenderit ipsam
          maiores est optio laborum dignissimos odit? Nesciunt accusamus cum
          ipsum minima sint corrupti optio distinctio. Ad, nihil provident.
          Facilis eum, debitis quae eius aspernatur suscipit minima pariatur,
          laboriosam consequuntur ad, provident nisi! Esse commodi ex, unde
          possimus eligendi consequatur consequuntur fuga suscipit hic sunt iste
          vero deleniti. Odit consectetur atque expedita suscipit consequatur
          reiciendis, sint laudantium quaerat quas ea vel rerum accusantium
          neque alias repudiandae quo dolore voluptatum minus laborum ipsa ab
          nostrum molestiae officiis blanditiis. Quisquam, ipsum ducimus? Qui
          sit voluptatum cupiditate, delectus non ipsa quas deserunt ad totam
          quisquam enim, magni sint? Pariatur repellat ab dolore vero aliquid
          harum corporis non doloribus porro voluptatum!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio nemo
          doloremque, vitae numquam suscipit illum illo dolores vel delectus
          nihil architecto? Fuga nulla omnis error neque! Alias natus architecto
          iure ab impedit laudantium beatae praesentium, quos nemo voluptatibus
          autem nulla magni nostrum expedita rem qui tempore, fugiat ex amet
          deleniti nihil hic earum ipsam. Sequi excepturi et numquam suscipit
          quisquam quam dicta consequatur cupiditate modi voluptatibus obcaecati
          quibusdam totam, perspiciatis veniam illum error. Quam, earum debitis
          explicabo dignissimos beatae quo, libero natus dicta obcaecati
          mollitia molestias officia ullam a tempore, commodi aperiam amet
          exercitationem nemo minima? Minus dolor quis mollitia accusantium quo
          eligendi nobis saepe consectetur iste et. Praesentium maiores quas sit
          saepe voluptatibus inventore quisquam eum consequatur suscipit alias
          nostrum in quibusdam libero ex, laudantium eligendi ipsa esse
          doloremque perferendis blanditiis est voluptate id? Itaque incidunt
          ipsam impedit beatae nisi provident neque iusto sequi maxime dicta
          voluptatem repudiandae iure laborum corporis asperiores aliquid, vitae
          a porro quia voluptatum. Quod cum reprehenderit id consequatur
          aliquid, voluptates voluptatum harum amet illo exercitationem quasi
          cupiditate necessitatibus maiores quia omnis. Adipisci facere ipsam
          dolor quis quidem doloribus aliquid at consequatur necessitatibus
          minus reiciendis praesentium ducimus maxime distinctio natus in modi
          cupiditate, ex placeat ab porro obcaecati pariatur debitis! Esse
          pariatur, facere, voluptatibus reprehenderit architecto dolores saepe
          harum eum blanditiis vero labore provident sit voluptas optio unde
          nisi eos. Corrupti est ipsum vero eligendi officia quis reprehenderit
          sapiente iusto quia necessitatibus, eveniet consequuntur eaque. Fuga
          quisquam commodi animi. Neque labore iure doloremque! Quae culpa
          consequatur autem veniam enim amet facilis corrupti perspiciatis
          expedita, animi iure maxime voluptatem ipsum asperiores labore officia
          error distinctio maiores ut nulla dolore. Commodi laudantium quis
          excepturi itaque. Temporibus aspernatur aliquid labore debitis
          repellat tempore facilis numquam ipsum unde expedita, voluptas itaque
          aperiam alias magnam deserunt quidem veritatis consequatur eligendi
          assumenda accusamus, ut quod! Eum tenetur tempora assumenda
          consectetur vitae delectus cupiditate laboriosam dolor, alias
          obcaecati. Itaque magnam id cupiditate sint ut quaerat quidem corrupti
          cumque, at velit, inventore soluta ipsum dolores officia beatae
          voluptates, quas consequatur eum praesentium. Veritatis molestias
          sequi minus aliquam eligendi. Nobis, dolore voluptate. Quaerat illo
          aspernatur, voluptates magnam nam totam enim beatae veritatis impedit
          quibusdam recusandae maxime nulla similique, deserunt eos maiores
          fugiat ut libero soluta! Provident, exercitationem eius harum dolore
          quam veniam deserunt suscipit! Quas nisi perspiciatis laboriosam ut
          natus fuga nemo doloremque atque optio a culpa eaque porro eius eos
          dolore ullam, tempore doloribus veniam eum sint modi maxime facilis
          quibusdam minus. Vitae, quam? Pariatur voluptatem accusamus,
          voluptates, architecto ipsam temporibus quibusdam voluptate velit
          maiores excepturi molestiae optio, explicabo placeat rerum dolor in
          soluta? A molestiae facilis fugit suscipit autem earum tempora
          ducimus. Mollitia rerum laboriosam quos voluptas doloremque natus vero
          reiciendis non ratione blanditiis ipsa minus praesentium veritatis
          fugiat quam nihil quibusdam, maiores amet, asperiores voluptatibus
          cumque molestias ducimus dolor ea. Itaque doloribus ex rem dolorum
          provident magnam natus? Beatae assumenda iusto omnis vel nulla, natus
          architecto? Quia, fugiat similique dolorem eaque consectetur assumenda
          nihil in? Deleniti hic porro corporis architecto ut ea dolore
          pariatur? Nihil ratione ullam minus quia, natus, magnam, facilis
          possimus molestiae culpa maiores quis aliquid ipsa enim? Nam voluptate
          veritatis eos sint corporis velit ratione, atque beatae accusantium et
          adipisci quibusdam, voluptatem culpa eveniet tempora in debitis rerum
          officia voluptates eligendi illo dolorum nemo, possimus dolorem! Quod
          animi rerum, vitae facere a placeat molestiae commodi quae? Quisquam,
          nemo. Assumenda nisi rerum autem velit similique consequatur earum,
          amet dicta dignissimos consectetur veritatis quisquam ratione,
          deleniti architecto ut voluptate eveniet, laborum perspiciatis
          consequuntur! Deleniti, beatae corporis iusto sapiente inventore, nisi
          laborum sit quibusdam minima ex, tempore enim expedita quam animi
          odit? Excepturi facilis explicabo nesciunt, culpa ipsa voluptas
          veritatis impedit optio? Pariatur tempora deleniti, tempore atque ex
          veniam consequatur saepe totam officia laborum esse qui porro, aliquam
          est quidem ut voluptas recusandae rerum, odio ipsam expedita quod.
          Neque similique exercitationem earum cumque harum dicta modi tempora
          temporibus autem perspiciatis voluptatibus ut, rerum provident dolore
          ipsa ex qui quos quod debitis! Facere quibusdam rerum minima at iure
          voluptate id veniam fugit. Saepe libero ipsa numquam aspernatur
          minima, beatae inventore. Maxime deserunt ipsum adipisci commodi,
          corporis blanditiis autem. Consectetur ducimus fugit doloremque ullam
          nulla dolorum aliquam, accusantium optio architecto eligendi delectus
          at fuga rerum! Sit animi ut corporis impedit qui? Corporis quaerat
          vitae, amet incidunt possimus dolor totam tempore consequatur autem
          corrupti repudiandae repellendus iusto vel rerum esse velit ipsam. Ex
          nisi culpa quas illo, aliquid corrupti voluptate cumque. Inventore
          nesciunt in, repellat fugiat dolores ipsa accusamus quaerat
          perspiciatis, nulla quidem ipsum, commodi mollitia impedit
          consequuntur repellendus quia. Incidunt aperiam explicabo, aut
          molestias illum alias enim, ratione quibusdam temporibus distinctio
          quasi id tempora vero soluta nobis necessitatibus quas consequatur sit
          repudiandae dolorem quod aliquid? Quidem repellendus inventore quos
          obcaecati pariatur ab saepe adipisci, corporis reprehenderit ipsam
          maiores est optio laborum dignissimos odit? Nesciunt accusamus cum
          ipsum minima sint corrupti optio distinctio. Ad, nihil provident.
          Facilis eum, debitis quae eius aspernatur suscipit minima pariatur,
          laboriosam consequuntur ad, provident nisi! Esse commodi ex, unde
          possimus eligendi consequatur consequuntur fuga suscipit hic sunt iste
          vero deleniti. Odit consectetur atque expedita suscipit consequatur
          reiciendis, sint laudantium quaerat quas ea vel rerum accusantium
          neque alias repudiandae quo dolore voluptatum minus laborum ipsa ab
          nostrum molestiae officiis blanditiis. Quisquam, ipsum ducimus? Qui
          sit voluptatum cupiditate, delectus non ipsa quas deserunt ad totam
          quisquam enim, magni sint? Pariatur repellat ab dolore vero aliquid
          harum corporis non doloribus porro voluptatum!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit ipsum
          temporibus a assumenda, nihil recusandae debitis voluptas praesentium
          asperiores, at iste quasi reprehenderit quo ratione beatae vel maiores
          sint architecto reiciendis quibusdam exercitationem! Quaerat ab fuga
          assumenda, incidunt officiis molestias dolorum id voluptates odio,
          ipsum sapiente? Adipisci et eos tenetur hic eligendi cupiditate
          ratione ad dicta amet consequuntur in pariatur nam, eum doloremque
          ullam error consectetur quidem architecto omnis iusto nobis corporis
          ducimus, maiores voluptas. Cumque iusto minima, nostrum laudantium hic
          corrupti ducimus quasi molestias voluptas totam nobis labore,
          molestiae eos eius a eligendi dolorum maiores. Velit dolores sunt
          minima adipisci blanditiis harum, reiciendis voluptas at debitis totam
          veniam nemo modi dolore ipsa vitae, sint, ut nobis voluptatem
          necessitatibus? Provident, ex corrupti numquam neque eius quod nisi
          libero quaerat iusto dignissimos laboriosam nobis molestias error
          inventore. Hic nemo dolores molestias quam placeat porro earum fugiat,
          iure repellendus. Dolorem, nobis rem quae sit cum alias explicabo,
          voluptate ab animi at rerum natus hic fuga dignissimos numquam
          architecto beatae veritatis possimus odit labore. Blanditiis
          architecto quia eos labore, dolore explicabo doloribus quas eum nobis
          eligendi ab aliquam vel expedita itaque nam iure voluptatibus non.
          Laudantium perferendis quam, est architecto nam nemo aut.
        </p>
      </div>
    </div>
  );
};

export default Home;
