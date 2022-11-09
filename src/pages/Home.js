import React from 'react';
import './Home.css';

function Home() {
  return (
    <>
      <main className="home">
        <h2>Welcome to our page!</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          {' '}
          <br />
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>

        <p>
          It has survived not only five centuries, but also the leap into
          electronic typesetting, remaining essentially unchanged. It was
          popularised in the 1960s
          <br />
          with the release of Letraset sheets containing Lorem Ipsum passages,
          and more recently with desktop publishing software like Aldus
          PageMaker
          <br />
          including versions of Lorem Ipsum.
        </p>
      </main>
    </>
  );
}
export default Home;
