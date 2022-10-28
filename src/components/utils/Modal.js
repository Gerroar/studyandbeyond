import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import ExitButton from "./ExitButton";

const backdrop = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
  out: { opacity: 0 },
};

const Modal = ({ showModal, setShowModal, modalOption }) => {
  let component;

  switch (modalOption) {
    case "legal":
      component = (
        <>
          <motion.div className="modal">
            <div className="header-modal">
              <h2>AVISO LEGAL</h2>
              <h4>
                De conformidad con lo establecido en la Ley 34/2002, de 11 de
                julio, de servicios de la sociedad de la información y de
                comercio electrónico, se facilita la siguiente información:
              </h4>
              <h3>1. DATOS IDENTIFICATIVOS</h3>
              <p>
                Usted está visitando la página web www.studyandbeyond.es
                titularidad de STUDY AND BEYOND, con domicilio social en KAREN
                BLIXENS BOULEVARD 10.2.30 (AARHUS, DINAMARCA) , con CVR. (numero
                de registro mercantil danes) 43172794, en adelante TITULAR.
                Puede contactar con el TITULAR por cualquiera de los siguientes
                medios: Teléfono: 635369915 Correo electrónico de contacto:
                info@studyandbeyond.es
              </p>
              <h3>2. USUARIOS</h3>
              <p>
                Mediante este documento ponemos en su conocimiento los términos
                y condiciones que regulan el acceso y uso de los sitios web y
                aplicaciones app móviles del Titular, así como de los servicios
                y contenidos asociados a dichos sitios y aplicaciones (en
                adelante también el/os sitio/s o los sitios web y app móviles).
                El acceso o uso de cualquier interesado a un sitio web y/o app
                del Titular, implica que el interesado adquiere la condición de
                “usuario” y con dicha condición, una serie de derechos y
                obligaciones. Es su responsabilidad acceder a las condiciones
                legales insertas en la presente web y leerlas detenidamente, así
                como, las políticas de privacidad, cookies o en su caso,
                condiciones de venta. Recomendamos: (i) Que visite las mismas
                cada vez que pretenda acceder o utilizar los servicios y
                contenidos del sitio y (ii) Que imprima o almacene en su sistema
                una copia.
              </p>
              <h3>3. USO DEL PORTAL</h3>
              <p>
                Esta web proporciona el acceso a multitud de información,
                servicios, programas o datos (en adelante, “los contenidos”) en
                Internet pertenecientes a el Titular o a sus licenciantes a los
                que el Usuario puede tener acceso. El Usuario asume la
                responsabilidad del uso del portal. Dicha responsabilidad se
                extiende al registro que fuese necesario para acceder a
                determinados servicios o contenidos. En dicho registro el
                Usuario será responsable de aportar información veraz y lícita.
                Como consecuencia de este registro, al Usuario se le puede
                proporcionar una contraseña de la que será responsable,
                comprometiéndose a hacer un uso diligente y confidencial de la
                misma. El Usuario se compromete a hacer un uso adecuado de los
                contenidos y servicios (por ejemplo, servicios de chat, foros de
                discusión o grupos de noticias) que el Titular ofrece a través
                de su portal y con carácter enunciativo pero no limitativo, a no
                emplearlos para:
              </p>
                <ul>
                  <li>
                    Incurrir en actividades ilícitas, ilegales o contrarias a la
                    buena fe y al orden público.
                  </li>
                  <br />
                  <li>
                    Difundir contenidos o propaganda racista, xenófoba,
                    pornográfico-ilegal, de apología del terrorismo oProvocar
                    daños en los sistemas físicos y lógicos del Titular, de sus
                    proveedores o de terceras personas, introducir o difundir en
                    la red virus informáticos o cualesquiera otros sistemas
                    físicos o lógicos que sean atentatoria contra los derechos
                    humanos.
                  </li>
                  <br />
                  <li>
                    Provocar daños en los sistemas físicos y lógicos del
                    Titular, de sus proveedores o de terceras personas,
                    introducir o difundir en la red virus informáticos o
                    cualesquiera otros sistemas físicos o lógicos que sean
                    susceptibles de provocar los daños anteriormente
                    mencionados.
                  </li>
                  <br />
                  <li>
                    Intentar acceder y, en su caso, utilizar las cuentas de
                    correo electrónico de otros usuarios y modificar o manipular
                    sus mensajes.
                  </li>
                  <br />
                  <li>
                    Utilizar el sitio web ni las informaciones que en él se
                    contienen con fines comerciales, políticos, publicitarios y
                    para cualquier uso comercial, sobre todo en el envío de
                    correos electrónicos no solicitados.
                  </li>
                  <br />
                </ul>
              <p>
                El Titular se reserva el derecho a retirar todos aquellos
                comentarios y aportaciones que vulneren el respeto a la dignidad
                de la persona, que sean discriminatorios, xenófobos, racistas,
                pornográficos, que atenten contra la juventud o la infancia, el
                orden o la seguridad pública o que, a su juicio, no resultarán
                adecuados para su publicación. En cualquier caso, el Titular no
                será responsable de las opiniones vertidas por los usuarios a
                través de los foros, chats, u otras herramientas de
                participación.
              </p>
              <h3> 4. PROTECCIÓN DE DATOS</h3>
              <p>
                Todo lo relativo a la política de protección de datos se
                encuentra recogido en el documento de política de privacidad.
              </p>
              <h3>5. CONTENIDOS. PROPIEDAD INTELECTUAL E INDUSTRIAL</h3>
              <p>
                El Titular es propietario de todos los derechos de propiedad
                intelectual e industrial de su página web, así como de los
                elementos contenidos en la misma (a título enunciativo:
                imágenes, fotografías, sonido, audio, vídeo, software o textos;
                marcas o logotipos, combinaciones de colores, estructura y
                diseño, selección de materiales usados, programas de ordenador
                necesarios para su funcionamiento, acceso y uso, etc.),
                titularidad del Titular o bien de sus licenciantes.
              </p>
              <p>
                Todos los derechos reservados. En virtud de lo dispuesto en los
                artículos 8 y 32.1, párrafo segundo, de la Ley de Propiedad
                Intelectual, quedan expresamente prohibidas la reproducción, la
                distribución y la comunicación pública, incluida su modalidad de
                puesta a disposición, de la totalidad o parte de los contenidos
                de esta página web, con fines comerciales, en cualquier soporte
                y por cualquier medio técnico, sin la autorización del Titular.
              </p>
              <h3>6. EXCLUSIÓN DE GARANTÍAS Y RESPONSABILIDAD</h3>
              <p>
                El Usuario reconoce que la utilización de la página web y de sus
                contenidos y servicios se desarrolla bajo su exclusiva
                responsabilidad. En concreto, a título meramente enunciativo, el
                Titular no asume ninguna responsabilidad en los siguientes
                ámbitos:
              </p>
                <ul>
                  <li>
                    La disponibilidad del funcionamiento de la página web, sus
                    servicios y contenidos y su calidad o interoperabilidad.
                  </li>
                  <br />
                  <li>
                    La finalidad para la que la página web sirva a los objetivos
                    del Usuario.
                  </li>
                  <br />
                  <li>
                    La infracción de la legislación vigente por parte del
                    Usuario o terceros y, en concreto, de los derechos de
                    propiedad intelectual e industrial que sean titularidad de
                    otras personas o entidades.
                  </li>
                  <br />
                  <li>
                    La existencia de códigos maliciosos o cualquier otro
                    elemento informático dañino que pudiera causar el sistema
                    informático del Usuario o de terceros. Corresponde al
                    Usuario, en todo caso, disponer de herramientas adecuadas
                    para la detección y desinfección de estos elementos.
                  </li>
                  <br />
                  <li>
                    El acceso fraudulento a los contenidos o servicios por
                    terceros no autorizados, o, en su caso, la captura,
                    eliminación, alteración, modificación o manipulación de los
                    mensajes y comunicaciones de cualquier clase que dichos
                    terceros pudiera realizar.
                  </li>
                  <br />
                  <li>
                    Los daños producidos a equipos informáticos durante el
                    acceso a la página web y los daños producidos a los Usuarios
                    cuando tengan su origen en fallos o desconexiones en las
                    redes de telecomunicaciones que interrumpan el servicio.
                  </li>
                  <br />
                  <li>
                    Los daños o perjuicios que se deriven de circunstancias
                    acaecidas por caso fortuito o fuerza mayor.
                  </li>
                  <br />
                </ul>
              <p>
                En caso de que existan foros, el uso de los mismos u otros
                espacios análogos, ha de tenerse en cuenta que los mensajes
                reflejen únicamente la opinión del Usuario que los remite, que
                es el único responsable. El Titular no se hace responsable del
                contenido de los mensajes enviados por el Usuario.
              </p>
              <h3>7. MODIFICACIÓN DE ESTE AVISO LEGAL Y DURACIÓN</h3>
              <p>
                EL TITULAR se reserva el derecho de efectuar sin previo aviso
                las modificaciones que considere oportunas en su portal,
                pudiendo cambiar, suprimir o añadir tantos contenidos y
                servicios que se presten a través de la misma, como la forma en
                la que éstos aparezcan representados o localizados en su portal.
              </p>
              <p>
                La vigencia de las citadas condiciones irá en función de su
                exposición y estarán vigentes hasta que sean modificadas por
                otras debidamente publicadas.
              </p>
              <h3>8. ENLACES</h3>
              <p>
                En el caso de que en www.studyandbeyond.es se incluyesen enlaces
                o hipervínculos hacia otros sitios de Internet, el Titular no
                ejercerá ningún tipo de control sobre dichos sitios y
                contenidos. En ningún caso el Titular asumirá responsabilidad
                alguna por los contenidos de algún enlace perteneciente a un
                sitio web ajeno, ni garantizará la disponibilidad técnica,
                calidad, fiabilidad, exactitud, amplitud, veracidad, validez y
                constitucionalidad de cualquier materia o información contenida
                en ninguno de dichos hipervínculos y otros sitios en Internet.
                Igualmente, la inclusión de estas conexiones externas no
                implicará ningún tipo de asociación, fusión o participación con
                las entidades conectadas.
              </p>
              <h3>9. DERECHOS DE EXCLUSIÓN</h3>
              <p>
                El Titular ser reserva el derecho a denegar o retirar el acceso
                al portal y/o los servicios ofrecidos sin necesidad de
                advertencia previa, a instancia propia o de un tercero, a
                aquellos usuarios que incumplan el contenido de este aviso
                legal.
              </p>
              <h3>10. GENERALIDADES</h3>
              <p>
                El Titular perseguirá el incumplimiento de las presentes
                condiciones así como cualquier utilización indebida de su portal
                ejerciendo todas las acciones civiles y penales que le puedan
                corresponder en derecho.
              </p>
              <h3>11. LEGISLACIÓN APLICABLE Y JURISDICCIÓN</h3>
              <p>
                La relación entre el Titular y el Usuario se regirá por la
                normativa española vigente. Todas las disputas y reclamaciones
                derivadas de este aviso legal se resolverán por los juzgados y
                tribunales españoles del consumidor y usuario.
              </p>
              <h3>12. MENORES DE EDAD</h3>
              <p>
                Esta web dirige sus servicios a usuarios mayores de 14 años. Los
                menores de esta edad no están autorizados a utilizar nuestros
                servicios y no deberán, por tanto, enviarnos sus datos
                personales. Informamos de que si se da tal circunstancia, el
                Titular no se hace responsable de las posibles consecuencias que
                pudieran derivarse del incumplimiento del aviso que en esta
                misma cláusula se establece.
              </p>
              <h3>13. MEDIDAS DE SEGURIDAD.- SSL</h3>
              <p>
                El Titular ha contratado para su sitio web un certificado SSL
                («Secure Sockets Layer»).
              </p>
              <p>
                Un certificado SSL permite cifrar y proteger toda la información
                personal y confidencial que se pueda manejar en un sitio web,
                independientemente de la información que se esté transmitiendo,
                como por ejemplo, desde cualquiera de los formularios de
                contacto del sitio web hasta el servidor, o los datos
                introducidos para la suscripción de boletines de noticias o
                accesos a las áreas protegidas, etc.
              </p>
              <p>
                La dirección del sitio web aparecerá en color verde, activándose
                el protocolo “https” que permite conexiones seguras desde un
                servidor web al navegador del usuario.
              </p>
              <br />
              <br />
              <br />
              <br />
              <br />
            </div>
          </motion.div>
          <ExitButton setShowModal={setShowModal} />
          <motion.div className="gradient-border"></motion.div>
        </>
      );
      break;
    case "priv":
      component = (
        <>
          <motion.div className="modal">
            <div className="header-modal">
              <h2>POLÍTICA DE PRIVACIDAD</h2>
              <h4>
                El objetivo de esta política es informar a los interesados
                acerca de los distintos tratamientos realizados por esta
                organización mediante la página web y que afecten a sus datos
                personales de conformidad con lo establecido en la Ley Orgánica
                3/2018, de 5 de diciembre, de Protección de Datos Personales y
                garantía de los derechos digitales y el Reglamento (UE) 2016/679
                del Parlamento Europeo y del Consejo de 27 de abril de 2016.
              </h4>
              <h3>1. IDENTIFICACIÓN Y DATOS DE CONTACTO DEL RESPONSABLE.</h3>
              <p>
                La organización STUDY AND BEYOND domiciliada en la KAREN BLIXENS
                BOULEVARD 10.2.30 (AARHUS, DINAMARCA) , con CVR. (numero de
                registro mercantil danes) 43172794 , teléfono de contacto:
                635369915 y correo electrónico info@studyandbeyond.es .
              </p>
              <h3>2. FINALIDADES DEL TRATAMIENTO DE SUS DATOS PERSONALES.</h3>
              <p>
                USUARIOS/NAVEGANTES DE LA PÁGINA WEB DEL RESPONSABLE. Trataremos
                sus datos de carácter personal facilitados a través de nuestros
                formularios web para:
              </p>
                <ul>
                  <li>
                    Atender a las solicitudes, quejas e incidencias trasladadas
                    a través de nuestros canales de contacto incorporados en la
                    página web.
                  </li>
                  <br />
                  <li>
                    Entender el comportamiento del navegante dentro de la web
                    con el fin de detectar posibles ataques informáticos a
                    nuestra web.
                  </li>
                  <br />
                  <li>
                    Cumplir con las obligaciones legales que nos resulten
                    directamente aplicables y regulen nuestra actividad.
                  </li>
                  <br />
                  <li>
                    Para proteger y ejercer nuestros derechos o responder ante
                    reclamaciones de cualquier índole.
                  </li>
                  <br />
                  <li>
                    En su caso, envío de comunicaciones comerciales relativas a
                    los bienes o servicios que conforman nuestra actividad., y/o
                    noticias o boletines relacionados con nuestro sector
                  </li>
                  <br />
                  <li>Gestionar y enviarle el presupuesto solicitado.</li>
                  <br />
                  <li>
                    Gestionar, administrar, supervisar su actividad en el
                    blog/foro incorporado.
                  </li>
                  <br />
                </ul>
              <p>CLIENTES.</p>
              <p>
                Trataremos sus datos de carácter personal facilitados a través
                de nuestros formularios web para:
              </p>
                <ul>
                  <li>La gestión de la relación comercial</li>
                  <li>
                    La prestación de los servicios que nos haya contratado.
                  </li>
                  <li>
                    Gestiones relacionadas con el envío y recepción del producto
                    adquirido a través de esta página web.
                  </li>
                  <li>La gestión administrativa, contable y fiscal.</li>
                  <li>
                    Atender a las solicitudes, quejas e incidencias trasladadas
                    a través de nuestros canales de contacto incorporados en la
                    página web.
                  </li>
                  <li>
                    Entender el comportamiento del navegante dentro de la web
                    con el fin de detectar posibles ataques informáticos a
                    nuestra web.
                  </li>
                  <li>
                    En su caso, realizar encuestas de calidad que nos permitan
                    evaluar nuestro servicio.
                  </li>
                  <li>
                    En su caso, envío de comunicaciones comerciales relativas a
                    los bienes o servicios que conforman nuestra actividad., y/o
                    noticas o boletines relacionados con nuestro sector.
                  </li>
                  <li>
                    Cumplir con las obligaciones legales que nos resulten
                    directamente aplicables y regulen nuestra actividad.
                  </li>
                  <li>
                    Para proteger y ejercer nuestros derechos o responder ante
                    reclamaciones de cualquier índole.
                  </li>
                </ul>
              <h3>3. BASE JURÍDICA DEL TRATAMIENTO.</h3>
              <p>
                USUARIOS/NAVEGANTES EN LA PÁGINA WEB DEL RESPONSABLE.
              </p>
                <ul>
                  <li>
                    En el consentimiento que nos has prestado para tratar tus
                    datos con las finalidades indicadas. La negativa a facilitar
                    sus datos personales conllevara la imposibilidad de tratar
                    sus datos con las finalidades mencionadas.
                  </li>
                  <li>
                    Para cumplir con las obligaciones legales que se nos
                    aplican. En este caso, el interesado no podrá negarse al
                    tratamiento de los datos personales.
                  </li>
                  <li>
                    En nuestro interés legítimo de proteger nuestra imagen,
                    negocio y trayectoria evitando ataques a nuestra página web.
                    En este caso, el interesado no podrá negarse al tratamiento
                    de los datos personales, aunque podrá ejercer, en su caso,
                    los derechos reconocidos en el apartado octavos de la
                    presente política.
                  </li>
                </ul>
              <p>
                CLIENTES
              </p>
                <ul>
                  <li>
                    Ejecución de un contrato en el que sea parte o aplicación de
                    medias precontractuales. La negativa a facilitar sus datos
                    personales conllevara la imposibilidad de tratar sus datos
                    con las finalidades mencionadas.
                  </li>
                  <li>
                    En el consentimiento que nos has prestado para tratar tus
                    datos respecto de las finalidades ajenas al desarrollo o
                    ejecución del contrato existente. La negativa a facilitar
                    sus datos personales conllevara la imposibilidad de tratar
                    sus datos con las finalidades mencionadas.
                  </li>
                  <li>
                    Para cumplir con las obligaciones legales que se nos
                    aplican. En este caso, el interesado no podrá negarse al
                    tratamiento de los datos personales.
                  </li>
                  <li>
                    En nuestro interés legítimo de proteger nuestra imagen,
                    negocio y trayectoria evitando ataques a nuestra página web.
                    En este caso, el interesado no podrá negarse al tratamiento
                    de los datos personales, aunque podrá ejercer, en su caso,
                    los derechos reconocidos en el apartado octavos de la
                    presente política.
                  </li>
                </ul>
              <h3>4. PLAZOS O CRITERIOS DE CONSERVACIÓN DE LOS DATOS.</h3>
              <p>
                Los datos personales proporcionados se conservarán durante el
                tiempo necesario para cumplir con las finalidades para los que
                fueron recopilados inicialmente.
                <br />
                <br />
                Una vez que los datos dejen de ser necesarios para el
                tratamiento en cuestión, estos se mantendrán debidamente
                bloqueados para, en su caso, ponerlos a disposición de las
                Administraciones y Organismos Públicas competentes, Jueces y
                Tribunales o el Ministerio Fiscal, durante el plazo de
                prescripción de las acciones que pudieran derivarse de la
                relación mantenida con el cliente y/o los plazos de conservación
                previstos legalmente.
                <br />
                <br />
                En el caso de que nos hayas facilitado tu curriculum,
                conservaremos tus datos durante el periodo máximo de un año
                desde la recepción del mismo por parte de la entidad, salvo que
                nos hayas autorizado a mantener tus datos por un periodo de
                conservación mayor al indicado.
                <br />
                <br />
                <u>Periodo de bloqueo de los datos:</u>
                <br />
                <br />
              </p>
                <ul>
                  <li>
                    EL CÓDIGO CIVIL. Entre 5 o 15 años según el caso, atendiendo
                    a lo dispuesto en el artículo 1964.2 del cuerpo legal
                    mencionado.
                  </li>
                  <br />
                  <li>
                    EL CÓDIGO DEL COMERCIO. Durante 6 años, atendiendo a
                    dispuesto en el artículo 30 del cuerpo legal mencionado. Se
                    aplica respecto de la información mercantil relacionada con
                    (facturas emitidas y recibidas, tickets, facturas
                    rectificativas, documentos bancarios, etc.).
                  </li>
                  <br />
                  <li>
                    LA LEY GENERAL TRIBUTARIA. Durante 4 años atendiendo a
                    dispuesto en los artículos 66 a 70 del cuerpo legal
                    mencionado. Se aplica a la información relacionada con las
                    obligaciones fiscales.
                  </li>
                  <br />
                </ul>
                <br />
              <h3>5. DECISIONES AUTOMATIZADAS Y ELABORACIÓN DE PERFILES.</h3>
              <p>
                La página web no toma decisiones automatizadas ni elabora
                perfiles.
              </p>
              <h2>6. DESTINATARIOS.</h2>
              <p>
                Durante el periodo de duración del tratamiento de sus datos
                personales, organización podrá ceder sus datos a los siguientes
                destinatarios:
              </p>
              <ul>
                <li>Jueces y Tribunales.</li>
                <li>Fuerzas y Cuerpos de Seguridad del Estado.</li>
                <li>
                  Otras autoridades u organismos públicos competentes, cuando el
                  responsable tenga la obligación legal de facilitar los datos
                  personales.
                </li>
                <li>
                  Bancos y Entidades Financieras, en el caso de que nos
                  contrate.
                </li>
              </ul>
              <h3>7. TRANSFERENCIAS INTERNACIONALES DE DATOS.</h3>
              <p>
                La organización no realiza Transferencia Internacional de Datos
                alguna.
              </p>
              <h3>8. DERECHOS.</h3>
              <p>
                Los interesados podrán ejercer en cualquier momento y de forma
                totalmente gratuita los derechos de acceso, rectificación y
                supresión, así como solicitar que se limite el tratamiento de
                sus datos personales, oponerse al mismo, solicitar la
                portabilidad de estos (siempre que sea técnicamente posible) o
                retirar el consentimiento prestado, y en su caso, cuando
                proceda, a no ser objeto de una decisión basada únicamente en un
                tratamiento automatizado, incluido la elaboración de perfiles.
                <br />
                <br />
                Para ello podrá emplear los formularios habilitados por la
                organización, o bien dirigir un escrito a la dirección postal o
                correo electrónico arriba indicadas. En cualquier caso, su
                solicitud deberá acompañarse de una fotocopia de su D.N.I. o
                documento equivalente, con la finalidad de acreditar su
                identidad.
                <br />
                <br />
                En caso de que sienta vulnerados sus derechos en lo concerniente
                a la protección de sus datos personales, especialmente cuando no
                haya obtenido satisfacción en el ejercicio de sus derechos,
                puede presentar una reclamación ante la Autoridad de Control en
                materia de Protección de Datos competente (Agencia Española de
                Protección de Datos), a través de su sitio web: www.agpd.es.
                <br />
                <br />
                En cumplimiento de lo dispuesto en el artículo 21 de la Ley
                34/2002 de servicios de la sociedad de la información y comercio
                electrónico, si usted no desea recibir más información sobre
                nuestros servicios, puede darse de baja enviando un correo
                electrónico a la dirección info@studyandbeyond.es , con asunto
                “BAJAS”.
                <br />
                <br />
              </p>
              <h3>9. VERACIDAD DE LOS DATOS.</h3>
              <p>
                El interesado garantiza que los datos aportados son verdaderos,
                exactos, completos y se encuentran actualizados;
                comprometiéndose a informar de cualquier cambio respecto de los
                datos que aportara, por los canales habilitados al efecto e
                indicados en el punto uno de la presente política. Será
                responsable de cualquier daño o perjuicio, tanto directo como
                indirecto, que pudiera ocasionar como consecuencia del
                incumplimiento de la presente obligación.
                <br />
                <br />
                En el supuesto de que el usuario facilite datos de terceros,
                declara que cuenta con el consentimiento de los interesados y se
                compromete a trasladarle la información contenida en esta
                cláusula, eximiendo a la organización de cualquier
                responsabilidad derivada por la falta de cumplimiento de la
                presente obligación.
              </p>
              <h3>10. REDES SOCIALES</h3>
              <p>
                Las Redes Sociales forman parte del día a día de muchos usuarios
                de Internet, y para ellos la Entidad ha creado distintos
                perfiles en algunas de ellas.
                <br />
                <br />
                Todos los usuarios que visitan nuestra página web tienen la
                oportunidad de unirse a nuestras redes sociales o grupos.
                <br />
                <br />
                Sin embargo, debes tener en cuenta que, salvo que le solicitemos
                sus datos directamente (por ejemplo, mediante acciones de
                marketing, concursos, promociones, o cualquier otra forma
                válida), sus datos pertenecerán a la Red Social correspondiente,
                por lo que le recomendamos que lea detenidamente sus condiciones
                de uso y políticas de privacidad, así como, se asegure de
                configurar sus preferencias en cuanto al tratamiento de los
                datos.
                <br />
                <br />
              </p>
              <h3>11. MODIFICACIONES/ ACTUALIZACIÓN</h3>
              <p>
                La presente política de privacidad puede verse
                modificada/actualizada en función de las exigencias legales
                establecidas o con la finalidad de adaptar dicha política a las
                instrucciones dictadas por la Agencia Española de Protección de
                Datos o cambios en nuestro sitio web.
                <br />
                <br />
                Por esta razón, aconsejamos a los usuarios que visiten
                periódicamente nuestra política de privacidad.
                <br />
                <br />
                Si tiene dudas acerca de esta política, puede contactar con
                STUDY AND BEYOND a través del siguiente correo electrónico:
                info@studyandbeyond.es
                <br />
                <br />
              </p>
              <br />
              <br />
              <br />
              <br />
            </div>
          </motion.div>
          <ExitButton setShowModal={setShowModal} />
          <motion.div className="gradient-border"></motion.div>
        </>
      );
      break;
    case "cookies":
      component = (
        <>
          <motion.div className="modal">
            <div className="header-modal">
              <h2>POLÍTICA DE COOKIES</h2>
              <h4>
                Tras una auditoría realizada para la información sobre las
                Cookies que se usan en esta web, os informamos:
              </h4>
              <h3>Nuestra Política de Cookies</h3>
              <p>
                La LSSI-CE, obliga a todos los que tenemos un blog o una web a
                advertir al usuario de la existencia de cookies, informar sobre
                ellas y requerir permiso para descargarlas.
                <br />
                <br />
                Artículo 22.2 de la Ley 34/2002. “Los prestadores de servicios
                podrán utilizar dispositivos de almacenamiento y recuperación de
                datos en equipos terminales de los destinatarios, a condición de
                que los mismos hayan dado su consentimiento después de que se
                les haya facilitado información clara y completa sobre su
                utilización, en particular, sobre los fines del tratamiento de
                los datos, con arreglo a lo dispuesto en la Ley Orgánica
                15/1999, de 13 de diciembre, de Protección de Datos de Carácter
                Personal”.
                <br />
                <br />
                Como responsable de esta web, Study and Beyond se ha encargado
                de cumplir con el máximo rigor el artículo 22.2 el de la Ley
                34/2002 de Servicios de la Sociedad de la Información y Comercio
                Electrónico referente a las cookies, no obstante, teniendo en
                cuenta la forma en la que funciona Internet y los sitios web, no
                siempre es posible contar con información actualizada de las
                cookies que terceras partes puedan utilizar a través de este
                sitio web.
                <br />
                <br />
                Esto se aplica especialmente a casos en los que esta página web
                contiene elementos integrados: es decir, textos, documentos,
                imágenes o breves películas que se almacenan en otra parte, pero
                se muestran en nuestro sitio web.
                <br />
                <br />
                Por consiguiente, en caso de que se encuentre con este tipo de
                cookies en este sitio web y no estén enumeradas en la lista
                siguiente, le rogamos que nos lo comunique al email
                info@studyandbeyond.es . También puede ponerse en contacto
                directamente con el tercero para pedirle información sobre las
                cookies que coloca, la finalidad y la duración de la cookie, y
                cómo ha garantizado su privacidad
                <br />
                <br />
              </p>
              <h3>Previo.- ¿Qué son las Cookies?</h3>
              <p>
                Las cookies constituyen una herramienta empleada por los
                servidores Web para almacenar y recuperar información acerca de
                sus visitantes. No es más que un fichero de texto que algunos
                servidores piden a nuestro navegador que escriba en nuestro
                disco duro, con información acerca de lo que hemos estado
                haciendo por sus páginas. Poseen una fecha de caducidad, que
                puede oscilar desde el tiempo que dure la sesión hasta una fecha
                futura especificada, a partir de la cual dejan de ser
                operativas.
              </p>
              <h3>Las cookies que utiliza esta web</h3>
              <p>
                En esta web se utilizan cookies propias y de terceros para
                conseguir que tengas una mejor experiencia de navegación, puedas
                compartir contenido en redes sociales, para mostrarte anuncios
                en función a tus intereses y para obtener estadísticas de
                usuarios.
                <br />
                <br />
                Las cookies empleadas en www.studyandbeyond.es se asocian
                únicamente con un Usuario anónimo y su ordenador, no
                proporcionan referencias que permitan deducir el nombre y
                apellidos del Usuario y no pueden leer datos de su disco duro ni
                incluir virus en sus textos. Asimismo, www.studyandbeyond.es no
                puede leer las cookies implantadas en el disco duro del Usuario
                desde otros servidores.
                <br />
                <br />
                El usuario puede libremente decidir acerca de la implantación o
                no en su disco duro de las cookies empleadas en
                www.studyandbeyond.es . En este sentido, el usuario puede
                configurar su navegador para aceptar o rechazar por defecto
                todas las cookies o para recibir un aviso en pantalla de la
                recepción de cada cookie y decidir en ese momento su
                implantación o no en su disco duro. Para ello le sugerimos
                consultar la sección de ayuda de su navegador para saber cómo
                cambiar la configuración que actualmente emplea. Aun cuando el
                Usuario configurar su navegador para rechazar todas las cookies
                o rechazar expresamente las cookies de www.studyandbeyond.es
                podrá navegar por el Portal con el único inconveniente de no
                poder disfrutar de las funcionalidades del Portal que requieran
                la instalación de alguna de ellas. En cualquier caso, el Usuario
                podrá eliminar las cookies implantadas en su disco duro en
                cualquier momento, siguiendo el procedimiento establecido en la
                sección de ayuda de su navegador y que posteriormente
                detallaremos.
                <br />
                <br />
                Como usuario, puedes rechazar el tratamiento de los datos o la
                información bloqueando estas cookies mediante la configuración
                apropiada de tu navegador. Sin embargo, debes saber que, si lo
                haces, este sitio no funciona adecuadamente.
                <br />
                <br />
                Según los términos incluidos en el artículo 22.2 de la Ley
                34/2002 de Servicios de la Sociedad de la Información y Comercio
                Electrónico, si continúas navegando, estarás prestando tu
                consentimiento para el empleo de las cookies que detallo a
                continuación.
                <br />
                <br />
                Las cookies de esta web ayudan a:</p>
                <br />
                <br />
                <ul>
                  <li>Hacer que esta web funcione correctamente</li>
                  <br />
                  <li>
                    Ahorrarle el tener que iniciar sesión cada vez que visitas
                    este sitio
                  </li>
                  <br />
                  <li>Recordarte tus ajustes durante y entre las visitas</li>
                  <br />
                  <li>Permitirte visualizar videos</li>
                  <br />
                  <li>Mejorar la velocidad / seguridad del sitio</li>
                  <br />
                  <li>Que pueda compartir páginas con redes sociales</li>
                  <br />
                  <li>Mejorar continuamente de este sitio web</li>
                  <br />
                  <li>
                    Mostrarte anuncios en función de tus hábitos de navegación
                  </li>
                  <br />
                </ul>
                <br />
                <br />
                <p>No utilizaremos jamás cookies para:</p>
                <br />
                <br />
                <ul>
                  <li>
                    Recoger información de identificación personal (sin tu
                    permiso expreso)
                  </li>
                  <br />
                  <li>Recoger información sensible (sin tu permiso expreso)</li>
                  <br />
                  <li>
                    Compartir datos de identificación personal a terceros{" "}
                  </li>
                  <br />
                </ul>
                <br />
                <br />
              <h3>¿Cómo puedo gestionar y desactivar estas cookies?</h3>
              <p>
                En el caso de no desear que el sitio web no instale ninguna
                cookie en tu equipo, cabe la posibilidad de adaptar tu navegador
                de modo que se te notifique antes de que se descargue ninguna
                cookie.
                <br />
                <br />
                Así las cosas, se puede igualmente modificar la configuración
                del navegador de forma que rechace todas las cookies o
                únicamente las cookies de terceros. También puedes eliminar
                cualquiera de las cookies que ya se encuentren en tu equipo. Ten
                en cuenta que tendrás que adaptar por separado la configuración
                de cada navegador y equipo que utilices.
                <br />
                <br />
                Study and Beyond pone a disposición de los usuarios que quieran
                impedir la instalación de las mencionadas cookies, enlaces
                facilitados al efecto por navegadores cuyo uso se considera más
                extendido:
                <br />
                <br />
                Google Chrome – Internet Explorer – Mozilla Firefox – Apple
                Safari – Opera
              </p>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
            </div>
          </motion.div>
          <ExitButton setShowModal={setShowModal} />
          <motion.div className="gradient-border"></motion.div>
        </>
      );
      break;
    case "cancel":
      component = (
        <>
          <motion.div className="modal">
            <div className="header-modal">
              <h2>POLÍTICA DE CANCELACIONES Y DEVOLUCIONES</h2>
              <p>
                Si el cliente desea cancelar el servicio contratado, deberá
                hacerlo por escrito a la siguiente dirección de correo
                electrónico: info@studyandbeyond.es .
                <br />
                <br />
                El cliente tiene derecho a la devolución del importe de los
                servicios contratados en los siguientes términos y condiciones:
                <br />
                <br />
                Tiene derecho a la devolucion del importe inicial (700€)
                unicamente si la notificacion de cancelacion se efectua antes
                del plazo de 14 dias naturales desde la firma del contrato de
                prestacion de servicios, siempre y cuando el proceso de
                orientacion y tramitacion de admision no haya sido comenzado. En
                el caso de que hayan transcurrido mas de 14 dias naturales y/o
                el proceso de tramitacion haya sido empezado de parte de STUDY
                AND BEYOND, el cliente no tiene derecho a la devolucion del
                primer importe inicial.
                <br />
                <br />
                Por lo que respecta al otro 50% de los honorarios (700€), el
                CLIENTE esta exento de abonar esta quantia siempre y cuando no
                haya sido admitido en ninguna institucion educativa solicitada.
                <br />
                <br />
                Si el CLIENTE es admitido, ya sea mediante admision condicional
                o fija/definitiva, pero decide no hacer uso de su admision,
                rechazar la plaza o no iniciar sus estudios, esta obligado a
                hacer el segundo abono de 700€ en un plazo de 7 dias naturales,
                como indicado tambien en el contrato.
                <br /><br />
              </p>
              <br /><br /><br /><br />
            </div>
          </motion.div>
          <ExitButton setShowModal={setShowModal} />
          <motion.div className="gradient-border"></motion.div>
        </>
      );
      break;
    default:
      break;
  }

  return (
    <AnimatePresence exitBeforeEnter>
      {showModal && (
        <motion.div
          className="backdrop"
          variants={backdrop}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          {component}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
