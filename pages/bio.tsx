import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import styles from '../styles/Bio.module.css';

export default function AboutMe() {
    return (
        <Layout>
            <Head>
                <title>My Bio | {siteTitle}</title>
            </Head>
            <div className={styles.wrapper}>
                <div className="container">
                    <div className={styles.linkWrapper}>
                        <a href="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/edf3bc3b-be9b-4d62-aca8-722920d15f10/dterrell_resume%28pdf%29.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210112%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210112T191703Z&X-Amz-Expires=86400&X-Amz-Signature=0d1a08d4537cd3d202d2031511134027d14eaac6f8ffb9e653c76a36f9e257f7&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22dterrell_resume%28pdf%29.pdf%22" target='_blank'>⚙️ Resume</a>
                        <a href="https://www.linkedin.com/in/dylan-terrell/" target='_blank'>🤝 LinkedIn</a>
                        <a href="https://github.com/dylan-authentic" target='_blank'>💻 Github</a>
                        <a href="https://dylanauthentic.medium.com/" target='_blank'>✒️ Medium</a>
                    </div>
                </div>
                <div className="container">
                    <div className={styles.contentWrapper}>
                        <h1>About Me</h1>
                        <p>My name is Dylan Terrell. I was born and raised in Atlanta, GA to a family that I'm incredibly grateful for. Like many young boys growing up, I dreamed of being the next Allen Iverson or Michael Jordan 🏀, but my crossover and jump shot <a href="https://www.youtube.com/watch?v=PPhKo7i8N-M">(while pretty nice)</a>, didn't take me to the big leagues. Instead, I took my talents to New York City 🌃 where I studied computer science 💻 at St. John's University and received my bachelor's degree in May of 2018 🎓. Since then, I've been on a dedicated path of learning the ins and outs of life, pursuing my passions and goals, and growing my skillset and knowledge along the way🚀.</p>
                    </div>
                    <div className={styles.contentWrapper}>
                        <h1>My journey into tech</h1>
                        <p>When I graduated high school, I promised myself I would only take the required math credits in college and be done with math for good. My initial decision to study journalism and communications seemed like the best way to do that. But, being the ambitious fellow I am, I one day found myself learning HTML & CSS in my dorm room, and the curiosity continued. From there, I taught myself how to build websites and began offering that skill as a service to people I knew. I then decided to do the one thing I promised myself I wouldn't do... I changed my major to one of the most math-heavy majors in college (computer science). But, luckily for me, I soon fell in love with learning both high and low level concepts of computer science and software engineering. And, as they say, that's all she wrote.‍‍ <br/><br/><b>For more about my journey, check out <a href="https://medium.com/@dylanauthentic/my-journey-so-far-c21e46eabae0">this article</a> I wrote back in 2017 on Medium.</b></p>
                    </div>
                </div>
            </div>
        </Layout>
    )
}