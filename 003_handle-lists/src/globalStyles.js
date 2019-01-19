import { createGlobalStyle } from 'styled-components';

/* eslint no-unused-expressions: 0 */
const GlobalStyles = createGlobalStyle`
  html {
    -webkit-text-size-adjust: 100%;
    box-sizing: border-box;
    font-size: 100%;
    line-height: 1.15;
  }
  *,
  :after,
  :before {
    -webkit-box-sizing: inherit;
    box-sizing: inherit;
  }
  body {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    background: #fff;
    /* color: #; */
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    line-height: 1.5;
    margin: 0;
    padding: 0;
  }
  img {
    -ms-interpolation-mode: bicubic;
    display: inline-block;
    height: auto;
    max-width: 100%;
    vertical-align: middle;
    border-style: none;
  }
  textarea {
    border-radius: 0;
    height: auto;
    min-height: 50px;
  }
  select {
    -webkit-box-sizing: border-box;
    border-radius: 0;
    box-sizing: border-box;
    width: 100%;
  }
  .map_canvas embed,
  .map_canvas img,
  .map_canvas object,
  .mqa-display embed,
  .mqa-display img,
  .mqa-display object {
    max-width: none !important;
  }
  button {
    appearance: none;
    background: transparent;
    border: 0;
    border-radius: 0;
    cursor: auto;
    line-height: 1;
    outline: 0;
    padding: 0;
  }
  pre {
    overflow: auto;
  }
  ol,
  ul {
    list-style: none;
    margin-left: 0;
    padding: 0;
  }
  a {
    color: inherit;
    text-decoration: none;
    background-color: transparent;
  }
  h1 {
    font-size: 2em;
    margin: 0.67em 0;
  }
  h1, h2, h3, h4, h5, h6{
    /*  */
  }
  hr {
    -webkit-box-sizing: content-box;
    box-sizing: content-box;
    height: 0;
    overflow: visible;
  }
  pre {
    font-family: 'Open Sans', sans-serif;
    font-size: 1em;
  }
  abbr[title] {
    -webkit-text-decoration: underline dotted;
    border-bottom: none;
    text-decoration: underline;
    text-decoration: underline dotted;
  }
  b,
  strong {
    font-weight: bolder;
  }
  code,
  kbd,
  samp {
    font-family: monospace, monospace;
    font-size: 1em;
  }
  small {
    font-size: 80%;
  }
  sub,
  sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }
  sub {
    bottom: -0.25em;
  }
  sup {
    top: -0.5em;
  }

  button,
  input,
  optgroup,
  select,
  textarea {
    font-size: 100%;
    line-height: 1.15;
    margin: 0;
    font-family: inherit;

  }
  button,
  input {
    overflow: visible;
  }
  button,
  select {
    text-transform: none;
  }
  [type='button'],
  [type='reset'],
  [type='submit'],
  button {
    -webkit-appearance: button;
  }
  [type='button']::-moz-focus-inner,
  [type='reset']::-moz-focus-inner,
  [type='submit']::-moz-focus-inner,
  button::-moz-focus-inner {
    border-style: none;
    padding: 0;
  }
  [type='button']:-moz-focusring,
  [type='reset']:-moz-focusring,
  [type='submit']:-moz-focusring,
  button:-moz-focusring {
    outline: 1px dotted ButtonText;
  }
  fieldset {
    padding: 0.35em 0.75em 0.625em;
  }
  legend {
    box-sizing: border-box;
    color: inherit;
    display: table;
    max-width: 100%;
    padding: 0;
    white-space: normal;
  }
  progress {
    vertical-align: baseline;
  }
  textarea {
    overflow: auto;
  }
  [type='checkbox'],
  [type='radio'] {
    box-sizing: border-box;
    padding: 0;
  }
  [type='number']::-webkit-inner-spin-button,
  [type='number']::-webkit-outer-spin-button {
    height: auto;
  }
  [type='search'] {
    -webkit-appearance: textfield;
    outline-offset: -2px;
  }
  [type='search']::-webkit-search-decoration {
    -webkit-appearance: none;
  }
  ::-webkit-file-upload-button {
    -webkit-appearance: button;
    font: inherit;
  }
  details {
    display: block;
  }
  summary {
    display: list-item;
  }
  [hidden],
  template {
    display: none;
  }
`;

export default GlobalStyles;
