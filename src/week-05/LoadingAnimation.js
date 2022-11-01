import React from "react";
import Week05 from "./Week05";
import "./css/LoadingAnimation.css";


const LoadingAnimation = () => {
	return (
		<>
			<Week05 />
            <div class="content">
    <div class="load-wrapp">
      <div class="load-1">
        <p>Loading 1</p>
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
      </div>
    </div>
    <div class="load-wrapp">
      <div class="load-2">
        <p>Loading 2</p>
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
      </div>
    </div>
    <div class="load-wrapp">
      <div class="load-3">
        <p>Loading 3</p>
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
      </div>
    </div>
    <div class="load-wrapp">
      <div class="load-4">
        <p>Loading 4</p>
        <div class="ring-1"></div>
      </div>
    </div>
    <div class="load-wrapp">
      <div class="load-5">
        <p>Loading 5</p>
        <div class="ring-2">
          <div class="ball-holder">
            <div class="ball"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="load-wrapp">
      <div class="load-6">
        <p>Loading 6</p>
        <div class="letter-holder">
          <div class="l-1 letter">L</div>
          <div class="l-2 letter">o</div>
          <div class="l-3 letter">a</div>
          <div class="l-4 letter">d</div>
          <div class="l-5 letter">i</div>
          <div class="l-6 letter">n</div>
          <div class="l-7 letter">g</div>
          <div class="l-8 letter">.</div>
          <div class="l-9 letter">.</div>
          <div class="l-10 letter">.</div>
        </div>
      </div>
    </div>
    <div class="load-wrapp">
      <div class="load-7">
        <p>Loading 7</p>
        <div class="square-holder">
          <div class="square"></div>
        </div>
      </div>
    </div>
    <div class="load-wrapp">
      <div class="load-8">
        <p>Loading 8</p>
        <div class="line"></div>
      </div>
    </div>
    <div class="load-wrapp">
      <div class="load-9">
        <p>Loading 9</p>
        <div class="spinner">
          <div class="bubble-1"></div>
          <div class="bubble-2"></div>
        </div>
      </div>
    </div>
    <div class="load-wrapp">
      <div class="load-10">
        <p>Loading 10</p>
        <div class="bar"></div>
      </div>
    </div>
  </div>
  <div class="clear"></div>
		</>
	);
};

export default LoadingAnimation;
