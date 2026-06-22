import { useState, useEffect } from "react";
import ConfigModal from "./ConfigModal";
import {
  Github,
  ClipboardClock,
  Smile,
  Music,
  Joystick,
  Wrench,
  Disc3,
} from "lucide-react";
import { dictionary, Language } from "../data/i18n";
import { usePathname, useRouter } from "next/navigation";

interface FloatingLinksProps {
  lang: Language;
}

export default function FloatingLinks({ lang }: FloatingLinksProps) {
  const t = dictionary[lang];
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  // Persist modal state across language changes
  useEffect(() => {
    const saved = sessionStorage.getItem("config-modal-open");
    if (saved === "true") setIsSettingsOpen(true);
  }, []);

  const setConfigOpen = (open: boolean) => {
    setIsSettingsOpen(open);
    sessionStorage.setItem("config-modal-open", String(open));
  };

  const router = useRouter();
  const pathname = usePathname();

  // Actualizar URLs de los botones
  const emojisUrl =
    lang === "en" ? "https://emojis.hoy.today/en" : "https://emojis.hoy.today";

  const playUrl =
    lang === "en"
      ? "https://minigame.hoy.today/en"
      : "https://minigame.hoy.today";

  const exportPath = lang === "en" ? "/export" : "/exportar";
  const importPath = lang === "en" ? "/import" : "/importar";

  const toggleLanguage = () => {
    if (lang === "en") {
      const newPath = pathname.replace("/en", "") || "/";
      router.push(newPath);
    } else {
      const newPath = `/en${pathname === "/" ? "" : pathname}`;
      router.push(newPath);
    }
  };

  return (
    <>
      {/* Right Side Buttons: Config / Github */}
      <div className="fixed bottom-9 right-7 flex gap-[13px] z-[70]">
        {isSettingsOpen ? (
          <a
            href="https://github.com/gonzagramaglia/today"
            className="p-[13px] bg-white border border-zinc-200 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110 group"
            aria-label={t.ariaGithub}
            target="_blank"
          >
            <Github className="w-[27px] h-[27px] text-gray-900 group-hover:text-yellow-500 transition-colors" />
          </a>
        ) : (
          <button
            onClick={() => setConfigOpen(true)}
            className="p-[13px] bg-white border border-zinc-200 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110 group cursor-pointer"
            aria-label="Configuration"
          >
            <Wrench className="w-[27px] h-[27px] text-gray-900 group-hover:text-yellow-500 transition-colors scale-x-[-1]" />
          </button>
        )}
      </div>

      {/* Settings Modal */}
      {isSettingsOpen && (
        <ConfigModal
          lang={lang}
          onClose={() => setConfigOpen(false)}
          toggleLanguage={toggleLanguage}
          exportPath={exportPath}
          importPath={importPath}
        />
      )}

      {/* Left Side Buttons: Home + Emojis + Music + Tasks */}
      <div className="fixed bottom-9 left-9 flex gap-[13px] z-50 transition-opacity duration-300">
        <button
          disabled
          className="p-[13px] bg-white border border-zinc-200 rounded-full shadow-lg transition-all opacity-50 cursor-not-allowed group"
          aria-label={t.goToHome}
          title={t.goToHome}
        >
          <ClipboardClock className="w-[27px] h-[27px] text-zinc-900 transition-colors" />
        </button>
        <a
          href={emojisUrl}
          rel="noopener noreferrer"
          className="p-[13px] bg-white border border-zinc-200 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110 group"
          aria-label={t.goToEmojis}
          title={t.goToEmojis}
        >
          <Smile className="w-[27px] h-[27px] text-gray-900 group-hover:text-yellow-500 transition-colors" />
        </a>

        <a
          href={playUrl}
          rel="noopener noreferrer"
          className="p-[13px] bg-white border border-zinc-200 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110 group cursor-pointer"
          aria-label={t.goToPlay}
          title={t.goToPlay}
        >
          <Joystick className="w-[27px] h-[27px] text-gray-900 group-hover:text-yellow-500 transition-colors" />
        </a>
      </div>
    </>
  );
}
