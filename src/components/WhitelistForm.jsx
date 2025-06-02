'use client'
import { useState } from 'react'
import styles from '@/styles/WhitelistForm.module.scss'
import { FaXTwitter } from 'react-icons/fa6'
import { Luckiest_Guy } from "next/font/google";
const luckiestGuy = Luckiest_Guy({
  subsets: ["latin"],
  weight: "400",
});

export default function WhitelistForm() {
  const [twitterHandle, setTwitterHandle] = useState('')
    const [btcWallet, setBtcWallet] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // Lógica para envio (ex: salvar no banco ou integrar com webhook)
    alert(`Inscrição enviada para: ${twitterHandle}`)
  }

  
  return (
    <section className={`${styles.whitelistSection} ${luckiestGuy.className}`}>
      <h2>Join the Whitelist</h2>
      <p>
        To be eligible, please complete the steps below:
      </p>
      <ul>
        <li>
  ➤ Follow <a href="https://x.com/MareiPallas" target="_blank">@MareiPallas</a> on{' '}
  <FaXTwitter style={{ color: 'black' }} />
</li>
        <li>➤ Like and retweet the pinned post</li>
        <li>➤ Enter your X (Twitter) handle below:</li>
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
  placeholder="your BTC wallet"
  value={btcWallet}
  onChange={(e) => setBtcWallet(e.target.value)}
  required
/>
  <button type="submit">Join Whitelist</button>
</form>

    </section>
  )
}
