import { Page } from "rakkasjs";

import css from "./index.module.css";

const HomePage: Page = function HomePage() {
  return (
    <main className={css.mainStyle}>
        <div className={css.heroSection}>
           <h1 className={css.mainHone}>Andrew's Happy New Years Page!</h1>
           <p>Join me for a fun filled evening of coding and celebrating the new year! I will also be working on other projects, but my main goal is to
           get to my goal of 1,000 commits for 2022. I currently have <strong>27 to go!</strong> If you woul dlike to learn more, just follow me on my <a href="https://github.com/geauxweisbeck4">GitHub account</a>. Happy New year!</p>
        </div>

        <div className={css.mainList}>
            <h2 className={css.newHtwo}>Here are some of the things that I'll be doing tonight:</h2>
                <ul>
                    <li>Creating a RakkasJS Tutorial Page</li>
                    <li>Gambling at the Fish Tables</li>
                    <li>Kissing Lisa for the New Years</li>
                    <li>Take a shower</li>
                </ul>
            <p>Why couldn't I just put all those on the ToDo list? Well because I need to make content and figure out how this whole framework works - you feel me?
            I can't just try to think of stuff to put here or I'll never reach 1,000 commits.</p>
        </div>
        <div className={css.updateSection}>
            <h1>This is the update section</h1>
            <p>I will keep you updated on everything I am doing tonight if you visit here. I am going to deploy this to multiple spaces so everyone can find
            me and stay up to date with my New Years adventures, whatever I am working on!</p>
            <h3>I am currently working on:</h3>
            <p>RakkasJS Tutorial!</p>
            <img src="https://res.cloudinary.com/dvsjspnnz/image/upload/v1664969406/cld-sample-2.jpg" alt="beautiful mountains" className={css.updatePic} />
            <p>Ahh, this is where I'd rather be.</p>
        </div>
    </main>
  );
};

export default HomePage;
