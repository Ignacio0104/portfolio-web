import { useLang } from "./context";
import { translations } from "./translations";

export function useTranslation() {
  const { lang } = useLang();
  function translate(section: keyof typeof translations, key: string): string {
    return (translations[section] as any)[key]?.[lang] ?? key;
  }
  return { translate, lang };
}
