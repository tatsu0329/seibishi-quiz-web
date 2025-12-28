// 年度表示のフォーマットユーティリティ

/**
 * 年度文字列を「令和◯年度」「第◯回」の形式に変換
 * @param yearStr - "2025-1" のような形式の年度文字列
 * @returns { reiwaYear: string, sessionNumber: string }
 */
export function formatYearDisplay(yearStr: string): {
  reiwaYear: string;
  sessionNumber: string;
} {
  const parts = yearStr.split("-");
  const year = parseInt(parts[0], 10);
  const session = parts[1] || "1";

  // 西暦から令和への変換（令和元年 = 2019年）
  const reiwaYear = year - 2018;

  return {
    reiwaYear: `令和${reiwaYear}年度`,
    sessionNumber: `第${session}回`,
  };
}

/**
 * カテゴリ情報から完全な表示名を取得
 * @param category - カテゴリ情報オブジェクト
 * @returns フォーマットされた表示文字列
 */
export function formatCategoryDisplay(category: {
  level: string;
  fuelType: string;
  year: string;
}): string {
  const { reiwaYear, sessionNumber } = formatYearDisplay(category.year);
  return `${category.level} ${category.fuelType} ${reiwaYear} ${sessionNumber}`;
}



