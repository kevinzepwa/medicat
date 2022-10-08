import React from 'react';
import Button from 'react-bootstrap/Button';

function Home() {
  function handleClick() {
    //console.log("<<<>>>")
  }

  return (
    <article className="home">
      <div className="transbox">
        <section>
          <h1>Medicat</h1>
             <div>
              <p>Get your health issues sorted today!</p>
             </div>
             <Button onClick={handleClick}
                  href="/doctors"
                  className="book-now"
                  activeStyle={{
                    background: "darkblue",
                  }}>
                  BOOK NOW
             </Button>
        </section>
      </div>
    </article>
  );
}

export default Home;