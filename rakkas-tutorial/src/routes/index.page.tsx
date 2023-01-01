import { Page } from "rakkasjs";

import css from "./index.module.css";

const HomePage: Page = function HomePage() {
  return (
    <main className={css.mainStyle}>
        <div className={css.heroSection}>
           <h1 className={css.mainHone}>Andrew's Happy New Years Page!</h1>
           <p>Join me for a fun filled evening of coding and celebrating the new year! I will also be working on other projects, but my main goal is to
           get to my goal of 1,000 commits for 2022. I currently have <strong>29 to go!</strong> If you woul dlike to learn more, just follow me on my <a href="https://github.com/geauxweisbeck4">GitHub account</a>. Happy New year!</p>
        </div>

        <div className={css.mainList}>
            <div className={css.mainCard}>
                <h2 className={css.newHtwo}>Here are some of the things that I'll be doing tonight:</h2>
                <ul>
                    <li>Creating a RakkasJS Tutorial Page</li>
                    <li>Gambling at the Fish Tables</li>
                    <li>Kissing Lisa for the New Years</li>
                    <li>Take a shower</li>
                </ul>
            </div>
            <h2>Images from 2022 </h2>
            <img src="https://res.cloudinary.com/tar-heel-dev-studio/image/upload/v1671812077/svelte_rnxopq.png" alt="svelete"  />
            <img src="https://res.cloudinary.com/tar-heel-dev-studio/image/upload/v1670855326/fampic_qh5z1h.png" alt='family pic' className={css.familyPic}/>
            <img src="https://res.cloudinary.com/tar-heel-dev-studio/image/upload/v1670752723/dukeunc_aybimr.jpg" alt='kill shot unc-duke' className={css.uncPic} />
        </div>
        <div className={css.updateSection}>
            <h1>I gave it all I had... It wasn't enough...</h1>
            <p>If this year wasn't the hardest year of my life then I missed something. I didn't have a job the whole year - a couple part-time gigs that didn't work out, but otherwise
            fucking nothing. I'm depressed when thinking back on how many times I thought I had the job, only to be turned down. I applied for easily over 1,000 jobs with about 10 applications per day
            average I'd say. Some day it'd be 50 apps out of frustration. </p>
            <br />
            <p>I seemed to hit freelancers gold at the end of the year, but that still wasn't enough. I'm the reason we're headed for our second eviction - I've done everything I can, but its not good enough.
            I really don't know how I respond to such a fucked up and bad year. It's kind of like, where do I go from here? One option, I've tried before and I know that I can't do that - not even an option. It's horrible, dark,
            cold, and cruel to the people who love you. The other option is to keep going - its the only one I have. The year won't start off easy - we'll likely be homeless for a bit trying to figure out what the fuck to even do.</p>
            <br />
            <br />
            <p>
            It's scary - but I can't be scared. People, animals, and creditors (haha) rely on me to do the right thing and keep coming back to try again. And I'm sooo close. I got offered a job even. I just couldn't take it because of
            where it is located. I need some help - likely a couple miracles. I will post a way for others to help, but it is much needed so we don't freeze to death in the cold. I just don't know what else to do. You have no idea how grateful we'd all
            be - we'd be in your debt for saving our lives because I'm not sure how we're going to do it on a $1,000 every two week salary. We'll do the right thing too, like we've tried to do all year. Sometimes things just go wrong in life, a lot - and for
            a long time it seems. But I have faith that this is the year things change and Lisa and I finally can find prosperity and also get married, like we've tried to do for two years now. Thank you for reading and I hope you enjoy the site - Happy New Years!</p>
            <h3>I am currently working on:</h3>
            <p>RakkasJS Tutorial!</p>
            <img src="https://res.cloudinary.com/dvsjspnnz/image/upload/v1664969406/cld-sample-2.jpg" alt="beautiful mountains" className={css.updatePic} />
            <p>Ahh, this is where I'd rather be.</p>
        </div>
    </main>
  );
};

export default HomePage;
