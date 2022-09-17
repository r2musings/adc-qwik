import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <div>
      <ul>
        <li>
          <a href="/all">Kitchen Sink</a>
        </li>
        <li>
          <a href="/todo">To Do</a>
        </li>
        <li>
          <a href="/family">Family Affair</a>
        </li>
        {/* <li>
          <a href="/counter">Counter</a>
        </li>
        <li>
          <a href="/clock">Clock</a>
        </li>
        <li>
          <a href="/photos">Photos</a>
        </li> */}
      </ul>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Atlanta Developer Conference",
};
