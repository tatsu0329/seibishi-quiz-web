// 問題集ファイルをインポート
// 国家1級
import level1Gasoline2024 from "./questionSets/level-1-gasoline-2024.json";
import level1Gasoline2023 from "./questionSets/level-1-gasoline-2023.json";

// 国家2級 - ガソリン
import level2G20251 from "./questionSets/level-2-G-2025-1.json";
import level2G20241 from "./questionSets/level-2-G-2024-1.json";
import level2G20242 from "./questionSets/level-2-G-2024-2.json";
import level2G20231 from "./questionSets/level-2-G-2023-1.json";
import level2G20232 from "./questionSets/level-2-G-2023-2.json";
import level2G20221 from "./questionSets/level-2-G-2022-1.json";
import level2G20222 from "./questionSets/level-2-G-2022-2.json";

// 国家2級 - ジーゼル
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

// 国家3級 - ジーゼル
import level3D20251 from "./questionSets/level-3-D-2025-1.json";
import level3D20241 from "./questionSets/level-3-D-2024-1.json";
import level3D20242 from "./questionSets/level-3-D-2024-2.json";
import level3D20231 from "./questionSets/level-3-D-2023-1.json";
import level3D20232 from "./questionSets/level-3-D-2023-2.json";
import level3D20221 from "./questionSets/level-3-D-2022-1.json";
import level3D20222 from "./questionSets/level-3-D-2022-2.json";

// 全問題セットを配列としてエクスポート
export default [
  // 国家1級
  level1Gasoline2024,
  level1Gasoline2023,
  
  // 国家2級 - ガソリン
  level2G20251,
  level2G20241,
  level2G20242,
  level2G20231,
  level2G20232,
  level2G20221,
  level2G20222,
  
  // 国家2級 - ジーゼル
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
  
  // 国家3級 - ジーゼル
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
}
