import { component$, useStyles$ } from '@builder.io/qwik';
import { useLocation } from '@builder.io/qwik-city';
import styles from './header.css?inline';

export default component$(() => {
  useStyles$(styles);

  const pathname = useLocation().pathname;

  return (
    <header>
      <div class="header-inner">
        <section class="logo">
          <a href="/">Qwik JS Demos - AtlDevCon</a>
        </section>
        {/* <nav>
          <a href="/counter" class={{ active: pathname.startsWith('/counter') }}>
            Counter
          </a>
          <a href="/clock" class={{ active: pathname.startsWith('/clock') }}>
            Clock
          </a>
          <a href="/photos" class={{ active: pathname.startsWith('/photos') }}>
            Photos
          </a>
          <a href="/todo" class={{ active: pathname.startsWith('/todo') }}>
            ToDo
          </a>
        </nav> */}
      </div>
    </header>
  );
});
