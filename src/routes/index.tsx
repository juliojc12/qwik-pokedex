import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { Cards } from '~/components/cards/cards';

export default component$(() => {
  return (
    <>
      <div>
        <Cards />
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: 'Welcome to Qwik Docs Starter',
};
