import Image from "next/image";
import styles from "./home.module.css";

const galleryImages = [
  { src: "/images/2.svg", alt: "ギャラリー画像 1" },
  { src: "/images/1.svg", alt: "ギャラリー画像 2" },
  { src: "/images/4.svg", alt: "ギャラリー画像 3" },
  { src: "/images/5.svg", alt: "ギャラリー画像 4" },
] as const;

const aboutLight = {
  titleLine1: "人生をできるだけ",
  titleLine2: "軽くしたい",
  items: [
    "◎心も体もすっきりと目覚めたい",
    "◎日々を穏やかな気持ちで過ごしたい",
    "◎疲れにくい、軽やかな体で動きたい",
    "◎季節の変化にもゆるがない体づくりをしたい",
    "◎本来の自分のリズムを取り戻したい",
    "◎自然体で笑顔がこぼれる毎日を送りたい",
  ],
} as const;

const aboutWarm = {
  titleLine1: "女性特有の悩みを",
  titleLine2: "なんとかしたい",
  items: [
    "◎冷えがつらい／手足が冷たい",
    "◎自律神経の乱れを感じる",
    "◎ストレスが抜けず気分が落ち込みやすい",
    "◎眠りが浅い／疲れが抜けない",
    "◎妊活・更年期など、女性特有のゆらぎ",
    "◎美容（肌・めぐり・代謝）を整えたい",
  ],
} as const;

const pointBlocks = [
  {
    title: "01 天然無農薬 のみ使用",
    body: "厳選した良質で安全な、100％無農薬のよもぎと天然の漢方薬草だけを使用しています。素材選びから調合まで、東洋医学の知見をもつ専属漢方医が監修しています。",
  },
  {
    title: "02 悩みに合わせた 漢方薬草ブレンド",
    body: "日本人女性の体質やお悩みに寄り添い、効能別に3種類のオリジナルブレンドをご用意。よもぎをベースに、専属漢方医が厳選した薬草を配合しています。その場しのぎの“温活”ではなく、蒸気を全身に巡らせて、内側から整う「インナービューティー」を目指します。",
  },
  {
    title: "03 解毒・浄化作用に  優れた黄土座器",
    body: "“生きている土”とも呼ばれる黄土を100％使用した座器を採用。遠赤外線の力で身体を芯から温め、漢方薬草の有効成分をやさしく届けます。釉薬を塗らない素焼きタイプのため、余計な成分が溶け出す心配もありません。職人が手間ひまをかけて一つずつ仕上げる、天然由来のこだわり座器です。",
  },
  {
    title: "04 ゆったりできる リラックス空間",
    body: "五感がゆるむ、心まであたたまるくつろぎ空間。テーマは「心からあたためる」です。ただ美しいだけではなく、足元から頭までゆったり温まり、ほっと息が抜ける時間を過ごしていただきたい。そんな想いを込めてデザイナーとつくり上げました。よもぎ蒸しはすべて個室。お一人でも、ご家族やお友達と一緒でも、安心して自分の体と向き合えます。",
  },
] as const;

const pointImages = [
  { src: "/images/01.svg", alt: "01 天然無農薬 のみ使用" },
  { src: "/images/02.svg", alt: "02 悩みに合わせた 漢方薬草ブレンド" },
  { src: "/images/03.svg", alt: "03 解毒・浄化作用に 優れた黄土座器" },
  { src: "/images/04.svg", alt: "04 ゆったりできる リラックス空間" },
] as const;

