export default html => html`
  <main class="about">
    <div class="paginator">
      <a href="#back">&lt;</a>
      <span>go back / share</span>
      <a href="#share">📤</a>
    </div>
    <h1>Isomorphic Hacker News</h1>
    <div>
      <p>
        Hello there, I am Andrea Giammarchi, aka <a href="https://twitter.com/WebReflection">@webreflection</a>,
        and I am the developer behind this project.
      </p>
      <p>
        Thank you for visiting ♥ and now please let me introduce what is this about ...
      </p>
      <p>
        The goal of this project is to showcase a 100% isomorphic version of the famous
        <a href="https://hnpwa.com/">Hacker News PWA</a>, through my tiny
        <a href="https://github.com/WebReflection/uhtml#readme">µhtml</a> and
        <a href="https://github.com/WebReflection/ucontent#readme">µcontent</a> libraries,
        able to produce a fully static, yet <em>SSR</em> ready, <em>Hacker News</em> reader.
      </p>
      <h2>Achievements Unlocked</h2>
      <ul>
        <li>✔ this <em>PWA</em> works on a 100% static host</li>
        <li>✔ this <em>PWA</em> could be pre-rendered via <em>SSR</em> too</li>
        <li>✔ the client renders <em>everything</em> incrementally</li>
        <li>✔ the server renders <em>everything</em> with, or without, JS</li>
        <li>✔ both client and server share exactly the <a href="https://github.com/WebReflection/hn/blob/master/client/%40/js/view.js">same view</a></li>
        <li>✔ both client and server share exactly the <a href="https://github.com/WebReflection/hn/blob/master/client/%40/js/hn.js">same controller</a></li>
        <li>✔ both client and server logic is route based, meaning each URL can be shared</li>
        <li>✔ no bundlers whatsoever are involved, everything is <em>standards based</em></li>
        <li>✔ <em>Lighthouse</em> scores nearly 100% on a GitHub hosted static site</li>
      </ul>
      <h2>Extra Details</h2>
      <p>
        All sources are <a href="https://github.com/WebReflection/hn">available on GitHub</a>,
        and all you need to do, in order to test this project locally, is the following:
      </p>
      <pre>
  git clone https://github.com/WebReflection/hn.git
  cd hn
  npm i
  npm test
  # npm run test:ssr # for SSR
      </pre>
      <p>
        The <em>client</em> side part is within the <code>client/@/</code> folder,
        while the <em>server</em> side part is within the <code>server</code> folder.
      </p>
      <p>
        The reason to choose a <code>@</code> as folder prefix, is to have a portable pattern
        that would never interfere with the name of any other possible folder.
      </p>
      <p>
        As example, the <em>SSR</em> part uses those folders indexes to render each page,
        but the structure is fully compatible with a static host too.
      </p>
      <p>
        The client side is served either through <a href="https://github.com/WebReflection/ucdn#readme">µcdn</a>,
        or pre-built via <a href="https://github.com/WebReflection/ucompress#readme">µcompress</a>,
        after a <code>npm run build</code> command.
      </p>
      <p>
        To keep it simple, I have also targeted the <code>docs</code> folder, instead of <code>public</code>,
        simply to be able to tell GitHub to publish this Web App via such folder.
      </p>
      <p>
        I hope this project will inspire new, as well as old, Web developers, as it's definitively something
        anyone could do without needing to move away from plain Web standards 🎉
      </p>
    </div>
    <div class="paginator">
      <a href="#back">&lt;</a>
      <span>go back / share</span>
      <a href="#share">📤</a>
    </div>
  </main>
`;
