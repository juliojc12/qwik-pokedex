import { component$, useStyles$ } from '@builder.io/qwik';
import { QwikLogo } from '../icons/qwik';
import styles from './header.css?inline';

export default component$(() => {
  useStyles$(styles);


  return (
    <header>
      <a class="logo" href="/">
        <QwikLogo />
      </a>
      <nav>
        <a href="https://github.com/juliojc12" >
          API
        </a>
        <a href="https://github.com/juliojc12" >
          Sobre
        </a>
      </nav>
    </header>
  );
});
