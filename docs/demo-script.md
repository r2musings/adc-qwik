# All
1. F12, Network Tab, refresh
2. Note vite and filter/invert
3. Select JS to filter to just JS
4. Refresh page to show no JS downloaded
   
# Buttons
1. Click any button and show no code downloaded
2.  Note that nothing needed to be re-rendered
3. Click several other buttons and note that no new code downloaded
4. F12/Network - Show the onclick code and note no state
5. F12/Elements - select button and show the on:click and how that relates to downloaded JS
6.  Open VSCode to show button-bunch
7.  Note component$ and discuss what $ means to dev/framework (lazy boundary, async, serializable)
8.  Note onClick$ and how it has no state. - show replacement with Foo()
9.  Rewind code.
10. Note onContextMenu$ and show replacement with Foo() and how that is an issue with lexically scoped
11. Rewind code.
12. F12/Network, refresh page and right-click a button
13. Show the various JS downloaded and talk through each.
14. In oncontextmenu file, note the useLexicalScope() and how that solves the issue we saw with Foo()
15. F12/Elements, select button 
16. Show the oncontextmenu and mention the preventdefault
17. Show how the indexers use qwik/json get state.
18. Note how qwik/json gets consumed when resumed.
19. F12/Network - Note CounterChild and how it is only thing that needs to re-render
20. Note that the component itself did not update because had no way to be updated
21. In VSCode, replace the CountDisplay with span.
22. Refresh to show that now the CountButton component is downloaded.
23. Mention qwikloader and its role (polyfill allowing attributes in dom, < 1kb, also does not send unless needed - see landing page)

# Clock
1. F12, Network tab, refresh
2. Scroll down to show that there is a clock below fold
3.  Refresh
4.  Scroll down and note that JS is downloaded when it become visible
5.  F12/Elements tab - Refresh select <clock /> and open it noting that it is not updating
6.  Scroll down and note that the hour/min/sec now are being updated by the timer
7.  Note that this would be difficult in current frameworks because of the lazy loading, etc.
8.  In VSCode, note that all the ButtonBunch code is to push Clock below the fold.
9.  Looking at Clock, note the useStyles$() hook.
10. Find style inlined above the <clock> and note that the server already put it there in the serialization
11. Note how it is consumed into the head when it needs to resume
12. VSCode - switch to useStylesScoped$() and show the difference in F12/Elements
13. VSCode - continue through Clock - useStore is state, angle of hands
14. useClientEffect$ - the timer that is fired when visible.
15. JSX renders the component
16. back to useClientEffect$ - when should it execute?  - current frameworks do it when it hydrates.
17. No hydration in Qwik.  - so executes when it becomes visible
18. F12/Elements - on clock, change on:qvisible to on:click
19. Scroll down and note clock not started.  Now click and show it starts.
20. In VSCode, note that the component is the natural flow that a dev would write the component, but gets the lazy-loading built-in.

# Photos
1. F12/Network, Refresh, Show All (not just JS)
2. Scroll down to RandomPhotos component load and then each photo as it becomes visible noting the lazy load
3. VSCode, Show RandomPhotos 

# ToDo
1. F12/Network
2. Check off an item and note JS
3. Click a filter and note JS
4. Start typing a new item and note JS
5. Refresh
6. Add a couple of items
7.  In original browser, F12/Elements - select q:container
8. Note that qwik/json is consumed since we have resumed
9.  Console:  $0.qwik.pause() to get it back - note that q:container says paused/resumed
10. Open Incognito browser, go to family app
11. F12/Elements - click q:container
12. Original F12/Elements, copy outerHTML
13. Incognito F12/Elements, replace outerHTML
14. Add new item to show the resuming
