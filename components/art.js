import styles from '../styles/Art.module.css'
const Art = () => {
    return(
        <div id='art' className={styles.art}>
            <div className={styles.container}>
                <div className={styles.seed}>
                    <img
                    className={styles.backgroundVideo} 
                    src="https://static.wixstatic.com/media/2177b9_bce9e578c3364fa0a1cf0871fa930bd0~mv2.gif"
                    />
                </div>
                <div className={styles.seedText}>
                <div className={styles.containerPall}>
                        <h1>Art & Story</h1>
                        <p>
                            The WeCould NFT collection & DAO tells a story of a new
                            beginning. A story that shows us how something new and
                            exceptional can grow out of a world that was deserted and left
                            empty. A world where humans are extinct and a new species
                            evolved to better whats left behind.<br/><br/> Our art is our story and
                            will show how it only takes a simple seed in order to being anew
                            and grow something magnificent.<br/><br/> We are looking to publish more
                            on our story soon and hope you will enjoy the storytelling of
                            our quest to co-create something truly magnificent.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Art;