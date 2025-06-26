import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import i18n from '../i18n/i18n';

export const useLanguage = () => {
    const { i18n: i18nInstance } = useTranslation();

    useEffect(() => {
        // Update the HTML lang attribute whenever the language changes
        const updateHtmlLang = () => {
            document.documentElement.lang = i18nInstance.language;
        };

        // Set it initially
        updateHtmlLang();

        // Add listener for language changes
        i18nInstance.on('languageChanged', updateHtmlLang);

        // Cleanup
        return () => {
            i18nInstance.off('languageChanged', updateHtmlLang);
        };
    }, [i18nInstance]);

    return {
        currentLanguage: i18nInstance.language,
        changeLanguage: (lng: string) => i18nInstance.changeLanguage(lng),
        t: i18nInstance.t,
        i18n
    };
}; 