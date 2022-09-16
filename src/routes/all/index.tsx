import {
  component$, useStyles$,
} from "@builder.io/qwik";
import { ButtonBunch } from "~/components/button-bunch/button-bunch";
import { Clock } from "~/components/clock/clock";
import { RandomPhotos } from "~/components/random-photos/random-photos";
import styles from "./all.css?inline";

export default component$(() => {
  useStyles$(styles);

  return (
    <div id="demos">
      <div id="buttons">
        <ButtonBunch buttonCount={20} />
      </div>

      <div id="clock" class="demo-spacer">
        <Clock />
      </div>
      
      <div id="photos" class="demo-spacer">
        <RandomPhotos imageCount={40} />
      </div>
    </div>
  );
});

