"use client";

import { useMemo, useState } from "react";
import styles from "./ViewModeSection.module.css";

type Props = {
  gridClassName: string; // page.module.css の styles.grid などを受け取る
  listClassName: string; // styles.list
  gridModeClassName?: string; // styles.gridMode（あれば）
  children: React.ReactNode;
};

export default function ViewModeSection({
  gridClassName,
  listClassName,
  gridModeClassName,
  children,
}: Props) {
  const [isListView, setIsListView] = useState(false);

  const wrapperClassName = useMemo(() => {
    const base = [gridClassName, gridModeClassName].filter(Boolean).join(" ");
    return isListView ? `${gridClassName} ${listClassName}` : base;
  }, [gridClassName, listClassName, gridModeClassName, isListView]);

  return (
    <>
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

      <section className={wrapperClassName} aria-label="店舗一覧">
        {children}
      </section>
    </>
  );
}
