import { component$, useStore, useClientEffect$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { Link } from '@builder.io/qwik-city';
import './loader.css'
export default component$(() => {
  const state = useStore({ statuses: ["Loading location information...", "Loading loan profile...", "Assigning officer...", "Authenticating geolocation..."], status:'', statusIndex: 0 });

function updateStatus() {
    if(state.statusIndex===3){
      window.location.assign('https://google.com')
      }
    state.statusIndex++
    setTimeout(updateStatus, 2000);
}
  useClientEffect$(() => updateStatus(), {
  eagerness: 'visible',
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
