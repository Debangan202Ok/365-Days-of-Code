import { Suspense, lazy, useState } from "react";
import TodoArea from "./components/TodoArea";
import { ThemeProvider } from "./components/ThemeContext";
// import VanilaCounter from "./components/VanilaCounter";
// import ReactCounter from "./components/ReactCounter";

const VanilaCounter = lazy(() => import("./components/VanilaCounter"));
const ReactCounter = lazy(() => import("./components/ReactCounter"));

export default App = () => {
  console.log("React App component loaded into the actual dom");
  const [val, setVal] = useState(false);
  return (
    <ThemeProvider>
      <>
        <h1>Hello, From React</h1>
        <p>
          It's now purely a react app. you can check out this through developer
          console. Don't Worry too much sometime later you will be able to know
          what happened in this app.
        </p>
        <h2>1.How React Work?</h2>
        <p>
          <b>Ans:</b>For understding How react work. you need to know how the
          page transform into react component.frome vanila html to transform
          react component you need understand the steps.here is an overview:
        </p>
        <ol>
          <li>
            React Components it's nothing but an object. which is passing to the
            virtual dom to assemble like a dom tree & it will be render to the
            actual dom.for furthur verification you can go the given link:
            <a
              target="blank"
              href="https://babeljs.io/repl#?browsers=defaults%2C%20not%20ie%2011%2C%20not%20ie_mob%2011&build=&builtIns=false&corejs=3.21&spec=false&loose=false&code_lz=MYewdgzgLgBAggBwTAvDAFASlQPhgbwCgYYAnAUygFdSwMAeACwEYYBLAExQCJmAmACzcYwADYBDCBABy4gLbkeANxBsJw6AE9Ri_PgBG44AGsA5qRBUwHAMIhRIUgC5uAJXIduAXy856CHEZyUQd6AHoA8JYcTEIvIA&debug=false&forceAllTransforms=false&modules=false&shippedProposals=false&circleciRepo=&evaluate=false&fileSize=false&timeTravel=false&sourceType=module&lineWrap=true&presets=env%2Creact%2Cstage-2&prettier=false&targets=&version=7.23.9&externalPlugins=&assumptions=%7B%7D"
            >
              Babel
            </a>
            to know how the react component become an object at the end.
          </li>
          <li>
            Once the React element or the object created it passes to the
            virtualDom and when the virtualDom sucessfully rendered. then, it
            will started rendeing to the actual Dom. For rendering to the actual
            dom it must required a specific dom element as root element. where
            all the react component will be render.for example:
            <ul type="square">
              <li>
                <p>&lt;div id="root" &gt; &lt;/div &gt; </p>
              </li>
              <li>
                <b>Pitfall:</b>It can't select body as a root because our js
                file also a part of body. if it will try to render the body as a
                root our js file will disappear which can be error prone. that's
                why it always select a div as a child.
              </li>
              <li>
                ReactDom is responsible to create a bridge between the actual
                dom & the virtualDom.it's acts as an entry point. when the root
                is select by the selector then the root passes to the
                ReactDom.createRoot function, this function is responsible to
                render the actual dom.
              </li>
            </ul>
          </li>
          <li>
            Things get different when it come to the Reactapp. previously in
            counter component in vanila html, it can update to the help of the
            local varibale and selectors. but in react this things might not
            work. Because react component parses differently.
          </li>
        </ol>
        <p>
          <b>Conclusion:</b>What we did to manipulate the dom in vanila js.
          might not work in react because it's own parsing nature. we will se
          how react different from the vanila js.
        </p>
        <hr />
        <h2>Talk Cheap! Lets Go to Explore the Differences</h2>
        <p>
          In this Section we will run two counter app one will use the vanila
          approach and one will use react approach.
        </p>
        {val === true ? (
          <>
            <Suspense fallback={<h1>Loading....</h1>}>
              <VanilaCounter />
              <ReactCounter />
            </Suspense>
            <hr />
            <h2>2.Want to Know How the above counters behave like this Way?</h2>
          </>
        ) : (
          <button onClick={() => setVal(true)}>Show</button>
        )}
        <hr />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam natus,
          eligendi repudiandae dicta quidem libero atque illum laborum est eum,
          omnis a placeat unde voluptatibus assumenda suscipit dolorum
          doloremque alias laudantium dolores quam ducimus? Eveniet dolore
          facilis iste magni saepe velit quos cum tenetur debitis, architecto
          voluptates repellendus aspernatur eum! Nulla minus reiciendis
          repudiandae alias a! Dignissimos ipsam, explicabo at nemo, consectetur
          id, reprehenderit beatae numquam est totam voluptatum. Corrupti
          voluptas reiciendis a quas maxime officia veniam aliquam odit earum
          cumque eius pariatur vel similique, velit tenetur omnis eaque minima,
          esse autem excepturi, modi temporibus. Itaque assumenda dolor
          obcaecati maxime.
        </p>
        <TodoArea />
      </>
    </ThemeProvider>
  );
};
