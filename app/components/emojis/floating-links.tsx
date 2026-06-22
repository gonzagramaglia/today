"use client";

import { Smile, Joystick, ClipboardClock } from "lucide-react";
import { Disc3 } from "lucide-react";
import { useLanguage } from "../../contexts/language-context";

export function FloatingLinks() {
  const { language, t } = useLanguage();
  const isEnglish = language === "en";

  // Logic for URLs
  const getUrl = (baseUrl: string) => (isEnglish ? `${baseUrl}/en` : baseUrl);

  const homeUrl = getUrl("https://home.hoy.today");
  const musicUrl = getUrl("https://playlist.hoy.today");
  const playUrl = getUrl("https://minigame.hoy.today");

  return (
    <div className="fixed bottom-9 left-9 flex gap-[13px] z-50">
      {/* 1 - Hoy Button */}
      <a
        href={homeUrl}
        className="p-[13px] bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110 group cursor-pointer"
        aria-label={t("ariaHome") || "Home"}
        title={t("ariaHome") || "Home"}
      >
        <ClipboardClock className="w-[27px] h-[27px] text-zinc-900 dark:text-white group-hover:text-yellow-500 transition-colors" />
      </a>

      {/* 2 - Emojis Button (Disabled) */}
      <button
        disabled
        className="p-[13px] bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-full shadow-lg transition-all opacity-50 cursor-not-allowed group"
        aria-label={t("ariaEmojis") || "Emojis"}
        title={t("ariaEmojis") || "Emojis"}
      >
        <Smile className="w-[27px] h-[27px] text-zinc-900 dark:text-white transition-colors" />
      </button>

      {/* 3 - Music Button */}
      <a
        href={musicUrl}
        className="hidden p-[13px] bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110 group cursor-pointer"
        aria-label={t("ariaMusic") || "Ir a Playlist"}
        title={t("ariaMusic") || "Ir a Playlist"}
      >
        <Disc3 className="w-[27px] h-[27px] text-zinc-900 dark:text-white group-hover:text-yellow-500 transition-colors animate-spin-slow" />
      </a>

      {/* 4 - Play Button */}
      <a
        href={playUrl}
        className="p-[13px] bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110 group cursor-pointer"
        aria-label={t("ariaPlay")}
        title={t("ariaPlay")}
      >
        <Joystick className="w-[27px] h-[27px] text-zinc-900 dark:text-white group-hover:text-yellow-500 transition-colors" />
      </a>
    </div>
  );
}
