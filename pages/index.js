import styles from "../styles/Home.module.css"

export default function Home() {
    // How do we show the recently listed NFTs?
    // Setup a server to listen for those events to be fired,
    // and we will add them to a database to query.
    // Woah, isn't that centralized?
    // TheGraph does this in a decentralized way
    // Moralis does it in a centralized way

    // All our logic is still 100% on chain.
    // Speed & Development time.
    // Its really hard to start a prod blockchain project 100% decentralized.
    // They are working on open sourcing their code
    // Feature richness
    // We can create more features with a centralized back end to start
    return <div className={styles.container}>Hi</div>
}
