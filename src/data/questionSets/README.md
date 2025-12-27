# 問題集ファイルの追加方法

## ファイル構造

各問題集は個別の JSON ファイルとして保存します。

## ファイル名の規則

ファイル名は以下の形式を推奨します：

- `level-{等級番号}-{燃料タイプ}-{年度}.json`

例：

- `level-1-gasoline-2024.json` (国家 1 級 ガソリン 2024 年)
- `level-1-diesel-2023.json` (国家 1 級 ジーゼル 2023 年)
- `level-2-gasoline-2024.json` (国家 2 級 ガソリン 2024 年)
- `level-3-gasoline-2024.json` (国家 3 級 ガソリン 2024 年)

ファイル名は任意でも構いませんが、管理しやすい名前を付けることを推奨します。

## JSON ファイルの構造

各 JSON ファイルは以下の形式で記述してください：

```json
{
  "category": {
    "level": "国家1級",
    "fuelType": "ガソリン",
    "year": "2024"
  },
  "questions": [
    {
      "id": "No.1",
      "question": "問題文",
      "choices": [
        "(1). 選択肢1の説明",
        "(2). 選択肢2の説明",
        "(3). 選択肢3の説明",
        "(4). 選択肢4の説明"
      ],
      "answerIndex": 1,
      "explanation": "解説（オプション）"
    }
  ]
}
```

### フィールド説明

- `category.level`: 等級（"国家 1 級"、"国家 2 級"、"国家 3 級"）
- `category.fuelType`: 燃料タイプ（"ガソリン"、"ジーゼル"）
- `category.year`: 実施年度（"2024"など）
- `questions`: 問題の配列
  - `id`: 問題 ID
  - `question`: 問題文
  - `choices`: 選択肢の配列（4 つ）
  - `answerIndex`: 正解のインデックス（1-4 の 1 ベース）
  - `explanation`: 解説（任意）

## 新しい問題集を追加する手順

1. `src/data/questionSets/` ディレクトリに新しい JSON ファイルを作成
2. `src/data/index.ts` ファイルを開く
3. 新しいファイルをインポートして、配列に追加

### 例

`level-3-diesel-2024.json` を追加する場合：

```typescript
// src/data/index.ts
import level3Diesel2024 from "./questionSets/level-3-diesel-2024.json";

export default [
  level1Gasoline2024,
  level1Gasoline2023,
  level2Gasoline2024,
  level3Diesel2024, // ここに追加
];
```

