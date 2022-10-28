import { motion } from "framer-motion";
import BackBubble from "../utils/formas/BackBubble";
import cienciasCognitivas from "../../img/fotosCiencias/cienciasCognitivas.jpg";
import techArquitectura from "../../img/fotosCiencias/3. tech de la arquitectura.jpg";
import animacionPersonajes from "../../img/fotosCiencias/4 animacion de personajes.jpg";
import ingenieriaSuministros from "../../img/fotosCiencias/5. ingenieria de los suministros.jpg";
import artesGraficas from "../../img/fotosCiencias/6. artes graficas.jpg";
import ingenieriaSoftware from "../../img/fotosCiencias/7. ingenieria de software.jpg";
import ingenieriaElectronica from "../../img/fotosCiencias/8. ingenieria electronica.jpg";
import ingenieriaMecanica from "../../img/fotosCiencias/9. ingenieria mecanica.jpg";
import ingenieriaMecatronica from "../../img/fotosCiencias/10. ingenieria mecatronica.jpg";
import ingenieriaIN from "../../img/fotosCiencias/11. ingenieria innovacion y negocios.jpg";
import ingenieriaGeneral from "../../img/fotosCiencias/12. ingenieria general.jpg";
import electronicaIndustrial from "../../img/fotosCiencias/13. electronica industrial.jpg";
import ingenieriaQuimica from "../../img/fotosCiencias/14. ingenieria quimica.jpg";
import pCienciasNaturales from "../../img/fotosCiencias/15. perosnalizado de ciencias naturales.jpg";
import ingenieriaQB from "../../img/fotosCiencias/16. igenieria quimica y biotechnologia.jpg";
import cienciaDatos from "../../img/fotosCiencias/17. ciencia de datos.jpg";
import desarrolloConDig from "../../img/fotosCiencias/19 desarrollo conceptos digitales.jpg";
import apMultimedia from "../../img/fotosCiencias/AP diseño multimedia.jpg";
import daw from "../../img/fotosCiencias/desarrollo paginas web.jpg";

import adGestionServicios from "../../img/fotosSociales/administracion y gestion de servicios.jpg";
import adGestionDigital from "../../img/fotosSociales/administración y gestion digital.jpg";
import adNegociosG from "../../img/fotosSociales/Administracion y negocios globales.jpg";
import adSociologia from "../../img/fotosSociales/administracion y sociologia.jpg";
import antropologiaMerc from "../../img/fotosSociales/antropologia de mercados.jpg";
import aptopDiseñoModa from "../../img/fotosSociales/AP y TOP UP diseño de moda.jpg";
import aptopMarkModa from "../../img/fotosSociales/AP y TOP UP marketing de moda.jpg";
import ecoAdminEmpresas from "../../img/fotosSociales/economia y administracion de empresas.jpg";
import estudiosEuropeos from "../../img/fotosSociales/estudios europeos.jpg";
import gPerHumanistico from "../../img/fotosSociales/grado perosnalizado humanistico.jpg";
import gPCienSociales from "../../img/fotosSociales/grado personalizado ciencias sociales.jpg";
import nInterPolitica from "../../img/fotosSociales/negocios internacionales y politica.jpg";
import nInternacionales from "../../img/fotosSociales/negocios internacionales.jpg";
import ramaAlemana from "../../img/fotosSociales/rama alemana.jpg";
import ramaChina from "../../img/fotosSociales/rama china.jpg";
import ramaEspañola from "../../img/fotosSociales/rama española.jpg";
import ramaFrancesa from "../../img/fotosSociales/rama francesa.jpg";
import ramaJaponesa from "../../img/fotosSociales/rama japonesa.jpg";
import topupEmpModa from "../../img/fotosSociales/Top Up empredimineto de moda.jpg";
import transporteMaritimo from "../../img/fotosSociales/transporte maritimo.jpg";

import { useEffect, useState } from "react";

