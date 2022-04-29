import styles from "../styles/Faq.module.css";
import React, { useState } from "react";

const Faq = () => {
  const [faq1, setFaq1] = useState(false);
  const [faq2, setFaq2] = useState(false)
  const [faq3, setFaq3] = useState(false)
  const [faq4, setFaq4] = useState(false)

  return (
    <div className={styles.faq}>
      <div className={styles.container}>
        <div className={styles.FaqCloud}>
          <img src="/images/cloud.png" alt="bg" className={styles.cloud} />
          <h1 role="heading" className={styles.cloudText}>
            FAQ&#39;s
          </h1>
        </div>
        <div className={styles.faqBox}>
          <div className={styles.form}>
            <div className={styles.secondForm}>
              <div>
                <h2>What is the utility of WeCould NFT</h2>
              </div>
              <button className={styles.btn} onClick={() => setFaq1(!faq1)}>
                {faq1 ? (
                  <svg
                    role="button"
                    aria-label="close dropdown"
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                      <path />
                    <path
                      d="M1 5L5 1L9 5"
                      stroke="#4B5563"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ) : (
                  <svg
                    width="10"
                    role="button"
                    aria-label="open dropdown"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 1L5 5L9 1"
                      stroke="#4B5563"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </button>
            </div>
            {faq1 && (
                <p className={styles.text}>
                  NFT stands for “non-fungible token” which are unique digital items that are stored and encrypted on the blockchain that people can buy, own, and trade. NFTs are way more than digital art and can have various benefits. Look at them as a digital securitization. Their limits are only in our mind. They can be membership passes, shares, and even a securitization of physical goods like properties.
                </p>
              )}
          </div>

          <div className={styles.form}>
            <div className={styles.secondForm}>
              <div>
                <h2>What is the supply and mint price of WeCould NFT?</h2>
              </div>
              <button className={styles.btn} onClick={() => setFaq2(!faq2)}>
                {faq2 ? (
                  <svg
                    role="button"
                    aria-label="close dropdown"
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                      <path />
                    <path
                      d="M1 5L5 1L9 5"
                      stroke="#4B5563"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ) : (
                  <svg
                    width="10"
                    role="button"
                    aria-label="open dropdown"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 1L5 5L9 1"
                      stroke="#4B5563"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </button>
            </div>
            {faq2 && (
                <p className={styles.text}>
                  There will be a total of x.xxx WeCoulds available.
                    <br />
                    WL mint price is 0.xx ETH.
                    <br />
                    Public mint price is 0.yy ETH.
                  </p>
              )}
          </div>

          <div className={styles.form}>
            <div className={styles.secondForm}>
              <div>
                <h2>Launch date of WeCould NFT</h2>
              </div>
              <button className={styles.btn} onClick={() => setFaq3(!faq3)}>
                {faq3 ? (
                  <svg
                    role="button"
                    aria-label="close dropdown"
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                      <path />
                    <path
                      d="M1 5L5 1L9 5"
                      stroke="#4B5563"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ) : (
                  <svg
                    width="10"
                    role="button"
                    aria-label="open dropdown"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 1L5 5L9 1"
                      stroke="#4B5563"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </button>
            </div>
            {faq3 && (
                <p className={styles.text}>
                  TBA
                </p>
              )}
          </div>

          <div className={styles.form}>
            <div className={styles.secondForm}>
              <div>
                <h2>How do i buy a WeCould NFT?</h2>
              </div>
              <button className={styles.btn} onClick={() => setFaq4(!faq4)}>
                {faq4 ? (
                  <svg
                    role="button"
                    aria-label="close dropdown"
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                      <path />
                    <path
                      d="M1 5L5 1L9 5"
                      stroke="#4B5563"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ) : (
                  <svg
                    width="10"
                    role="button"
                    aria-label="open dropdown"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 1L5 5L9 1"
                      stroke="#4B5563"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </button>
            </div>
            {faq4 && (
                <p className={styles.text}>
                  1. Sign up for Metamask or Coinbase Wallet and download the
                    extension on your internet browser.
                    <br />
                    2. Make sure you have enough Ethereum in your wallet to
                    cover the total cost including gas fees.
                    <br />
                    3. On mint day, there will be a Connect button at the top of
                    our website to connect to your wallet.
                    <br />
                    4. Click on the mint button and you will be prompted to sign
                    for your transaction. There will be a fee associated with
                    every transaction related to gas prices.
                    <br />
                    5. Once you have made your purchase, your WonderPals NFTs
                    will appear in your wallet and on Opensea!
                </p>
              )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Faq;
