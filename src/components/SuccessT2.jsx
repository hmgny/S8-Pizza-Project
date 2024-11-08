import { Form, FormGroup, Label, Input, ButtonGroup, Button } from 'reactstrap';
import React from 'react';


export default function SuccessT2() {

    return (
        <>
        <div>
          <div className="backgroundRed flex column padding-l roboto ">
            <div>
              <img className="flex center tekno-img" src="/public/logo.svg"/>
            </div>
            <div className="flex column align-center  padding-l">
              <span className='italik sari'>lezzetin yolda </span>
              <span className='roboto beyaz font-45'>SİPARİŞ ALINDI!</span> 
              <hr></hr>
              <div className=''>
              <p className='beyaz font-12'>Position Absolute Acı Pizza</p>
              <p className='beyaz font-12'><span className='bej font-8'>Boyut: </span>boyut</p>
              <p className='beyaz font-12'><span className='bej font-8'>Hamur: </span> hamur</p>
              <p className='beyaz font-12'><span className='bej font-8'>Ek Malzemeler: </span> Malzemeler</p>
              </div>
              <div className='flex column beyaz font-12 gap-s border-beyaz padding-l'>
                <span>Sipariş Toplamı</span>
                <div className='flex around'>
                  <p>Toplam</p>
                  <p >25.00</p>
                </div>
                <div className='flex around'>
                  <p >Seçimler</p>
                  <p >110.50</p>
                </div>
              </div>
              
            </div>
          </div>
          

          <footer className='siyahBack flex around padding-s'>
            <div className="flex column gap-s padding-l max-width-250">
              <img className="padding-s" src="/public/footer/logo-footer.svg" />
              <div>
                <img src="/public/footer/icons/icon-1.png"/>
                <span className='beyaz font-8 barlow'>341 Londonderry Road, İstanbul Türkiye</span>
              </div>
              <div>
                <img src="/public/footer/icons/icon-2.png"/>
                <span className='beyaz font-8 barlow'>aciktim@teknolojikyemekler.com</span>
              </div>
              <div>
                <img src="/public/footer/icons/icon-3.png"/>
                <span className='beyaz font-8 barlow'>+90 216 123 45 67</span>
              </div>
            </div>



            <div className="marginTop">
              <span className='beyaz font-18 barlow'>Hot Menu</span>
              <div className="flex column padding-s gap-s font-size-8 beyaz barlow">
                <span>Terminal Pizza</span>
                <span>5 Kişilik Hackathlon Pizza</span>
                <span>useEffect Tavuklu Pizza</span>
                <span>Beyaz Console Frosty</span>
                <span>Testler Geçti Mutlu Burger</span>
                <span>Position Absolute Acı Burger</span>
              </div>
            </div>


            <div className="marginTop">
              <span className='beyaz font-18 barlow'>Instagram</span>
              <div className="flex wrap max-width-s padding-m gap-s">
                <img src="/public/footer/insta/li-0.png"/>
                <img src="/public/footer/insta/li-1.png"/>
                <img src="/public/footer/insta/li-2.png"/>
                <img src="/public/footer/insta/li-3.png"/>
                <img src="/public/footer/insta/li-4.png"/>
                <img src="/public/footer/insta/li-5.png"/>
              </div>
            </div>
          </footer>

        </div>
          
        </>
    );
}