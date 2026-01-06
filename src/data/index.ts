// 問題集ファイルをインポート
// ============================================
// 新しい問題集を追加する場合は、以下を参考にしてください：
// 1. src/data/questionSets/ にJSONファイルを追加
// 2. このファイルの先頭にインポート文を追加
// 3. export default の配列に追加
// 詳細は「問題集追加ガイド.md」を参照してください
// ============================================

// 国家1級
import level1C2023 from "./questionSets/level-1-C-2023.json";
import level1C20212 from "./questionSets/level-1-C-2021-2.json";
import level1C20222 from "./questionSets/level-1-C-2022-2.json";
import level1C20232 from "./questionSets/level-1-C-2023-2.json";
import level1C20242 from "./questionSets/level-1-C-2024-2.json";

// 国家2級 - ガソリン
import level2G20251 from "./questionSets/level-2-G-2025-1.json";
import level2G20241 from "./questionSets/level-2-G-2024-1.json";
import level2G20242 from "./questionSets/level-2-G-2024-2.json";
import level2G20231 from "./questionSets/level-2-G-2023-1.json";
import level2G20232 from "./questionSets/level-2-G-2023-2.json";
import level2G20221 from "./questionSets/level-2-G-2022-1.json";
import level2G20222 from "./questionSets/level-2-G-2022-2.json";

// 国家2級 - ディーゼル
import level2D20251 from "./questionSets/level-2-D-2025-1.json";
import level2D20241 from "./questionSets/level-2-D-2024-1.json";
import level2D20242 from "./questionSets/level-2-D-2024-2.json";
import level2D20231 from "./questionSets/level-2-D-2023-1.json";
import level2D20232 from "./questionSets/level-2-D-2023-2.json";
import level2D20221 from "./questionSets/level-2-D-2022-1.json";
import level2D20222 from "./questionSets/level-2-D-2022-2.json";

// 国家3級 - ガソリン
import level3G20251 from "./questionSets/level-3-G-2025-1.json";
import level3G20241 from "./questionSets/level-3-G-2024-1.json";
import level3G20242 from "./questionSets/level-3-G-2024-2.json";
import level3G20231 from "./questionSets/level-3-G-2023-1.json";
import level3G20232 from "./questionSets/level-3-G-2023-2.json";
import level3G20221 from "./questionSets/level-3-G-2022-1.json";
import level3G20222 from "./questionSets/level-3-G-2022-2.json";

// 国家3級 - ディーゼル
import level3D20251 from "./questionSets/level-3-D-2025-1.json";
import level3D20241 from "./questionSets/level-3-D-2024-1.json";
import level3D20242 from "./questionSets/level-3-D-2024-2.json";
import level3D20231 from "./questionSets/level-3-D-2023-1.json";
import level3D20232 from "./questionSets/level-3-D-2023-2.json";
import level3D20221 from "./questionSets/level-3-D-2022-1.json";
import level3D20222 from "./questionSets/level-3-D-2022-2.json";

// ============================================
// 新しい問題集を追加する場合は、上記のインポート文を参考に
// インポート文を追加し、下記の配列にも追加してください
// ============================================

// 全問題セットを配列としてエクスポート
// 新しい年度の問題集は配列の上に配置すると、選択画面で新しい年度が上に表示されます
export default [
  // 国家1級
  level1C2023,
  level1C20212,
  level1C20222,
  level1C20232,
  level1C20242,

  // 国家2級 - ガソリン
  level2G20251,
  level2G20241,
  level2G20242,
  level2G20231,
  level2G20232,
  level2G20221,
  level2G20222,

  // 国家2級 - ディーゼル
  level2D20251,
  level2D20241,
  level2D20242,
  level2D20231,
  level2D20232,
  level2D20221,
  level2D20222,

  // 国家3級 - ガソリン
  level3G20251,
  level3G20241,
  level3G20242,
  level3G20231,
  level3G20232,
  level3G20221,
  level3G20222,

  // 国家3級 - ディーゼル
  level3D20251,
  level3D20241,
  level3D20242,
  level3D20231,
  level3D20232,
  level3D20221,
  level3D20222,
];

// 型定義もエクスポート（必要に応じて）
export interface QuestionSet {
  category: {
    level: string;
    fuelType: string;
    year: string;
  };
  questions: Question[];
}

export interface Question {
  id: string;
  question: string;
  choices: string[];
  answerIndex: number;
  explanation?: string;
  images?: string[];
}
