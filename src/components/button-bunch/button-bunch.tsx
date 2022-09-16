import { component$, useStore, useStyles$ } from "@builder.io/qwik";
import styles from "./button-bunch.css?inline";

export const ButtonBunch = component$((props: { buttonCount?: number }) => {
  const count = props.buttonCount || 50;
  const items = new Array(count)
    .fill(null)
    .map((_, index) => `Button ${index + 1}`);
  useStyles$(styles);

  return (
    <div>
      <ul>
        {items.map((i) => (
          <li>
            <CounterButton title={i} />
          </li>
        ))}
      </ul>
    </div>
  );
});

export const CounterButton = component$((props: { title: string }) => {
  useStyles$(styles);

  const store = useStore({ count: 123 });
  console.log("Render CounterRoot");
  return (
    <div class="counter-root">
      <p>
        <button
          onClick$={() => {
            console.log("Hello AtlDevCon from a click event");
          }}
          onContextMenu$={() => {
            console.log(`Counter for ${props.title} incremented.`);
            store.count++;
          }}
          preventdefault:contextmenu
        >
          {props.title} - <CountDisplay store={store} />
        </button>
      </p>
    </div>
  );
});

export const CountDisplay = component$(
  (props: { store: { count: number } }) => {
    console.log("Render CountDisplay");
    return <span>Count: {props.store.count}</span>;
  }
);





export const Foo = () => {
  
}