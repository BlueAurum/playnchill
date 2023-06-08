import s from './changeLanguagePopup.module.scss'

type Language = {
    language: string
}

interface ChangeLanguagePopupProps {
    languages: Language[]
}

export const ChangeLanguagePopup = () => {
    return (
        <div className={s.popup}>

        </div>
    )
}
