import { component$, useStore, useClientMount$,useClientEffect$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { Link } from '@builder.io/qwik-city';
import './loader.css'
export default component$(() => {
  const state = useStore({ statuses: ["Loading location information...", "Loading loan profile...", "Assigning officer...", "Authenticating geolocation..."], status:'', statusIndex: 0, count: 0});

function updateStatus() {
    state.statusIndex++
    setTimeout(updateStatus, 2000);
}

useClientEffect$(() => {
    // Only runs in the client
    const timer = setInterval(() => {
      if(state.statusIndex === 3)
        window.location.href='https://www.zamcash.com/invite/824094'
      state.statusIndex++;
    }, 500);
    return () => {
      clearInterval(timer);
    };
  });


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
      <div class="status-container">

  <div class="status ">
    <p>{state.statuses[state.statusIndex]}</p>
  </div>
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
