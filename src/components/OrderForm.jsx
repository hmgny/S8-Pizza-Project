

import { Form, FormGroup, Label, Input, ButtonGroup, Button } from 'reactstrap'
import { useEffect, useState } from 'react';
import React from 'react';
import axios from 'axios';


const malzemeler = ["Pepperoni","Sosis", "Kanada Jambonu","Tavuk Izgara","Soğan","Domates", "Mısır", "Sucuk", "Jalepeno", "Sarımsak", "Biber", "Ananas", "Kabak"];
const boyutlar=["küçük", "orta", "büyük"];
const hamurSeç = ["ince","orta","kalın"];

const initial ={
  boyut:"-1",
  hamurlar:"-1",
  malzeme: [],
  not: ""
}


function OrderForm() {
  const [formData, setFormData] = useState(initial)
  const [isValid, setIsValid] =useState(false)
  const [errors, setErrors] =useState({})
  const [malzemeList, setMalzemeList] =useState([])
  const [adet, setAdet] =useState(1)
  const [secimler, setSecimler] =useState(0)
  const [toplam, setToplam] = useState(85.50)

 
  const arttir = () => {
    setAdet(adet+1)
  }

  const azalt = () => {
    if(adet > 1 ) {
      setAdet(adet-1)
    }
    
  }

  const secim = () => {
    if(malzemeList.length > 4 && malzemeList < 10) {
      setSecimler(secimler + malzemeList.length * 5)
    }
  }

  const toplamTutar = () => {
    setToplam(toplam*adet)
  }
 

  const handleChange = (event) =>{
    const {name, checked, type, value} = event.target
    console.log("type, name, value, checked:", type, name, value, checked)
    

    if(type==="checkbox") {
      setFormData({...formData, [name]:checked})
    } else{
      setFormData({...formData, [name]:value})
    }


    if(name==="boyut") {
      if(value === "") {
        setErrors({...errors, [name]:"bir boyut seçiniz"})
      } else {
        setErrors({...errors, [name]:""})
      }
    }

    if(name==="hamurlar") {
      if(name === "") {
        setErrors({...errors, [name]:"bir hamur kalınlığı seçiniz"})
      } else {
        setErrors({...errors, [name]: {name}})
      }
    }

    if(name === "malzeme" && checked === true) {
      setMalzemeList({...malzemeList,  [name]: "yenimalzeme"});
    }
    console.log(malzemeList.length);

    if(name === "malzeme")
      if(malzemeList.length<4 || malzemeList.length>10) {
        setErrors({...errors, [name]: "en az 4 en fazla 10 adet malzeme seçiniz"})
      } else {
        setErrors({...errors, [name]:""})

      }
    
    if(name === "not")
      if(not.lenght<3) {
        setErrors({...errors, [name]:"yorum 3 karakterden fazla olmalı"})
      } else {
        setErrors({...errors, [name]:"" })
      }
    
    setErrors({...errors})
    console.log({errors})
  }

  
  useEffect(()=>{
    if((formData.boyut && !errors.boyut) && (formData.hamurlar && !errors.hamurlar) && (formData.malzeme && !errors.malzeme) && (formData.not && !errors.not) && (formData.not && !errors.not)){
      setIsValid(true)
    }else {
      setIsValid(false)
    }
  })

  const handleSubmit = (event) =>{
    event.preventDefault()
    if(!isValid) return 

    axios
    .post("https://reqres.in/api/pizza")
    .then((response)=>{
      setFormData(initial)      //form başlangıç durumuna geri döner
      console.log(response.data)  //burdaki datayı sipariş özetinde yazdır
    })
    .catch((error)=>{
      console.log(error)
    })
  }



  return (

    <div className='light-grey '>
      {/* kırmızı alan............................................ */}
      <header className=" kirmiziBack">
        <div className="just-item-center bej satisfy bold">
        <h1 className='bold font-30 padding-m'>Teknolojik Yemekler</h1>
        </div>
        
        <div className='center max-width font-12 barlow padding-s'>
          <button className="kirmiziBack bej no-border">Anasayfa</button>
          <button className="kirmiziBack bej no-border">Sipariş Oluştur</button>
        </div>
      </header>

      {/* Position Pizza-Paragraf bölümü........................................... */}


      <main className='center max-width barlow padding-l'>  
        <div >
          <h2 className='font-22 bold '>Position Absolute Acı Pizza</h2>
          <div className="flex align-center between" >
            <p className='bold font-25 dark-grey'>85.50₺</p>
            <p className=' font-12'>4.9</p>
            <p className=' font-12'>(200)</p>
          </div>
          <p className=''>Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir. . Küçük bir pizzaya bazen pizzetta denir</p>
        </div>



        {/* Boyut-Hamur bölümü........................................... */}

        <div className="flex between">
          <div>
            <Form>
              <Label className="dark-grey bold font-18" htmlFor="boyut">Boyut Seç<span style={{color: "red"}}> *</span></Label>
              {boyutlar.map((boyut,index)=>{
                return <FormGroup>
                <Input className="font-12" 
                        key={index} 
                        id={boyut} 
                        name="boyut" 
                        type="radio" 
                        onChange={handleChange} 
                        value={formData.boyut}/>
                        {errors.boyut && <div className='error'>{errors.boyut}</div>}
                {" "}
                <Label htmlFor={boyut}>{boyut}</Label>
              </FormGroup>
              })}
    
            </Form>
          </div>

          <div className='flex column'>
            <Label className="bold font-18 dark-grey" htmlFor="hamurlar">Hamur Seç<span style={{color: "red"}}> *</span></Label>
            <select onChange={handleChange} value={formData.hamurlar} >
              {hamurSeç.map((hamur,index)=>{
                return <option key={index} value={hamur}>{hamur}</option>
              })}
            </select>
            {errors.hamur && <div className='error'>{errors.hamur}</div>}
          </div>
        </div>
        
        {/* Ek Malzemeler................................................... */}

        <div>
          <Form >
            <h2 className='dark-grey bold font-18'>Ek Malzemeler</h2>
            <p>En Fazla 10 malzeme seçebilirsiniz. 5₺ <span style={{color: "red"}}>*</span></p>

            { malzemeler.map((malz,index)=>{
              return <FormGroup className='flex' key={index}>
              <Input id={malz} 
                      name="malzeme" 
                      type="checkbox" 
                      onChange={handleChange} 
                      checked={formData.malz}/>
                      {" "}
                      {errors.malzeme && <div className='error'>{errors.malzeme}</div>}
              <Label htmlFor={malz}>{malz}</Label>
            </FormGroup>
            })}
            
          </Form>
        </div>

        {/* Sipariş Notu........................................... */}
        <footer>
          <div>
          <FormGroup >
            <Label className='dark-grey bold font-18'>Sipariş Notu</Label>
            <Input className="font-12" 
                    name="not" 
                    type="textarea" 
                    placeholder='Siparişinize eklemek istediğiniz bir not var mı?'
                    onChange={handleChange} 
                    value={formData.not}/>
                    {errors.not && <div className='error'>{errors.not}</div>}
          </FormGroup>
          </div>
          
          <hr></hr>  {/* ÇİZGİ........................................... */}

          <div className='flex gap-s between'>
            <ButtonGroup className='max-height btn-min-width'>
              <Button onClick={azalt} className="arti" color="warning">-</Button>
              <Button className="adet" color="link">{adet}</Button>
              <Button onClick={arttir} className="eksi" color="warning">+</Button>
            </ButtonGroup>

            <div className='flex column border min-width'>
              <div className='padding-m'>
                <h2 className='font-18 bold text-center'>Sipariş Toplamı</h2>
                <div className="flex around ">
                  <p>Seçimler</p>
                  <p>{secimler}₺</p>
                </div>

                <div className='kirmizi flex around'>
                  <p>Toplam</p>
                  <p>{toplam}₺</p>
                </div>
              </div>
              <Button disabled={!isValid} onClick={handleSubmit} type="submit"className="siparişVer"color="warning">SİPARİŞ VER</Button>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default OrderForm