export default function CarrerasDK() {
  const [startedCursor, setStartedCursor] = useState(false);

  if (startedCursor == false) {
    if (window.scrollY) {
      window.scroll(0, 0);
      setStartedCursor(true);
      
    }
  }


  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [isOpen5, setIsOpen5] = useState(false);
  const [isOpen6, setIsOpen6] = useState(false);
  const [isOpen7, setIsOpen7] = useState(false);
  const [isOpen8, setIsOpen8] = useState(false);
  const [isOpen9, setIsOpen9] = useState(false);
  const [isOpen10, setIsOpen10] = useState(false);
  const [isOpen11, setIsOpen11] = useState(false);
  const [isOpen12, setIsOpen12] = useState(false);
  const [isOpen13, setIsOpen13] = useState(false);
  const [isOpen14, setIsOpen14] = useState(false);
  const [isOpen15, setIsOpen15] = useState(false);
  const [isOpen16, setIsOpen16] = useState(false);
  const [isOpen17, setIsOpen17] = useState(false);
  const [isOpen18, setIsOpen18] = useState(false);
  const [isOpen19, setIsOpen19] = useState(false);

  const [isOpen20, setIsOpen20] = useState(false);
  const [isOpen21, setIsOpen21] = useState(false);
  const [isOpen22, setIsOpen22] = useState(false);
  const [isOpen23, setIsOpen23] = useState(false);
  const [isOpen24, setIsOpen24] = useState(false);
  const [isOpen25, setIsOpen25] = useState(false);
  const [isOpen26, setIsOpen26] = useState(false);
  const [isOpen27, setIsOpen27] = useState(false);
  const [isOpen28, setIsOpen28] = useState(false);
  const [isOpen29, setIsOpen29] = useState(false);
  const [isOpen30, setIsOpen30] = useState(false);
  const [isOpen31, setIsOpen31] = useState(false);
  const [isOpen32, setIsOpen32] = useState(false);
  const [isOpen33, setIsOpen33] = useState(false);
  const [isOpen34, setIsOpen34] = useState(false);
  const [isOpen35, setIsOpen35] = useState(false);
  const [isOpen36, setIsOpen36] = useState(false);
  const [isOpen37, setIsOpen37] = useState(false);
  const [isOpen38, setIsOpen38] = useState(false);
  const [isOpen39, setIsOpen39] = useState(false);


  /**Error en el posicionamiento de las tarjetas, investigar si es culpa
   * del layout o no
   */

  return (
    <div className="contenido" id="carreras">
      <BackBubble color={"b-blue"} waveColor={"#386aac"} />
      <motion.div className="grid-carreras">
        <motion.div
          className="tarjeta-carreras"
          layout
          initial={{
            marginLeft: "23%",
          }}
          animate={{
            width: isOpen1 ? "358px" : "260px",
            height: isOpen1 ? "2300px" : "280px",
            marginLeft: isOpen1 ? "3%" : "23%",
          }}
        >
          <motion.div
            className="container-img-carreras"
            initial={{ marginLeft: "11.5%" }}
            animate={{
              width: isOpen1 ? "282px" : "200px",
              height: isOpen1 ? "266px" : "170px",
              marginLeft: isOpen1 ? "18.5%" : "11.5%",
              marginTop: isOpen1 ? "6%" : "3%",
            }}
          >
            <motion.img
              src={cienciasCognitivas}
              layout
              animate={{
                width: isOpen1 ? "257px" : "180px",
                height: isOpen1 ? "242px" : "150px",
              }}
            />
          </motion.div>
          <motion.div
            className="titulo-carrera"
            layout
            animate={{
              fontSize: isOpen1 ? "x-large" : "large",
              paddingLeft: isOpen1 ? "58px" : "3px",
            }}
          >
            CIENCIAS COGNITIVAS
          </motion.div>
          {isOpen1 && (
            <motion.div className="carrera-info">
              <motion.div className="tabla-incial-carrera">
                <div className="tabla-inicial-carrera-row">
                  <div>DURACIÓN: 3 AÑOS</div>
                  <div>CRÉDITOS:180</div>
                </div>
                <div className="tabla-inicial-carrera-row">
                  <div>COMIENZO: AGOSTO</div>
                  <div>PLAZO DE SOLICITUD: FEBRERO</div>
                </div>
              </motion.div>
              <h2>DESCRIPCIÓN</h2>
              <p>
                En el programa de Ciencias Cognitivas se presentan las teorías
                fundamentales de la cognición. En este grado aprenderás a
                diseñar y llevar a cabo tus propias investigaciones sobre la
                mente, el cerebro y el comportamiento humano. Entre muchas
                cosas, aprenderás sobre análisis estadístico de datos y
                programación informática, esto te permitirá llevar a cabo tus
                propios estudios experimentales, así como analizar y ser crítico
                de otros que ya han sido realizados con anterioridad.
              </p>
              <p>
                Este grado está totalmente impartido en inglés para así promover
                un entorno de estudio internacional y preparar a los estudiantes
                para el mercado laboral internacional.
              </p>
              <h2>RAMAS DE ESPECIALIZACIÓN</h2>
              <p>
                Durante la carrera podrás especializarte en una rama de las
                ciencias cognitivas gracias a las optativas. Hay cuatro posibles
                ramas de especialización:
              </p>
              <ul>
                <li>Comunicación Contemporánea</li>
                <li>Mentes sociales</li>
                <li>Ciencia de datos culturales</li>
                <li>Estudios de datos críticos</li>
              </ul>
              <h2>REQUISITOS ACADÉMICOS</h2>
              <ul>
                <li>
                  Inglés:
                  <ul>
                    <li>
                      TOEFL: con una nota mínima de 83 puntos y una antigüedad
                      inferior a los dos años
                    </li>
                    <li>
                      IELTS: con una nota mínima de 6,5 y una antigüedad
                      inferior a los dos años.
                    </li>
                    <li>
                      Cambridge: CAE con nivel A, B o C o bien FCE con nivel A
                    </li>
                    <li>
                      En el caso de haber cursado el Bachillerato Internacional
                      (IB) o IGCSEs + A Levels no es necesario demostrar tu
                      nivel de inglés mediante ninguno de estos exámenes
                      mencionados.
                    </li>
                  </ul>
                </li>
                <li>
                  Matemáticas: 200 horas como mínimo, cursadas en los últimos 3
                  años
                </li>
                <li>
                  Historia, historia de la filosofía o historia del mundo
                  contemporáneo: 200 horas como mínimo, cursadas en los últimos
                  3 años
                </li>
              </ul>
              <h2>SALIDAS LABORALES</h2>
              <p>
                Gracias a lo amplia que es esta carrera y las diferentes vías de
                especialización, gracias a las optativas al graduarte podrás
                acceder a trabajos de las ramas de informática, diseño de
                productos, investigación de neurociencia o recursos humanos,
                entre muchos. Si quieres especializarte aún más y cursar un
                máster podrás acceder a másteres de la rama de neurociencia y de
                ciencias cognitivas.
              </p>
            </motion.div>
          )}
          <motion.div
            className="carrera-button"
            id="one"
            layout
            onClick={() => setIsOpen1(!isOpen1)}
            animate={{
              marginLeft: isOpen1 ? "25.5%" : "11.5%",
              marginTop: isOpen1 ? "20%" : "3%",
            }}
          >
            INFORMACIÓN
          </motion.div>
        </motion.div>

        <motion.div
          className="tarjeta-carreras"
          animate={{
            width: isOpen2 ? "358px" : "260px",
            height: isOpen2 ? "2300px" : "320px",
            marginLeft: isOpen2 ? "2%" : "23%",
          }}
        >
          <motion.div
            className="container-img-carreras"
            animate={{
              width: isOpen2 ? "282px" : "200px",
              height: isOpen2 ? "266px" : "170px",
              marginLeft: isOpen2 ? "18.5%" : "11.5%",
              marginTop: isOpen2 ? "6%" : "3%",
            }}
          >
            <motion.img
              src={techArquitectura}
              animate={{
                width: isOpen2 ? "257px" : "180px",
                height: isOpen2 ? "242px" : "150px",
              }}
            />
          </motion.div>
          <motion.div
            className="titulo-carrera"
            animate={{
              fontSize: isOpen2 ? "X-large" : "medium",
              paddingLeft: isOpen2 ? "58px" : "3px",
            }}
          >
            TECNOLOGÍA DE LA ARQUITECTURA Y GSTION DE LA CONSTRUCCIÓN
          </motion.div>
          {isOpen2 && (
            <motion.div className="carrera-info">
              <motion.div className="tabla-incial-carrera">
                <div className="tabla-inicial-carrera-row">
                  <div>DURACIÓN: 3,5 AÑOS</div>
                  <div>CRÉDITOS: 210</div>
                </div>
                <div className="tabla-inicial-carrera-row">
                  <div>COMIENZO: AGOSTO </div>
                  <div>PLAZO DE SOLICITUD: FEBRERO</div>
                </div>
              </motion.div>
              <h2>DESCRIPCIÓN</h2>
              <p>
                En el grado de Tecnología de la Arquitectura y Gestión de la
                Construcción, aprenderás a diseñar, planificar, ejecutar y
                gestionar proyectos de construcción. Trabajarás con proyectos
                pequeños y grandes de principio a fin. Obtendrás habilidades de
                gestión de proyectos y experiencia en el uso de herramientas
                digitales en el proceso de construcción.
              </p>
              <p>
                La estructura de la carrera se divide en proyectos. Cada
                semestre te centrarás en un proyecto concreto y tendrás
                asignaturas específicas que están directamente relacionadas con
                dicho proyecto.
              </p>

              <h2>POSIBILIDAD DE ERASMUS O ESTANCIA EN EL EXTRANJERO</h2>
              <p>
                La carrera cuenta con muchas opciones para poder estudiar fuera
                durante un semestre. Podrás elegir entre más de 33 países y 200
                instituciones educativas, tanto dentro como fuera de Europa
              </p>
              <p>
                También tienes la posibilidad de realizar las prácticas en el
                extranjero, en una empresa de tu elección.
              </p>

              <h2>REQUISITOS ACADÉMICOS</h2>
              <ul>
                <li>
                  Inglés
                  <ul>
                    <li>
                      TOEFL: con una nota mínima de 83 puntos y una antigüedad
                      inferior a los dos años
                    </li>
                    <li>
                      IELTS: con una nota mínima de 6,5 y una antigüedad
                      inferior a los dos años.
                    </li>
                    <li>
                      Cambridge: CAE con nivel A, B o C o bien FCE con nivel A
                    </li>
                    <li>
                      En el caso de haber cursado el Bachillerato Internacional
                      (IB) o IGCSEs + A Levels no es necesario demostrar tu
                      nivel de inglés mediante ninguno de estos exámenes
                      mencionados
                    </li>
                  </ul>
                </li>
                <li>
                  Matemáticas: 150 horas como mínimo, cursadas en los últimos 3
                  años
                </li>
              </ul>

              <h2>SALIDAS LABORALES</h2>
              <p>
                Esta carrera te abre las puertas para poder trabajar en el
                sector de la consultoría arquitectónica, tener diversas
                posiciones en firmas de arquitectos, diseñador de construcciones
                o coordinador de proyectos arquitectónicos. Si decides continuar
                tus estudios tienes la posibilidad de entrar en máster
                relacionados con las industrias de la arquitectura o la
                construcción.
              </p>
            </motion.div>
          )}
          <motion.div
            className="carrera-button"
            onClick={() => setIsOpen2(!isOpen2)}
            animate={{
              marginLeft: isOpen2 ? "25.5%" : "11.5%",
              marginTop: isOpen2 ? "15%" : "3%",
            }}
          >
            INFORMACIÓN
          </motion.div>
        </motion.div>

        <motion.div
          className="tarjeta-carreras"
          animate={{
            width: isOpen3 ? "358px" : "260px",
            height: isOpen3 ? "2100px" : "288px",
            marginLeft: isOpen3 ? "2%" : "23%",
          }}
        >
          <motion.div
            className="container-img-carreras"
            animate={{
              width: isOpen3 ? "282px" : "200px",
              height: isOpen3 ? "266px" : "170px",
              marginLeft: isOpen3 ? "18.5%" : "11.5%",
              marginTop: isOpen3 ? "6%" : "3%",
            }}
          >
            <motion.img
              src={animacionPersonajes}
              animate={{
                width: isOpen3 ? "257px" : "180px",
                height: isOpen3 ? "242px" : "150px",
              }}
            />
          </motion.div>
          <motion.div
            className="titulo-carrera"
            animate={{
              fontSize: isOpen3 ? "x-large" : "large",
              paddingLeft: isOpen3 ? "58px" : "3px",
            }}
          >
            GRADO EN ANIMACIÓN DE PERSONAJES
          </motion.div>
          {isOpen3 && (
            <motion.div className="carrera-info">
              <motion.div className="tabla-incial-carrera">
                <div className="tabla-inicial-carrera-row">
                  <div>DURACIÓN: 3,5 AÑOS</div>
                  <div>CRÉDITOS: 210</div>
                </div>
                <div className="tabla-inicial-carrera-row">
                  <div>COMIENZO: AGOSTO </div>
                  <div>PLAZO DE SOLICITUD: FEBRERO</div>
                </div>
              </motion.div>
              <h2>DESCRIPCIÓN</h2>
              <p>
                En la carrera de Animación de Personajes, aprenderás cómo hacer
                que la audiencia crea que el personaje está vivo, con
                sentimientos y personalidad, utilizando los principios clásicos
                y los métodos estilizados de animación. Es el animador quien
                crea la magia del personaje e invoca la empatía de la audiencia
              </p>
              <p>
                Cada año se enfoca en un plan de estudios progresivamente más
                complejo que lo guía en el camino hacia el dominio de la
                animación de personajes en 2D y 3D, además de brindarle
                experiencia práctica con la preproducción y las producciones.
              </p>

              <h2>REQUISITOS ACADÉMICOS</h2>
              <ul>
                <li>
                  Inglés:
                  <ul>
                    <li>
                      TOEFL: con una nota mínima de 83 puntos y una antigüedad
                      inferior a los dos años
                    </li>
                    <li>
                      IELTS: con una nota mínima de 6,5 y una antigüedad
                      inferior a los dos años
                    </li>
                    <li>
                      Cambridge: CAE con nivel A, B o C o bien FCE con nivel A
                    </li>
                    <li>
                      En el caso de haber cursado el Bachillerato Internacional
                      (IB) o IGCSEs + A Levels no es necesario demostrar tu
                      nivel de inglés mediante ninguno de estos exámenes
                      mencionados.
                    </li>
                  </ul>
                </li>
              </ul>

              <h2>EXAMEN Y ENTREVISTA</h2>
              <p>
                La admisión a este programa se basa en pasión y talento. Por
                ello la universidad realizará entrevistas y exámenes de dibujo y
                diseño en el mes de mayo. <br />
                <br /> Si tienes ya un portafolio con diseños, es muy buena
                opción enviarlos en la solicitud de plaza, ya que así verán tus
                habilidades de antemano.
              </p>
              <h2>SALIDAS LABORALES</h2>
              <p>
                Cuando te gradúes podrás entrar directamente en el mundo
                laboral. Estudiantes que ya se han graduado de esta carrera
                actualmente están trabajando como directores de películas de
                animación, directores de arte, diseñadores de personajes 2D o
                3D, diseñador de animaciones para películas, series o juegos y
                muchos más trabajos interesantes.
              </p>
            </motion.div>
          )}
          <motion.div
            className="carrera-button"
            onClick={() => setIsOpen3(!isOpen3)}
            animate={{
              marginLeft: isOpen3 ? "25.5%" : "11.5%",
              marginTop: isOpen3 ? "20%" : "3%",
            }}
          >
            INFORMACIÓN
          </motion.div>
        </motion.div>
        <motion.div
          className="tarjeta-carreras"
          animate={{
            width: isOpen4 ? "358px" : "260px",
            height: isOpen4 ? "2390px" : "320px",
            marginLeft: isOpen4 ? "2%" : "23%",
          }}
        >
          <motion.div
            className="container-img-carreras"
            animate={{
              width: isOpen4 ? "282px" : "200px",
              height: isOpen4 ? "266px" : "170px",
              marginLeft: isOpen4 ? "18.5%" : "11.5%",
              marginTop: isOpen4 ? "6%" : "3%",
            }}
          >
            <motion.img
              src={ingenieriaSuministros}
              animate={{
                width: isOpen4 ? "257px" : "180px",
                height: isOpen4 ? "242px" : "150px",
              }}
            />
          </motion.div>
          <motion.div
            className="titulo-carrera"
            animate={{
              fontSize: isOpen4 ? "x-large" : "large",
              paddingLeft: isOpen4 ? "58px" : "3px",
            }}
          >
            GRADO EN INGENIERIA CLIMATICA Y DE SUMINISTROS
          </motion.div>
          {isOpen4 && (
            <motion.div className="carrera-info">
              <motion.div className="tabla-incial-carrera">
                <div className="tabla-inicial-carrera-row">
                  <div>DURACIÓN: 3,5 AÑOS</div>
                  <div>CRÉDITOS: 210</div>
                </div>
                <div className="tabla-inicial-carrera-row">
                  <div>COMIENZO: AGOSTO </div>
                  <div>PLAZO DE SOLICITUD: FEBRERO</div>
                </div>
              </motion.div>
              <h2>DESCRIPCIÓN</h2>
              <p>
                En el Grado de Ingeniería Climática y de Suministro, trabajarás
                con tareas relacionadas con la ingeniería en el sector del
                suministro desde el primer día. Tendrás asignaturas de
                matemáticas, física y química donde formarás una base científica
                para después poder trabajar con soluciones complejas que
                requieren cálculos y consideraciones científicas. Tendrá también
                clases generales para todas las ingenierías, junto con
                asignaturas centradas en el campo del clima y los suministros.
                Junto con esto tendrás un enfoque de digitalización, innovación
                y emprendimiento que te dará unas bases para poder entender la
                ingeniería también desde un punto empresarial.
              </p>

              <h2>POSIBILIDAD DE ERASMUS O ESTANCIA EN EL EXTRANJERO</h2>
              <p>
                La carrera cuenta con muchas opciones para poder estudiar fuera
                durante un semestre. Podrás elegir entre más de 33 países y 200
                instituciones educativas, tanto dentro como fuera de Europa.
              </p>
              <p>
                También tienes la posibilidad de realizar las prácticas en el
                extranjero, en una empresa de tu elección.
              </p>

              <h2>REQUISITOS ACADÉMICOS</h2>
              <ul>
                <li>
                  Inglés:
                  <ul>
                    <li>
                      TOEFL: con una nota mínima de 83 puntos y una antigüedad
                      inferior a los dos años
                    </li>
                    <li>
                      IELTS: con una nota mínima de 6,5 y una antigüedad
                      inferior a los dos años.
                    </li>
                    <li>
                      Cambridge: CAE con nivel A, B o C o bien FCE con nivel A
                    </li>
                    <li>
                      En el caso de haber cursado el Bachillerato Internacional
                      (IB) o IGCSEs + A Levels no es necesario demostrar tu
                      nivel de inglés mediante ninguno de estos exámenes
                      mencionados.
                    </li>
                  </ul>
                </li>
                <li>
                  Matemáticas: 375 horas como mínimo curadas en los últimos 3
                  años
                </li>
                <li>
                  Química: 150 horas como mínimo cursadas en los últimos 3 años
                  o Física: 150 horas como mínimo cursadas en los últimos 3 años
                </li>
              </ul>

              <h2>SALIDAS LABORALES</h2>

              <p>
                Esta carrera te abre las puertas para poder trabajar en el
                sector de la ingeniería térmica, consultoría a empresas de
                suministros, proyectos de prevención de inundaciones, proyectos
                en empresas de suministros y muchos más trabajos tanto en el
                sector público como privado. Si decides continuar tus estudios
                tienes la posibilidad de entrar en máster relacionados con las
                industrias de las ingenierías de suministros, ingenierías
                energéticas o ciencias sostenibles.
              </p>
            </motion.div>
          )}
          <motion.div
            className="carrera-button"
            onClick={() => setIsOpen4(!isOpen4)}
            animate={{ marginLeft: isOpen4 ? "25.5%" : "11.5%",
            marginTop: isOpen4 ? "15%" : "3%", }}
          >
            INFORMACIÓN
          </motion.div>
        </motion.div>
        <motion.div
          className="tarjeta-carreras"
          animate={{
            width: isOpen5 ? "358px" : "260px",
            height: isOpen5 ? "2370px" : "310px",
            marginLeft: isOpen5 ? "2%" : "23%",
          }}
        >
          <motion.div
            className="container-img-carreras"
            animate={{
              width: isOpen5 ? "282px" : "200px",
              height: isOpen5 ? "266px" : "170px",
              marginLeft: isOpen5 ? "18.5%" : "11.5%",
              marginTop: isOpen5 ? "6%" : "3%",
            }}
          >
            <motion.img
              src={artesGraficas}
              animate={{
                width: isOpen5 ? "257px" : "180px",
                height: isOpen5 ? "242px" : "150px",
              }}
            />
          </motion.div>
          <motion.div
            className="titulo-carrera"
            animate={{
              fontSize: isOpen5 ? "xx-large" : "large",
              paddingLeft: isOpen5 ? "58px" : "3px",
            }}
          >
            GRADO EN ARTES GRÁFICAS DIGITALES
          </motion.div>
          {isOpen5 && (
            <motion.div className="carrera-info">
              <motion.div className="tabla-incial-carrera">
                <div className="tabla-inicial-carrera-row">
                  <div>DURACIÓN: 3,5 AÑOS</div>
                  <div>CRÉDITOS: 210</div>
                </div>
                <div className="tabla-inicial-carrera-row">
                  <div>COMIENZO: AGOSTO </div>
                  <div>PLAZO DE SOLICITUD: FEBRERO</div>
                </div>
              </motion.div>
              <h2>DESCRIPCIÓN</h2>
              <p>
                La carrera de artes gráficas digitales se enfoca en áreas
                artísticas y técnicas de producción de películas de animación 2D
                y 3D. El objetivo es desarrollar artistas versátiles con una
                base sólida en la narración y el diseño, así como habilidades de
                animación 3D y otras que van más allá de la animación.
              </p>
              <p>
                El programa presenta los fundamentos de los gráficos digitales
                en 3D para su uso en videojuegos y películas. Los estudiantes
                obtendrán una comprensión de modelado, texturizado, iluminación
                y renderizado.
              </p>

              <h2>POSIBILIDAD DE ERASMUS O ESTANCIA EN EL EXTRANJERO</h2>
              <p>
                La carrera cuenta con muchas opciones para poder estudiar fuera
                durante un semestre. Podrás elegir entre más de 33 países y 200
                instituciones educativas, tanto dentro como fuera de Europa.
              </p>
              <p>
                También tienes la posibilidad de realizar las prácticas en el
                extranjero, en una empresa de tu elección.
              </p>

              <h2>REQUISITOS ACADÉMICOS</h2>
              <ul>
                <li>
                  Inglés:
                  <ul>
                    <li>
                      TOEFL: con una nota mínima de 83 puntos y una antigüedad
                      inferior a los dos años
                    </li>
                    <li>
                      IELTS: con una nota mínima de 6,5 y una antigüedad
                      inferior a los dos años
                    </li>
                    <li>
                      Cambridge: CAE con nivel A, B o C o bien FCE con nivel A
                    </li>
                    <li>
                      En el caso de haber cursado el Bachillerato Internacional
                      (IB) o IGCSEs + A Levels no es necesario demostrar tu
                      nivel de inglés mediante ninguno de estos exámenes
                      mencionados.
                    </li>
                  </ul>
                </li>
                <li>
                  Matemáticas: 375horas como mínimo curadas en los últimos 3
                  años.
                </li>
                <li>
                  Química: 150 horas como mínimo cursadas en los últimos 3 años
                  o Física: 150 horas como mínimo cursadas en los últimos 3 años
                </li>
              </ul>

              <h2>SALIDAS LABORALES</h2>
              <p>
                Esta carrera te abre las puertas para poder trabajar en el
                sector de la ingeniería térmica, consultoría a empresas de
                suministros, proyectos de prevención de inundaciones, proyectos
                en empresas de suministros y muchos más trabajos tanto en el
                sector público como privado. Si decides continuar tus estudios
                tienes la posibilidad de entrar en másteres relacionados con las
                industrias de las ingenierías de suministros, ingenierías
                energéticas o ciencias sostenibles.
              </p>
            </motion.div>
          )}
          <motion.div
            className="carrera-button"
            onClick={() => setIsOpen5(!isOpen5)}
            animate={{ marginLeft: isOpen5 ? "25.5%" : "11.5%",
            marginTop: isOpen4 ? "20%" : "3%", }}
          >
            INFORMACIÓN
          </motion.div>
        </motion.div>
        <motion.div
          className="tarjeta-carreras"
          animate={{
            width: isOpen6 ? "358px" : "260px",
            height: isOpen6 ? "2277px" : "310px",
            marginLeft: isOpen6 ? "2%" : "23%",
          }}
        >
          <motion.div
            className="container-img-carreras"
            animate={{
              width: isOpen6 ? "282px" : "200px",
              height: isOpen6 ? "266px" : "170px",
              marginLeft: isOpen6 ? "18.5%" : "11.5%",
              marginTop: isOpen6 ? "6%" : "3%",
            }}
          >
            <motion.img
              src={ingenieriaSoftware}
              animate={{
                width: isOpen6 ? "257px" : "180px",
                height: isOpen6 ? "242px" : "150px",
              }}
            />
          </motion.div>
          <motion.div
            className="titulo-carrera"
            animate={{
              fontSize: isOpen6 ? "xx-large" : "large",
              paddingLeft: isOpen6 ? "58px" : "3px",
            }}
          >
            GRADO EN INGENIERÍA TECNOLÓGICA DE SOFTWARE
          </motion.div>
          {isOpen6 && (
            <motion.div className="carrera-info">
              <motion.div className="tabla-incial-carrera">
                <div className="tabla-inicial-carrera-row">
                  <div>DURACIÓN: 3,5 AÑOS </div>
                  <div>CRÉDITOS: 210</div>
                </div>
                <div className="tabla-inicial-carrera-row">
                  <div>COMIENZO: AGOSTO </div>
                  <div>PLAZO DE SOLICITUD: FEBRERO</div>
                </div>
              </motion.div>
              <h2>DESCRIPCIÓN</h2>
              <p>
                En el grado de Ingeniería Tecnológica de Software, trabajarás
                con programación y desarrollo de sistemas. Obtendrás
                conocimientos relevantes que te preparará para trabajar en la
                industria de la ingeniería, por ejemplo en proyectos
                relacionados con la ciencia. Al mismo tiempo, obtendrás
                conocimientos especializados dentro del desarrollo de software,
                como ingeniería de datos, medios interactivos y el uso de
                internet en el día a día a lo largo del programa de estudio.
              </p>
              <h2>POSIBILIDAD DE ERASMUS O ESTANCIA EN EL EXTRANJERO</h2>

              <p>
                La carrera cuenta con muchas opciones para poder estudiar fuera
                durante un semestre. Podrás elegir entre más de 33 países y 200
                instituciones educativas, tanto dentro como fuera de Europa.
              </p>
              <p>
                También tienes la posibilidad de realizar las prácticas en el
                extranjero, en una empresa de tu elección.
              </p>
              <h2>REQUISITOS ACADÉMICOS</h2>
              <ul>
                <li>
                  Inglés:
                  <ul>
                    <li>
                      TOEFL: con una nota mínima de 83 puntos y una antigüedad
                      inferior a los dos años
                    </li>
                    <li>
                      IELTS: con una nota mínima de 6,5 y una antigüedad
                      inferior a los dos años.
                    </li>
                    <li>
                      Cambridge: CAE con nivel A, B o C o bien FCE con nivel A
                    </li>
                    <li>
                      En el caso de haber cursado el Bachillerato Internacional
                      (IB) o IGCSEs + A Levels no es necesario demostrar tu
                      nivel de inglés mediante ninguno de estos exámenes
                      mencionados.
                    </li>
                  </ul>
                </li>
                <li>
                  Matemáticas: 375horas como mínimo curadas en los últimos 3
                  años.
                </li>
                <li>
                  Física: 150 horas como mínimo cursadas en los últimos 3 años
                </li>
              </ul>
              <h2>SALIDAS LABORALES</h2>
              <p>
                Esta carrera te abre las puertas para poder trabajar en el
                sector de la energía, en compañías de telecomunicaciones o en
                empresas informáticas como desarrollador de software o director
                de proyectos de software. Si decides continuar tus estudios
                tienes la posibilidad de entrar en másteres relacionados con las
                industrias de las ingenierías tecnológicas, energéticas, etc.
              </p>
            </motion.div>
          )}
          <motion.div
            className="carrera-button"
            onClick={() => setIsOpen6(!isOpen6)}
            animate={{
              marginLeft: isOpen6 ? "25.5%" : "11.5%",
              marginTop: isOpen6 ? "20%" : "3%",
            }}
          >
            INFORMACIÓN
          </motion.div>
        </motion.div>
        <motion.div
          className="tarjeta-carreras"
          animate={{
            width: isOpen7 ? "358px" : "260px",
            height: isOpen7 ? "2277px" : "310px",
            marginLeft: isOpen7 ? "2%" : "23%",
          }}
        >
          <motion.div
            className="container-img-carreras"
            animate={{
              width: isOpen7 ? "282px" : "200px",
              height: isOpen7 ? "266px" : "170px",
              marginLeft: isOpen7 ? "18.5%" : "11.5%",
              marginTop: isOpen7 ? "6%" : "3%",
            }}
          >
            <motion.img
              src={ingenieriaElectronica}
              animate={{
                width: isOpen7 ? "257px" : "180px",
                height: isOpen7 ? "242px" : "150px",
              }}
            />
          </motion.div>
          <motion.div
            className="titulo-carrera"
            animate={{
              fontSize: isOpen7 ? "xx-large" : "large",
              paddingLeft: isOpen7 ? "58px" : "3px",
            }}
          >
            GRADO EN INGENIERÍA ELECTRÓNICA
          </motion.div>
          {isOpen7 && (
            <motion.div className="carrera-info">
              <motion.div className="tabla-incial-carrera">
                <div className="tabla-inicial-carrera-row">
                  <div>DURACIÓN: 3 AÑOS </div>
                  <div>CRÉDITOS:180</div>
                </div>
                <div className="tabla-inicial-carrera-row">
                  <div>COMIENZO: AGOSTO </div>
                  <div>PLAZO DE SOLICITUD: FEBRERO</div>
                </div>
              </motion.div>
              <h2>DESCRIPCIÓN</h2>
              <p>
                Durante la carrera de Ingeniería Electrónica, aprenderás a
                desarrollar productos electrónicos industriales y de consumo.
                Esto puede ser, por ejemplo, dentro de sistemas de energía
                renovable como turbinas eólicas y células solares, robots o
                electrónica para equipos médicos. Aprenderás sobre electrónica
                analógica y digital, así como el uso de herramientas de modelado
                y simulación como parte del proceso de desarrollo. También
                aprenderás a desarrollar software avanzado, que es esencial para
                las empresas danesas e internacionales.
              </p>

              <h2>POSIBILIDAD DE ERASMUS O ESTANCIA EN EL EXTRANJERO</h2>
              <p>
                La universidad anima a los estudiantes a realizar el quinto
                semestre en alguna universidad del extranjero para así poder
                coger habilidades y puntos de vista distintos. Esta estancia en
                el extranjero puede realizarse en Europa o en otras partes del
                mundo.
              </p>

              <h2>REQUISITOS ACADÉMICOS</h2>
              <ul>
                <li>
                  Inglés:
                  <ul>
                    <li>
                      TOEFL: con una nota mínima de 83 puntos y una antigüedad
                      inferior a los dos años
                    </li>
                    <li>
                      IELTS: con una nota mínima de 6,5 y una antigüedad
                      inferior a los dos años.
                    </li>
                    <li>
                      Cambridge: CAE con nivel A, B o C o bien FCE con nivel A
                    </li>
                    <li>
                      En el caso de haber cursado el Bachillerato Internacional
                      (IB) o IGCSEs + A Levels no es necesario demostrar tu
                      nivel de inglés mediante ninguno de estos exámenes
                      mencionados.
                    </li>
                  </ul>
                </li>
                <li>
                  Matemáticas: 375horas como mínimo curadas en los últimos 3
                  años.
                </li>
                <li>
                  Física: 200 horas como mínimo cursadas en los últimos 3 años
                </li>
                <li>
                  Examen de admisión optativo para tener más posibilidades de
                  admisión
                </li>
              </ul>
              <h2>SALIDAS LABORALES</h2>
              <p>
                Esta carrera te abre las puertas para poder trabajar en el
                sector de la energía, en sectores de control y automatización de
                procesos productivos, desarrollo de software, electrónica
                industrial, control de sistemas electrónicos o diseño de equipos
                médicos, entre otros. También puedes continuar tus estudios y
                realizar un máster de la rama de ingenierías electrónicas o
                informáticas.
              </p>
            </motion.div>
          )}
          <motion.div
            className="carrera-button"
            onClick={() => setIsOpen7(!isOpen7)}
            animate={{
              marginLeft: isOpen7 ? "25.5%" : "11.5%",
              marginTop: isOpen7 ? "20%" : "3%",
            }}
          >
            INFORMACIÓN
          </motion.div>
        </motion.div>
        <motion.div
          className="tarjeta-carreras"
          animate={{
            width: isOpen8 ? "358px" : "260px",
            height: isOpen8 ? "2277px" : "300px",
            marginLeft: isOpen8 ? "2%" : "23%",
          }}
        >
          <motion.div
            className="container-img-carreras"
            animate={{
              width: isOpen8 ? "282px" : "200px",
              height: isOpen8 ? "266px" : "170px",
              marginLeft: isOpen8 ? "18.5%" : "11.5%",
              marginTop: isOpen8 ? "6%" : "3%",
            }}
          >
            <motion.img
              src={ingenieriaMecanica}
              animate={{
                width: isOpen8 ? "257px" : "180px",
                height: isOpen8 ? "242px" : "150px",
              }}
            />
          </motion.div>
          <motion.div
            className="titulo-carrera"
            animate={{
              fontSize: isOpen8 ? "xx-large" : "large",
              paddingLeft: isOpen8 ? "58px" : "3px",
            }}
          >
            GRADO EN INGENIERÍA MECÁNICA
          </motion.div>
          {isOpen8 && (
            <motion.div className="carrera-info">
              <motion.div className="tabla-incial-carrera">
                <div className="tabla-inicial-carrera-row">
                  <div>DURACIÓN: 3 AÑOS</div>
                  <div>CRÉDITOS:180</div>
                </div>
                <div className="tabla-inicial-carrera-row">
                  <div>COMIENZO: AGOSTO </div>
                  <div>PLAZO DE SOLICITUD: FEBRERO</div>
                </div>
              </motion.div>
              <h2>DESCRIPCIÓN</h2>
              <p>
                Durante la carrera de Ingeniería Mecánica, aprenderás a resolver
                problemas concretos de manera innovadora, tomar la posición de
                director de proyectos para trabajos interdisciplinarios,
                resolver tareas complejas de desarrollo de ingeniería mecánica,
                diseñar productos, plantas y sistemas y mucho más. También
                aprenderás a desarrollar un diseño inteligente y fácil de usar,
                elegir los métodos de producción óptimos, calcular las
                condiciones de resistencia.
              </p>

              <h2>POSIBILIDAD DE ERASMUS O ESTANCIA EN EL EXTRANJERO</h2>
              <p>
                La universidad anima a los estudiantes a realizar el quinto
                semestre en alguna universidad del extranjero para así poder
                coger habilidades y puntos de vista distintos. Esta estancia en
                el extranjero puede realizarse en Europa o en otras partes del
                mundo.
              </p>
              <h2>REQUISITOS ACADÉMICOS</h2>
              <ul>
                <li>
                  Ingles:
                  <ul>
                    <li>
                      TOEFL: con una nota mínima de 83 puntos y una antigüedad
                      inferior a los dos años
                    </li>
                    <li>
                      IELTS: con una nota mínima de 6,5 y una antigüedad
                      inferior a los dos años.
                    </li>
                    <li>
                      Cambridge: CAE con nivel A, B o C o bien FCE con nivel A
                    </li>
                    <li>
                      En el caso de haber cursado el Bachillerato Internacional
                      (IB) o IGCSEs + A Levels no es necesario demostrar tu
                      nivel de inglés mediante ninguno de estos exámenes
                      mencionados
                    </li>
                  </ul>
                </li>
                <li>
                  Matemáticas: 375horas como mínimo curadas en los últimos 3
                  años.
                </li>
                <li>
                  Física: 200 horas como mínimo cursadas en los últimos 3 años
                </li>
                <li>
                  Examen de admisión optativo para tener más posibilidades de
                  admisión
                </li>
              </ul>

              <h2>SALIDAS LABORALES</h2>
              <p>
                Esta carrera te abre las puertas para poder trabajar en el
                sector de la energía, en sectores de control y dirección, como
                jefe de proyectos, desarrollo de productos o ingeniero de
                desarrollo. Podrás acceder a puestos de trabajo tanto en el
                sector público como el privado. También podrás continuar tus
                estudios y realizar un máster en el sector ingeniero.
              </p>
            </motion.div>
          )}
          <motion.div
            className="carrera-button"
            onClick={() => setIsOpen8(!isOpen8)}
            animate={{
              marginLeft: isOpen8 ? "25.5%" : "11.5%",
              marginTop: isOpen8 ? "30%" : "3%",
            }}
          >
            INFORMACIÓN
          </motion.div>
        </motion.div>
        <motion.div
          className="tarjeta-carreras"
          animate={{
            width: isOpen9 ? "358px" : "260px",
            height: isOpen9 ? "2350px" : "300px",
            marginLeft: isOpen9 ? "2%" : "23%",
          }}
        >
          <motion.div
            className="container-img-carreras"
            animate={{
              width: isOpen9 ? "282px" : "200px",
              height: isOpen9 ? "266px" : "170px",
              marginLeft: isOpen9 ? "18.5%" : "11.5%",
              marginTop: isOpen9 ? "6%" : "3%",
            }}
          >
            <motion.img
              src={ingenieriaMecatronica}
              animate={{
                width: isOpen9 ? "257px" : "180px",
                height: isOpen9 ? "242px" : "150px",
              }}
            />
          </motion.div>
          <motion.div
            className="titulo-carrera"
            animate={{
              fontSize: isOpen9 ? "xx-large" : "large",
              paddingLeft: isOpen9 ? "58px" : "3px",
            }}
          >
            GRADO EN INGENIERÍA MECATRÓNICA
          </motion.div>
          {isOpen9 && (
            <motion.div className="carrera-info">
              <motion.div className="tabla-incial-carrera">
                <div className="tabla-inicial-carrera-row">
                  <div>DURACIÓN: 3 AÑOS</div>
                  <div>CRÉDITOS:180</div>
                </div>
                <div className="tabla-inicial-carrera-row">
                  <div>COMIENZO: AGOSTO </div>
                  <div>PLAZO DE SOLICITUD: FEBRERO</div>
                </div>
              </motion.div>
              <h2>DESCRIPCIÓN</h2>
              <p>
                Durante la carrera de Ingeniería Mecatrónica aprenderás a
                desarrollar productos de alta tecnología. A través del trabajo
                en proyectos, adquirirás competencias en muchas áreas del
                desarrollo de productos, incluido el diseño técnico, la
                producción y la gestión de proyectos. Durante el programa,
                tendrás la oportunidad de especializarte en una de las tres
                áreas temáticas (mecánica, electrónica o sistemas integrados) a
                través de asignaturas optativas y con el trabajo de final de
                grado.
              </p>

              <h2>POSIBILIDAD DE ERASMUS O ESTANCIA EN EL EXTRANJERO</h2>
              <p>
                La universidad anima a los estudiantes a realizar el quinto
                semestre en alguna universidad del extranjero para así poder
                coger habilidades y puntos de vista distintos. Esta estancia en
                el extranjero puede realizarse en Europa o en otras partes del
                mundo.
              </p>

              <h2>REQUISITOS ACADÉMICOS</h2>
              <ul>
                <li>
                  Inglés:
                  <ul>
                    <li>
                      TOEFL: con una nota mínima de 83 puntos y una antigüedad
                      inferior a los dos años
                    </li>
                    <li>
                      IELTS: con una nota mínima de 6,5 y una antigüedad
                      inferior a los dos años
                    </li>
                    <li>
                      Cambridge: CAE con nivel A, B o C o bien FCE con nivel A
                    </li>
                    <li>
                      En el caso de haber cursado el Bachillerato Internacional
                      (IB) o IGCSEs + A Levels no es necesario demostrar tu
                      nivel de inglés mediante ninguno de estos exámenes
                      mencionados.
                    </li>
                  </ul>
                </li>
                <li>
                  Matemáticas: 375horas como mínimo curadas en los últimos 3
                  años.
                </li>
                <li>
                  Física: 200 horas como mínimo cursadas en los últimos 3 años
                </li>
                <li>
                  Examen de admisión optativo para tener más posibilidades de
                  admisión
                </li>
              </ul>

              <h2>SALIDAS LABORALES</h2>
              <p>
                Al graduarse de la carrera de Ingeniería Mecatrónica, muchos
                alumnos trabajan en empresas que desarrollan productos
                inteligentes con un contenido tecnológico significativo. Por
                ejemplo, tú podrás trabajar como ingeniero de desarrollo,
                gerente de proyectos, consultor, emprendedor, docente o
                investigador. Si quieres continuar tu vida académica, puedes
                continuar realizando un máster en algún campo de la ingeniería,
                como puede ser un máster en Cyber Sistemas y Ciberseguridad.
              </p>
            </motion.div>
          )}
          <motion.div
            className="carrera-button"
            onClick={() => setIsOpen9(!isOpen9)}
            animate={{
              marginLeft: isOpen9 ? "25.5%" : "11.5%",
              marginTop: isOpen9 ? "20%" : "3%",
            }}
          >
            INFORMACIÓN
          </motion.div>
        </motion.div>
        <motion.div
          className="tarjeta-carreras"
          animate={{
            width: isOpen10 ? "358px" : "260px",
            height: isOpen10 ? "2377px" : "300px",
            marginLeft: isOpen10 ? "2%" : "23%",
          }}
        >
          <motion.div
            className="container-img-carreras"
            animate={{
              width: isOpen10 ? "282px" : "200px",
              height: isOpen10 ? "266px" : "170px",
              marginLeft: isOpen10 ? "18.5%" : "11.5%",
              marginTop: isOpen10 ? "6%" : "3%",
            }}
          >
            <motion.img
              src={ingenieriaIN}
              animate={{
                width: isOpen10 ? "257px" : "180px",
                height: isOpen10 ? "242px" : "150px",
              }}
            />
          </motion.div>
          <motion.div
            className="titulo-carrera"
            animate={{
              fontSize: isOpen10 ? "xx-large" : "large",
              paddingLeft: isOpen10 ? "58px" : "3px",
            }}
          >
            GRADO EN INGENIERÍA, INNOVACIÓN Y NEGOCIOS
          </motion.div>
          {isOpen10 && (
            <motion.div className="carrera-info">
              <motion.div className="tabla-incial-carrera">
                <div className="tabla-inicial-carrera-row">
                  <div>DURACIÓN: 3 AÑOS </div>
                  <div>CRÉDITOS:180</div>
                </div>
                <div className="tabla-inicial-carrera-row">
                  <div>COMIENZO: AGOSTO</div>
                  <div>PLAZO DE SOLICITUD: FEBRERO</div>
                </div>
              </motion.div>
              <h2>DESCRIPCIÓN</h2>
              <p>
                Durante el grado de Ingeniería, Innovación y Negocios,
                trabajarás con simulación, realidad virtual y otras tecnologías
                que pueden incluirse en la optimización de, por ejemplo, una
                fábrica inteligente en un futuro cercano o en la creación del
                próximo gadget o solución que pueda resolver algunos de los
                retos a los que nos enfrentamos como sociedad.
              </p>
              <h2>POSIBILIDAD DE ERASMUS O ESTANCIA EN EL EXTRANJERO</h2>
              <p>
                La universidad anima a los estudiantes a realizar el quinto
                semestre en alguna universidad del extranjero para así poder
                coger habilidades y puntos de vista distintos. Esta estancia en
                el extranjero puede realizarse en Europa o en otras partes del
                mundo.
              </p>

              <h2>REQUISITOS ACADÉMICOS</h2>
              <ul>
                <li>
                  Ingles:
                  <ul>
                    <li>
                      TOEFL: con una nota mínima de 83 puntos y una antigüedad
                      inferior a los dos años
                    </li>
                    <li>
                      IELTS: con una nota mínima de 6,5 y una antigüedad
                      inferior a los dos años
                    </li>
                    <li>
                      Cambridge: CAE con nivel A, B o C o bien FCE con nivel A
                    </li>
                    <li>
                      En el caso de haber cursado el Bachillerato Internacional
                      (IB) o IGCSEs + A Levels no es necesario demostrar tu
                      nivel de inglés mediante ninguno de estos exámenes
                      mencionados
                    </li>
                  </ul>
                </li>
                <li>
                  Matemáticas: 375horas como mínimo curadas en los últimos 3
                  años.
                </li>
                <li>
                  Física: 200 horas como mínimo cursadas en los últimos 3 años
                </li>
                <li>
                  Examen de admisión optativo para tener más posibilidades de
                  admisión
                </li>
              </ul>

              <h2>SALIDAS LABORALES</h2>
              <p>
                Al graduarse de la carrera de Ingeniería, Innovación y Negocios,
                muchos alumnos trabajan en empresas en puestos relacionados con
                el desarrollo empresarial, la innovación o el marketing. Por
                ejemplo, tú podrás trabajar como ingeniero de desarrollo,
                gerente de proyectos, consultor, ingeniero de estrategia
                empresarial o en la investigación. Si quieres continuar tu vida
                académica, puedes continuar realizando el máster de Ingeniería,
                Innovación y Negocios o uno relacionado con campo de la
                ingeniería o negocios, como puede ser el máster de Supply Chain.
              </p>
            </motion.div>
          )}
          <motion.div
            className="carrera-button"
            onClick={() => setIsOpen10(!isOpen10)}
            animate={{
              marginLeft: isOpen10 ? "25.5%" : "11.5%",
              marginTop: isOpen10 ? "30%" : "3%",
            }}
          >
            INFORMACIÓN
          </motion.div>
        </motion.div>
        <motion.div
          className="tarjeta-carreras"
          animate={{
            width: isOpen11 ? "358px" : "260px",
            height: isOpen11 ? "2677px" : "300px",
            marginLeft: isOpen11 ? "2%" : "23%",
          }}
        >
          <motion.div
            className="container-img-carreras"
            animate={{
              width: isOpen11 ? "282px" : "200px",
              height: isOpen11 ? "266px" : "170px",
              marginLeft: isOpen11 ? "18.5%" : "11.5%",
              marginTop: isOpen11 ? "6%" : "3%",
            }}
          >
            <motion.img
              src={ingenieriaGeneral}
              animate={{
                width: isOpen11 ? "257px" : "180px",
                height: isOpen11 ? "242px" : "150px",
              }}
            />
          </motion.div>
          <motion.div
            className="titulo-carrera"
            animate={{
              fontSize: isOpen11 ? "xx-large" : "large",
              paddingLeft: isOpen11 ? "58px" : "3px",
            }}
          >
            GRADO EN INGENIERÍA GENERAL
          </motion.div>
          {isOpen11 && (
            <motion.div className="carrera-info">
              <motion.div className="tabla-incial-carrera">
                <div className="tabla-inicial-carrera-row">
                  <div>DURACIÓN: 3 AÑOS</div>
                  <div>CRÉDITOS:180</div>
                </div>
                <div className="tabla-inicial-carrera-row">
                  <div>COMIENZO: AGOSTO </div>
                  <div>PLAZO DE SOLICITUD: FEBRERO</div>
                </div>
              </motion.div>
              <h2>DESCRIPCIÓN</h2>
              <p>
                En la carrera de Ingeniería General el primer año consiste en
                asignaturas obligatorias. El énfasis está en los cursos básicos
                de ciencias naturales: matemáticas, física y química con un
                sesgo técnico. Las asignaturas del tercer y cuarto semestre te
                podrás especializar en dos de las cuatro áreas de enfoque del
                programa y en los semestres siguientes elegirás uno para
                especializarte en más profundidad.
              </p>

              <h2>POSIBILIDAD DE ERASMUS O ESTANCIA EN EL EXTRANJERO</h2>
              <p>
                La universidad anima a los estudiantes a realizar el quinto
                semestre en alguna universidad del extranjero para así poder
                coger habilidades y puntos de vista distintos. Esta estancia en
                el extranjero puede realizarse en Europa o en otras partes del
                mundo. La estancia en el extranjero no se limita sólo a estancia
                académica, también puedes realizar prácticas en alguna empresa
                alrededor del mundo.
              </p>
              <h2>RAMAS DE ESPECIALIZACIÓN</h2>
              <p>
                Durante la carrera tendrás que elegir una de las 4
                especialidades que serán el 50% del programa:
              </p>
              <ul>
                <li>
                  Sistemas vivos - ecología, biología molecular, biología
                  marina...
                </li>
                <li>
                  Cyber sistemas - análisis de datos, programación, software ...
                </li>
                <li>
                  Energías verdes - ecología, energía solar, cambio climático
                  ...
                </li>
                <li>Materiales - física, química, nanobiologia ...</li>
              </ul>

              <h2>REQUISITOS ACADÉMICOS</h2>
              <ul>
                <li>
                  Inglés:
                  <ul>
                    <li>
                      TOEFL: con una nota mínima de 83 puntos y una antigüedad
                      inferior a los dos años
                    </li>
                    <li>
                      IELTS: con una nota mínima de 6,5 y una antigüedad
                      inferior a los dos años.
                    </li>
                    <li>
                      Cambridge: CAE con nivel A, B o C o bien FCE con nivel A
                    </li>
                    <li>
                      En el caso de haber cursado el Bachillerato Internacional
                      (IB) o IGCSEs + A Levels no es necesario demostrar tu
                      nivel de inglés mediante ninguno de estos exámenes
                      mencionados
                    </li>
                  </ul>
                </li>
                <li>
                  Matemáticas: 375horas como mínimo curadas en los últimos 3
                  años.
                </li>
                <li>
                  Física: 200 horas como mínimo cursadas en los últimos 3 años
                </li>
              </ul>

              <h2>SALIDAS LABORALES</h2>
              <p>
                Al graduarte de la carrera de Ingeniería, Innovación y Negocios
                podrás entrar en el mundo laboral con trabajos relacionados con
                tu rama de especialización. Si decides continuar tus estudios y
                realizar un máster después de la carrera de Ingeniería General,
                tendrás opción de acceder a más de 25 programas, como
                Inteligencia y Analítica de Negocios, Biotecnología, Ingeniería
                de los Alimentos, Inteligencia Artificial, Ciencias Acuáticas,
                Ingeniería Petrolífera y muchos más.
              </p>
            </motion.div>
          )}
          <motion.div
            className="carrera-button"
            onClick={() => setIsOpen11(!isOpen11)}
            animate={{
              marginLeft: isOpen11 ? "25.5%" : "11.5%",
              marginTop: isOpen11 ? "20%" : "3%",
            }}
          >
            INFORMACIÓN
          </motion.div>
        </motion.div>
        <motion.div
          className="tarjeta-carreras"
          animate={{
            width: isOpen12 ? "358px" : "260px",
            height: isOpen12 ? "2277px" : "300px",
            marginLeft: isOpen12 ? "2%" : "23%",
          }}
        >
          <motion.div
            className="container-img-carreras"
            animate={{
              width: isOpen12 ? "282px" : "200px",
              height: isOpen12 ? "266px" : "170px",
              marginLeft: isOpen12 ? "18.5%" : "11.5%",
              marginTop: isOpen12 ? "6%" : "3%",
            }}
          >
            <motion.img
              src={electronicaIndustrial}
              animate={{
                width: isOpen12 ? "257px" : "180px",
                height: isOpen12 ? "242px" : "150px",
              }}
            />
          </motion.div>
          <motion.div
            className="titulo-carrera"
            animate={{
              fontSize: isOpen12 ? "xx-large" : "large",
              paddingLeft: isOpen12 ? "58px" : "3px",
            }}
          >
            GRADO EN ELECTRÓNICA INDUSTRIAL
          </motion.div>
          {isOpen12 && (
            <motion.div className="carrera-info">
              <motion.div className="tabla-incial-carrera">
                <div className="tabla-inicial-carrera-row">
                  <div>DURACIÓN: 3 AÑOS</div>
                  <div>CRÉDITOS:180</div>
                </div>
                <div className="tabla-inicial-carrera-row">
                  <div>COMIENZO: AGOSTO </div>
                  <div>PLAZO DE SOLICITUD: FEBRERO</div>
                </div>
              </motion.div>
              <h2>DESCRIPCIÓN</h2>
              <p>
                El grado en Electrónica Industrial te prepara para trabajar como
                ingeniero electrónico. En el programa, aprenderás cómo funcionan
                los convertidores electrónicos de potencia y las máquinas
                eléctricas y cómo diseñar y controlar robots. Por ejemplo,
                tendrás la oportunidad de trabajar en proyectos con vehículos
                aéreos no tripulados y robots submarinos o desarrollar
                algoritmos de control para turbinas eólicas. Durante el
                programa, aprenderás sobre sistemas integrados y sobre
                computadoras y programación, y sobre procesamiento de señales,
                instrumentación, automatización y sobre mecatrónica y robots.
              </p>

              <h2>POSIBILIDAD DE ERASMUS O ESTANCIA EN EL EXTRANJERO</h2>
              <p>
                La universidad anima a los estudiantes a realizar el quinto
                semestre en alguna universidad del extranjero para así poder
                coger habilidades y puntos de vista distintos. Esta estancia en
                el extranjero puede realizarse en Europa o en otras partes del
                mundo.
              </p>

              <h2>REQUISITOS ACADÉMICOS</h2>
              <ul>
                <li>
                  Inglés:
                  <ul>
                    <li>
                      TOEFL: con una nota mínima de 83 puntos y una antigüedad
                      inferior a los dos años
                    </li>
                    <li>
                      IELTS: con una nota mínima de 6,5 y una antigüedad
                      inferior a los dos años.
                    </li>
                    <li>
                      Cambridge: CAE con nivel A, B o C o bien FCE con nivel A
                    </li>
                    <li>
                      En el caso de haber cursado el Bachillerato Internacional
                      (IB) o IGCSEs + A Levels no es necesario demostrar tu
                      nivel de inglés mediante ninguno de estos exámenes
                      mencionados
                    </li>
                  </ul>
                </li>
                <li>
                  Matemáticas: 375horas como mínimo curadas en los últimos 3
                  años.
                </li>
                <li>
                  Física: 200 horas como mínimo cursadas en los últimos 3 años
                </li>
              </ul>

              <h2>SALIDAS LABORALES</h2>
              <p>
                Al graduarte de la carrera de Electrónica Industrial podrás
                trabajar en el sector energético o en la industria petrolífera,
                por ejemplo. Si decides continuar tus estudios y realizar un
                máster después de la carrera, puedes acceder a másteres
                relacionados con la ingeniería, la ingeniería electrónica o
                ingenierías de energía.
              </p>
            </motion.div>
          )}
          <motion.div
            className="carrera-button"
            onClick={() => setIsOpen12(!isOpen12)}
            animate={{
              marginLeft: isOpen12 ? "25.5%" : "11.5%",
              marginTop: isOpen12 ? "20%" : "3%",
            }}
          >
            INFORMACIÓN
          </motion.div>
        </motion.div>
        <motion.div
          className="tarjeta-carreras"
          animate={{
            width: isOpen13 ? "358px" : "260px",
            height: isOpen13 ? "2377px" : "300px",
            marginLeft: isOpen13 ? "2%" : "23%",
          }}
        >
          <motion.div
            className="container-img-carreras"
            animate={{
              width: isOpen13 ? "282px" : "200px",
              height: isOpen13 ? "266px" : "170px",
              marginLeft: isOpen13 ? "18.5%" : "11.5%",
              marginTop: isOpen13 ? "6%" : "3%",
            }}
          >
            <motion.img
              src={ingenieriaQuimica}
              animate={{
                width: isOpen13 ? "257px" : "180px",
                height: isOpen13 ? "242px" : "150px",
              }}
            />
          </motion.div>
          <motion.div
            className="titulo-carrera"
            animate={{
              fontSize: isOpen13 ? "xx-large" : "large",
              paddingLeft: isOpen13 ? "58px" : "3px",
            }}
          >
            GRADO EN INGENIERÍA QUÍMICA
          </motion.div>
          {isOpen13 && (
            <motion.div className="carrera-info">
              <motion.div className="tabla-incial-carrera">
                <div className="tabla-inicial-carrera-row">
                  <div>DURACIÓN: 3 AÑOS </div>
                  <div>CRÉDITOS:180</div>
                </div>
                <div className="tabla-inicial-carrera-row">
                  <div>COMIENZO: AGOSTO </div>
                  <div>PLAZO DE SOLICITUD: FEBRERO</div>
                </div>
              </motion.div>
              <h2>DESCRIPCIÓN</h2>
              <p>
                Como estudiante de la carrera de Ingeniería Química, trabajarás
                con química aplicada, es decir, no solo trabajarás con cálculos
                teóricos y simulación de modelos, sino también con temas
                actuales de la industria. En todos los aspectos del programa, la
                atención se centra en convertir el conocimiento teórico en
                aplicaciones útiles para la resolución de problemas prácticos.
                Las clases se dividen en secciones de teoría y secciones de
                práctica en laboratorio. El aprendizaje basado en problemas y
                trabajos en grupo durante el programa de estudios te brindarán
                muchas habilidades útiles que te convertirán en un candidato
                atractivo en el mercado laboral.
              </p>

              <h2>POSIBILIDAD DE ERASMUS O ESTANCIA EN EL EXTRANJERO</h2>
              <p>
                La universidad anima a los estudiantes a realizar el quinto
                semestre en alguna universidad del extranjero para así poder
                coger habilidades y puntos de vista distintos. Esta estancia en
                el extranjero puede realizarse en Europa o en otras partes del
                mundo.
              </p>

              <h2>REQUISITOS ACADÉMICOS</h2>
              <ul>
                <li>
                  Inglés:
                  <ul>
                    <li>
                      TOEFL: con una nota mínima de 83 puntos y una antigüedad
                      inferior a los dos años
                    </li>
                    <li>
                      IELTS: con una nota mínima de 6,5 y una antigüedad
                      inferior a los dos años.
                    </li>
                    <li>
                      Cambridge: CAE con nivel A, B o C o bien FCE con nivel A
                    </li>
                    <li>
                      En el caso de haber cursado el Bachillerato Internacional
                      (IB) o IGCSEs + A Levels no es necesario demostrar tu
                      nivel de inglés mediante ninguno de estos exámenes
                      mencionados.
                    </li>
                  </ul>
                </li>
                <li>
                  Matemáticas: 375horas como mínimo curadas en los últimos 3
                  años.
                </li>
                <li>
                  Física: 200 horas como mínimo cursadas en los últimos 3 años
                </li>
                <li>
                  Química: 200horas como mínimo cursadas en los últimos 3 años
                </li>
              </ul>

              <h2>SALIDAS LABORALES</h2>
              <p>
                Al graduarte de la carrera de Electrónica Industrial podrás
                trabajar en la industria farmacéutica o en la industria
                petrolífera, por ejemplo. Si decides continuar tus estudios y
                realizar un máster después de la carrera, puedes acceder a
                másteres relacionados con la ingeniería química, la ingeniería
                biotecnológica o la nano ciencia.
              </p>
            </motion.div>
          )}
          <motion.div
            className="carrera-button"
            onClick={() => setIsOpen13(!isOpen13)}
            animate={{
              marginLeft: isOpen13 ? "25.5%" : "11.5%",
              marginTop: isOpen13 ? "20%" : "3%",
            }}
          >
            INFORMACIÓN
          </motion.div>
        </motion.div>
        <motion.div
          className="tarjeta-carreras"
          animate={{
            width: isOpen14 ? "358px" : "260px",
            height: isOpen14 ? "2377px" : "300px",
            marginLeft: isOpen14 ? "2%" : "23%",
          }}
        >
          <motion.div
            className="container-img-carreras"
            animate={{
              width: isOpen14 ? "282px" : "200px",
              height: isOpen14 ? "266px" : "170px",
              marginLeft: isOpen14 ? "18.5%" : "11.5%",
              marginTop: isOpen14 ? "6%" : "3%",
            }}
          >
            <motion.img
              src={pCienciasNaturales}
              animate={{
                width: isOpen14 ? "257px" : "180px",
                height: isOpen14 ? "242px" : "150px",
              }}
            />
          </motion.div>
          <motion.div
            className="titulo-carrera"
            animate={{
              fontSize: isOpen14 ? "xx-large" : "large",
              paddingLeft: isOpen14 ? "58px" : "3px",
            }}
          >
            GRADO PERSONALIZADO DE CIENCIAS NATURALES
          </motion.div>
          {isOpen14 && (
            <motion.div className="carrera-info">
              <motion.div className="tabla-incial-carrera">
                <div className="tabla-inicial-carrera-row">
                  <div>DURACIÓN: 3 AÑOS</div>
                  <div>CRÉDITOS:180</div>
                </div>
                <div className="tabla-inicial-carrera-row">
                  <div>COMIENZO: AGOSTO </div>
                  <div>PLAZO DE SOLICITUD: FEBRERO</div>
                </div>
              </motion.div>
              <h2>DESCRIPCIÓN</h2>
              <p>
                El grado Personalizado en Ciencias de la Naturaleza es tu grado
                ideal si sabes que tu futuro está en la rama científica, pero
                aún no tienes clara la especialización o si tu pasión son dos
                sectores científicos y no quieres prescindir de ninguno. Esta
                carrera es una carrera personalizable al 100% donde cursarán
                solamente 4 asignaturas obligatorias y el resto serán decididas
                por ti. Durante esta carrera tendrás que elegir dos
                especialidades, una de ellas será tu foco principal en segundo
                año (optativa específica I)y la otra durante tercero (optativa
                específica II). Durante el primer curso tendrás la posibilidad
                de cursar asignaturas de todas las especialidades (optativa
                general)para así estar seguro de hacia qué rama te quieres
                enfocar.
              </p>

              <h2>RAMAS DE ESPECIALIZACIÓN</h2>
              <p>
                En el grado personalizado de ciencias naturales tendrás que
                elegir 2 especialidades para así diseñar tu programa académico.
                Las especialidades a elegir son:
              </p>
              <ul>
                <li>Bioprocesos científicos</li>
                <li>Química</li>
                <li>Informática</li>
                <li>Biología medioambiental</li>
                <li>Matemáticas</li>
                <li>Física</li>
              </ul>

              <h2>REQUISITOS ACADÉMICOS</h2>
              <ul>
                <li>
                  Inglés:
                  <ul>
                    <li>
                      TOEFL: con una nota mínima de 83 puntos y una antigüedad
                      inferior a los dos años
                    </li>
                    <li>
                      IELTS: con una nota mínima de 6,5 y una antigüedad
                      inferior a los dos años.
                    </li>
                    <li>
                      Cambridge: CAE con nivel A, B o C o bien FCE con nivel A
                    </li>
                    <li>
                      En el caso de haber cursado el Bachillerato Internacional
                      (IB) o IGCSEs + A Levels no es necesario demostrar tu
                      nivel de inglés mediante ninguno de estos exámenes
                      mencionados.
                    </li>
                  </ul>
                </li>
                <li>
                  Matemáticas: 375horas como mínimo curadas en los últimos 3
                  años.
                </li>
                <li>
                  Física: 200 horas como mínimo cursadas en los últimos 3 años
                </li>
                <li>
                  Química: 200horas como mínimo cursadas en los últimos 3 años
                </li>
              </ul>

              <h2>SALIDAS LABORALES</h2>
              <p>
                Al ser una carrera totalmente personalizable, las salidas
                laborables dependerán de las especialidades que hayas escogido.
                Si decides querer expandir tus conocimientos y cursar un máster,
                podrás acceder a másteres relacionados con tus especialidades.
              </p>
            </motion.div>
          )}
          <motion.div
            className="carrera-button"
            onClick={() => setIsOpen14(!isOpen14)}
            animate={{ marginLeft: isOpen14 ? "25.5%" : "11.5%",
            marginTop: isOpen14 ? "15%" : "3%", }}
          >
            INFORMACIÓN
          </motion.div>
        </motion.div>
        <motion.div
          className="tarjeta-carreras"
          animate={{
            width: isOpen15 ? "358px" : "260px",
            height: isOpen15 ? "2050px" : "320px",
            marginLeft: isOpen15 ? "2%" : "23%",
          }}
        >
          <motion.div
            className="container-img-carreras"
            animate={{
              width: isOpen15 ? "282px" : "200px",
              height: isOpen15 ? "266px" : "170px",
              marginLeft: isOpen15 ? "18.5%" : "11.5%",
              marginTop: isOpen15 ? "6%" : "3%",
            }}
          >
            <motion.img
              src={ingenieriaQB}
              animate={{
                width: isOpen15 ? "257px" : "180px",
                height: isOpen15 ? "242px" : "150px",
              }}
            />
          </motion.div>
          <motion.div
            className="titulo-carrera"
            animate={{
              fontSize: isOpen15 ? "x-large" : "large",
              paddingLeft: isOpen15 ? "58px" : "3px",
            }}
          >
            GRADO EN INGENIERÍA QUÍMICA Y BIOTECNOLÓGICA
          </motion.div>
          {isOpen15 && (
            <motion.div className="carrera-info">
              <motion.div className="tabla-incial-carrera">
                <div className="tabla-inicial-carrera-row">
                  <div>DURACIÓN: 3,5 AÑOS</div>
                  <div>CREDITOS: 210</div>
                </div>
                <div className="tabla-inicial-carrera-row">
                  <div>COMIENZO: AGOSTO </div>
                  <div>PLAZO DE SOLICITUD: FEBRERO</div>
                </div>
              </motion.div>
              <h2>DESCRIPCIÓN</h2>
              <p>
                Al estudiar el grado de Ingeniería Química y Biotecnológica,
                participarás en el desarrollo de procesos y productos necesarios
                para hacer sostenible nuestra existencia en el planeta. Se
                necesitan nuevos descubrimientos tecnológicos en el tratamiento
                del agua y la protección del medio ambiente para prevenir los
                impactos de nuestras actividades. Como ingeniero en química y
                biotecnología, obtendrás las habilidades y competencias para
                desarrollar y diseñar procesos que resuelvan los desafíos
                sociales.
              </p>

              <h2>REQUISITOS ACADÉMICOS</h2>
              <ul>
                <li>
                  Inglés:
                  <ul>
                    <li>
                      TOEFL: con una nota mínima de 83 puntos y una antigüedad
                      inferior a los dos años
                    </li>
                    <li>
                      IELTS: con una nota mínima de 6,5 y una antigüedad
                      inferior a los dos años.
                    </li>
                    <li>
                      Cambridge: CAE con nivel A, B o C o bien FCE con nivel A
                    </li>
                    <li>
                      En el caso de haber cursado el Bachillerato Internacional
                      (IB) o IGCSEs + A Levels no es necesario demostrar tu
                      nivel de inglés mediante ninguno de estos exámenes
                      mencionados.
                    </li>
                  </ul>
                </li>
                <li>
                  Matemáticas: 375horas como mínimo curadas en los últimos 3
                  años.
                </li>
                <li>
                  Física: 200 horas como mínimo cursadas en los últimos 3 años
                </li>
                <li>
                  Química: 200 horas como mínimo cursadas en los últimos 3 años
                </li>
              </ul>

              <h2>SALIDAS LABORALES</h2>
              <p>
                Esta carrera te abre las puertas para poder trabajar en
                posiciones como ingeniero de calidad, control y calidad de
                procesos, desarrollo de procesos productivos, en la industria
                fármaca o en investigación.
              </p>
              <p>
                Si decides continuar tus estudios tienes la posibilidad de
                entrar en másteres relacionados con la química, biotecnología,
                nano ciencia y muchas más posibilidades.
              </p>
            </motion.div>
          )}
          <motion.div
            className="carrera-button"
            onClick={() => setIsOpen15(!isOpen15)}
            animate={{ marginLeft: isOpen15 ? "25.5%" : "11.5%",
            marginTop: isOpen15 ? "20%" : "3%", }}
          >
            INFORMACIÓN
          </motion.div>
        </motion.div>
        <motion.div
          className="tarjeta-carreras"
          animate={{
            width: isOpen16 ? "358px" : "260px",
            height: isOpen16 ? "2180px" : "300px",
            marginLeft: isOpen16 ? "2%" : "23%",
          }}
        >
          <motion.div
            className="container-img-carreras"
            animate={{
              width: isOpen16 ? "282px" : "200px",
              height: isOpen16 ? "266px" : "170px",
              marginLeft: isOpen16 ? "18.5%" : "11.5%",
              marginTop: isOpen16 ? "6%" : "3%",
            }}
          >
            <motion.img
              src={cienciaDatos}
              animate={{
                width: isOpen16 ? "257px" : "180px",
                height: isOpen16 ? "242px" : "150px",
              }}
            />
          </motion.div>
          <motion.div
            className="titulo-carrera"
            animate={{
              fontSize: isOpen16 ? "xx-large" : "large",
              paddingLeft: isOpen16 ? "58px" : "3px",
            }}
          >
            GRADO EN CIENCIA DE DATOS
          </motion.div>
          {isOpen16 && (
            <motion.div className="carrera-info">
              <motion.div className="tabla-incial-carrera">
                <div className="tabla-inicial-carrera-row">
                  <div>DURACIÓN: 3 AÑOS </div>
                  <div>CRÉDITOS:180</div>
                </div>
                <div className="tabla-inicial-carrera-row">
                  <div>COMIENZO: AGOSTO</div>
                  <div>PLAZO DE SOLICITUD: FEBRERO</div>
                </div>
              </motion.div>
              <h2>DESCRIPCIÓN</h2>
              <p>
                Con el grado en Ciencia de Datos, te convertirás en un analista
                de datos: un científico de datos con habilidades analíticas y
                técnicas integrales que cubren todos los aspectos del manejo y
                análisis de datos. Al obtener información clave de los datos,
                estarás impulsando la toma de decisiones del futuro. Aprenderás
                a trabajar en equipos interdisciplinarios y no solo entenderás
                grandes cantidades de datos, sino que también utilizarás tu
                conocimiento organizacional y comprensión del mercado para
                marcar la diferencia a las empresas con las que trabajes.
              </p>

              <h2>POSIBILIDAD DE ERASMUS O ESTANCIA EN EL EXTRANJERO</h2>

              <p>
                La universidad anima a los estudiantes a realizar el quinto
                semestre en alguna universidad del extranjero para así poder
                coger habilidades y puntos de vista distintos. Esta estancia en
                el extranjero puede realizarse en Europa o en otras partes del
                mundo.
              </p>

              <h2>REQUISITOS ACADÉMICOS</h2>
              <ul>
                <li>
                  Inglés:
                  <ul>
                    <li>
                      TOEFL: con una nota mínima de 83 puntos y una antigüedad
                      inferior a los dos años
                    </li>
                    <li>
                      IELTS: con una nota mínima de 6,5 y una antigüedad
                      inferior a los dos años.
                    </li>
                    <li>
                      Cambridge: CAE con nivel A, B o C o bien FCE con nivel A
                    </li>
                    <li>
                      En el caso de haber cursado el Bachillerato Internacional
                      (IB) o IGCSEs + A Levels no es necesario demostrar tu
                      nivel de inglés mediante ninguno de estos exámenes
                      mencionados.
                    </li>
                  </ul>
                </li>
                <li>
                  Matemáticas: 375horas como mínimo curadas en los últimos 3
                  años y con una nota mínima de 7
                </li>
              </ul>

              <h2>SALIDAS LABORALES</h2>
              <p>
                Al graduarte de la carrera de Ciencia de Datos podrás entrar
                directamente en el mundo laboral en puestos como analista de
                datos, analista digital, científico de datos, analista de
                negocios y mercados o asesor. Si te gustaría continuar con tu
                educación, puedes acceder a másteres relacionados con la
                informática, ciencia de datos o innovación y negocios.
              </p>
            </motion.div>
          )}
          <motion.div
            className="carrera-button"
            onClick={() => setIsOpen16(!isOpen16)}
            animate={{
              marginLeft: isOpen16 ? "25.5%" : "11.5%",
              marginTop: isOpen16 ? "20%" : "3%",
            }}
          >
            INFORMACIÓN
          </motion.div>
        </motion.div>
        <motion.div
          className="tarjeta-carreras"
          animate={{
            width: isOpen17 ? "358px" : "260px",
            height: isOpen17 ? "1600px" : "300px",
            marginLeft: isOpen17 ? "2%" : "23%",
          }}
        >
          <motion.div
            className="container-img-carreras"
            animate={{
              width: isOpen17 ? "282px" : "200px",
              height: isOpen17 ? "266px" : "170px",
              marginLeft: isOpen17 ? "18.5%" : "11.5%",
              marginTop: isOpen17 ? "6%" : "3%",
            }}
          >
            <motion.img
              src={apMultimedia}
              animate={{
                width: isOpen17 ? "257px" : "180px",
                height: isOpen17 ? "242px" : "150px",
              }}
            />
          </motion.div>
          <motion.div
            className="titulo-carrera"
            animate={{
              fontSize: isOpen17 ? "xx-large" : "large",
              paddingLeft: isOpen17 ? "58px" : "3px",
            }}
          >
            GRADO AP EN DISEÑO MULTIMEDIA
          </motion.div>
          {isOpen17 && (
            <motion.div className="carrera-info">
              <motion.div className="tabla-incial-carrera">
                <div className="tabla-inicial-carrera-row">
                  <div>DURACIÓN: 2 AÑOS </div>
                  <div>CRÉDITOS:120</div>
                </div>
                <div className="tabla-inicial-carrera-row">
                  <div>COMIENZO: AGOSTO </div>
                  <div>PLAZO DE SOLICITUD: FEBRERO</div>
                </div>
              </motion.div>
              <h2>DESCRIPCIÓN</h2>
              <p>
                El grado AP en Diseño Multimedia es tu grado ideal si sabes que
                te quieres dedicar al diseño digital o el desarrollo web, pero
                aún no lo tienes 100% claro. Este AP degree equivale a los 2
                primeros años de una carrera donde te podrás centrar en el
                diseño de imágenes y la programación, una vez acabes el AP
                podrás completar tus estudios para tener un grado universitario
                en 1,5 años bien con el TOP-UP de Desarrollo Web o con el TOP-UP
                de Desarrollo de Conceptos Digitales.
              </p>

              <h2>REQUISITOS ACADÉMICOS</h2>
              <ul>
                <li>
                  Inglés
                  <ul>
                    <li>
                      TOEFL: con una nota mínima de 83 puntos y una antigüedad
                      inferior a los dos años
                    </li>
                    <li>
                      IELTS: con una nota mínima de 6,5 y una antigüedad
                      inferior a los dos años
                    </li>
                    <li>
                      Cambridge: CAE con nivel A, B o C o bien FCE con nivel A
                    </li>
                    <li>
                      En el caso de haber cursado el Bachillerato Internacional
                      (IB) o IGCSEs + A Levels no es necesario demostrar tu
                      nivel de inglés mediante ninguno de estos exámenes
                      mencionados.
                    </li>
                  </ul>
                </li>
                <li>
                  Matemáticas: 125horas como mínimo curadas en los últimos 3
                  años.
                </li>
              </ul>
            </motion.div>
          )}
          <motion.div
            className="carrera-button"
            onClick={() => setIsOpen17(!isOpen17)}
            animate={{
              marginLeft: isOpen17 ? "25.5%" : "11.5%",
              marginTop: isOpen17 ? "20%" : "3%",
            }}
          >
            INFORMACIÓN
          </motion.div>
        </motion.div>
        <motion.div
          className="tarjeta-carreras"
          animate={{
            width: isOpen18 ? "358px" : "260px",
            height: isOpen18 ? "1700px" : "320px",
            marginLeft: isOpen18 ? "2%" : "23%",
          }}
        >
          <motion.div
            className="container-img-carreras"
            animate={{
              width: isOpen18 ? "282px" : "200px",
              height: isOpen18 ? "266px" : "170px",
              marginLeft: isOpen18 ? "18.5%" : "11.5%",
              marginTop: isOpen18 ? "6%" : "3%",
            }}
          >
            <motion.img
              src={desarrolloConDig}
              animate={{
                width: isOpen18 ? "257px" : "180px",
                height: isOpen18 ? "242px" : "150px",
              }}
            />
          </motion.div>
          <motion.div
            className="titulo-carrera"
            animate={{
              fontSize: isOpen18 ? "xx-large" : "large",
              paddingLeft: isOpen18 ? "58px" : "3px",
            }}
          >
            TOP-UP EN DESARROLLO DE CONCEPTOS DIGITALES
          </motion.div>
          {isOpen18 && (
            <motion.div className="carrera-info">
              <motion.div className="tabla-incial-carrera">
                <div className="tabla-inicial-carrera-row">
                  <div>DURACIÓN:1,5 AÑOS </div>
                  <div>CRÉDITOS: 90</div>
                </div>
                <div className="tabla-inicial-carrera-row">
                  <div>COMIENZO: AGOSTO </div>
                  <div>PLAZO DE SOLICITUD: FEBRERO</div>
                </div>
              </motion.div>
              <h2>DESCRIPCIÓN</h2>
              <p>
                Con el TOP-UP en Desarrollo de Conceptos Digitales completarás
                tu educación superior y podrás obtener un grado universitario en
                un año y medio si ya tienes un AP degree o un Ciclo de Formación
                Superior. Una vez te gradúes estarás calificado para desarrollar
                conceptos digitales que respalden las actividades de una empresa
                en plataformas digitales. Podrás llevar a cabo consideraciones
                estratégicas, planificar pautas tácticas y desarrollar
                soluciones prácticas que se centren en tecnologías concretas y
                experiencias de usuarios digitales.
              </p>

              <h2>REQUISITOS ACADÉMICOS</h2>
              <ul>
                <li>
                  Inglés:
                  <ul>
                    <li>
                      TOEFL: con una nota mínima de 83 puntos y una antigüedad
                      inferior a los dos años
                    </li>
                    <li>
                      IELTS: con una nota mínima de 6,5 y una antigüedad
                      inferior a los dos años.
                    </li>
                    <li>
                      Cambridge: CAE con nivel A, B o C o bien FCE con nivel A
                    </li>
                    <li>
                      En el caso de haber cursado el Bachillerato Internacional
                      (IB) o IGCSEs + A Levels o un AP degree en inglés, no es
                      necesario demostrar tu nivel de inglés mediante ninguno de
                      estos exámenes mencionados
                    </li>
                  </ul>
                </li>
                <li>
                  Un Ap degree o un CFS en las ramas de Marketing, Tecnología,
                  Informática o Diseño.
                </li>
              </ul>
            </motion.div>
          )}
          <motion.div
            className="carrera-button"
            onClick={() => setIsOpen18(!isOpen18)}
            animate={{
              marginLeft: isOpen18 ? "25.5%" : "11.5%",
              marginTop: isOpen18 ? "20%" : "3%",
            }}
          >
            INFORMACIÓN
          </motion.div>
        </motion.div>
        <motion.div
          className="tarjeta-carreras"
          animate={{
            width: isOpen19 ? "358px" : "260px",
            height: isOpen19 ? "1650px" : "320px",
            marginLeft: isOpen19 ? "2%" : "23%",
          }}
        >
          <motion.div
            className="container-img-carreras"
            animate={{
              width: isOpen19 ? "282px" : "200px",
              height: isOpen19 ? "266px" : "170px",
              marginLeft: isOpen19 ? "18.5%" : "11.5%",
              marginTop: isOpen19 ? "6%" : "3%",
            }}
          >
            <motion.img
              src={daw}
              animate={{
                width: isOpen19 ? "257px" : "180px",
                height: isOpen19 ? "242px" : "150px",
              }}
            />
          </motion.div>
          <motion.div
            className="titulo-carrera"
            animate={{
              fontSize: isOpen19 ? "xx-large" : "large",
              paddingLeft: isOpen19 ? "58px" : "3px",
            }}
          >
            TOP-UP EN DESARROLLO DE PÁGINAS WEB
          </motion.div>
          {isOpen19 && (
            <motion.div className="carrera-info">
              <motion.div className="tabla-incial-carrera">
                <div className="tabla-inicial-carrera-row">
                  <div>DURACIÓN:1,5 AÑOS </div>
                  <div>CRÉDITOS: 90</div>
                </div>
                <div className="tabla-inicial-carrera-row">
                  <div>COMIENZO: AGOSTO </div>
                  <div>PLAZO DE SOLICITUD: FEBRERO</div>
                </div>
              </motion.div>
              <h2>DESCRIPCIÓN</h2>
              <p>
                Con el TOP-UP en Desarrollo de Páginas Web completarás tu
                educación superior y podrás obtener un grado universitario en un
                año y medio si ya tienes un AP degree o un Ciclo de Formación
                Superior. Una vez te gradúes estarás calificado para desarrollar
                páginas web que respalden las actividades comerciales de una
                empresa. Podrás construir sistemas web desde cero utilizando IDE
                orientado a objetos, CMS y bases de datos relacionales.
              </p>

              <h2>REQUISITOS ACADÉMICOS</h2>
              <ul>
                <li>
                  Inglés:
                  <ul>
                    <li>
                      TOEFL: con una nota mínima de 83 puntos y una antigüedad
                      inferior a los dos años
                    </li>
                    <li>
                      IELTS: con una nota mínima de 6,5 y una antigüedad
                      inferior a los dos años.
                    </li>
                    <li>
                      Cambridge: CAE con nivel A, B o C o bien FCE con nivel A
                    </li>
                    <li>
                      En el caso de haber cursado el Bachillerato Internacional
                      (IB) o IGCSEs + A Levels o un AP degree en inglés, no es
                      necesario demostrar tu nivel de inglés mediante ninguno de
                      estos exámenes mencionados.
                    </li>
                  </ul>
                </li>
                <li>
                  Un Ap degree o un CFS en las ramas de Márketing, Tecnología,
                  Informática, Diseño web o de aplicaciones o Diseño gráfico
                </li>
              </ul>
            </motion.div>
          )}
          <motion.div
            className="carrera-button"
            onClick={() => setIsOpen19(!isOpen19)}
            animate={{
              marginLeft: isOpen19 ? "25.5%" : "11.5%",
              marginTop: isOpen19 ? "20%" : "3%",
            }}
          >
            INFORMACIÓN
          </motion.div>
        </motion.div>
        <motion.div
          className="tarjeta-carreras"
          animate={{
            width: isOpen20 ? "358px" : "260px",
            height: isOpen20 ? "2700px" : "320px",
            marginLeft: isOpen20 ? "2%" : "23%",
          }}
        >
          <motion.div
            className="container-img-carreras"
            animate={{
              width: isOpen20 ? "282px" : "200px",
              height: isOpen20 ? "266px" : "170px",
              marginLeft: isOpen20 ? "18.5%" : "11.5%",
              marginTop: isOpen20 ? "6%" : "3%",
            }}
          >
            <motion.img
              src={ecoAdminEmpresas}
              animate={{
                width: isOpen20 ? "257px" : "180px",
                height: isOpen20 ? "242px" : "150px",
              }}
            />
          </motion.div>
          <motion.div
            className="titulo-carrera"
            animate={{
              fontSize: isOpen20 ? "x-large" : "large",
              paddingLeft: isOpen20 ? "58px" : "3px",
            }}
          >
            GRADO EN ECONOMÍA Y ADMINISTRACION DE EMPRESAS
          </motion.div>
          {isOpen20 && (
            <motion.div className="carrera-info">
              <motion.div className="tabla-incial-carrera">
                <div className="tabla-inicial-carrera-row">
                  <div>DURACIÓN: 3 AÑOS </div>
                  <div>CRÉDITOS:180</div>
                </div>
                <div className="tabla-inicial-carrera-row">
                  <div>COMIENZO: AGOSTO </div>
                  <div>PLAZO DE SOLICITUD: FEBRERO</div>
                </div>
              </motion.div>
              <h2>DESCRIPCIÓN</h2>
              <p>
                En el programa de Economía y Administración de empresas
                aprenderás a identificar, comprender, analizar y resolver
                problemas con perspectiva internacional de la mano de empresas
                internacionales y multinacionales. Gracias a su enfoque
                internacional podrás experimentar diferentes culturas
                empresariales de diversas partes del mundo.
              </p>

              <p>
                A lo largo de la carrera cursarás asignaturas obligatorias como
                marketing, ventas, administración, finanzas e inversiones,
                macroeconomía, derecho o comportamiento organizacional, entre
                otras. Durante la carrera podrás especializarte en marketing,
                finanzas o administración para así completar tu educación.
              </p>

              <h2>RAMAS DE ESPECIALIZACIÓN</h2>
              <p>
                Durante la carrera podrás especializarte en una rama de la
                empresa gracias a las optativas. Hay tres posibles ramas de
                especialización:
              </p>
              <ul>
                <li>Marketing</li>
                <li>Finanzas</li>
                <li>Administración</li>
              </ul>

              <h2>REQUISITOS ACADÉMICOS</h2>
              <ul>
                <li>
                  Inglés
                  <ul>
                    <li>
                      TOEFL: con una nota mínima de 83 puntos y una antigüedad
                      inferior a los dos años
                    </li>
                    <li>
                      IELTS: con una nota mínima de 6,5 y una antigüedad
                      inferior a los dos años. Cambridge: CAE con nivel A, B o C
                      o bien FCE con nivel A
                    </li>
                    <li>
                      Cambridge: CAE con nivel A, B o C o bien FCE con nivel A
                    </li>
                    <li>
                      En el caso de haber cursado el Bachillerato Internacional
                      (IB) o IGCSEs + A Levels no es necesario demostrar tu
                      nivel de inglés mediante ninguno de estos exámenes
                      mencionados.
                    </li>
                  </ul>
                </li>
                <li>
                  Matemáticas: 200 horas como mínimo, cursadas en los últimos 3
                  años
                </li>
                <li>
                  Economía, historia, historia de la filosofía o historia del
                  mundo contemporáneo: 200 horas como mínimo, cursadas en los
                  últimos 3 años
                </li>
              </ul>

              <h2>SALIDAS LABORALES</h2>
              <p>
                Al graduarte de la carrera de Economía y Administración de
                empresas podrás desempeñar un gran número de actividades dentro
                de empresas nacionales e internacionales, puedes conseguir un
                trabajo en una empresa multinacional que trabaje con
                importaciones/exportaciones o internacionalización, trabajar
                como consultor o asesor o incluso de analista dentro de una
                empresa. También puedes trabajar con la gestión financiera,
                contabilidad, ventas, marketing, publicidad y administración. Si
                quieres continuar tus estudios, puedes acceder a un gran número
                de másteres como pueden ser el máster en Inteligencia y
                Analítica de negocios (business intelligence), máster en
                Marketing B2B y logística, máster en Innovación y
                Emprendimiento, máster en Asesoría y gestión de Negocios
                internacionales, o el máster en Análisis y Optimización de la
                Cadena de Valor, por mencionar algunos.
              </p>
            </motion.div>
          )}
          <motion.div
            className="carrera-button"
            onClick={() => setIsOpen20(!isOpen20)}
            animate={{
              marginLeft: isOpen20 ? "25.5%" : "11.5%",
              marginTop: isOpen20 ? "20%" : "3%",
            }}
          >
            INFORMACIÓN
          </motion.div>
        </motion.div>
        <motion.div
          className="tarjeta-carreras"
          animate={{
            width: isOpen21 ? "358px" : "260px",
            height: isOpen21 ? "2377px" : "320px",
            marginLeft: isOpen21 ? "2%" : "23%",
          }}
        >
          <motion.div
            className="container-img-carreras"
            animate={{
              width: isOpen21 ? "282px" : "200px",
              height: isOpen21 ? "266px" : "170px",
              marginLeft: isOpen21 ? "18.5%" : "11.5%",
              marginTop: isOpen21 ? "6%" : "3%",
            }}
          >
            <motion.img
              src={adNegociosG}
              animate={{
                width: isOpen21 ? "257px" : "180px",
                height: isOpen21 ? "242px" : "150px",
              }}
            />
          </motion.div>
          <motion.div
            className="titulo-carrera"
            animate={{
              fontSize: isOpen21 ? "x-large" : "large",
              paddingLeft: isOpen21 ? "58px" : "3px",
            }}
          >
            GRADO EN ADMINISTRACIÓN Y NEGOCIOS GLOBALES
          </motion.div>
          {isOpen21 && (
            <motion.div className="carrera-info">
              <motion.div className="tabla-incial-carrera">
                <div className="tabla-inicial-carrera-row">
                  <div>DURACIÓN: 3 AÑOS</div>
                  <div>CRÉDITOS:180</div>
                </div>
                <div className="tabla-inicial-carrera-row">
                  <div>COMIENZO: AGOSTO </div>
                  <div>PLAZO DE SOLICITUD: FEBRERO</div>
                </div>
              </motion.div>
              <h2>DESCRIPCIÓN</h2>
              <p>
                En el grado de Administración y Negocios globales contiene la
                amplia gama de temas de economía empresarial, marketing,
                contabilidad, finanzas y organización de la carrera típica de
                ADE, junto con la perspectiva internacional y global necesaria
                en las actividades empresariales y mercantiles del siglo XXI. El
                programa proporciona un conjunto versátil de habilidades
                comerciales que se pueden utilizar tanto en empresas privadas
                como públicas y dentro de una amplia gama de industrias.
              </p>

              <h2>RAMAS DE ESPECIALIZACIÓN</h2>
              <p>
                Durante la carrera podrás especializarte en una rama de la
                empresa gracias a las optativas. Hay tres posibles ramas de
                especialización:
              </p>
              <ul>
                <li>Marketing</li>
                <li>Finanzas</li>
                <li>Organización empresarial</li>
              </ul>

              <h2>REQUISITOS ACADÉMICOS</h2>
              <ul>
                <li>
                  Inglés:
                  <ul>
                    <li>
                      TOEFL: con una nota mínima de 83 puntos y una antigüedad
                      inferior a los dos años
                    </li>
                    <li>
                      IELTS: con una nota mínima de 6,5 y una antigüedad
                      inferior a los dos años.
                    </li>
                    <li>
                      Cambridge: CAE con nivel A, B o C o bien FCE con nivel A
                    </li>
                    <li>
                      En el caso de haber cursado el Bachillerato Internacional
                      (IB) o IGCSEs + A Levels no es necesario demostrar tu
                      nivel de inglés mediante ninguno de estos exámenes
                      mencionados.
                    </li>
                  </ul>
                </li>
                <li>
                  Matemáticas: 200 horas como mínimo, cursadas en los últimos 3
                  años
                </li>
                <li>
                  Economía, historia, historia de la filosofía o historia del
                  mundo contemporáneo: 200 horas como mínimo, cursadas en los
                  últimos 3 años
                </li>
                <li>Una nota media mínima en bachillerato de 7 sobre 10</li>
                <li>
                  Examen de admisión optativo para tener más posibilidades de
                  admisión
                </li>
              </ul>

              <h2>SALIDAS LABORALES</h2>
              <p>
                Esta carrera te abre las puertas para poder trabajar en puestos
                como coordinador de marketing, analista de mercados, director de
                recursos humanos, analista financiero, asesor empresarial o
                contable, entre otras muchas más opciones. Si decides continuar
                tus estudios y cursar un máster, podrás acceder a cualquier
                máster de la rama de los negocios, como el máster en marketing,
                máster en analítica de mercados, máster en contabilidad y
                finanzas o máster en innovación empresarial.
              </p>
            </motion.div>
          )}
          <motion.div
            className="carrera-button"
            onClick={() => setIsOpen21(!isOpen21)}
            animate={{
              marginLeft: isOpen21 ? "25.5%" : "11.5%",
              marginTop: isOpen21 ? "20%" : "3%",
            }}
          >
            INFORMACIÓN
          </motion.div>
        </motion.div>
        <motion.div
          className="tarjeta-carreras"
          animate={{
            width: isOpen22 ? "358px" : "260px",
            height: isOpen22 ? "2377px" : "300px",
            marginLeft: isOpen22 ? "2%" : "23%",
          }}
        >
          <motion.div
            className="container-img-carreras"
            animate={{
              width: isOpen22 ? "282px" : "200px",
              height: isOpen22 ? "266px" : "170px",
              marginLeft: isOpen22 ? "18.5%" : "11.5%",
              marginTop: isOpen22 ? "6%" : "3%",
            }}
          >
            <motion.img
              src={estudiosEuropeos}
              animate={{
                width: isOpen22 ? "257px" : "180px",
                height: isOpen22 ? "242px" : "150px",
              }}
            />
          </motion.div>
          <motion.div
            className="titulo-carrera"
            animate={{
              fontSize: isOpen22 ? "xx-large" : "large",
              paddingLeft: isOpen22 ? "58px" : "3px",
            }}
          >
            GRADO EN ESTUDIOS EUROPEOS
          </motion.div>
          {isOpen22 && (
            <motion.div className="carrera-info">
              <motion.div className="tabla-incial-carrera">
                <div className="tabla-inicial-carrera-row">
                  <div>DURACIÓN: 3 AÑOS </div>
                  <div>CRÉDITOS:180</div>
                </div>
                <div className="tabla-inicial-carrera-row">
                  <div>COMIENZO: AGOSTO </div>
                  <div>PLAZO DE SOLICITUD: FEBRERO</div>
                </div>
              </motion.div>
              <h2>DESCRIPCIÓN</h2>
              <p>
                En el grado de Estudios Europeos aprenderas a analizar
                estructuras y desarrollos regionales, nacionales y
                transnacionales, introduciendo enfoques de ciencias políticas,
                estudios culturales, historia y economía. La carrera es
                interdisciplinaria y tiene como objetivo que aprendas sobre
                cuatro áreas: Política e Instituciones, Fundamentos históricos
                de la integración europea, Desarrollo regional y Cooperación
                internacional.
              </p>

              <h2>POSIBILIDAD DE ERASMUS O ESTANCIA EN EL EXTRANJERO</h2>
              <p>
                La universidad anima a los estudiantes a realizar el quinto
                semestre en alguna universidad del extranjero para así poder
                coger habilidades y puntos de vista distintos. Esta estancia en
                el extranjero puede realizarse en Europa o en otras partes del
                mundo.
              </p>

              <h2>REQUISITOS ACADÉMICOS</h2>
              <ul>
                <li>
                  Inglés:
                  <ul>
                    <li>
                      TOEFL: con una nota mínima de 83 puntos y una antigüedad
                      inferior a los dos años
                    </li>
                    <li>
                      IELTS: con una nota mínima de 6,5 y una antigüedad
                      inferior a los dos años.
                    </li>
                    <li>
                      Cambridge: CAE con nivel A, B o C o bien FCE con nivel A
                    </li>
                    <li>
                      En el caso de haber cursado el Bachillerato Internacional
                      (IB) o IGCSEs + A Levels no es necesario demostrar tu
                      nivel de inglés mediante ninguno de estos exámenes
                      mencionados.
                    </li>
                  </ul>
                </li>
                <li>
                  Matemáticas: 200 horas como mínimo, cursadas en los últimos 3
                  años
                </li>
                <li>
                  Historia, historia de la filosofía o historia del mundo
                  contemporáneo: 200 horas como mínimo, cursadas en los últimos
                  3 años
                </li>
                <li>Una nota media mínima en bachillerato de 7 sobre 10</li>
                <li>
                  Examen de admisión optativo para tener más posibilidades de
                  admisión
                </li>
              </ul>

              <h2>SALIDAS LABORALES</h2>
              <p>
                Con el grado de Estudios Europeos podrás trabajar en
                instituciones europeas e internacionales que se ocupan de
                problemas europeos o transnacionales, como por ejemplo: La Unión
                Europea, el Consejo de Europeo, OCDE, Interpol, Embajadas y
                consulados, y también en empresas internacionales que desempeñen
                su actividad alrededor de Europa. Si quieres continuar tus
                estudios y realizar un máster podrás cursar el máster de
                estudios europeos o el de negocios internacionales.
              </p>
            </motion.div>
          )}
          <motion.div
            className="carrera-button"
            onClick={() => setIsOpen22(!isOpen22)}
            animate={{ marginLeft: isOpen22 ? "25.5%" : "11.5%",
            marginTop: isOpen22 ? "15%" : "3%", }}
          >
            INFORMACIÓN
          </motion.div>
        </motion.div>
        <motion.div
          className="tarjeta-carreras"
          animate={{
            width: isOpen23 ? "358px" : "260px",
            height: isOpen23 ? "2377px" : "320px",
            marginLeft: isOpen23 ? "2%" : "23%",
          }}
        >
          <motion.div
            className="container-img-carreras"
            animate={{
              width: isOpen23 ? "282px" : "200px",
              height: isOpen23 ? "266px" : "170px",
              marginLeft: isOpen23 ? "18.5%" : "11.5%",
              marginTop: isOpen23 ? "6%" : "3%",
            }}
          >
            <motion.img
              src={antropologiaMerc}
              animate={{
                width: isOpen23 ? "257px" : "180px",
                height: isOpen23 ? "242px" : "150px",
              }}
            />
          </motion.div>
          <motion.div
            className="titulo-carrera"
            animate={{
              fontSize: isOpen23 ? "xx-large" : "large",
              paddingLeft: isOpen23 ? "58px" : "3px",
            }}
          >
            GRADO EN ANTROPOLOGÍA DE MERCADOS Y GESTIÓN
          </motion.div>
          {isOpen23 && (
            <motion.div className="carrera-info">
              <motion.div className="tabla-incial-carrera">
                <div className="tabla-inicial-carrera-row">
                  <div>DURACIÓN: 3 AÑOS </div>
                  <div>CRÉDITOS:180</div>
                </div>
                <div className="tabla-inicial-carrera-row">
                  <div>COMIENZO: AGOSTO </div>
                  <div>PLAZO DE SOLICITUD: FEBRERO</div>
                </div>
              </motion.div>
              <h2>DESCRIPCIÓN</h2>
              <p>
                El grado en Antropología de Mercados y Gestión consiste en
                clases de teoría antropológica y métodos de trabajo prácticos,
                asignaturas que introducen el marketing y la gestión como
                procesos sociales. Durante la carrera aprenderás cómo emergen y
                funcionan los mercados, cómo las organizaciones pueden navegar
                las condiciones del mercado global y local, y cómo las personas
                usan bienes y servicios para construir identidades en la cultura
                del consumidor.
              </p>

              <h2>POSIBILIDAD DE ERASMUS O ESTANCIA EN EL EXTRANJERO</h2>
              <p>
                La universidad anima a los estudiantes a realizar el quinto
                semestre en alguna universidad del extranjero para así poder
                coger habilidades y puntos de vista distintos. Esta estancia en
                el extranjero puede realizarse en Europa o en otras partes del
                mundo.
              </p>

              <h2>REQUISITOS ACADÉMICOS</h2>
              <ul>
                <li>
                  Inglés
                  <ul>
                    <li>
                      TOEFL: con una nota mínima de 83 puntos y una antigüedad
                      inferior a los dos años
                    </li>
                    <li>
                      IELTS: con una nota mínima de 6,5 y una antigüedad
                      inferior a los dos años
                    </li>
                    <li>
                      Cambridge: CAE con nivel A, B o C o bien FCE con nivel A
                    </li>
                    <li>
                      En el caso de haber cursado el Bachillerato Internacional
                      (IB) o IGCSEs + A Levels no es necesario demostrar tu
                      nivel de inglés mediante ninguno de estos exámenes
                      mencionados
                    </li>
                  </ul>
                </li>
                <li>
                  Matemáticas: 200 horas como mínimo, cursadas en los últimos 3
                  años
                </li>
                <li>
                  Historia, historia de la filosofía o historia del mundo
                  contemporáneo: 200 horas como mínimo, cursadas en los últimos
                  3 años
                </li>
                <li>
                  Examen de admisión optativo para tener más posibilidades de
                  admisión
                </li>
              </ul>

              <h2>SALIDAS LABORALES</h2>
              <p>
                Con el grado de Antropología de Mercados y Gestión podrás
                trabajar, entre otras muchas cosas, como consultor, especialista
                de desarrollo, especialista de innovación o analista de
                mercados. Si decides que quieres continuar tus estudios puedes
                cursar másteres relacionados con el marketing, análisis de
                mercados o administración y dirección de empresas.
              </p>
            </motion.div>
          )}
          <motion.div
            className="carrera-button"
            onClick={() => setIsOpen23(!isOpen23)}
            animate={{ marginLeft: isOpen23 ? "25.5%" : "11.5%",
            marginTop: isOpen23 ? "20%" : "3%", }}
          >
            INFORMACIÓN
          </motion.div>
        </motion.div>
        <motion.div
          className="tarjeta-carreras"
          animate={{
            width: isOpen24 ? "358px" : "260px",
            height: isOpen24 ? "2277px" : "320px",
            marginLeft: isOpen24 ? "2%" : "23%",
          }}
        >
          <motion.div
            className="container-img-carreras"
            animate={{
              width: isOpen24 ? "282px" : "200px",
              height: isOpen24 ? "266px" : "170px",
              marginLeft: isOpen24 ? "18.5%" : "11.5%",
              marginTop: isOpen24 ? "6%" : "3%",
            }}
          >
            <motion.img
              src={ramaChina}
              animate={{
                width: isOpen24 ? "257px" : "180px",
                height: isOpen24 ? "242px" : "150px",
              }}
            />
          </motion.div>
          <motion.div
            className="titulo-carrera"
            animate={{
              fontSize: isOpen24 ? "xx-large" : "large",
              paddingLeft: isOpen24 ? "58px" : "3px",
            }}
          >
            GRADO EN NEGOCIOS ENTRE EUROPA Y ASIA - RAMA CHINA
          </motion.div>
          {isOpen24 && (
            <motion.div className="carrera-info">
              <motion.div className="tabla-incial-carrera">
                <div className="tabla-inicial-carrera-row">
                  <div>DURACIÓN: 4 AÑOS </div>
                  <div>CRÉDITOS: 240</div>
                </div>
                <div className="tabla-inicial-carrera-row">
                  <div>COMIENZO: AGOSTO </div>
                  <div>PLAZO DE SOLICITUD: FEBRERO</div>
                </div>
              </motion.div>
              <h2>DESCRIPCIÓN</h2>
              <p>
                El grado en Negocios entre Europa y Asia te da la posibilidad
                aprender como es la cultura empresarial en el continente
                asiático y así tener un perfil muy solicitado en la economía
                global del siglo XXI.
              </p>

              <h2>ESTANCIA EN EL EXTRANJERO - BEIJING</h2>
              <p>
                Durante un semestre hay una estancia obligatoria en el
                extranjero, concretamente en Beijing. Durante este semestre
                cursarás asignaturas de la Bijing International Studies
                University y podrás tener una inmersión total en la cultura
                asiática.
              </p>

              <h2>REQUISITOS ACADÉMICOS</h2>
              <ul>
                <li>
                  Inglés:
                  <ul>
                    <li>
                      TOEFL: con una nota mínima de 90 puntos y una antigüedad
                      inferior a los dos años
                    </li>
                    <li>
                      IELTS: con una nota mínima de 7 y una antigüedad inferior
                      a los dos años.
                    </li>
                    <li>
                      Cambridge: CAE con nivel A, B o C o bien FCE con nivel A
                    </li>
                    <li>
                      En el caso de haber cursado el Bachillerato Internacional
                      (IB) o IGCSEs + A Levels no es necesario demostrar tu
                      nivel de inglés mediante ninguno de estos exámenes
                      mencionados.
                    </li>
                  </ul>
                </li>
                <li>
                  Matemáticas: 250 horas como mínimo, cursadas en los últimos 3
                  años
                </li>
                <li>
                  Economía, historia, historia de la filosofía o historia del
                  mundo contemporáneo: 200 horas como mínimo, cursadas en los
                  últimos 3 años
                </li>
                <li>
                  No es necesario tener conocimientos de Chino, pero en el caso
                  de que los tengas podrás terminar el grado en 3 años en vez de
                  4.
                </li>
              </ul>

              <h2>SALIDAS LABORALES</h2>
              <p>
                Con el grado de Negocios entre Europa y Asia podrás desempeñar
                diversos trabajos en empresas multinacionales, como director
                regional, director de marketing, trabajos en el sector de
                logística y purchasing, negociación, etc. Si decides continuar
                con tus estudios podrás cursas un máster relacionado con los
                estudios internacionales, los negocios internacionales o cultura
                asiática.
              </p>
            </motion.div>
          )}
          <motion.div
            className="carrera-button"
            onClick={() => setIsOpen24(!isOpen24)}
            animate={{
              marginLeft: isOpen24 ? "25.5%" : "11.5%",
              marginTop: isOpen24 ? "20%" : "3%",
            }}
          >
            INFORMACIÓN
          </motion.div>
        </motion.div>
        <motion.div
          className="tarjeta-carreras"
          animate={{
            width: isOpen25 ? "358px" : "260px",
            height: isOpen25 ? "2000px" : "320px",
            marginLeft: isOpen25 ? "2%" : "23%",
          }}
        >
          <motion.div
            className="container-img-carreras"
            animate={{
              width: isOpen25 ? "282px" : "200px",
              height: isOpen25 ? "266px" : "170px",
              marginLeft: isOpen25 ? "18.5%" : "11.5%",
              marginTop: isOpen25 ? "6%" : "3%",
            }}
          >
            <motion.img
              src={ramaJaponesa}
              animate={{
                width: isOpen25 ? "257px" : "180px",
                height: isOpen25 ? "242px" : "150px",
              }}
            />
          </motion.div>
          <motion.div
            className="titulo-carrera"
            animate={{
              fontSize: isOpen25 ? "xx-large" : "large",
              paddingLeft: isOpen25 ? "58px" : "3px",
            }}
          >
            GRADO EN NEGOCIOS ENTRE EUROPA Y ASIA - RAMA JAPÓN
          </motion.div>
          {isOpen25 && (
            <motion.div className="carrera-info">
              <motion.div className="tabla-incial-carrera">
                <div className="tabla-inicial-carrera-row">
                  <div>DURACIÓN: 4 AÑOS</div>
                  <div>CRÉDITOS: 240</div>
                </div>
                <div className="tabla-inicial-carrera-row">
                  <div>COMIENZO: AGOSTO </div>
                  <div>PLAZO DE SOLICITUD: FEBRERO</div>
                </div>
              </motion.div>
              <h2>DESCRIPCIÓN</h2>
              <p>
                El grado en Negocios entre Europa y Asia te da la posibilidad
                aprender como es la cultura empresarial en el continente
                asiático y así tener un perfil muy solicitado en la economía
                global del siglo XXI.
              </p>

              <h2>REQUISITOS ACADÉMICOS</h2>
              <ul>
                <li>
                  Inglés
                  <ul>
                    <li>
                      TOEFL: con una nota mínima de 90 puntos y una antigüedad
                      inferior a los dos años
                    </li>
                    <li>
                      IELTS: con una nota mínima de 7 y una antigüedad inferior
                      a los dos años.
                    </li>
                    <li>
                      Cambridge: CAE con nivel A, B o C o bien FCE con nivel A
                    </li>
                    <li>
                      En el caso de haber cursado el Bachillerato Internacional
                      (IB) o IGCSEs + A Levels no es necesario demostrar tu
                      nivel de inglés mediante ninguno de estos exámenes
                      mencionados.
                    </li>
                  </ul>
                </li>
                <li>
                  Matemáticas: 250 horas como mínimo, cursadas en los últimos 3
                  años
                </li>
                <li>
                  Economía, historia, historia de la filosofía o historia del
                  mundo contemporáneo: 200 horas como mínimo, cursadas en los
                  últimos 3 años
                </li>
                <li>
                  No es necesario tener conocimientos de Japonés, pero en el
                  caso de que los tengas podrás terminar el grado en 3 años en
                  vez de 4.
                </li>
              </ul>

              <h2>SALIDAS LABORALES</h2>
              <p>
                Con el grado de Negocios entre Europa y Asia podrás desempeñar
                diversos trabajos en empresas multinacionales, como director
                regional, director de marketing, trabajos en el sector de
                logística y purchasing, negociación, etc. Si decides continuar
                con tus estudios podrás cursas un máster relacionado con los
                estudios internacionales, los negocios internacionales o cultura
                asiática.
              </p>
            </motion.div>
          )}
          <motion.div
            className="carrera-button"
            onClick={() => setIsOpen25(!isOpen25)}
            animate={{ marginLeft: isOpen25 ? "25.5%" : "11.5%",
            marginTop: isOpen25 ? "15%" : "3%", }}
          >
            INFORMACIÓN
          </motion.div>
        </motion.div>
        <motion.div
          className="tarjeta-carreras"
          animate={{
            width: isOpen26 ? "358px" : "260px",
            height: isOpen26 ? "2520px" : "320px",
            marginLeft: isOpen26 ? "2%" : "23%",
          }}
        >
          <motion.div
            className="container-img-carreras"
            animate={{
              width: isOpen26 ? "282px" : "200px",
              height: isOpen26 ? "266px" : "170px",
              marginLeft: isOpen26 ? "18.5%" : "11.5%",
              marginTop: isOpen26 ? "6%" : "3%",
            }}
          >
            <motion.img
              src={ramaEspañola}
              animate={{
                width: isOpen26 ? "257px" : "180px",
                height: isOpen26 ? "242px" : "150px",
              }}
            />
          </motion.div>
          <motion.div
            className="titulo-carrera"
            animate={{
              fontSize: isOpen26 ? "xx-large" : "large",
              paddingLeft: isOpen26 ? "58px" : "3px",
            }}
          >
            GRADO EN NEGOCIOS, IDIOMA Y CULTURA - RAMA ESPAÑOLA
          </motion.div>
          {isOpen26 && (
            <motion.div className="carrera-info">
              <motion.div className="tabla-incial-carrera">
                <div className="tabla-inicial-carrera-row">
                  <div>DURACIÓN: 3 AÑOS </div>
                  <div>CRÉDITOS:180</div>
                </div>
                <div className="tabla-inicial-carrera-row">
                  <div>COMIENZO: AGOSTO </div>
                  <div>PLAZO DE SOLICITUD: FEBRERO</div>
                </div>
              </motion.div>
              <h2>DESCRIPCIÓN</h2>
              <p>
                El grado en Negocios, Idioma y Cultura te da una amplia
                comprensión de la administración de empresas y los negocios
                internacionales. Trabajarás con proyectos en los departamentos
                principales de empresas internacionales, economía, finanzas,
                estrategia empresarial y marketing, etc., y aprenderás a
                identificar y resolver desafíos empresariales y
                organizacionales. Aparte de los negocios y la empresa, el otro
                pilar de esta carrera es el idioma y la cultura de un país,
                donde aprenderás a como comunicarte en ámbitos empresariales en
                el mercado español y latinoamericano, tendrás una visión interna
                de como se desenvuelven los negocios y la gente.
              </p>

              <h2>
                ESTANCIA EN EL EXTRANJERO - UN SEMESTRE EN ESPAÑA O
                LATINOAMÉRICA
              </h2>
              <p>
                Durante un semestre hay una estancia obligatoria en el
                extranjero, concretamente en una universidad donde el idioma del
                principal sea el Español.
              </p>

              <h2>REQUISITOS ACADÉMICOS</h2>
              <ul>
                <li>
                  Inglés:
                  <ul>
                    <li>
                      TOEFL: con una nota mínima de 90 puntos y una antigüedad
                      inferior a los dos años
                    </li>
                    <li>
                      IELTS: con una nota mínima de 7 y una antigüedad inferior
                      a los dos años.
                    </li>
                    <li>
                      Cambridge: CAE con nivel A, B o C o bien FCE con nivel A
                    </li>
                    <li>
                      En el caso de haber cursado el Bachillerato Internacional
                      (IB) o IGCSEs + A Levels no es necesario demostrar tu
                      nivel de inglés mediante ninguno de estos exámenes
                      mencionados.
                    </li>
                  </ul>
                </li>
                <li>
                  Matemáticas: 250 horas como mínimo, cursadas en los últimos 3
                  años
                </li>
                <li>
                  Economía, historia, historia de la filosofía o historia del
                  mundo contemporáneo: 200 horas como mínimo, cursadas en los
                  últimos 3 años
                </li>
                <li>
                  Al ser de España no es necesario demostrar el nivel de español
                </li>
              </ul>

              <h2>SALIDAS LABORALES</h2>
              <p>
                Con el grado de Negocios, Idioma y Cultura (Española) podrás
                desempeñar diversos trabajos en empresas multinacionales que
                operen entre España y otro país, Dinamarca, por ejemplo, como
                director regional, director de marketing, trabajos en el sector
                de logística y purchasing, negociación, etc. Si decides
                continuar con tus estudios podrás cursas un máster relacionado
                con los estudios internacionales, los negocios internacionales o
                cultura.
              </p>
            </motion.div>
          )}
          <motion.div
            className="carrera-button"
            onClick={() => setIsOpen26(!isOpen26)}
            animate={{
              marginLeft: isOpen26 ? "25.5%" : "11.5%",
              marginTop: isOpen26 ? "20%" : "3%",
            }}
          >
            INFORMACIÓN
          </motion.div>
        </motion.div>
        <motion.div
          className="tarjeta-carreras"
          animate={{
            width: isOpen27 ? "358px" : "260px",
            height: isOpen27 ? "2577px" : "320px",
            marginLeft: isOpen27 ? "2%" : "23%",
          }}
        >
          <motion.div
            className="container-img-carreras"
            animate={{
              width: isOpen27 ? "282px" : "200px",
              height: isOpen27 ? "266px" : "170px",
              marginLeft: isOpen27 ? "18.5%" : "11.5%",
              marginTop: isOpen27 ? "6%" : "3%",
            }}
          >
            <motion.img
              src={ramaFrancesa}
              animate={{
                width: isOpen27 ? "257px" : "180px",
                height: isOpen27 ? "242px" : "150px",
              }}
            />
          </motion.div>
          <motion.div
            className="titulo-carrera"
            animate={{
              fontSize: isOpen27 ? "xx-large" : "large",
              paddingLeft: isOpen27 ? "58px" : "3px",
            }}
          >
            GRADO EN NEGOCIOS, IDIOMA Y CULTURA - RAMA FRANCESA
          </motion.div>
          {isOpen27 && (
            <motion.div className="carrera-info">
              <motion.div className="tabla-incial-carrera">
                <div className="tabla-inicial-carrera-row">
                  <div>DURACIÓN: 3 AÑOS</div>
                  <div>CRÉDITOS:180</div>
                </div>
                <div className="tabla-inicial-carrera-row">
                  <div>COMIENZO: AGOSTO </div>
                  <div>PLAZO DE SOLICITUD: FEBRERO</div>
                </div>
              </motion.div>
              <h2>DESCRIPCIÓN</h2>
              <p>
                El grado en Negocios, Idioma y Cultura te da una amplia
                comprensión de la administración de empresas y los negocios
                internacionales. Trabajarás con proyectos en los departamentos
                principales de empresas internacionales, economía, finanzas,
                estrategia empresarial y marketing, etc., y aprenderás a
                identificar y resolver desafíos empresariales y
                organizacionales. Aparte de los negocios y la empresa, el otro
                pilar de esta carrera es el idioma y la cultura de un país,
                donde aprenderás a como comunicarte en ámbitos empresariales en
                el mercado francés y franco-canadiense, tendrás una visión
                interna de como se desenvuelven los negocios y la gente.
              </p>

              <h2>
                ESTANCIA EN EL EXTRANJERO - UN SEMESTRE EN FRANCIA, TERRITORIO
                FRANCO-CANADIENSE U OTRO TERRITORIO FRANCÓFONO
              </h2>
              <p>
                Durante un semestre hay una estancia obligatoria en el
                extranjero, concretamente en una universidad donde el idioma del
                principal sea el Francés.
              </p>

              <h2>REQUISITOS ACADÉMICOS</h2>
              <ul>
                <li>
                  Inglés:
                  <ul>
                    <li>
                      TOEFL: con una nota mínima de 90 puntos y una antigüedad
                      inferior a los dos años
                    </li>
                    <li>
                      IELTS: con una nota mínima de 7 y una antigüedad inferior
                      a los dos años.
                    </li>
                    <li>
                      Cambridge: CAE con nivel A, B o C o bien FCE con nivel A
                    </li>
                    <li>
                      En el caso de haber cursado el Bachillerato Internacional
                      (IB) o IGCSEs + A Levels no es necesario demostrar tu
                      nivel de inglés mediante ninguno de estos exámenes
                      mencionados
                    </li>
                  </ul>
                </li>
                <li>
                  Matemáticas: 250 horas como mínimo, cursadas en los últimos 3
                  años
                </li>
                <li>
                  Economía, historia, historia de la filosofía o historia del
                  mundo contemporáneo: 200 horas como mínimo, cursadas en los
                  últimos 3 años
                </li>
                <li>Francés: título DELF B1 o superior.</li>
              </ul>

              <h2>SALIDAS LABORALES</h2>
              <p>
                Con el grado de Negocios, Idioma y Cultura (Francesa) podrás
                desempeñar diversos trabajos en empresas multinacionales que
                operen entre Francia y otro país, Dinamarca, por ejemplo, como
                director regional, director de marketing, trabajos en el sector
                de logística y purchasing, negociación, etc. Si decides
                continuar con tus estudios podrás cursas un máster relacionado
                con los estudios internacionales, los negocios internacionales o
                cultura.
              </p>
            </motion.div>
          )}
          <motion.div
            className="carrera-button"
            onClick={() => setIsOpen27(!isOpen27)}
            animate={{
              marginLeft: isOpen27 ? "25.5%" : "11.5%",
              marginTop: isOpen27 ? "12%" : "3%",
            }}
          >
            INFORMACIÓN
          </motion.div>
        </motion.div>
        <motion.div
          className="tarjeta-carreras"
          animate={{
            width: isOpen28 ? "358px" : "260px",
            height: isOpen28 ? "2500px" : "320px",
            marginLeft: isOpen28 ? "2%" : "23%",
          }}
        >
          <motion.div
            className="container-img-carreras"
            animate={{
              width: isOpen28 ? "282px" : "200px",
              height: isOpen28 ? "266px" : "170px",
              marginLeft: isOpen28 ? "18.5%" : "11.5%",
              marginTop: isOpen28 ? "6%" : "3%",
            }}
          >
            <motion.img
              src={ramaAlemana}
              animate={{
                width: isOpen28 ? "257px" : "180px",
                height: isOpen28 ? "242px" : "150px",
              }}
            />
          </motion.div>
          <motion.div
            className="titulo-carrera"
            animate={{
              fontSize: isOpen28 ? "xx-large" : "large",
              paddingLeft: isOpen28 ? "58px" : "3px",
            }}
          >
            GRADO EN NEGOCIOS, IDIOMA Y CULTURA - RAMA ALEMANA
          </motion.div>
          {isOpen28 && (
            <motion.div className="carrera-info">
              <motion.div className="tabla-incial-carrera">
                <div className="tabla-inicial-carrera-row">
                  <div>DURACIÓN: 3 AÑOS </div>
                  <div>CRÉDITOS:180</div>
                </div>
                <div className="tabla-inicial-carrera-row">
                  <div>COMIENZO: AGOSTO </div>
                  <div>PLAZO DE SOLICITUD: FEBRERO</div>
                </div>
              </motion.div>
              <h2>DESCRIPCIÓN</h2>
              <p>
                El grado en Negocios, Idioma y Cultura te da una amplia
                comprensión de la administración de empresas y los negocios
                internacionales. Trabajarás con proyectos en los departamentos
                principales de empresas internacionales, economía, finanzas,
                estrategia empresarial y marketing, etc., y aprenderás a
                identificar y resolver desafíos empresariales y
                organizacionales. Aparte de los negocios y la empresa, el otro
                pilar de esta carrera es el idioma y la cultura de un país,
                donde aprenderás a como comunicarte en ámbitos empresariales en
                el mercado alemán, tendrás una visión interna de como se
                desenvuelven los negocios y la gente.
              </p>

              <h2>ESTANCIA EN EL EXTRANJERO - UN SEMESTRE EN ALEMANIA</h2>
              <p>
                Durante un semestre hay una estancia obligatoria en el
                extranjero, concretamente en una universidad donde el idioma del
                principal sea el Alemán.
              </p>

              <h2>REQUISITOS ACADÉMICOS</h2>
              <ul>
                <li>
                  Ingles:
                  <ul>
                    <li>
                      TOEFL: con una nota mínima de 90 puntos y una antigüedad
                      inferior a los dos años
                    </li>
                    <li>
                      IELTS: con una nota mínima de 7 y una antigüedad inferior
                      a los dos años.
                    </li>
                    <li>
                      Cambridge: CAE con nivel A, B o C o bien FCE con nivel A
                    </li>
                    <li>
                      En el caso de haber cursado el Bachillerato Internacional
                      (IB) o IGCSEs + A Levels no es necesario demostrar tu
                      nivel de inglés mediante ninguno de estos exámenes
                      mencionados.
                    </li>
                  </ul>
                </li>
                <li>
                  Matemáticas: 250 horas como mínimo, cursadas en los últimos 3
                  años
                </li>
                <li>
                  Economía, historia, historia de la filosofía o historia del
                  mundo contemporáneo: 200 horas como mínimo, cursadas en los
                  últimos 3 años
                </li>
                <li>Alemán: título Goethe-Zertifikat B1 o superior.</li>
              </ul>

              <h2>SALIDAS LABORALES</h2>
              <p>
                Con el grado de Negocios, Idioma y Cultura (Alemana) podrás
                desempeñar diversos trabajos en empresas multinacionales que
                operen entre Alemania y otro país, Dinamarca, por ejemplo, como
                director regional, director de marketing, trabajos en el sector
                de logística y purchasing, negociación, etc. Si decides
                continuar con tus estudios podrás cursas un máster relacionado
                con los estudios internacionales, los negocios internacionales o
                cultura.
              </p>
            </motion.div>
          )}
          <motion.div
            className="carrera-button"
            onClick={() => setIsOpen28(!isOpen28)}
            animate={{
              marginLeft: isOpen28 ? "25.5%" : "11.5%",
              marginTop: isOpen28 ? "20%" : "3%",
            }}
          >
            INFORMACIÓN
          </motion.div>
        </motion.div>
        <motion.div
          className="tarjeta-carreras"
          animate={{
            width: isOpen29 ? "358px" : "260px",
            height: isOpen29 ? "2477px" : "320px",
            marginLeft: isOpen29 ? "2%" : "23%",
          }}
        >
          <motion.div
            className="container-img-carreras"
            animate={{
              width: isOpen29 ? "282px" : "200px",
              height: isOpen29 ? "266px" : "170px",
              marginLeft: isOpen29 ? "18.5%" : "11.5%",
              marginTop: isOpen29 ? "6%" : "3%",
            }}
          >
            <motion.img
              src={adSociologia}
              animate={{
                width: isOpen29 ? "257px" : "180px",
                height: isOpen29 ? "242px" : "150px",
              }}
            />
          </motion.div>
          <motion.div
            className="titulo-carrera"
            animate={{
              fontSize: isOpen29 ? "x-large" : "large",
              paddingLeft: isOpen29 ? "58px" : "3px",
            }}
          >
            GRADO EN ADMINISTRACIÓN DE EMPRESAS Y SOCIOLOGÍA
          </motion.div>
          {isOpen29 && (
            <motion.div className="carrera-info">
              <motion.div className="tabla-incial-carrera">
                <div className="tabla-inicial-carrera-row">
                  <div>DURACIÓN: 3 AÑOS </div>
                  <div>CRÉDITOS:180</div>
                </div>
                <div className="tabla-inicial-carrera-row">
                  <div>COMIENZO: AGOSTO </div>
                  <div>PLAZO DE SOLICITUD: FEBRERO</div>
                </div>
              </motion.div>
              <h2>DESCRIPCIÓN</h2>
              <p>
                El grado en Administración de empresas y Sociología te da una
                amplia comprensión de la administración de empresas y los
                negocios internacionales. Trabajarás con proyectos en los
                departamentos principales de empresas internacionales, economía,
                finanzas, estrategia empresarial y marketing, etc., y aprenderás
                a identificar y resolver desafíos empresariales y
                organizacionales. Aparte de los negocios y la empresa, el otro
                pilar de esta carrera es la sociología, lo que te dará
                conocimientos sobre cómo los cambios y condiciones sociales y
                culturales impactan los procesos comerciales y las realidades a
                las que las empresas deben adaptarse.
              </p>

              <h2>POSIBILIDAD DE ERASMUS O ESTANCIA EN EL EXTRANJERO</h2>

              <p>
                La universidad anima a los estudiantes a realizar el quinto
                semestre en alguna universidad del extranjero para así poder
                coger habilidades y puntos de vista distintos. Esta estancia en
                el extranjero puede realizarse en Europa o en otras partes del
                mundo.
              </p>

              <h2>REQUISITOS ACADÉMICOS</h2>
              <ul>
                <li>
                  Inglés:
                  <ul>
                    <li>
                      TOEFL: con una nota mínima de 90 puntos y una antigüedad
                      inferior a los dos años
                    </li>
                    <li>
                      IELTS: con una nota mínima de 7 y una antigüedad inferior
                      a los dos años.
                    </li>
                    <li>
                      Cambridge: CAE con nivel A, B o C o bien FCE con nivel A
                    </li>
                    <li>
                      En el caso de haber cursado el Bachillerato Internacional
                      (IB) o IGCSEs + A Levels no es necesario demostrar tu
                      nivel de inglés mediante ninguno de estos exámenes
                      mencionados.
                    </li>
                  </ul>
                </li>
                <li>
                  Matemáticas: 250 horas como mínimo, cursadas en los últimos 3
                  años con una nota mínima de 7 sobre 10.
                </li>
                <li>
                  Economía, historia, historia de la filosofía o historia del
                  mundo contemporáneo: 200 horas como mínimo, cursadas en los
                  últimos 3 años
                </li>
              </ul>

              <h2>SALIDAS LABORALES</h2>
              <p>
                Con el grado de Administración de empresas y Sociología podrás
                desempeñar diversos trabajos en empresas nacionales y
                multinacionales donde la sociología pueda ser empleada como por
                ejemplo de director de marketing, negociación, departamento de
                administración, recursos humanos, etc. Si decides continuar con
                tus estudios podrás cursas un máster relacionado con la
                administración y otros sectores de la empresa como marketing,
                recursos humanos, innovación, etc. y de la rama de la sociología
                y la cultura.
              </p>
            </motion.div>
          )}
          <motion.div
            className="carrera-button"
            onClick={() => setIsOpen29(!isOpen29)}
            animate={{
              marginLeft: isOpen29 ? "25.5%" : "11.5%",
              marginTop: isOpen29 ? "20%" : "3%",
            }}
          >
            INFORMACIÓN
          </motion.div>
        </motion.div>
        <motion.div
          className="tarjeta-carreras"
          animate={{
            width: isOpen30 ? "358px" : "260px",
            height: isOpen30 ? "2500px" : "320px",
            marginLeft: isOpen30 ? "2%" : "23%",
          }}
        >
          <motion.div
            className="container-img-carreras"
            animate={{
              width: isOpen30 ? "282px" : "200px",
              height: isOpen30 ? "266px" : "170px",
              marginLeft: isOpen30 ? "18.5%" : "11.5%",
              marginTop: isOpen30 ? "6%" : "3%",
            }}
          >
            <motion.img
              src={adGestionDigital}
              animate={{
                width: isOpen30 ? "257px" : "180px",
                height: isOpen30 ? "242px" : "150px",
              }}
            />
          </motion.div>
          <motion.div
            className="titulo-carrera"
            animate={{
              fontSize: isOpen30 ? "x-large" : "large",
              paddingLeft: isOpen30 ? "58px" : "3px",
            }}
          >
            GRADO EN ADMINISTRACIÓN DE EMPRESAS Y SOCIOLOGÍA
          </motion.div>
          {isOpen30 && (
            <motion.div className="carrera-info">
              <motion.div className="tabla-incial-carrera">
                <div className="tabla-inicial-carrera-row">
                  <div>DURACIÓN: 3 AÑOS </div>
                  <div>CRÉDITOS:180</div>
                </div>
                <div className="tabla-inicial-carrera-row">
                  <div>COMIENZO: AGOSTO </div>
                  <div>PLAZO DE SOLICITUD: FEBRERO</div>
                </div>
              </motion.div>
              <h2>DESCRIPCIÓN</h2>
              <p>
                El grado en Administración de empresas y Gestión digital te da
                una amplia comprensión de la administración de empresas y los
                negocios internacionales. Trabajarás con proyectos en los
                departamentos principales de empresas internacionales, economía,
                finanzas, estrategia empresarial y marketing, etc., y aprenderás
                a identificar y resolver desafíos empresariales y
                organizacionales. Aparte de los negocios y la empresa, el otro
                pilar de esta carrera es la gestión digital, lo que te dará
                conocimientos sobre los negocios digitales, con un enfoque en la
                innovación y la estrategia digital, habilidades necesarias para
                el mundo empresarial del siglo XXI.
              </p>

              <h2>POSIBILIDAD DE ERASMUS O ESTANCIA EN EL EXTRANJERO</h2>
              <p>
                La universidad anima a los estudiantes a realizar el quinto
                semestre en alguna universidad del extranjero para así poder
                coger habilidades y puntos de vista distintos. Esta estancia en
                el extranjero puede realizarse en Europa o en otras partes del
                mundo.
              </p>

              <h2>REQUISITOS ACADÉMICOS</h2>
              <ul>
                <li>
                  Inglés:
                  <ul>
                    <li>
                      TOEFL: con una nota mínima de 90 puntos y una antigüedad
                      inferior a los dos años
                    </li>
                    <li>
                      IELTS: con una nota mínima de 7 y una antigüedad inferior
                      a los dos años.
                    </li>
                    <li>
                      Cambridge: CAE con nivel A, B o C o bien FCE con nivel A
                    </li>
                    <li>
                      En el caso de haber cursado el Bachillerato Internacional
                      (IB) o IGCSEs + A Levels no es necesario demostrar tu
                      nivel de inglés mediante ninguno de estos exámenes
                      mencionados.
                    </li>
                  </ul>
                </li>
                <li>
                  Matemáticas: 250 horas como mínimo, cursadas en los últimos 3
                  años con una nota mínima de 7 sobre 10.
                </li>
                <li>
                  Economía, historia, historia de la filosofía o historia del
                  mundo contemporáneo: 200 horas como mínimo, cursadas en los
                  últimos 3 años
                </li>
              </ul>

              <h2>SALIDAS LABORALES</h2>
              <p>
                Con el grado de Administración de empresas y Gestión digital
                podrás desempeñar diversos trabajos en empresas donde el ámbito
                digital o desarrollo digital este presente, como por ejemplo
                director de innovación digital, director de marketing digital,
                director de procesos de digitalización, análisis de datos,
                departamento legal digital, etc. Si decides continuar con tus
                estudios podrás cursas un máster relacionado con la
                administración y otros sectores de la empresa como marketing,
                recursos humanos, innovación, etc. y de la rama digital, como
                analítica de datos, arquitectura de estructuras digitales.
              </p>
            </motion.div>
          )}
          <motion.div
            className="carrera-button"
            onClick={() => setIsOpen30(!isOpen30)}
            animate={{
              marginLeft: isOpen30 ? "25.5%" : "11.5%",
              marginTop: isOpen30 ? "20%" : "3%",
            }}
          >
            INFORMACIÓN
          </motion.div>
        </motion.div>
        <motion.div
          className="tarjeta-carreras"
          animate={{
            width: isOpen31 ? "358px" : "260px",
            height: isOpen31 ? "2777px" : "320px",
            marginLeft: isOpen31 ? "2%" : "23%",
          }}
        >
          <motion.div
            className="container-img-carreras"
            animate={{
              width: isOpen31 ? "282px" : "200px",
              height: isOpen31 ? "266px" : "170px",
              marginLeft: isOpen31 ? "18.5%" : "11.5%",
              marginTop: isOpen31 ? "6%" : "3%",
            }}
          >
            <motion.img
              src={adGestionServicios}
              animate={{
                width: isOpen31 ? "257px" : "180px",
                height: isOpen31 ? "242px" : "150px",
              }}
            />
          </motion.div>
          <motion.div
            className="titulo-carrera"
            animate={{
              fontSize: isOpen31 ? "x-large" : "medium",
              paddingLeft: isOpen31 ? "58px" : "3px",
            }}
          >
            GRADO EN ADMINISTRACIÓN DE EMPRESAS Y GESTIÓN DE SERVICIOS
          </motion.div>
          {isOpen31 && (
            <motion.div className="carrera-info">
              <motion.div className="tabla-incial-carrera">
                <div className="tabla-inicial-carrera-row">
                  <div>DURACIÓN: 3 AÑOS </div>
                  <div>CRÉDITOS:180</div>
                </div>
                <div className="tabla-inicial-carrera-row">
                  <div>COMIENZO: AGOSTO </div>
                  <div>PLAZO DE SOLICITUD: FEBRERO</div>
                </div>
              </motion.div>
              <h2>DESCRIPCIÓN</h2>
              <p>
                El grado en Administración de empresas y Gestión de servicios te
                da una amplia comprensión de la administración de empresas y los
                negocios internacionales. Trabajarás con proyectos en los
                departamentos principales de empresas internacionales, economía,
                finanzas, estrategia empresarial y marketing, etc., y aprenderás
                a identificar y resolver desafíos empresariales y
                organizacionales. Aparte de los negocios y la empresa, el otro
                pilar de esta carrera es la gestión de servicios, lo que te dará
                conocimientos sobre como las empresas del sector servicios son y
                te dará la posibilidad de especializarte en 3 ramas distintas
                dependiendo de la industria que más te interese.
              </p>

              <h2>POSIBILIDAD DE ERASMUS O ESTANCIA EN EL EXTRANJERO</h2>
              <p>
                La universidad anima a los estudiantes a realizar el quinto
                semestre en alguna universidad del extranjero para así poder
                coger habilidades y puntos de vista distintos. Esta estancia en
                el extranjero puede realizarse en Europa o en otras partes del
                mundo.
              </p>

              <h2>RAMAS DE ESPECIALIZACIÓN</h2>
              <p>
                Durante la carrera tendrás que elegir una de las 3
                especialidades siguientes:
              </p>
              <ul>
                <li>Arte y cultura</li>
                <li>Servicios e innovación</li>
                <li>Turismo y hospitalidad</li>
              </ul>

              <h2>REQUISITOS ACADÉMICOS</h2>
              <ul>
                <li>
                  Inglés:
                  <ul>
                    <li>
                      TOEFL: con una nota mínima de 90 puntos y una antigüedad
                      inferior a los dos años
                    </li>
                    <li>
                      IELTS: con una nota mínima de 7 y una antigüedad inferior
                      a los dos años.
                    </li>
                    <li>
                      Cambridge: CAE con nivel A, B o C o bien FCE con nivel A
                    </li>
                    <li>
                      En el caso de haber cursado el Bachillerato Internacional
                      (IB) o IGCSEs + A Levels no es necesario demostrar tu
                      nivel de inglés mediante ninguno de estos exámenes
                      mencionados.
                    </li>
                  </ul>
                </li>
                <li>
                  Matemáticas: 250 horas como mínimo, cursadas en los últimos 3
                  años
                </li>
                <li>
                  Economía, historia, historia de la filosofía o historia del
                  mundo contemporáneo: 200 horas como mínimo, cursadas en los
                  últimos 3 años
                </li>
              </ul>

              <h2>SALIDAS LABORALES</h2>
              <p>
                Con el grado de Administración de empresas y Gestión de
                servicios podrás desempeñar diversos trabajos en empresas como
                en el departamento de marketing, administración, dirección,
                innovación, etc. y trabajos en empresas del sector servicios
                dependiendo de tu especialidad, como por ejemplo director de
                hotel, agencia de viajes, director de museos, o cualquier
                trabajo donde la innovación sea un pilar fundamental, etc. Si
                decides continuar con tus estudios, podrás cursas un máster
                relacionado con la administración y otros sectores de la empresa
                como marketing, recursos humanos, innovación, etc. y de la rama
                de los servicios, como gestión hotelera.
              </p>
            </motion.div>
          )}
          <motion.div
            className="carrera-button"
            onClick={() => setIsOpen31(!isOpen31)}
            animate={{
              marginLeft: isOpen31 ? "25.5%" : "11.5%",
              marginTop: isOpen31 ? "20%" : "3%",
            }}
          >
            INFORMACIÓN
          </motion.div>
        </motion.div>
        <motion.div
          className="tarjeta-carreras"
          animate={{
            width: isOpen32 ? "358px" : "260px",
            height: isOpen32 ? "2500px" : "320px",
            marginLeft: isOpen32 ? "2%" : "23%",
          }}
        >
          <motion.div
            className="container-img-carreras"
            animate={{
              width: isOpen32 ? "282px" : "200px",
              height: isOpen32 ? "266px" : "170px",
              marginLeft: isOpen32 ? "18.5%" : "11.5%",
              marginTop: isOpen32 ? "6%" : "3%",
            }}
          >
            <motion.img
              src={nInterPolitica}
              animate={{
                width: isOpen32 ? "257px" : "180px",
                height: isOpen32 ? "242px" : "150px",
              }}
            />
          </motion.div>
          <motion.div
            className="titulo-carrera"
            animate={{
              fontSize: isOpen32 ? "x-large" : "large",
              paddingLeft: isOpen32 ? "58px" : "3px",
            }}
          >
            GRADO EN NEGOCIOS INTERNACIONALES Y POLÍTICA
          </motion.div>
          {isOpen32 && (
            <motion.div className="carrera-info">
              <motion.div className="tabla-incial-carrera">
                <div className="tabla-inicial-carrera-row">
                  <div>DURACIÓN: 3 AÑOS </div>
                  <div>CRÉDITOS:180</div>
                </div>
                <div className="tabla-inicial-carrera-row">
                  <div>COMIENZO: AGOSTO </div>
                  <div>PLAZO DE SOLICITUD: FEBRERO</div>
                </div>
              </motion.div>
              <h2>DESCRIPCIÓN</h2>
              <p>
                El grado en Negocios Internacionales y Política te da una amplia
                comprensión de la administración de empresas y los negocios
                internacionales. Trabajarás con proyectos en los departamentos
                principales de empresas internacionales, economía, finanzas,
                estrategia empresarial, internacionalización y marketing, etc.,
                y aprenderás a identificar y resolver desafíos empresariales y
                organizacionales. Aparte de los negocios y la empresa, el otro
                pilar de esta carrera es la política, lo que te dará
                conocimientos sobre como las empresas y negocios son afectados
                por la política y como la política puede ayudar a los mercados y
                empresas.
              </p>

              <h2>POSIBILIDAD DE ERASMUS O ESTANCIA EN EL EXTRANJERO</h2>
              <p>
                La universidad anima a los estudiantes a realizar el quinto
                semestre en alguna universidad del extranjero para así poder
                coger habilidades y puntos de vista distintos. Esta estancia en
                el extranjero puede realizarse en Europa o en otras partes del
                mundo.
              </p>

              <h2>REQUISITOS ACADÉMICOS</h2>
              <ul>
                <li>
                  Inglés:
                  <ul>
                    <li>
                      TOEFL: con una nota mínima de 90 puntos y una antigüedad
                      inferior a los dos años
                    </li>
                    <li>
                      IELTS: con una nota mínima de 7 y una antigüedad inferior
                      a los dos años.
                    </li>
                    <li>
                      Cambridge: CAE con nivel A, B o C o bien FCE con nivel A
                    </li>
                    <li>
                      En el caso de haber cursado el Bachillerato Internacional
                      (IB) o IGCSEs + A Levels no es necesario demostrar tu
                      nivel de inglés mediante ninguno de estos exámenes
                      mencionados.
                    </li>
                  </ul>
                </li>
                <li>
                  Matemáticas: 250 horas como mínimo, cursadas en los últimos 3
                  años
                </li>
                <li>
                  Economía, historia, historia de la filosofía o historia del
                  mundo contemporáneo: 200 horas como mínimo, cursadas en los
                  últimos 3 años
                </li>
              </ul>

              <h2>SALIDAS LABORALES</h2>
              <p>
                Con el grado de Negocios Internacionales y Política podrás
                desempeñar diversos trabajos en empresas internacionales como en
                el departamento de marketing, investigación de mercados,
                exportación, negociación, administración, dirección, innovación,
                etc. y trabajos en empresas donde conocimientos de política sean
                fundamentales. Si decides continuar con tus estudios, podrás
                cursas un máster relacionado con la administración y otros
                sectores de la empresa como marketing, recursos humanos,
                innovación, etc. y de la rama de la política, donde puedes
                cursar másteres que te abran puertas a un futuro en la política
                nacional o internacional.
              </p>
            </motion.div>
          )}
          <motion.div
            className="carrera-button"
            onClick={() => setIsOpen32(!isOpen32)}
            animate={{ marginLeft: isOpen32 ? "25.5%" : "11.5%",
            marginTop: isOpen32 ? "15%" : "3%", }}
          >
            INFORMACIÓN
          </motion.div>
        </motion.div>
        <motion.div
          className="tarjeta-carreras"
          animate={{
            width: isOpen33 ? "358px" : "260px",
            height: isOpen33 ? "2277px" : "320px",
            marginLeft: isOpen33 ? "2%" : "23%",
          }}
        >
          <motion.div
            className="container-img-carreras"
            animate={{
              width: isOpen33 ? "282px" : "200px",
              height: isOpen33 ? "266px" : "170px",
              marginLeft: isOpen33 ? "18.5%" : "11.5%",
              marginTop: isOpen33 ? "6%" : "3%",
            }}
          >
            <motion.img
              src={nInternacionales}
              animate={{
                width: isOpen33 ? "257px" : "180px",
                height: isOpen33 ? "242px" : "150px",
              }}
            />
          </motion.div>
          <motion.div
            className="titulo-carrera"
            animate={{
              fontSize: isOpen33 ? "x-large" : "large",
              paddingLeft: isOpen33 ? "58px" : "3px",
            }}
          >
            GRADO EN NEGOCIOS INTERNACIONALES
          </motion.div>
          {isOpen33 && (
            <motion.div className="carrera-info">
              <motion.div className="tabla-incial-carrera">
                <div className="tabla-inicial-carrera-row">
                  <div>DURACIÓN: 3 AÑOS </div>
                  <div>CRÉDITOS:180</div>
                </div>
                <div className="tabla-inicial-carrera-row">
                  <div>COMIENZO: AGOSTO </div>
                  <div>PLAZO DE SOLICITUD: FEBRERO</div>
                </div>
              </motion.div>
              <h2>DESCRIPCIÓN</h2>
              <p>
                El grado en Negocios Internacionales y te da una amplia
                comprensión de la administración de empresas y los negocios
                internacionales. Trabajarás con proyectos en los departamentos
                principales de empresas internacionales, economía, finanzas,
                estrategia empresarial, internacionalización y marketing, etc.,
                y aprenderás a identificar y resolver desafíos empresariales y
                organizacionales.
              </p>

              <h2>POSIBILIDAD DE ERASMUS O ESTANCIA EN EL EXTRANJERO</h2>

              <p>
                La universidad anima a los estudiantes a realizar el quinto
                semestre en alguna universidad del extranjero para así poder
                coger habilidades y puntos de vista distintos. Esta estancia en
                el extranjero puede realizarse en Europa o en otras partes del
                mundo.
              </p>

              <h2>REQUISITOS ACADÉMICOS</h2>
              <ul>
                <li>
                  Inglés:
                  <ul>
                    <li>
                      TOEFL: con una nota mínima de 90 puntos y una antigüedad
                      inferior a los dos años
                    </li>
                    <li>
                      IELTS: con una nota mínima de 7 y una antigüedad inferior
                      a los dos años.
                    </li>
                    <li>
                      Cambridge: CAE con nivel A, B o C o bien FCE con nivel A
                    </li>
                    <li>
                      En el caso de haber cursado el Bachillerato Internacional
                      (IB) o IGCSEs + A Levels no es necesario demostrar tu
                      nivel de inglés mediante ninguno de estos exámenes
                      mencionados.
                    </li>
                  </ul>
                </li>
                <li>
                  Matemáticas: 250 horas como mínimo, cursadas en los últimos 3
                  años
                </li>
                <li>
                  Economía, historia, historia de la filosofía o historia del
                  mundo contemporáneo: 200 horas como mínimo, cursadas en los
                  últimos 3 años
                </li>
              </ul>

              <h2>SALIDAS LABORALES</h2>
              <p>
                Con el grado de Negocios Internacionales podrás desempeñar
                diversos trabajos en empresas internacionales como en el
                departamento de marketing, investigación de mercados,
                exportación, negociación, administración, dirección, innovación,
                etc. Si decides continuar con tus estudios, podrás cursas un
                máster relacionado con la administración y otros sectores de la
                empresa como marketing, recursos humanos, innovación, etc. y de
                la rama de los negocios internacionales.
              </p>
            </motion.div>
          )}
          <motion.div
            className="carrera-button"
            onClick={() => setIsOpen33(!isOpen33)}
            animate={{
              marginLeft: isOpen33 ? "25.5%" : "11.5%",
              marginTop: isOpen33 ? "20%" : "3%",
            }}
          >
            INFORMACIÓN
          </motion.div>
        </motion.div>
        <motion.div
          className="tarjeta-carreras"
          animate={{
            width: isOpen34 ? "358px" : "260px",
            height: isOpen34 ? "2320px" : "320px",
            marginLeft: isOpen34 ? "2%" : "23%",
          }}
        >
          <motion.div
            className="container-img-carreras"
            animate={{
              width: isOpen34 ? "282px" : "200px",
              height: isOpen34 ? "266px" : "170px",
              marginLeft: isOpen34 ? "18.5%" : "11.5%",
              marginTop: isOpen34 ? "6%" : "3%",
            }}
          >
            <motion.img
              src={transporteMaritimo}
              animate={{
                width: isOpen34 ? "257px" : "180px",
                height: isOpen34 ? "242px" : "150px",
              }}
            />
          </motion.div>
          <motion.div
            className="titulo-carrera"
            animate={{
              fontSize: isOpen34 ? "xx-large" : "large",
              paddingLeft: isOpen34 ? "58px" : "3px",
            }}
          >
            GRADO EN TRANSPORTE MERCANTIL MARÍTIMO
          </motion.div>
          {isOpen34 && (
            <motion.div className="carrera-info">
              <motion.div className="tabla-incial-carrera">
                <div className="tabla-inicial-carrera-row">
                  <div>DURACIÓN: 3 AÑOS</div>
                  <div>CRÉDITOS:180</div>
                </div>
                <div className="tabla-inicial-carrera-row">
                  <div>COMIENZO: AGOSTO </div>
                  <div>PLAZO DE SOLICITUD: FEBRERO</div>
                </div>
              </motion.div>
              <h2>DESCRIPCIÓN</h2>
              <p>
                El grado en Transporte mercantil maritimo te da conocimientos en
                los campos de la economía empresarial, el transporte marítimo y
                comercio combinados con una comprensión internacional e
                intercultural y experiencia práctica en la industria. Aprenderás
                sobre el desarrollo de soluciones eficientes, confiables y
                rentables para mover bienes desde los productores a los
                compradores para asegurar el éxito comercial de las empresas
                internacionales
              </p>

              <h2>ESTANCIA EN EL EXTRANJERO - SEMESTRE EN SINGAPUR O TEXAS</h2>
              <p>
                Durante el segundo año de la carrera tendrás la oportunidad de
                cursar un semestre en Texas o Singapur, donde adquirías otros
                puntos de vista sobre transporte mercantil y los negocios.
              </p>

              <h2>REQUISITOS ACADÉMICOS</h2>
              <ul>
                <li>
                  Inglés:
                  <ul>
                    <li>
                      TOEFL: con una nota mínima de 90 puntos y una antigüedad
                      inferior a los dos años
                    </li>
                    <li>
                      IELTS: con una nota mínima de 7 y una antigüedad inferior
                      a los dos años.
                    </li>
                    <li>
                      Cambridge: CAE con nivel A, B o C o bien FCE con nivel A
                    </li>
                    <li>
                      En el caso de haber cursado el Bachillerato Internacional
                      (IB) o IGCSEs + A Levels no es necesario demostrar tu
                      nivel de inglés mediante ninguno de estos exámenes
                      mencionados.
                    </li>
                  </ul>
                </li>
                <li>
                  Matemáticas: 250 horas como mínimo, cursadas en los últimos 3
                  años
                </li>
                <li>
                  Economía, historia, historia de la filosofía o historia del
                  mundo contemporáneo: 200 horas como mínimo, cursadas en los
                  últimos 3 años
                </li>
              </ul>
              <h2>SALIDAS LABORALES</h2>
              <p>
                Con el grado de Negocios Internacionales podrás desempeñar
                diversos trabajos en empresas de transporte y exportación, como
                director de logística, analista de cadena de valor u
                optimización de transporte de mercancías, además también podrás
                trabajar en empresas que importan productos. Si decides
                continuar con tus estudios, podrás cursas un máster relacionado
                con transporte y la cadena de valor y también en el sector del
                derecho como derecho marítimo o derecho mercantil.
              </p>
            </motion.div>
          )}
          <motion.div
            className="carrera-button"
            onClick={() => setIsOpen34(!isOpen34)}
            animate={{ marginLeft: isOpen34 ? "25.5%" : "11.5%",
            marginTop: isOpen34 ? "15%" : "3%", }}
          >
            INFORMACIÓN
          </motion.div>
        </motion.div>
        <motion.div
          className="tarjeta-carreras"
          animate={{
            width: isOpen35 ? "358px" : "260px",
            height: isOpen35 ? "2220px" : "320px",
            marginLeft: isOpen35 ? "2%" : "23%",
          }}
        >
          <motion.div
            className="container-img-carreras"
            animate={{
              width: isOpen35 ? "282px" : "200px",
              height: isOpen35 ? "266px" : "170px",
              marginLeft: isOpen35 ? "18.5%" : "11.5%",
              marginTop: isOpen35 ? "6%" : "3%",
            }}
          >
            <motion.img
              src={gPerHumanistico}
              animate={{
                width: isOpen35 ? "257px" : "180px",
                height: isOpen35 ? "242px" : "150px",
              }}
            />
          </motion.div>
          <motion.div
            className="titulo-carrera"
            animate={{
              fontSize: isOpen35 ? "xx-large" : "large",
              paddingLeft: isOpen35 ? "58px" : "3px",
            }}
          >
            GRADO PERSONALIZADO EN HUMNIDADES
          </motion.div>
          {isOpen35 && (
            <motion.div className="carrera-info">
              <motion.div className="tabla-incial-carrera">
                <div className="tabla-inicial-carrera-row">
                  <div>DURACIÓN: 3 AÑOS</div>
                  <div>CRÉDITOS:180</div>
                </div>
                <div className="tabla-inicial-carrera-row">
                  <div>COMIENZO: AGOSTO </div>
                  <div>PLAZO DE SOLICITUD: FEBRERO</div>
                </div>
              </motion.div>
              <h2>DESCRIPCIÓN</h2>
              <p>
                El grado Personalizado en Humanidades es tu grado ideal si sabes
                que tu futuro está en la rama de las ciencias humanísticas, pero
                aún no tienes clara la especialización o si tu pasión son dos
                sectores humanísticos y no quieres prescindir de ninguno. Esta
                carrera es una carrera personalizable al 100% donde cursarán
                solamente 6 asignaturas obligatorias y el resto serán decididas
                por ti. Durante esta carrera tendrás que elegir dos
                especialidades, una de ellas será tu foco principal en segundo
                año (optativa específica I)y la otra durante tercero (optativa
                específica II).
              </p>

              <h2>RAMAS DE ESPECIALIZACIÓN</h2>
              <p>
                En el grado personalizado de ciencias naturales tendrás que
                elegir 2 especialidades para así diseñar tu programa académico.
                Las especialidades a elegir son:
              </p>
              <ul>
                <li>Comunicación</li>
                <li>Cultura</li>
                <li>Psicología</li>
              </ul>

              <h2>REQUISITOS ACADÉMICOS</h2>
              <ul>
                <li>
                  Inglés:
                  <ul>
                    <li>
                      TOEFL: con una nota mínima de 83 puntos y una antigüedad
                      inferior a los dos años
                    </li>
                    <li>
                      IELTS: con una nota mínima de 6,5 y una antigüedad
                      inferior a los dos años.
                    </li>
                    <li>
                      Cambridge: CAE con nivel A, B o C o bien FCE con nivel A
                    </li>
                    <li>
                      En el caso de haber cursado el Bachillerato Internacional
                      (IB) o IGCSEs + A Levels no es necesario demostrar tu
                      nivel de inglés mediante ninguno de estos exámenes
                      mencionados.
                    </li>
                  </ul>
                </li>
                <li>
                  Historia, historia de la filosofía o historia del mundo
                  contemporáneo: 200 horas como mínimo, cursadas en los últimos
                  3 años.
                </li>
                <li>Algún otro idioma cursado durante bachiller</li>
              </ul>

              <h2>SALIDAS LABORALES</h2>
              <p>
                Al ser una carrera totalmente personalizable, las salidas
                laborables dependerán de las especialidades que hayas escogido.
                Si decides querer expandir tus conocimientos y cursar un máster,
                podrás acceder a másteres relacionados con tus especialidades.
              </p>
            </motion.div>
          )}
          <motion.div
            className="carrera-button"
            onClick={() => setIsOpen35(!isOpen35)}
            animate={{
              marginLeft: isOpen35 ? "25.5%" : "11.5%",
              marginTop: isOpen35 ? "20%" : "3%",
            }}
          >
            INFORMACIÓN
          </motion.div>
        </motion.div>
        <motion.div
          className="tarjeta-carreras"
          animate={{
            width: isOpen36 ? "358px" : "260px",
            height: isOpen36 ? "2377px" : "320px",
            marginLeft: isOpen36 ? "2%" : "23%",
          }}
        >
          <motion.div
            className="container-img-carreras"
            animate={{
              width: isOpen36 ? "282px" : "200px",
              height: isOpen36 ? "266px" : "170px",
              marginLeft: isOpen36 ? "18.5%" : "11.5%",
              marginTop: isOpen36 ? "6%" : "3%",
            }}
          >
            <motion.img
              src={gPCienSociales}
              animate={{
                width: isOpen36 ? "257px" : "180px",
                height: isOpen36 ? "242px" : "150px",
              }}
            />
          </motion.div>
          <motion.div
            className="titulo-carrera"
            animate={{
              fontSize: isOpen36 ? "xx-large" : "large",
              paddingLeft: isOpen36 ? "58px" : "3px",
            }}
          >
            GRADO PERSONALIZADO EN CIENCIAS SOCIALES
          </motion.div>
          {isOpen36 && (
            <motion.div className="carrera-info">
              <motion.div className="tabla-incial-carrera">
                <div className="tabla-inicial-carrera-row">
                  <div>DURACIÓN: 3 AÑOS </div>
                  <div>CRÉDITOS:180</div>
                </div>
                <div className="tabla-inicial-carrera-row">
                  <div>COMIENZO: AGOSTO </div>
                  <div>PLAZO DE SOLICITUD: FEBRERO</div>
                </div>
              </motion.div>
              <h2>DESCRIPCIÓN</h2>
              <p>
                El grado Personalizado en Ciencias sociales es tu grado ideal si
                sabes que tu futuro está en la rama de las ciencias sociales, la
                economía y los negocios, pero aún no tienes clara la
                especialización o si tu pasión son dos sectores sociales y no
                quieres prescindir de ninguno. Esta carrera es una carrera
                personalizable al 100% donde cursarán solamente 6 asignaturas
                obligatorias y el resto serán decididas por ti. Durante esta
                carrera tendrás que elegir dos especialidades, una de ellas será
                tu foco principal en segundo año (optativa específica I)y la
                otra durante tercero (optativa específica II).
              </p>

              <h2>RAMAS DE ESPECIALIZACIÓN</h2>
              <p>
                En el grado personalizado de ciencias naturales tendrás que
                elegir 2 especialidades para así diseñar tu programa académico.
                Las especialidades a elegir son:
              </p>
              <ul>
                <li>Administración y dirección de empresas</li>
                <li>Negocios y emprendimiento</li>
                <li>Estudios internacionales</li>
              </ul>

              <h2>REQUISITOS ACADÉMICOS</h2>
              <ul>
                <li>
                  Inglés:
                  <ul>
                    <li>
                      TOEFL: con una nota mínima de 83 puntos y una antigüedad
                      inferior a los dos años
                    </li>
                    <li>
                      IELTS: con una nota mínima de 6,5 y una antigüedad
                      inferior a los dos años.
                    </li>
                    <li>
                      Cambridge: CAE con nivel A, B o C o bien FCE con nivel A
                    </li>
                    <li>
                      En el caso de haber cursado el Bachillerato Internacional
                      (IB) o IGCSEs + A Levels no es necesario demostrar tu
                      nivel de inglés mediante ninguno de estos exámenes
                      mencionados.
                    </li>
                  </ul>
                </li>
                <li>
                  Matemáticas: 200 horas cursadas en los últimos 3 años con una
                  nota mínima de 6 sobre 10
                </li>
                <li>
                  Economía, historia, historia de la filosofía o historia del
                  mundo contemporáneo: 200 horas como mínimo, cursadas en los
                  últimos 3 años
                </li>
                <li>Media mínima de bachillerato de 7 sobre 10</li>
              </ul>

              <h2>SALIDAS LABORALES</h2>
              <p>
                Al ser una carrera totalmente personalizable, las salidas
                laborables dependerán de las especialidades que hayas escogido.
                Si decides querer expandir tus conocimientos y cursar un máster,
                podrás acceder a másteres relacionados con tus especialidades.
              </p>
            </motion.div>
          )}
          <motion.div
            className="carrera-button"
            onClick={() => setIsOpen36(!isOpen36)}
            animate={{
              marginLeft: isOpen36 ? "25.5%" : "11.5%",
              marginTop: isOpen36 ? "20%" : "3%",
            }}
          >
            INFORMACIÓN
          </motion.div>
        </motion.div>
        <motion.div
          className="tarjeta-carreras"
          animate={{
            width: isOpen37 ? "358px" : "260px",
            height: isOpen37 ? "1640px" : "300px",
            marginLeft: isOpen37 ? "2%" : "23%",
          }}
        >
          <motion.div
            className="container-img-carreras"
            animate={{
              width: isOpen37 ? "282px" : "200px",
              height: isOpen37 ? "266px" : "170px",
              marginLeft: isOpen37 ? "18.5%" : "11.5%",
              marginTop: isOpen37 ? "6%" : "3%",
            }}
          >
            <motion.img
              src={aptopDiseñoModa}
              animate={{
                width: isOpen37 ? "257px" : "180px",
                height: isOpen37 ? "242px" : "150px",
              }}
            />
          </motion.div>
          <motion.div
            className="titulo-carrera"
            animate={{
              fontSize: isOpen37 ? "xx-large" : "large",
              paddingLeft: isOpen37 ? "58px" : "3px",
            }}
          >
            GRADO AP EN DISEÑO DE MODA
          </motion.div>
          {isOpen37 && (
            <motion.div className="carrera-info">
              <motion.div className="tabla-incial-carrera">
                <div className="tabla-inicial-carrera-row">
                  <div>DURACIÓN: 2 AÑOS </div>
                  <div>CRÉDITOS:120</div>
                </div>
                <div className="tabla-inicial-carrera-row">
                  <div>COMIENZO: AGOSTO </div>
                  <div>PLAZO DE SOLICITUD: FEBRERO</div>
                </div>
              </motion.div>
              <h2>DESCRIPCIÓN</h2>
              <p>
                El grado AP en Diseño de moda es tu grado ideal si sabes que te
                quieres dedicar al diseño de moda y a la industria textil. Este
                AP degree equivale a los 2 primeros años de una carrera donde te
                podrás centrar en el diseño de indumentarias y la tecnología de
                los materiales. Una vez acabes el AP podrás completar tus
                estudios para tener un grado universitario en 1,5 años bien con
                el TOP-UP de Diseño de moda, Marketing y branding en el sector
                de la moda o Emprendimiento e innovación de moda.
              </p>

              <h2>REQUISITOS ACADÉMICOS</h2>
              <ul>
                <li>
                  Inglés:
                  <ul>
                    <li>
                      TOEFL: con una nota mínima de 83 puntos y una antigüedad
                      inferior a los dos años
                    </li>
                    <li>
                      IELTS: con una nota mínima de 6,5 y una antigüedad
                      inferior a los dos años.
                    </li>
                    <li>
                      Cambridge: CAE con nivel A, B o C o bien FCE con nivel A
                    </li>
                    <li>
                      En el caso de haber cursado el Bachillerato Internacional
                      (IB) o IGCSEs + A Levels no es necesario demostrar tu
                      nivel de inglés mediante ninguno de estos exámenes
                      mencionados.
                    </li>
                  </ul>
                </li>
                <li>
                  Matemáticas: 125horas como mínimo curadas en los últimos 3
                  años.
                </li>
              </ul>
            </motion.div>
          )}
          <motion.div
            className="carrera-button"
            onClick={() => setIsOpen37(!isOpen37)}
            animate={{
              marginLeft: isOpen37 ? "25.5%" : "11.5%",
              marginTop: isOpen37 ? "20%" : "3%",
            }}
          >
            INFORMACIÓN
          </motion.div>
        </motion.div>
        <motion.div
          className="tarjeta-carreras"
          animate={{
            width: isOpen38 ? "358px" : "260px",
            height: isOpen38 ? "1670px" : "320px",
            marginLeft: isOpen38 ? "2%" : "23%",
          }}
        >
          <motion.div
            className="container-img-carreras"
            animate={{
              width: isOpen38 ? "282px" : "200px",
              height: isOpen38 ? "266px" : "170px",
              marginLeft: isOpen38 ? "18.5%" : "11.5%",
              marginTop: isOpen38 ? "6%" : "3%",
            }}
          >
            <motion.img
              src={aptopMarkModa}
              animate={{
                width: isOpen38 ? "257px" : "180px",
                height: isOpen38 ? "242px" : "150px",
              }}
            />
          </motion.div>
          <motion.div
            className="titulo-carrera"
            animate={{
              fontSize: isOpen38 ? "xx-large" : "large",
              paddingLeft: isOpen38 ? "58px" : "3px",
            }}
          >
            GRADO AP EN MARKETING Y BRANDING DE MODA
          </motion.div>
          {isOpen38 && (
            <motion.div className="carrera-info">
              <motion.div className="tabla-incial-carrera">
                <div className="tabla-inicial-carrera-row">
                  <div>DURACIÓN: 2 AÑOS</div>
                  <div>CRÉDITOS:120</div>
                </div>
                <div className="tabla-inicial-carrera-row">
                  <div>COMIENZO: AGOSTO </div>
                  <div>PLAZO DE SOLICITUD: FEBRERO</div>
                </div>
              </motion.div>
              <h2>DESCRIPCIÓN</h2>
              <p>
                El grado AP en Marketing y branding de moda es tu grado ideal si
                sabes que te quieres dedicar al marketing y branding en
                industria textil. Este AP degree equivale a los 2 primeros años
                de una carrera donde te podrás centrar en el marketing para la
                industria de la moda y la el branding para campañas y empresas
                textiles. Una vez acabes el AP podrás completar tus estudios
                para tener un grado universitario en 1,5 años bien con el TOP-UP
                de Diseño de moda, Marketing y branding en el sector de la moda
                o Emprendimiento e innovación de moda.
              </p>

              <h2>REQUISITOS ACADÉMICOS</h2>
              <ul>
                <li>
                  Inglés:
                  <ul>
                    <li>
                      TOEFL: con una nota mínima de 83 puntos y una antigüedad
                      inferior a los dos años
                    </li>
                    <li>
                      IELTS: con una nota mínima de 6,5 y una antigüedad
                      inferior a los dos años.
                    </li>
                    <li>
                      Cambridge: CAE con nivel A, B o C o bien FCE con nivel A
                    </li>
                    <li>
                      En el caso de haber cursado el Bachillerato Internacional
                      (IB) o IGCSEs + A Levels no es necesario demostrar tu
                      nivel de inglés mediante ninguno de estos exámenes
                      mencionados.
                    </li>
                  </ul>
                </li>
                <li>
                  Un Ap degree o un CFS en las ramas de Marketing, Diseño de
                  moda, Innovación o Branding
                </li>
              </ul>
            </motion.div>
          )}
          <motion.div
            className="carrera-button"
            onClick={() => setIsOpen38(!isOpen38)}
            animate={{
              marginLeft: isOpen38 ? "25.5%" : "11.5%",
              marginTop: isOpen38 ? "20%" : "3%",
            }}
          >
            INFORMACIÓN
          </motion.div>
        </motion.div>
        <motion.div
          className="tarjeta-carreras"
          animate={{
            width: isOpen39 ? "358px" : "260px",
            height: isOpen39 ? "1570px" : "320px",
            marginLeft: isOpen39 ? "2%" : "23%",
          }}
        >
          <motion.div
            className="container-img-carreras"
            animate={{
              width: isOpen39 ? "282px" : "200px",
              height: isOpen39 ? "266px" : "170px",
              marginLeft: isOpen39 ? "18.5%" : "11.5%",
              marginTop: isOpen39 ? "6%" : "3%",
            }}
          >
            <motion.img
              src={topupEmpModa}
              animate={{
                width: isOpen39 ? "257px" : "180px",
                height: isOpen39 ? "242px" : "150px",
              }}
            />
          </motion.div>
          <motion.div
            className="titulo-carrera"
            animate={{
              fontSize: isOpen39 ? "xx-large" : "large",
              paddingLeft: isOpen39 ? "58px" : "3px",
            }}
          >
            TOP-UP EN MARKETING Y BRANDING DE MODA
          </motion.div>
          {isOpen39 && (
            <motion.div className="carrera-info">
              <motion.div className="tabla-incial-carrera">
                <div className="tabla-inicial-carrera-row">
                  <div>DURACIÓN:1,5 AÑOS </div>
                  <div>CRÉDITOS: 90</div>
                </div>
                <div className="tabla-inicial-carrera-row">
                  <div>COMIENZO: AGOSTO</div>
                  <div>PLAZO DE SOLICITUD: FEBRERO</div>
                </div>
              </motion.div>
              <h2>DESCRIPCIÓN</h2>
              <p>
                Con el TOP-UP en Marketing y branding de moda completarás tu
                educación superior y podrás obtener un grado universitario en un
                año y medio si ya tienes un AP degree o un Ciclo de Formación
                Superior. Una vez te gradúes estarás calificado para poder
                dirigir lanzamientos y campañas para la industria textil.
              </p>

              <h2>REQUISITOS ACADÉMICOS</h2>
              <ul>
                <li>
                  Inglés:
                  <ul>
                    <li>
                      TOEFL: con una nota mínima de 83 puntos y una antigüedad
                      inferior a los dos años
                    </li>
                    <li>
                      IELTS: con una nota mínima de 6,5 y una antigüedad
                      inferior a los dos años.
                    </li>
                    <li>
                      Cambridge: CAE con nivel A, B o C o bien FCE con nivel A
                    </li>
                    <li>
                      En el caso de haber cursado el Bachillerato Internacional
                      (IB) o IGCSEs + A Levels no es necesario demostrar tu
                      nivel de inglés mediante ninguno de estos exámenes
                      mencionados.
                    </li>
                  </ul>
                </li>
                <li>
                  Un Ap degree o un CFS en las ramas de Marketing, Diseño de
                  moda, Innovación o Branding
                </li>
              </ul>
            </motion.div>
          )}
          <motion.div
            className="carrera-button"
            onClick={() => setIsOpen39(!isOpen39)}
            animate={{ marginLeft: isOpen39 ? "25.5%" : "11.5%",
            marginTop: isOpen39 ? "20%" : "3%", }}
          >
            INFORMACIÓN
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
