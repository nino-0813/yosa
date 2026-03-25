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

const voiceCards = [
  {
    photo: "/voice-1-1e2620.png",
    quote: "「夜がスッと眠れる\n日が増えて続いた」",
    profile: "30代女性",
    tags: ["睡眠・自律神経の乱れ", "月4回の温活"],
  },
  {
    photo: "/voice-2-1e2620.png",
    quote: "「気分の波が\n穏やかになった」",
    profile: "40代女性",
    tags: ["更年期のゆらぎ", "月2回の温活"],
  },
  {
    photo: "/voice-3-1e2620.png",
    quote: "「手足の冷たさが\n気になりにくくなった」",
    profile: "20代女性",
    tags: ["冷え・むくみ", "月1〜2回の温活"],
  },
] as const;

const pointBlocks = [
  {
    title: "01 天然無農薬 のみ使用",
    body: "当店では、厳選された良質で安全な100％無農薬のよもぎと高級天然漢方薬草を使用しています。素材選びや調合は、東洋医学のプロである専属の漢方医が行っています。",
  },
  {
    title: "02 悩みに合わせた 漢方薬草ブレンド",
    body: "日本人女性に合わせた3種類の効能別オリジナルブレンドをご用意しております。よもぎをベースに専属漢方医が厳選した薬草を配合しています。表面しか温まらない一時的な温活ではなく、漢方薬草の蒸気をしっかりと全身に巡らせて「一生もののインナービューティー」を目指します。",
  },
  {
    title: "03 解毒・浄化作用に  優れた黄土座器",
    body: "“生きている土”とも呼ばれる「黄土」100%の座器を使用。蒸しの効果は80倍以上とも言われます。たくさんの酸素が含まれているため、解毒作用・浄化作用に優れており、遠赤外線によって漢方薬草の有効成分をしっかりと送り届けることができます。釉薬を塗布しない素焼きタイプなので、体内へ有害物質を取り込んでしまう心配もありません。職人が手間暇かけて1つずつ手作りしている、こだわりの天然由来座器です。",
  },
  {
    title: "04 ゆったりできる リラックス空間",
    body: "五感で温活、リラックス。心あたたまるくつろぎ空間。空間デザインのテーマは「心からあたためる」。ただ美しい空間ではなく、足元から頭まであたためて、心がほっとする時間を提供したい。そんな想いでデザイナーとつくりあげました。よもぎ蒸しスペースはすべて個室タイプ。お一人はもちろん、お友達やご家族と一緒にゆっくりとくつろぎながら、ご自身の体と向き合えます。",
  },
] as const;

export default function Home() {
  return (
    <div className="flex min-h-full flex-1 flex-col bg-white text-[var(--foreground)]">
      <header className={styles.hero}>
        <h1 className="sr-only">
          養生サロン ONZA 本格よもぎ蒸し専門店「温座」
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
                about onza
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
              src="/section-temperature-361e65.png"
              alt=""
              fill
              className="object-cover"
              sizes="100vw"
            />
            <h2 className={styles.tempHeadline}>
              体温が上がると
              <br />
              「人は変わる」
            </h2>
          </div>
        </section>

        <section className="bg-[var(--surface-warm)] px-6 py-16 sm:px-12 sm:py-24">
          <div className={`${styles.narrowLayout} space-y-10 text-[var(--body-secondary)]`}>
            <p className="text-center text-xl font-medium leading-relaxed tracking-[0.12em]">
              ただ温まるだけじゃない。「温度を上げて」巡りを取り戻す。
            </p>
            <div className="space-y-5 text-[0.8125rem] font-medium leading-[2] tracking-[0.18em] sm:text-[0.8125rem]">
              <p>
                よもぎ蒸しは、自然素材の蒸気で体を内側（深部）から温め、体質改善へ導く温活療法です。深部から温まることで、体内の不要なものを排出するデトックス力が高まり、栄養や成分が吸収されやすい土台が整います。さらに血流が良くなることで、栄養が体の隅々まで運ばれやすくなり、巡りもスムーズに。女性は筋肉量が少なく体内で熱を生み出しづらいため、深部体温が下がりやすい現代の体質に特におすすめです。深部体温が1℃上がると代謝や免疫力の向上につながるとも言われており、なんとなく不調を感じたら、週1回の本格よもぎ蒸しで「通う温活」を、温座で始めてみませんか。
              </p>
            </div>
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
              <div className={styles.voiceRow}>
                {voiceCards.map((card) => (
                  <article key={card.profile} className={styles.voiceCard}>
                    <div className={styles.voicePhoto}>
                      <Image
                        src={card.photo}
                        alt=""
                        fill
                        className="object-cover"
                        sizes="220px"
                      />
                    </div>
                    <p className="mt-5 whitespace-pre-line text-[1.0625rem] font-medium leading-[1.53] tracking-[0.14em]">
                      {card.quote}
                    </p>
                    <p className="mt-5 text-[0.72rem] font-medium tracking-[0.145em] text-[var(--muted)]">
                      {card.profile}
                    </p>
                    <ul className="mt-4 flex flex-col gap-2">
                      <li className="w-fit rounded-full border border-[var(--body-secondary)]/40 bg-white px-3 py-1.5 text-[0.8125rem] font-medium tracking-[0.14em] text-[var(--body-secondary)]">
                        {card.tags[0]}
                      </li>
                      <li className="w-fit rounded-full bg-[var(--pill-muted)] px-3 py-1.5 text-[0.8125rem] font-medium tracking-[0.14em] text-white">
                        {card.tags[1]}
                      </li>
                    </ul>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#f0ece4] py-20 sm:py-28">
          <div className="px-4 sm:px-6">
            <div className={styles.pointBannerWrap}>
              <Image
                src="/point-banner-29492d.png"
                alt=""
                width={1156}
                height={588}
                className="h-auto w-full object-cover"
                sizes="(max-width:1200px) 100vw, 1156px"
              />
              <div className={styles.pointHeading}>
                <p className="text-[0.65rem] font-normal uppercase tracking-[0.18em] text-white">
                  POINT
                </p>
                <p className="mt-1 text-[clamp(1.5rem,4vw,2.4rem)] font-normal tracking-[0.18em] text-white">
                  4つのこだわり
                </p>
              </div>
            </div>

            <div
              className={`${styles.narrowLayout} mt-16 space-y-14 px-4 sm:mt-20 sm:px-2`}
            >
              {pointBlocks.map((block) => (
                <div key={block.title}>
                  <h3 className="text-lg font-medium tracking-[0.12em] text-[var(--accent)] sm:text-xl">
                    {block.title}
                  </h3>
                  <p className="mt-4 text-[0.8125rem] font-medium leading-[1.75] tracking-[0.18em] text-[var(--body-secondary)]">
                    {block.body}
                  </p>
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
              src="/footer-onza-logo-56586a.png"
              alt="ONZA"
              width={195}
              height={41}
              className="h-auto w-[min(160px,42vw)] object-contain brightness-0 invert drop-shadow"
            />
          </div>
          <p className="mt-12 text-xl font-medium tracking-[0.32em] text-white drop-shadow-md">
            Onza は「温度」を大切にするブランドです。
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
              それが温座の使命です。
            </p>
            <p>
              温度でまわる経済をつくる。
              <br />
              温座が目指すのは、数字だけではなく“温度”でまわる経営。働く人が誇りを持ち、
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
