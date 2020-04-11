import styled, {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`

  :root {
    --dark-bg: ${props => props.theme.colors.primary.dark};
    --mark: ${props => props.theme.colors.primary.light};
    --bg: ${props => props.theme.colors.primary.main};
    --manatee: ${props => props.theme.colors.neutral.percent20};
    --alto: ${props => props.theme.colors.neutral.percent05};
    --white: ${props => props.theme.colors.neutral.percent00};
  }

  @font-face {
    font-family: 'Px Grotesk';
    src: url('https://www.uifrommars.com/zapatillas/fonts/Px-Grotesk-Bold.woff2') format('woff2');
    font-weight: 700;
    font-style: normal;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body,
  .sbdocs.sbdocs-preview div[id^="story--pages"] {
    background-color: var(--dark-bg);
    font-family: -apple-system, BlinkMacSystemFont, Helvetica Neue, Helvetica, Arial, sans-serif;
    font-weight: 600;
    font-size: ${props => props.theme.typography.body.normal.fontSize};
    color: var(--manatee);
  }
`

export const Wrapper = styled.div`
  margin: -16px;

  p > span {
    color: var(--white);
  }

  h1 {
    font-family: 'Px Grotesk', Helvetica, Arial, sans-serif;
    font-weight: ${props => props.theme.typography.heading.big.fontWeight};
    font-size: ${props => props.theme.typography.heading.big.fontSize};
    line-height: ${props => props.theme.typography.heading.big.lineHeight};
    color: var(--white);
  }

  table,
  p {
    display: inline-block;
    font-size: ${props => props.theme.typography.body.normal.fontSize};
    margin-bottom: 1.5rem;
  }

  table {
    display: inline-table;
  }

  mark {
    background-color: var(--mark);
    color: var(--white);
    padding: 0.125rem 0.5rem 0.25rem;
  }

  table {
    border-collapse: collapse;
    margin: 0;
    padding: 0;
    width: 100%;
    table-layout: fixed;
  }

  table caption {
    font-size: 1.5em;
    margin: 0.5em 0 0.75em;
  }

  table tr {
    border-bottom: 1px solid var(--manatee);
    padding: 0.35em;
  }

  table th,
  table td {
    padding: 0.625em;
    text-align: left;
  }

  table th {
    color: var(--white);
  }

  @media (max-width: 768px) {
    table {
      border: 0;
    }

    table caption {
      font-size: 1.3em;
    }

    table thead {
      border: none;
      clip: rect(0 0 0 0);
      height: 1px;
      margin: -1px;
      overflow: hidden;
      padding: 0;
      position: absolute;
      width: 1px;
    }

    table th,
    table td {
      padding-left: 0;
      padding-right: 0;
    }

    table tr {
      border-bottom: 1px solid var(--manatee);
      display: block;
      margin-bottom: 1.5rem;
    }

    table td {
      border-bottom: 1px solid var(--manatee);
      display: block;
      text-align: left;
    }

    table td::before {
      /*
      * aria-label has no advantage, it won't be read inside a table
      content: attr(aria-label);
      */
      /* content: attr(data-label); */
      float: left;
      color: var(--white);
    }

    table td:first-child {
      color: var(--white);
      border-bottom: 0;
      padding-bottom: 0;
    }

    table td:nth-child(2) {
      border-bottom: 0;
      padding-bottom: 0;
    }

    table td:last-child {
      border-bottom: 0;
    }
  }

  a.button {
    background-color: var(--alto);
    color: #111;
    display: block;
    margin: 1.5rem 0 0 0;
    padding: 1rem 5.5rem;
    border-radius: 0.5rem;
    width: auto;
    text-align: center;
    text-decoration: none;
    animation: none;
    position: relative;
    transition: all 0.2s ease-out;
  }

  a.button:hover {
    background: var(--white);
    transform: translateY(-2px);
    transition: all 0.2s ease-out;
  }

  section.intro,
  section.schedule,
  footer {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    margin: 0;
    height: auto;
  }

  div.wrap {
    display: flex;
    flex-flow: row wrap;
    padding-left: 1rem;
    padding-right: 1rem;
    margin: 5.5rem 0;
    width: 1366px;
    justify-content: center;
  }

  div.wrap:first-of-type {
    margin: 8.75rem 0 5.5rem 0;
  }

  div.title {
    flex: 1 1 100%;
    margin-bottom: 20px;
  }

  div.explanation {
    flex: 1 0 48%;
    height: auto;
    order: 1;
    margin: 0 1rem 0 0;
  }

  div.form {
    flex: 1 0 48%;
    height: auto;
    order: 2;
    margin: 0 0 0 1rem;
  }

  div.credits {
    display: flex;
    flex-direction: row;
    margin: 1rem 0 0 0;
  }

  div.credits > a img {
    border: 0;
    margin-right: 2rem;
  }

  div.credits > img:first-of-type {
    margin-right: 2.5rem;
  }

  div.credits > a:hover img {
    opacity: 0.5;
  }

  section.schedule {
    background-color: var(--bg);
  }

  div.table-wrapper {
    max-width: 70%;
    min-width: 70%;
    overflow-x: auto;
    overflow-y: hidden;
  }

  footer a {
    color: var(--white);
  }

  footer a:hover {
    text-decoration: none;
  }

  .bounce {
    animation: bounce 5s infinite;
  }

  @keyframes bounce {
    0%,
    25%,
    50%,
    75%,
    100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-8px);
    }
    60% {
      transform: translateY(-8px);
    }
  }

  @media (max-width: 768px) {
    div.wrap {
      margin: 2.5rem 0;
    }
    div.wrap:first-of-type {
      margin: 3.5rem 0;
    }
    div.title {
      margin: 0;
    }
    div.explanation,
    div.title,
    div.form {
      flex: 1 1 100%;
      padding-right: 0;
    }
    div.credits {
      margin: 1rem 0 1.5rem 0;
    }
    div.credits > img:first-of-type {
      display: none;
    }
    h1 {
      font-size: 1.5rem;
    }
    p {
      font-size: 1rem;
    }
    table {
      font-size: 1rem;
    }
    div.table-wrapper {
      min-width: 100%;
    }
    mark {
      padding: 0.125rem 0.25rem 0.125rem;
    }
    div.cookieinfo span {
      font-size: 0.75rem;
    }
    div.cookieinfo-close {
      float: none !important;
    }
  }
`
