import { component$, useStore, useStyles$ } from "@builder.io/qwik";
import styles from "./counter.css?inline";

export default component$(() => {
  useStyles$(styles);

  const store = useStore({ count: 123 });
  console.log("Render CounterRoot");
  return (
    <div class="counter-root">
      <p>
        <button
          onClick$={() => {
            console.log("Click Alert");
            alert("Hello AtlDevCon");
          }}
        >
          Alert
        </button>
        
        <button
          onClick$={() => {
            console.log("Click Increment");
            store.count++;
          }}
        >
          Increment
        </button>
        {/* <span class="count-display">{store.count}</span> */}
      </p>
      <CounterChildDisplay store={store} />
    </div>
  );
});

export const CounterChildDisplay = component$(
  (props: { store: { count: number } }) => {
    console.log("Render CounterChildDisplay");
    return <p class="counter-child">Count: {props.store.count}</p>;
  }
);
