import React from 'react';

const RandomComponent = () => {
  return (
    <div className="random-component">
      <header>
        <h1>Welcome to the Random Component</h1>
      </header>
      <main>
        <section className="random-section">
          <div className="random-div">
            <h2>Random Section 1</h2>
            <p>This is some random content for the first section of the component.</p>
          </div>
          <div className="random-div">
            <h2>Random Section 2</h2>
            <p>This is some more random content for the second section of the component.</p>
          </div>
        </section>
        <section className="random-section">
          <div className="random-div">
            <h2>Random Section 3</h2>
            <p>Here's another random section with different content.</p>
          </div>
          <div className="random-div">
            <h2>Random Section 4</h2>
            <p>And yet another random section because why not?</p>
          </div>
        </section>
      </main>
      <footer>
        <p>Thanks for exploring the Random Component!</p>
      </footer>
    </div>
  );
};

export default RandomComponent;