export default function Home() {
  return (
    <div className="flex min-h-full flex-1 flex-col bg-white text-[var(--foreground)]">
      <header className={styles.hero}>
        <h1 className="sr-only">
          養生サロン LARIMAR 本格よもぎ蒸し専門店「ラリマー」
        </h1>
        <div className={styles.heroBackdrop} aria-hidden>
          <video
            className={styles.heroBackdropVideo}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster="/hero-main.png"
          >
            <source src="/videos/larimar-hero.mp4" type="video/mp4" />
          </video>
        </div>
        <video
          className={styles.heroMedia}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/hero-main.png"
        >
          <source src="/videos/larimar-hero.mp4" type="video/mp4" />
        </video>
      </header>

      <main className="flex flex-1 flex-col">
        <section aria-label="写真ギャラリー" className="bg-white">
          <div className={styles.galleryGrid}>
            {galleryImages.map(({ src, alt }) => (
              <figure key={src} className={styles.galleryFigure}>
                <Image
                  src={src}
                  alt={alt}
                  fill
                  unoptimized
                  className="object-cover"
                  sizes="(max-width:1024px) 46vw, 436px"
                />
              </figure>
            ))}
          </div>
        </section>

        <section className="bg-white px-6 py-12 sm:py-16">
          <p className="mx-auto max-w-[32rem] text-center text-xl font-medium leading-[2.37] tracking-[0.18em] sm:text-xl">
            天然薬草の蒸気で体内深部を
            <br />
            やさしく温めながら女性特有の悩みをケアし、
            <br />
            体質改善を目指すお店です。
          </p>
        </section>

        <section className="border-t border-black/[0.06] bg-white pb-24 pt-12 sm:pb-28 sm:pt-20">
          <div className={`${styles.narrowLayout} px-5 sm:px-6`}>
            <header className="mb-16 text-center">
              <p className="text-[2.3rem] font-normal uppercase leading-none tracking-[0.18em] text-[var(--accent)] sm:text-[2.875rem]">
                about LARIMAR
              </p>
              <h2 className="mt-4 text-lg font-normal tracking-[0.18em] text-[var(--foreground)]">
                どんな女性が利用するお店？
              </h2>
              <div
                className="mx-auto mt-7 h-px w-[46px] bg-[var(--accent)]"
                aria-hidden
              />
            </header>

            <div className={`${styles.aboutGrid} flex flex-col gap-16 lg:gap-20`}>
              <article className={`${styles.aboutCard} flex flex-col items-stretch gap-10 lg:flex-row lg:gap-12`}>
                <div className="relative aspect-[372/416] w-full shrink-0 overflow-hidden bg-neutral-200 lg:w-[372px]">
                  <Image
                    src="/images/001.svg"
                    alt="くつろぎの時間を過ごす女性のイメージ"
                    fill
                    unoptimized
                    className="object-cover"
                    sizes="(max-width:1024px) 100vw, 372px"
                  />
                </div>
                <div className={`${styles.aboutBody} min-w-0 flex-1 pt-1`}>
                  <h3 className={styles.aboutTitleMuted}>
                    <span>{aboutLight.titleLine1}</span>
                    <span>{aboutLight.titleLine2}</span>
                  </h3>
                  <ul className={styles.aboutListMuted}>
                    {aboutLight.items.map((line) => (
                      <li key={line}>{line}</li>
                    ))}
                  </ul>
                </div>
              </article>

              <article className={`${styles.aboutCard} flex flex-col items-stretch gap-10 lg:flex-row-reverse lg:gap-12`}>
                <div className="relative aspect-[372/416] w-full shrink-0 overflow-hidden bg-neutral-200 lg:w-[372px]">
                  <Image
                    src="/images/002.svg"
                    alt="不調や疲れを感じている女性のイメージ"
                    fill
                    unoptimized
                    className="object-cover"
                    sizes="(max-width:1024px) 100vw, 372px"
                  />
                </div>
                <div className={`${styles.aboutBody} min-w-0 flex-1 pt-1`}>
                  <h3 className={styles.aboutTitleEmphasis}>
                    <span>{aboutWarm.titleLine1}</span>
                    <span>{aboutWarm.titleLine2}</span>
                  </h3>
                  <ul className={styles.aboutListEmphasis}>
                    {aboutWarm.items.map((line) => (
                      <li key={line}>{line}</li>
                    ))}
                  </ul>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="bg-white">
          <div className={styles.tempStage}>
            <Image
              src="/images/temp-section.svg"
              alt=""
              fill
              unoptimized
              className="object-cover"
              sizes="100vw"
            />
          </div>
        </section>

        <section aria-label="ただ温まるだけじゃない" className="bg-white">
          <div className="w-full bg-[var(--surface-warm)]">
            <img
              src="/images/warm-message.svg"
              alt=""
              className="block h-auto w-full"
            />
          </div>
        </section>

        <section className="bg-white py-20 sm:py-28">
          <div className="mx-auto max-w-[1128px] px-4 sm:px-8">
            <p className="mb-16 text-center text-lg font-medium tracking-[0.14em] text-[var(--foreground)]">
              “ご自身の悩みに近い方の声”をご参考にしてください。
            </p>
            <header className="mb-12 text-center">
              <p className="text-4xl font-normal uppercase leading-none tracking-[0.14em] text-[var(--accent)] sm:text-[2.75rem]">
                VOICE
              </p>
              <h2 className="mt-4 text-lg font-normal tracking-[0.18em]">
                お客様の声
              </h2>
            </header>

            <div className={styles.voicePanel}>
              <Image
                src="/images/睡眠の質が悪い.png"
                alt="お客様の声。30代女性：睡眠の質が悪い、月4回の温活。「気づいたら夜スッと眠れる日が増えてきました」。40代女性：更年期のゆらぎ、月2回の温活。「なんか最近、前みたいにイライラしなくなってきました」。20代女性：冷え・むくみ、月1〜2回の温活。「『あれ、今日むくんでないかも』って思う日が増えました」。"
                width={1280}
                height={720}
                className="h-auto w-full rounded-xl object-contain"
                sizes="(max-width: 1028px) 100vw, min(1028px, 100vw)"
              />
            </div>
          </div>
        </section>

        <section className="bg-[#f0ece4] pb-20 sm:pb-28">
          <div className={styles.pointBannerWrap}>
            <Image
              src="/images/4つのこだわり.svg"
              alt="POINT 4つのこだわり"
              width={851}
              height={315}
              className="h-auto w-full object-contain"
              sizes="(max-width:1200px) 100vw, 1156px"
              unoptimized
            />
          </div>

          <div className="px-4 sm:px-6">
            <div
              className={`${styles.narrowLayout} mt-16 space-y-14 px-4 sm:mt-20 sm:px-2`}
            >
              {pointImages.map((item) => (
                <div key={item.src} className="mx-auto w-full max-w-[720px]">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={851}
                    height={315}
                    className="h-auto w-full object-contain"
                    sizes="(max-width: 768px) 100vw, 720px"
                    unoptimized
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[var(--surface-warm)] px-4 py-20 sm:py-24">
          <div className="mx-auto max-w-[556px] rounded-t-[30px] border border-[#3e3a39] bg-white px-6 pb-10 pt-0 shadow-sm sm:px-10">
            <div className="-mx-6 border-b border-[#3e3a39]/25 px-6 py-4 text-center sm:-mx-10 sm:px-10">
              <p className="text-xl font-medium tracking-[0.16em] text-[var(--body-secondary)]">
                初回限定お試し価格
              </p>
            </div>
            <p className="mt-8 text-center text-xl font-medium tracking-[0.12em] text-[var(--body-secondary)]">
              本格よもぎ蒸し
            </p>
            <p className="mt-2 text-center text-5xl font-medium tabular-nums tracking-wide text-[var(--body-secondary)] sm:text-6xl">
              40分
            </p>
            <p className="mt-2 text-center text-sm font-medium tracking-wide text-[var(--body-secondary)]/85">
              （所要90分｜カウンセリング含む）
            </p>
            <p className="mt-8 text-center text-[0.8125rem] font-medium tracking-[0.15em] text-[var(--body-secondary)]">
              定価 ¥5,500 →{" "}
              <span className="text-lg tracking-wide">¥4,980（税込）</span>
            </p>
            <a
              href="https://line.me/"
              className="mt-10 flex w-full items-center justify-center bg-[#2d4a3e] py-4 text-base font-bold tracking-[0.18em] text-white transition-colors hover:bg-[#243d32]"
              rel="noopener noreferrer"
              target="_blank"
            >
              公式LINEから予約する
            </a>
          </div>
        </section>
      </main>

      <footer className={styles.footerStage}>
        <Image
          src="/footer-bg-309726.png"
          alt=""
          fill
          className={styles.footerBg}
          sizes="100vw"
        />
        <div className={styles.footerScrim} aria-hidden />
        <div className={`${styles.footerInner} mx-auto max-w-3xl text-center text-white`}>
          <div className="flex flex-col items-center gap-8 sm:gap-10">
            <Image
              src="/footer-tagline-1-56586a.png"
              alt="温めて、巡らせて、整える。"
              width={294}
              height={210}
              className="h-auto w-[min(220px,55vw)] object-contain drop-shadow-md"
            />
            <Image
              src="/footer-larimar-logo-56586a.png"
              alt="LARIMAR"
              width={195}
              height={41}
              className="h-auto w-[min(160px,42vw)] object-contain brightness-0 invert drop-shadow"
            />
          </div>
          <p className="mt-12 text-xl font-medium tracking-[0.32em] text-white drop-shadow-md">
            ラリマーは「温度」を大切にするブランドです。
          </p>
          <div className="mt-10 space-y-7 text-sm font-medium leading-loose tracking-[0.24em] text-white/95 drop-shadow-md sm:text-[0.95rem]">
            <p>
              巡りのある社会をつくる。
              <br />
              私たちは、“温めて、巡らせて、整える”という養生の知恵を通して、
            </p>
            <p>
              人と人、心と仕事、地域と未来をあたためる存在でありたい。
              <br />
              効率や拡大だけではなく、関わるすべての人が
              <br />
              “心地よく巡る”社会をつくること。
              <br />
              それがラリマーの使命です。
            </p>
            <p>
              温度でまわる経済をつくる。
              <br />
              ラリマーが目指すのは、数字だけではなく“温度”でまわる経営。働く人が誇りを持ち、
              <br />
              つくる人が安心して暮らし、お客様がやさしさを感じられる循環を社会に根づかせる。
              <br />
              製造元から、サロンの空間、一杯の飲み物に至るまで、
              <br />
              そのすべてに“人の手の温度”を感じるブランドであり続けます。
            </p>
          </div>
          <a
            href="https://www.instagram.com/"
            className="mt-14 inline-flex opacity-95 transition-opacity hover:opacity-100"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Image
              src="/instagram-56586a.png"
              alt="Instagram"
              width={28}
              height={28}
              className="brightness-0 invert drop-shadow"
            />
          </a>
        </div>
      </footer>
    </div>
  );
}
