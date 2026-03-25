import Image from "next/image";
import Link from "next/link";
import styles from "./home.module.css";

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
            <Image
              src="/images/12.svg"
              alt="ギャラリー"
              width={851}
              height={315}
              className="h-auto w-full object-contain"
              sizes="(max-width: 1920px) 100vw, 1920px"
              unoptimized
            />
          </div>
        </section>

        <section
          aria-label="ラリマーのご案内"
          className="bg-white px-6 py-12 sm:py-16"
        >
          <div className="mx-auto max-w-[851px]">
            <Image
              src="/images/11.svg"
              alt="天然薬草の蒸気で体内深部をやさしく温めながら女性特有の悩みをケアし、体質改善を目指すお店です。"
              width={851}
              height={315}
              className="h-auto w-full object-contain"
              sizes="(max-width: 851px) 100vw, 851px"
              unoptimized
            />
          </div>
        </section>

        <section className="border-t border-black/[0.06] bg-white pb-24 pt-12 sm:pb-28 sm:pt-20">
          <div className={styles.narrowLayout}>
            <div className="px-5 sm:px-6">
              <header className="mb-16 text-center">
                <h2 className={styles.aboutMainTitle}>ABOUT</h2>
                <p className="mt-4 text-lg font-normal tracking-[0.18em] text-[var(--foreground)]">
                  どんな女性が利用するお店？
                </p>
                <div
                  className="mx-auto mt-7 h-px w-[46px] bg-[var(--accent)]"
                  aria-hidden
                />
              </header>
            </div>

            <div className={`${styles.aboutGrid} sm:px-6 lg:px-0`}>
              <article className={`${styles.aboutCard} flex flex-col items-stretch gap-10 lg:flex-row lg:gap-12`}>
                <div className="relative aspect-[372/416] w-full min-w-0 shrink-0 overflow-hidden bg-neutral-200 lg:w-[372px]">
                  <Image
                    src="/images/001.svg"
                    alt="くつろぎの時間を過ごす女性のイメージ"
                    fill
                    unoptimized
                    className="object-cover"
                    sizes="(max-width:1023px) 45vw, 372px"
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
                <div className="relative aspect-[372/416] w-full min-w-0 shrink-0 overflow-hidden bg-neutral-200 lg:w-[372px]">
                  <Image
                    src="/images/002.svg"
                    alt="不調や疲れを感じている女性のイメージ"
                    fill
                    unoptimized
                    className="object-cover"
                    sizes="(max-width:1023px) 45vw, 372px"
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
            <header className="mb-16 text-center">
              <h2 className={styles.aboutMainTitle}>VOICE</h2>
              <p className="mt-4 text-lg font-normal tracking-[0.18em] text-[var(--foreground)]">
                お客様の声
              </p>
              <div
                className="mx-auto mt-7 h-px w-[46px] bg-[var(--accent)]"
                aria-hidden
              />
            </header>
          </div>

          <div className={styles.voicePanel}>
            <Image
              src="/images/睡眠の質が悪い.png"
              alt="お客様の声。30代女性：睡眠の質が悪い、月4回の温活。「気づいたら夜スッと眠れる日が増えてきました」。40代女性：更年期のゆらぎ、月2回の温活。「なんか最近、前みたいにイライラしなくなってきました」。20代女性：冷え・むくみ、月1〜2回の温活。「『あれ、今日むくんでないかも』って思う日が増えました」。"
              width={1280}
              height={720}
              className="block h-auto w-full object-contain"
              sizes="100vw"
            />
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

          <div className="px-2 sm:px-4 lg:px-6">
            <div
              className={`${styles.narrowLayout} mt-16 space-y-12 sm:mt-20 sm:space-y-14`}
            >
              {pointImages.map((item) => (
                <div key={item.src} className="w-full">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={851}
                    height={315}
                    className="h-auto w-full object-contain"
                    sizes="(max-width: 1088px) 100vw, 1088px"
                    unoptimized
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[var(--surface-warm)] px-4 py-20 sm:py-24">
          <div className="mx-auto max-w-[556px] overflow-hidden rounded-t-[30px] border border-[#3e3a39] bg-white shadow-sm">
            <div className="border-b border-[#3e3a39] px-5 py-4 text-center sm:px-10 sm:py-5">
              <p className="text-lg font-medium tracking-[0.16em] text-[#474342] sm:text-xl">
                初回限定お試し価格
              </p>
            </div>
            <div
              className={`${styles.pricingCardBody} px-6 pb-10 pt-8 text-[#3e3a39] sm:px-10 sm:pt-10`}
            >
              <h2 className="text-center font-medium leading-tight tracking-[0.08em]">
                <span className="text-[clamp(1.15rem,3.8vw,1.5rem)]">
                  本格よもぎ蒸し
                </span>
                <span className="text-[clamp(1.85rem,7vw,2.875rem)] tabular-nums tracking-[0.04em]">
                  40分
                </span>
              </h2>
              <p className="mt-3 text-center text-sm font-medium tracking-[0.14em] text-[#474342]/92">
                （所要60分｜カウンセリング含む）
              </p>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
                <p className="text-sm font-medium tracking-[0.12em] text-[#615f5f] line-through decoration-[#615f5f] decoration-1">
                  定価 ¥5,500
                </p>
                <div className="flex items-center gap-3">
                  <p className="text-[clamp(2.125rem,8vw,3.5rem)] font-bold leading-none tracking-wide text-[#74ab32]">
                    <span className="font-bold" aria-hidden>
                      ¥
                    </span>
                    <span className="ml-1.5 tabular-nums sm:ml-2">4,980</span>
                  </p>
                  <span
                    className="max-h-[3.5rem] shrink-0 text-[0.625rem] font-medium leading-snug tracking-[0.18em] text-[#74ab32] [writing-mode:vertical-rl]"
                  >
                    （税込）
                  </span>
                </div>
              </div>
              <Link
                href="/reserve"
                className="mt-10 flex w-full items-center justify-center rounded-none bg-[#74ab32] py-4 font-sans text-base font-bold tracking-[0.12em] text-white transition-colors hover:bg-[#679a2d] active:bg-[#5c8828]"
              >
                予約する
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="relative w-full overflow-hidden bg-white">
        <div className={`${styles.footerInner} mx-auto max-w-3xl text-center`}>
          <Image
            src="/images/LARIMARは.svg"
            alt="LARIMARは「温度」を大切にするブランドです。巡りのある社会をつくる。私たちは、“温めて、巡らせて、整える”という養生の知恵を通して、人と人、心と仕事、地域と未来をあたためる存在でありたい。効率や拡大だけではなく、関わるすべての人が“心地よく巡る”社会をつくること。それがラリマーの使命です。温度でまわる経済をつくる。ラリマーが目指すのは、数字だけではなく“温度”でまわる経営。製造元からサロンの空間、一杯の飲み物に至るまで、そのすべてに“人の手の温度”を感じるブランドであり続けます。"
            width={1080}
            height={1350}
            className="mx-auto h-auto w-full max-w-3xl object-contain"
            sizes="(max-width: 768px) 100vw, 768px"
            unoptimized
          />
        </div>
      </footer>
    </div>
  );
}
