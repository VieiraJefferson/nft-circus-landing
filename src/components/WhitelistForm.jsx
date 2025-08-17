"use client";
import { useState } from "react";
import styles from "@/styles/WhitelistForm.module.scss";
import { FaXTwitter } from "react-icons/fa6";
import { Luckiest_Guy } from "next/font/google";

const luckiestGuy = Luckiest_Guy({
  subsets: ["latin"],
  weight: "400",
});

export default function WhitelistForm() {
  const [twitterHandle, setTwitterHandle] = useState("");
  const [btcWallet, setBtcWallet] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Submitted: ${twitterHandle} | BTC Wallet: ${btcWallet}`);
    // Aqui você pode enviar os dados para backend ou API
  };

  return (
    <section 
  id="whitelist" className={`${styles.whitelistSection} ${luckiestGuy.className}`}>
      <h2>Join the Whitelist</h2>
      <p>To be eligible, please complete the steps below:</p>

      <ul className={styles.instructions}>
       <li>
  ➤ FOLLOW <a href="https://x.com/MareiPallas" target="_blank">@MareiPallas</a> on <span className={styles.icon}><FaXTwitter /></span>
</li>

        <li>➤ Like and retweet the pinned post</li>
        <li>
  ➤ ENTER YOUR X (TWITTER) HANDLE AND <span className={styles.indent}><strong>BTC WALLET BELOW:</strong></span>
</li>

      </ul>

      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          placeholder="@yourhandle"
          value={twitterHandle}
          onChange={(e) => setTwitterHandle(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Your BTC wallet address"
          value={btcWallet}
          onChange={(e) => setBtcWallet(e.target.value)}
          required
        />
        <button type="submit">Join Whitelist</button>
      </form>
    </section>
  );
}
