import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { Link } from '@builder.io/qwik-city';
import './loader.css'
export default component$(() => {
  return (
    <div>
      <h1>
        Accessing your loan <span class="lightning">⚡️</span>
      </h1>

      <ul>
        <li>
          Get a minimum of ZMW 500K today.
        </li>
      </ul>

      <div class="loader">
        <div class="circle"></div>
      </div>

    </div>
  );
});

export const head: DocumentHead = {
  title: 'GOVZM LOANS',
  meta: [
    {
      name: 'description',
      content: 'govzm loans is not affiliated with the government of zambia',
    },
  ],
};
