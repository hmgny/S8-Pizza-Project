import { Form, FormGroup, Label, Input, ButtonGroup, Button } from 'reactstrap';
import React from 'react';


export default function HomeT2() {

    return (
        <>
    <div id="pizza">
      <section className="flex column just-item-center">
        <main className="backgroundİmg just-item-center padding-m">
          <div>
            <div>
              <img className="flex center tekno-img" src="/public/logo.svg"/>
            </div>
            <div className="flex">
            <span className="italik center sari satisfy ">fırsatı kaçırma</span>
          </div >
            <div className="flex column center roboto beyaz font-45 max-width-s">
              <span className='center'>KOD ACIKTIRIR </span>
              <span className='center'>PİZZA, DOYURUR</span>
            </div >
            <button className="flex center just-item-center align-center sariBack no-border buton-sari font-12">ACIKTIM</button>
          </div>
        </main>
        
        <div className="flex just-center">
          <button className="buton"><img src="/public/icons/1.svg"/>Ramen</button>
          <button className="buton"><img src="/public/icons/2.svg"/>Pizza</button>
          <button className="buton"><img src="/public/icons/3.svg"/>Burger</button>
          <button className="buton"><img src="/public/icons/4.svg"/>French fries</button>
          <button className="buton"><img src="/public/icons/5.svg"/>Fast food</button>
          <button className="buton"><img src="/public/icons/6.svg"/>Soft drinks</button>
        </div>
      </section>
    


      <section className="bejBack padding-l ">
        <div className="flex just-center gap-s">
          <div className="özel">
            <div className="flex column">
              <span className='beyaz font-45 quattrocento'>Özel</span>
              <span className='beyaz font-45 quattrocento'>Lezzetus</span>
              <span className='beyaz font-20 barlow'>Position:Absolute Acı Burger</span>
              <button className="buton-sipariş ">SİPARİŞ VER</button>
            </div>
          </div>
          <div className="flex column gap-s">
            <div className="hackathlon">
              <span  className='beyaz font-22 quattrocento'>Hackathlon</span>
              <span  className='beyaz font-22 quattrocento'>Burger Menü</span>
              <button className="buton-sipariş ">SİPARİŞ VER</button>
            </div>
            <div className="cok">
              <div>
                <span className='kirmizi font-22 barlow'>Çoooook</span>
                <span className='font-22'> hızlı</span>
              </div>
              <span >npm gibi kurye</span>
              <button className="buton-sipariş">SİPARİŞ VER</button>
            </div>
          </div>
        </div>


        <div className="flex column align-center padding-l">
          <span className='kirmizi font-22 satisfy italik'>en çok paketlenen menüler</span>
          <span className='font-30 barlow'>Acıktıran Kodlara Doyuran Lezzetler</span>
        </div>

        <div className="flex">
          <button className="buton"><img src="/public/icons/1.svg"/>Ramen</button>
          <button className="butonSiyah"><img src="/public/icons/2.svg"/>Pizza</button>
          <button className="buton"><img src="/public/icons/3.svg"/>Burger</button>
          <button className="buton"><img src="/public/icons/4.svg"/>French fries</button>
          <button className="buton"><img src="/public/icons/5.svg"/>Fast food</button>
          <button className="buton"><img src="/public/icons/6.svg"/>Soft drinks</button>
        </div>

        <div className="flex just-center gap-m ">
          <div className="beyazBack flex column padding-m">
            <img src="/public/pictures/food-1.png"/>
            <span className='bold margin-'>Terminal Pizza</span>
            <div className="flex between">
              <span>4.9</span>
              <span >(200)</span>
              <span className='bold'>60₺</span>
            </div>
          </div>
          <div className="beyazBack flex column padding-m">
            <img src="/public/pictures/food-2.png"/>
            <span >Position Absolute Acı Pizza</span>
            <div className="flex between">
              <span>4.9</span>
              <span >(200)</span>
              <span className='bold'>60₺</span>
            </div>
          </div>
          <div className="beyazBack flex column padding-m">
            <img src="/public/pictures/food-3.png"/>
            <span >useEffect Tavuklu Burger</span>
            <div className="flex between">
              <span>4.9</span>
              <span >(200)</span>
              <span className='bold'>80₺</span>
            </div>
          </div>
        </div>
      </section>

      <footer className='siyahBack flex around padding-s'>
        <div className="flex column gap-s padding-l max-width-250">
          <img className="padding-s" src="/public/footer/logo-footer.svg" />
          <div>
            <img src="/public/footer/icons/icon-1.png"/>
            <span className='beyaz font-12 barlow'>341 Londonderry Road, İstanbul Türkiye</span>
          </div>
          <div>
            <img src="/public/footer/icons/icon-2.png"/>
            <span className='beyaz font-12 barlow'>aciktim@teknolojikyemekler.com</span>
          </div>
          <div>
            <img src="/public/footer/icons/icon-3.png"/>
            <span className='beyaz font-12 barlow'>+90 216 123 45 67</span>
          </div>
        </div>



        <div className="marginTop">
          <span className='beyaz font-18 barlow'>Hot Menu</span>
          <div className="flex column padding-s gap-s font-size-12 beyaz barlow">
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