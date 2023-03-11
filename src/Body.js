import React from "react";
import imagen1 from "./Imagenes/logoUcamp.jpg";
import imagen2 from "./Imagenes/mongoDB2.jpg";
import imagen3 from "./Imagenes/logoReact.jpg";
import imagen4 from "./Imagenes/logoexpress.jpg";
import imagen5 from "./Imagenes/desarrollo.jpg"

export const Body = () => {
  return (
    <div className="body">
      <section>
        <article className="logoUcamp">
          I attended a MERN full stack web development bootcamp where I was
          taught the use of different tools and methods for developing and
          deploying a web app.
        </article>
        <article className="imagenesHerramientas">
          <img src={imagen1} alt="logo" />
          <img src={imagen3} alt="logo" />
        </article>
        <article className="logoMongo">
          I have worked with noSql databases such as firebase and mongoDB in
          order to give full confidence and functionality to each of the
          projects
        </article>
        <article className="imagenesHerramientas2">
          <img src={imagen2} alt="logo" />
          <img src={imagen4} alt="logo" />
          <img src={imagen5} alt="logo" />
        </article>
      </section>

      <aside>
        <h1>Technologies Used</h1>
        <ul>
          <li>React</li>
          <li>Git</li>
          <li>Html 5</li>
          <li>CSS 3</li>
          <li>JavaScript</li>
          <li>MongoDB</li>
          <li>Express.js</li>
          <li>Node.js</li>
          <li>bootstrap</li>
        </ul>
      </aside>
    </div>
  );
};

export default Body;
