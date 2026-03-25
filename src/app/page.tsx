import Image from "next/image";
import Link from "next/link";
import styles from "./home.module.css";

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
              <article className={styles.aboutCard}>
                <div className="relative aspect-[372/416] w-full min-w-0 overflow-hidden bg-neutral-200">
                  <Image
                    src="/images/001.svg"
                    alt="くつろぎの時間を過ごす女性のイメージ"
                    fill
                    unoptimized
                    className="object-cover"
                    sizes="(max-width: 640px) 48vw, (max-width: 1088px) 44vw, 520px"
                  />
                </div>
              </article>

              <article className={styles.aboutCard}>
                <div className="relative aspect-[372/416] w-full min-w-0 overflow-hidden bg-neutral-200">
                  <Image
                    src="/images/002.svg"
                    alt="不調や疲れを感じている女性のイメージ"
                    fill
                    unoptimized
                    className="object-cover"
                    sizes="(max-width: 640px) 48vw, (max-width: 1088px) 44vw, 520px"
                  />
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
              sizes="(max-width: 1023px) 100vw, 880px"
            />
          </div>
        </section>

        <section aria-label="ただ温まるだけじゃない" className="bg-white">
          <div className="w-full bg-[var(--surface-warm)] px-4 sm:px-6 lg:px-8">
            <img
              src="/images/warm-message.svg"
              alt=""
              className="mx-auto block h-auto w-full lg:max-w-[880px]"
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

          <div className={`${styles.voicePanel} px-4 sm:px-6 lg:px-8`}>
            <Image
              src="/images/睡眠の質が悪い.png"
              alt="お客様の声。30代女性：睡眠の質が悪い、月4回の温活。「気づいたら夜スッと眠れる日が増えてきました」。40代女性：更年期のゆらぎ、月2回の温活。「なんか最近、前みたいにイライラしなくなってきました」。20代女性：冷え・むくみ、月1〜2回の温活。「『あれ、今日むくんでないかも』って思う日が増えました」。"
              width={1280}
              height={720}
              className="mx-auto block h-auto w-full object-contain lg:max-w-[880px]"
              sizes="(max-width: 1023px) 100vw, 880px"
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
              className="mx-auto h-auto w-full max-w-full object-contain"
              sizes="(max-width: 1023px) 100vw, 880px"
              unoptimized
            />
          </div>

          <div className="px-2 sm:px-4 lg:px-6">
            <div className={`${styles.pointDetailGrid} mt-16 sm:mt-20`}>
              {pointImages.map((item) => (
                <div key={item.src} className="min-w-0">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={851}
                    height={315}
                    className="h-auto w-full object-contain"
                    sizes="(max-width: 1023px) 100vw, (max-width: 1280px) 45vw, 440px"
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
