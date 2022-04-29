import styles from '../styles/Team.module.css'
const Team = () => {
    return(
        <div id='team' className={styles.team}>
            <div className={styles.teamCloud}>
                <img src="/images/cloud.png" alt="bg" className={styles.cloud} />
                <h1 role="heading" className={styles.cloudText}>
                a <span>DAO </span>by us for us
                </h1>
            </div>
            <div className={styles.intro}>
                <div className={styles.logo}>
                    <img src='https://static.wixstatic.com/media/2177b9_e37d3d92b0574df19f416a04a9d3d087~mv2.png/v1/fill/w_1020,h_155,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/WeCould%20DAO.png'/>
                </div>
                <div className={styles.text}>
                    <p>
                        WeCould DAO seeks to support the co-creation of sustainable projects
                        that create a lasting positive impact on society as a whole. WeCould
                        DAO derives its goal from YouCoulds overall mission and values:
                        <br /><br />
                        -Co-creating and supporting social impact projects<br />
                        -Start-Up and Pre-Seed investment in sustainable projects<br />
                        -Treasury decisions to ensure a prospering DAO<br />
                        -Co-Creation of YouCould
                    </p>
                </div>
                <img className={styles.world} src='https://static.wixstatic.com/media/2177b9_5754c5fe656147b880e96ddc6cf3fba2~mv2.png/v1/fill/w_205,h_169,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Saturn.png'/>
                <img className={styles.world2} src='https://static.wixstatic.com/media/2177b9_7d10695cce484fbab82c43e13e7c3ed7~mv2.gif'/>
                <img className={styles.world3} src='https://static.wixstatic.com/media/2177b9_e3557b781a544fd0955a4662b9dd2200~mv2.gif'/>
            </div>
            <div className={styles.animation}>
                <div className={styles.firstCloud}>
                    <img src="https://static.wixstatic.com/media/2177b9_947f186dc8bc46159488ed3d72b4f32b~mv2.gif" alt="bg" className={styles.cloud1} />
                </div>   
                <div className={styles.secondCloud}>
                    <img src="https://static.wixstatic.com/media/2177b9_514c22497bfb4f418108786ed15044b2~mv2.gif" alt="bg" className={styles.cloud2} />
                </div>
            </div>
            <div className={styles.firstBox}>
                <h1><span>choose</span> one out of three destinies</h1>
                <div className={styles.mainBox}>
                    <div className={styles.BigBox}>
                        <div className={styles.mainBoxTitle}>
                            <h1>
                                <span>We</span>Innovate
                            </h1>
                            <p>&quot;We co-create innovation&quot;<br/><br/></p>
                        </div>
                        <div className={styles.mainBoxImg}>
                            <img src='/images/img1.png'/>
                        </div>
                    </div>
                    <div className={styles.BigBox}>
                        <div className={styles.mainBoxTitle}>
                            <h1>
                                <span>We</span>Love
                            </h1>
                            <p>&quot;We Co-Create with<br/> philantrophy and altruism&quot;</p>
                        </div>
                        <div className={styles.mainBoxImg}>
                            <img src='/images/img2.png'/>
                        </div>
                    </div>
                    <div className={styles.BigBox}>
                        <div className={styles.mainBoxTitle}>
                            <h1>
                                <span>We</span>Value
                            </h1>
                            <p>&quot;We Co-Create<br/> economic growth&quot;</p>
                        </div>
                        <div className={styles.mainBoxImg}>
                            <img src='/images/img3.png'/>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.threeClouds}>
                <div className={styles.firstCloud}>
                    <img src="https://static.wixstatic.com/media/2177b9_1be76607680541bdaf2eba3333e8da33~mv2.gif" alt="bg" className={styles.cloud1} />
                </div>   
                <div className={styles.secondCloud}>
                     <a href="https://www.youcould.info/" rel="noreferrer" target="_blank" >
                        <img src='https://static.wixstatic.com/media/2177b9_ab07ee4e85b7417ca4ecd3785648c500~mv2.png/v1/fill/w_49,h_49,al_c,usm_0.66_1.00_0.01,enc_auto/2177b9_ab07ee4e85b7417ca4ecd3785648c500~mv2.png' className={styles.discordIcon} />
                    </a>
                    <img src="/images/smallCloud.png" alt="bg"/>
                </div>
                <div className={styles.thirdCloud}>
                    <img src="https://static.wixstatic.com/media/2177b9_29bfe022fcda4adea6eb583801a3fec5~mv2.gif" alt="bg" className={styles.cloud2} />
                </div>
            </div>
            <div className={styles.secondBox}>
                <h1>Team</h1>
                <div className={styles.Box}>
                    <div className={styles.BigBox}>
                        <div className={styles.BoxImg}>
                            <img src='https://static.wixstatic.com/media/2177b9_de3f2ea2ea5a47b1a5e7411c99b05a7d~mv2.png/v1/fill/w_253,h_251,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Oli.png'/>
                        </div>
                        <div className={styles.BoxTitle}>
                            <p>Oliver</p>
                            <p>CEO</p>
                            <a href="https://www.youcould.info/" rel="noreferrer" target="_blank" >
                                <img src='https://static.wixstatic.com/media/01ab6619093f45388d66736ec22e5885.png/v1/fill/w_49,h_49,al_c,usm_0.66_1.00_0.01,enc_auto/01ab6619093f45388d66736ec22e5885.png'/>
                            </a>
                        </div>
                    </div>
                    <div className={styles.BigBox}>
                        <div className={styles.BoxImg}>
                            <img src='https://static.wixstatic.com/media/2177b9_fe919f0c3d9a40979bb72ce11af5660e~mv2.png/v1/fill/w_253,h_251,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Fabi%20HP.png'/>
                        </div>
                        <div className={styles.BoxTitle}>
                            <p>Fabian</p>
                            <p>COO</p>
                            <a href="https://www.youcould.info/" rel="noreferrer" target="_blank" >
                                <img src='https://static.wixstatic.com/media/7528824071724d12a3e6c31eee0b40d4.png/v1/fill/w_49,h_49,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/7528824071724d12a3e6c31eee0b40d4.png'/>
                            </a>
                        </div>
                    </div>
                    <div className={styles.BigBox}>
                        <div className={styles.BoxImg}>
                            <img src='https://static.wixstatic.com/media/2177b9_63b742021765463ab5c9afbce4b84ff5~mv2.png/v1/fill/w_253,h_251,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Steffen%20HP.png'/>
                        </div>
                        <div className={styles.BoxTitle}>
                            <p>Steffen</p>
                            <p>CIO</p>
                            <a href="https://www.youcould.info/" rel="noreferrer" target="_blank" >
                                <img src='https://static.wixstatic.com/media/7528824071724d12a3e6c31eee0b40d4.png/v1/fill/w_49,h_49,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/7528824071724d12a3e6c31eee0b40d4.png'/>
                            </a>
                        </div>
                    </div>
                    <div className={styles.BigBox}>
                        <div className={styles.BoxImg}>
                            <img src='https://static.wixstatic.com/media/2177b9_d76e4a8a05534862b050482d54b52a2f~mv2.png/v1/fill/w_253,h_251,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Patrik%20HP.png'/>
                        </div>
                        <div className={styles.BoxTitle}>
                            <p>Patrik</p>
                            <p>CTO</p>
                            <a href="https://www.youcould.info/" rel="noreferrer" target="_blank" >
                                <img src='https://static.wixstatic.com/media/7528824071724d12a3e6c31eee0b40d4.png/v1/fill/w_49,h_49,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/7528824071724d12a3e6c31eee0b40d4.png'/>
                            </a>
                        </div>
                    </div>
                    <div className={styles.BigBox}>
                        <div className={styles.BoxImg}>
                            <img src='https://static.wixstatic.com/media/2177b9_df98d239c496489d82967894ed9949af~mv2.png/v1/crop/x_0,y_2,w_1000,h_995/fill/w_253,h_251,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Alec%20NFT%20HP.png'/>
                        </div>
                        <div className={styles.BoxTitle}>
                            <p>Alec</p>
                            <p>Head of Marketing</p>
                            <a href="https://www.youcould.info/" rel="noreferrer" target="_blank" >
                                <img src='https://static.wixstatic.com/media/01ab6619093f45388d66736ec22e5885.png/v1/fill/w_49,h_49,al_c,usm_0.66_1.00_0.01,enc_auto/01ab6619093f45388d66736ec22e5885.png'/>
                            </a>
                        </div>
                    </div>
                    <div className={styles.BigBox}>
                        <div className={styles.BoxImg}>
                            <img src='https://static.wixstatic.com/media/2177b9_9c2a7e09b8ac4728bafeccec7c51254c~mv2.png/v1/fill/w_253,h_251,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Waffly.png'/>
                        </div>
                        <div className={styles.BoxTitle}>
                            <p>Waffly</p>
                            <p>Head of Community</p>
                            <a href="https://www.youcould.info/" rel="noreferrer" target="_blank" >
                                <img src='https://static.wixstatic.com/media/01ab6619093f45388d66736ec22e5885.png/v1/fill/w_49,h_49,al_c,usm_0.66_1.00_0.01,enc_auto/01ab6619093f45388d66736ec22e5885.png'/>
                            </a>
                        </div>
                    </div>
                    <div className={styles.BigBox}>
                        <div className={styles.BoxImg}>
                            <img src='https://static.wixstatic.com/media/2177b9_8256987bcdf54521806c68f810b350d5~mv2.png/v1/fill/w_253,h_251,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Wided%20HP.png'/>
                        </div>
                        <div className={styles.BoxTitle}>
                            <p>Wided</p>
                            <p>Web Developer</p>
                            <a href="https://www.youcould.info/" rel="noreferrer" target="_blank" >
                                <img src='https://static.wixstatic.com/media/7528824071724d12a3e6c31eee0b40d4.png/v1/fill/w_49,h_49,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/7528824071724d12a3e6c31eee0b40d4.png'/>
                            </a>
                        </div>
                    </div>
                    <div className={styles.BigBox}>
                        <div className={styles.BoxImg}>
                            <img src='https://static.wixstatic.com/media/2177b9_e76cde36d58244f58c41ad0b19021366~mv2.png/v1/fill/w_253,h_251,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Matthias%20HP.png'/>
                        </div>
                        <div className={styles.BoxTitle}>
                            <p>Mathias</p>
                            <p>Social Media</p>
                            <a href="https://www.youcould.info/" rel="noreferrer" target="_blank" >
                                <img src='https://static.wixstatic.com/media/7528824071724d12a3e6c31eee0b40d4.png/v1/fill/w_49,h_49,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/7528824071724d12a3e6c31eee0b40d4.png'/>
                            </a>
                        </div>
                    </div>
                    <div className={styles.BigBox}>
                        <div className={styles.BoxImg}>
                            <img src='https://static.wixstatic.com/media/2177b9_9c2a7e09b8ac4728bafeccec7c51254c~mv2.png/v1/fill/w_253,h_251,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Waffly.png'/>
                        </div>
                        <div className={styles.BoxTitle}>
                            <p>Dario</p>
                            <p>Partnerships & Strategy</p>
                            <a href="https://www.youcould.info/" rel="noreferrer" target="_blank" >
                                <img src='https://static.wixstatic.com/media/7528824071724d12a3e6c31eee0b40d4.png/v1/fill/w_49,h_49,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/7528824071724d12a3e6c31eee0b40d4.png'/>
                            </a>
                            <br/>
                        </div>
                    </div>
                    <div className={styles.BigBox}>
                        <div className={styles.BoxImg}>
                            <img src='https://static.wixstatic.com/media/2177b9_9c2a7e09b8ac4728bafeccec7c51254c~mv2.png/v1/fill/w_253,h_251,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Waffly.png'/>
                        </div>
                        <div className={styles.BoxTitle}>
                            <p>you?</p>
                            <p>Contact Us</p>
                            <br/><br/>
                        </div>
                    </div>
                    <div className={styles.BigBox}>
                        <div className={styles.BoxImg}>
                            <img src='https://static.wixstatic.com/media/2177b9_9c2a7e09b8ac4728bafeccec7c51254c~mv2.png/v1/fill/w_253,h_251,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Waffly.png'/>
                        </div>
                        <div className={styles.BoxTitle}>
                            <p>SuperUchiha</p>
                            <p>Super Mod</p>
                            <br/><br/>
                        </div>
                    </div>
                    <div className={styles.BigBox}>
                        <div className={styles.BoxImg}>
                            <img src='https://static.wixstatic.com/media/2177b9_9c2a7e09b8ac4728bafeccec7c51254c~mv2.png/v1/fill/w_253,h_251,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Waffly.png'/>
                        </div>
                        <div className={styles.BoxTitle}>
                            <p>Kybra</p>
                            <p>Super Mod</p>
                            <br/><br/>
                        </div>
                    </div>
                </div>
                <img className={styles.world4} src='https://static.wixstatic.com/media/2177b9_3e78c69bb5f34729a6d51fce96baa917~mv2.png/v1/fill/w_199,h_200,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Blue%20planet.png'/>
                <img className={styles.world5} src='https://static.wixstatic.com/media/2177b9_d374189735e34108a11ccb40280ee93f~mv2.gif'/>
            </div>
        </div>
    )
}
export default Team;