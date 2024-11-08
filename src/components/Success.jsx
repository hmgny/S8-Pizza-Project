import { Form, FormGroup, Label, Input, ButtonGroup, Button } from 'reactstrap';
import React from 'react';


export default function Success() {

    return (
        <>
          <div className="backgroundRed flex column padding-xl roboto ">
            <div>
              <img className="flex center tekno-img" src="/public/logo.svg"/>
            </div>
            <div className="flex column align-center roboto beyaz font-45 padding-xl">
              <span className=''>TEBRİKLER! </span>
              <span className=''>SİPARİŞİNİZ ALINDI!</span>
            </div>
          </div>
        </>
    );
}