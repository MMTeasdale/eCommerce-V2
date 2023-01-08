import React from "react";
import Slider from "./slider/Slider";


function Home() {
  return (
    <div className="home">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src="https://i.pinimg.com/474x/a4/98/31/a4983130a6e081d5f18564b6b7795799.jpg" 
              alt=""
            />
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-light">Anime Inspired Apparel</h1>
            <p>
            Based in Charlotte, North Carolina, Otaku is a small independent clothing brand based around pale colors, soothing tones, and relaxed vibes.All pieces are cut and sew. Their designs are original and no blanks are used.

Everything is meticulously designed. Inspiration comes from many places, but it's hoped that the clothes hold their own unique nature different from what you can find anywhere else.

We don't believe in heavily branded garments. Almost all branding is minimal. The majority of pieces are branded only by inner tags and small minimal embroidered logos. Any large branding is hoped to still be unique in execution.

            </p>
            <Slider/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;