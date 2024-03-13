import React, { useTransition } from 'react'
import './Header.css'
import image from '../e.png'
import { useTranslation } from 'react-i18next';
function Header() {
    const {t,i18n} = useTranslation();
  return (
    <>

    <div className='header'>
        <img src={image} />
        <ul>
            <li className='tashkilot'>{t('navbar.tash')} </li>          
            <li>{t('navbar.imkon')}</li>
            <li>{t('navbar.hamkor')}</li>
            <li>{t('navbar.yordam')}</li>
        </ul>
        <select  onClick={(e) => i18n.changeLanguage(e.target.value)}>
            <option value="uz">O'zb</option>
            <option value="ru">Rus</option>
        </select>
        <button className='button' >{t('navbar.kirish')}</button>
        <button className='knopka2'>{t('navbar.ulash')}</button>
    </div>
    </>
  )
}

export default Header