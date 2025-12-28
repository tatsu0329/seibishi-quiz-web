"use client";

import { useEffect } from "react";

// AdSenseのパブリッシャーID（環境変数から取得、または直接設定）
const ADSENSE_PUBLISHER_ID =
  process.env.NEXT_PUBLIC_ADSENSE_PUBLISHER_ID || "ca-pub-6569958937383358";

interface AdSenseProps {
  slot?: string;
  style?: React.CSSProperties;
  format?: string;
  responsive?: boolean;
  layout?: string;
  layoutKey?: string;
  className?: string;
}

export default function AdSense({
  slot,
  style = { display: "block", textAlign: "center" },
  format = "auto",
  responsive = true,
  layout,
  layoutKey,
  className = "",
}: AdSenseProps) {
  useEffect(() => {
    try {
      if (window.adsbygoogle && slot) {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      }
    } catch (err) {
      console.error("AdSense error:", err);
    }
  }, [slot]);

  if (!ADSENSE_PUBLISHER_ID) {
    // 開発環境でAdSense IDが設定されていない場合
    return (
      <div
        className={`flex items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 p-8 text-center text-sm text-gray-500 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 ${className}`}
        style={style}
      >
        <div>
          <p className="mb-2 font-medium">広告プレースホルダー</p>
          <p className="text-xs">
            NEXT_PUBLIC_ADSENSE_PUBLISHER_ID を設定してください
          </p>
        </div>
      </div>
    );
  }

  if (!slot) {
    return null;
  }

  return (
    <div className={`adsense-container ${className}`} style={style}>
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client={ADSENSE_PUBLISHER_ID}
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive={responsive ? "true" : "false"}
        data-ad-layout={layout}
        data-ad-layout-key={layoutKey}
      />
    </div>
  );
}

// 型定義
declare global {
  interface Window {
    adsbygoogle: any[];
  }
}

