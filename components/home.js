import styles from '../styles/Home.module.css'
const FirstSection = () => {
  return (
    <div className={styles.container}>
        <div className={styles.logo}>
            <img src='./images/wecould.png'/>
        </div>
        <div className={styles.charachter}>
            <ul>
                <li>
                    <img src='/images/character2.png' className={styles.first}/> 
                </li>
                <li>
                    <img src='/images/i.png'className={styles.second}/> 
                </li>
            </ul>
            <ul className={styles.Secondcha}>
                <li>
                    <img src='/images/character3.png'/> 
                </li>
                <li>
                    <img src='/images/img11.png'/> 
                </li>

            </ul>
        </div>
        <div className="flex items-center justify-center md:pb-36 pb-20">
          <img src="/images/cloud.png" alt="bg" className={styles.cloud} />
          <h1
            role="heading"
            className={styles.cloudText}>
            The <span>WeCould NFT</span>s will offer great art with a compelling backstory
            combined with real<br/> utility for its holders. NFT holders will be:<br/>
            <p>
                - Be sole owners of WeCould DAO (a sustainable investment & charity fund)<br/>
                - Own 10% of YouCould company through the WeCould DAO <br/>
                - Operate  the WeCould DAO to push forward its mission<br/>
                - Be our inner cirle to actively co-create YouCould <br/>
                - Be eligible for all future events 

                </p> 
          </h1>
        </div>
    </div>
  )
}
export default FirstSection;