import { useState } from 'react';
import './footer.css';
import { useTranslation } from 'react-i18next';
import { FaFacebookSquare } from "react-icons/fa";
import { TiSocialInstagram } from "react-icons/ti";
import { PiTelegramLogo } from "react-icons/pi";
import { FaYoutube } from "react-icons/fa";
  function Footer(){
    const {t,i18n} = useTranslation();
  return (
    <>
    <footer>
    <div className='tashkilotf foot'>
        <ul>
        <h1>{t('futer.haqida')}</h1>
        <li className='p width3'>{t('futer.bizhaqimizda')}</li>
        <li className='p'>{t('futer.yangilik')}</li>
        <li className='p width2'>{t('futer.malumot')}</li></ul>
    </div>
    <div className="imkoniyatlar foot">
        <ul>
        <h1>{t('futer.imkon')}</h1>
        <li className='p'>{t('futer.uqituvchi')}</li>
        <li className='p width4'>{t('futer.otaona')}</li>
        <li className='p'>{t('futer.uquvchi')}</li>
        <li className='p witdh1'>{t('futer.organlar')}</li>
        </ul>
    </div>
    <div className="hamkorlarga foot">
        <ul>
        <h1 >{t('futer.hamkor')}</h1>
        <li className='p witdh'>{t('futer.dastur')}</li>
        </ul>
    </div>
    <div className="qullabquvattlash foot">
        <ul>
        <h1>{t('futer.quvvatlash')}</h1>
        <a href="" className='portal'>{t('futer.portal')}</a>
        </ul>
    </div>
    <div className='ikonkaf'>
    <FaFacebookSquare className='ikonkau' />
    <TiSocialInstagram className='ikonkau' />
    <PiTelegramLogo className='ikonkau' />
    <FaYoutube className='ikonkau' />
    </div>
    <button className='knopka3'>{t('futer.tashkilotulash')}</button>
</footer>
<footer className='footer2'>
    <h1 className='shart'>{t('futer.shartnoma')}</h1>
</footer>
</>
  );
}

export default Footer;