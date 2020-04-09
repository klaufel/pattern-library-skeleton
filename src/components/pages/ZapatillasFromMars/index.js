import React from 'react'
import {GlobalStyle, Wrapper} from './ZapatillasFromMars.styles'

const ZapatillasFromMars = () => (
  <>
    <GlobalStyle />
    <Wrapper>
      <section className="intro">
        <div className="wrap">
          <div className="title">
            <h1>#zapatillasFromMars 👟🚀</h1>
          </div>
          <div className="explanation">
            <p>
              <span>Qué</span> 👉 Aprovechando que tod@s estamos en casa y que
              hay varios eventos cancelados, pensé… ¿por qué no aprovechar estos
              contenidos y montar un pequeño evento online?
            </p>
            <p>
              Hemos organizado evento gratuito en remoto, con 13 charlas de 30
              minutos sobre UI, UX, SEO, performance, neurociencia, creative
              coding, CRO…
            </p>
            <div className="credits">
              <img
                src="https://www.uifrommars.com/zapatillas/assets/arrow-down.svg"
                className="bounce"
                alt="Ir al programa"
                loading="lazy"
                width="54px"
                height="auto"
              />
              <a
                href="https://www.uifrommars.com"
                target="uiFromMars"
                className="gtm_landing-page_uifrommars"
                alt="_blank"
              >
                <img
                  src="https://www.uifrommars.com/zapatillas/assets/uifrommars.svg"
                  alt="uiFromMars"
                  loading="lazy"
                  width="89px"
                  height="auto"
                />
              </a>
              <a
                href="https://www.holaluz.com"
                target="Holaluz"
                className="gtm_landing-page_holaluz"
                alt="_blank"
              >
                <img
                  src="https://www.uifrommars.com/zapatillas/assets/holaluz.svg"
                  alt="Holaluz"
                  loading="lazy"
                  width="96px"
                  height="auto"
                />
              </a>
            </div>
          </div>
          <div className="form">
            <p>
              <span>Cuándo</span> 👉 Sábado 11 de Abril a las 15h hora española
              (en remoto).
            </p>
            <p>
              Qué, ¿te unes? 😉
              <br />
              <a
                className="button gtm_landing-page_apuntate"
                href="http://eepurl.com/gXsoG1"
                alt="Asiste a #zapatillasFromMars"
                target="_blank"
              >
                Apúntate aquí :)
              </a>
            </p>
          </div>
        </div>
      </section>

      <section className="schedule">
        <div className="wrap">
          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th scope="col" width="20%">
                    Hora
                  </th>
                  <th scope="col">Ponente</th>
                  <th scope="col">Charla</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td data-label="Hora">15:00h</td>
                  <td data-label="Ponente">Cris Busquets</td>
                  <td data-label="Charla">Bienvenida</td>
                </tr>
                <tr>
                  <td data-label="Hora">15:30h</td>
                  <td data-label="Ponente">Señor Muñoz</td>
                  <td data-label="Charla">
                    Por qué los SEOs no quieren tantos enlaces
                  </td>
                </tr>
                <tr>
                  <td data-label="Hora">16:00h</td>
                  <td data-label="Ponente">Cristina Santamarina</td>
                  <td data-label="Charla">
                    Diseño en interfaces conversacionales
                  </td>
                </tr>
                <tr>
                  <td data-label="Hora">16:30h</td>
                  <td data-label="Ponente">Joan León</td>
                  <td data-label="Charla">
                    Herramientas de Optimización de Imágenes para diseñadores
                  </td>
                </tr>
                <tr>
                  <td data-label="Hora">17:00h</td>
                  <td data-label="Ponente">Alberto García Ariza</td>
                  <td data-label="Charla">Más de 50 años de Creative Coding</td>
                </tr>
                <tr>
                  <td data-label="Hora">17:30h</td>
                  <td data-label="Ponente">Javier Velilla</td>
                  <td data-label="Charla">
                    ¿Cómo afecta el ciclo de vida de tu producto a tu marca?
                  </td>
                </tr>
                <tr>
                  <td data-label="Hora">18:00h</td>
                  <td data-label="Ponente">Juan Carlos Ruiz</td>
                  <td data-label="Charla">Design tokens con superpoderes</td>
                </tr>
                <tr>
                  <td data-label="Hora">18:30h</td>
                  <td data-label="Ponente">Noemi Cortizas Martínez</td>
                  <td data-label="Charla">
                    CMF: Diseño sensorial o UX fisico/organico
                  </td>
                </tr>
                <tr>
                  <td data-label="Hora">19:00h</td>
                  <td data-label="Ponente">Lo de Producto</td>
                  <td data-label="Charla">Lo de lanzar un SaaS en 30 días</td>
                </tr>
                <tr>
                  <td data-label="Hora">19:30h</td>
                  <td data-label="Ponente">meri Fernandez</td>
                  <td data-label="Charla">Neurociencia y UX</td>
                </tr>
                <tr>
                  <td data-label="Hora">20:00h</td>
                  <td data-label="Ponente">Luz de León</td>
                  <td data-label="Charla">
                    Metodología: diseño de un plan de investigación
                  </td>
                </tr>
                <tr>
                  <td data-label="Hora">20:30h</td>
                  <td data-label="Ponente">Álvaro Bernal</td>
                  <td data-label="Charla">
                    Diseñar como freelance sin morir en el intento
                  </td>
                </tr>
                <tr>
                  <td data-label="Hora">21:00h</td>
                  <td data-label="Ponente">Fani Sánchez</td>
                  <td data-label="Charla">CRO y Diseño basado en datos</td>
                </tr>
                <tr>
                  <td data-label="Hora">21:30h</td>
                  <td data-label="Ponente">Sergio de la Casa</td>
                  <td data-label="Charla">
                    El contrato con el usuario y sus variaciones en tiempos de
                    crisis
                  </td>
                </tr>
                <tr>
                  <td data-label="Hora">22:00h</td>
                  <td data-label="Ponente">Cris Busquets</td>
                  <td data-label="Charla">Despedida y cierre</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="wrap">
          <p>
            una iniciativa de{' '}
            <a
              href="https://www.uifrommars.com"
              alt="uiFromMars"
              target="_blank"
            >
              uiFromMars
            </a>{' '}
            w/
            <a
              href="https://www.twitter.com/cbusquets"
              alt="Cris Busquets"
              target="_blank"
            >
              @cbusquets
            </a>{' '}
            © 2020
          </p>
        </div>
      </footer>
    </Wrapper>
  </>
)

export default ZapatillasFromMars
