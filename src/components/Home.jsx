import { Form, FormGroup, Label, Input, ButtonGroup, Button } from 'reactstrap';
import React from 'react';


export default function Home() {

    return (
        <>
          <div className="backgroundİmg just-item-center padding-m ">
            <div>
              <img className="flex center tekno-img" src="/public/logo.svg"/>
            </div>
            <div className="flex column center roboto beyaz font-45 max-width-s">
              <span className='center'>KOD ACIKTIRIR </span>
              <span className='center'>PİZZA, DOYURUR</span>
            </div>
            <button className="sariBack no-border buton-kenar font-12">ACIKTIM</button>
          </div>
        </>
    );
}