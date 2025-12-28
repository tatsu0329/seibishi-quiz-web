"use client";

import { useEffect, useRef } from "react";

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
  style = { display: "block" },
  format = "auto",
  responsive = true,
  layout,
  layoutKey,
  className = "",
}: AdSenseProps) {
  const adElementRef = useRef<HTMLDivElement>(null);
  const adInitializedRef = useRef(false);

  useEffect(() => {
    // 既に初期化済みの場合はスキップ
    if (adInitializedRef.current || !slot) {
      return;
    }

    // 次のティックで実行して、DOMが完全にマウントされた後に実行されるようにする
    const timeoutId = setTimeout(() => {
      try {
        if (window.adsbygoogle && adElementRef.current) {
          const insElement = adElementRef.current.querySelector('.adsbygoogle');
          // data-adsbygoogle-status属性が存在しない場合のみ初期化
          if (insElement && !insElement.getAttribute('data-adsbygoogle-status')) {
            (window.adsbygoogle = window.adsbygoogle || []).push({});
            adInitializedRef.current = true;
          }
        }
      } catch (err) {
        // エラーを無視（既に広告が読み込まれている場合など）
        console.error("AdSense error:", err);
      }
    }, 100);

    return () => {
      clearTimeout(timeoutId);
    };
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
    <div 
      ref={adElementRef} 
      className={`adsense-container overflow-hidden ${className}`} 
      style={style}
    >
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

