"use client";

import { useMemo, useState } from "react";
import styles from "./page.module.css";
import { shops } from "@/data/shops";

export default function HomePage() {
  const [isListView, setIsListView] = useState(false);

  const gridClassName = useMemo(() => {
    return `${styles.grid} ${isListView ? styles.list : styles.gridMode}`;
  }, [isListView]);

  return (
    <div className={styles.page}>
      <header className={styles.hero}>
        <div className={styles.heroInner}>
          <p className={styles.badge}>KYOTO PICKS</p>
          <h1 className={styles.heroTitle}>
            今日行きたい、京都の
            <span className={styles.heroTitleAccent}> いい店 </span>
            10選
          </h1>
          <p className={styles.heroLead}>
            気分・エリア・ジャンルで探しやすい、雰囲気重視のおすすめ店舗を集めました。
          </p>

          <div className={styles.searchRow} role="search" aria-label="お店検索">
            <input
              className={styles.searchInput}
              placeholder="例：カフェ / 祇園 / 抹茶 など"
              aria-label="検索キーワード"
            />
            <button className={styles.searchButton} type="button">
              探す
            </button>
          </div>

          <div className={styles.quickChips} aria-label="クイックフィルター">
            {["カフェ", "和食", "スイーツ", "デート", "一人OK"].map((t) => (
              <button key={t} className={styles.chip} type="button">
                {t}
              </button>
            ))}
          </div>
        </div>
      </header>

      <main className={styles.main}>
        <section className={styles.sectionHead}>
          <div>
            <h2 className={styles.sectionTitle}>おすすめ店舗</h2>
            <p className={styles.sectionSub}>雰囲気・味・アクセスのバランスでセレクト</p>
          </div>

          <div className={styles.controlsRight}>
            <div className={styles.sortWrap}>
              <label className={styles.sortLabel} htmlFor="sort">
                並び替え
              </label>
              <select id="sort" className={styles.sortSelect} defaultValue="popular">
                <option value="popular">おすすめ順</option>
                <option value="area">エリア順</option>
                <option value="price">価格帯順</option>
              </select>
            </div>

            <label className={styles.toggle} aria-label="表示切り替え（グリッド / 一覧）">
              <span className={styles.toggleText}>{isListView ? "一覧" : "グリッド"}</span>
              <input
                className={styles.toggleInput}
                type="checkbox"
                checked={isListView}
                onChange={(e) => setIsListView(e.target.checked)}
              />
              <span className={styles.toggleTrack} aria-hidden="true">
                <span className={styles.toggleThumb} />
              </span>
            </label>
          </div>
        </section>

        <section className={gridClassName} aria-label="店舗一覧">
          {shops.map((s) => (
            <article key={s.id} className={styles.card}>
              <div className={styles.cardMedia} aria-hidden="true">
                <img className={styles.cardImage} src={s.image} alt="" loading="lazy" />
                <div className={styles.cardMediaOverlay} />
                <div className={styles.cardMetaTop}>
                  <span className={styles.pill}>{s.area}</span>
                  <span className={styles.pillMuted}>{s.genre}</span>
                </div>
              </div>

              <div className={styles.cardBody}>
                <div className={styles.cardHead}>
                  <h3 className={styles.cardTitle}>{s.name}</h3>
                  <span className={styles.price}>{s.price}</span>
                </div>

                <p className={styles.cardCatch}>{s.catch}</p>

                <ul className={styles.tags} aria-label={`${s.name}のタグ`}>
                  {s.tags.slice(0, 3).map((t) => (
                    <li key={t} className={styles.tag}>
                      #{t}
                    </li>
                  ))}
                </ul>

                <div className={styles.cardActions}>
                  <button className={styles.primary} type="button">
                    詳細を見る
                  </button>
                  <button className={styles.secondary} type="button" aria-label="保存">
                    保存
                  </button>
                </div>
              </div>
            </article>
          ))}
        </section>
      </main>
    </div>
  );
}
