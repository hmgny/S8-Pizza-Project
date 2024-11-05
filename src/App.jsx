
import { Form, FormGroup, Label, Input, ButtonGroup, Button } from 'reactstrap'
import './App.css'
import { useState } from 'react';

const malzemeler = ["Pepperoni","Sosis", "Kanada Jambonu","Tavuk Izgara","Soğan","Domates", "Mısır", "Sucuk", "Jalepeno", "Sarımsak", "Biber", "Sucuk", "Ananas", "Kabak"];
const boyutlar=["küçük", "orta", "büyük"];
const hamurSeç = ["ince","orta","kalın"]



function App() {
  const [formData, setFormData] = useState({
    initial
  })




  const handleChange = (event) =>{
    const {name, id, type, value} = event.target
    console.log("type, name, value, checked:", type, name, value, checked)

    if(type===checkbox) {
      setFormData({...formData, [name]:cheked})
    } else{
      setFormData({...formData, [name]:value})
    }
  }



  return (
    <>
      {/* kırmızı alan............................................ */}
      <div>
        <div>
        <h1>Teknolojik Yemekler</h1>
        </div>
        
        <div>
          <button>Anasayfa</button>
          <button>Sipariş Oluştur</button>
        </div>
      </div>

      {/* Position Pizza-Paragraf bölümü........................................... */}

      <div>
        <h2>Position Absolute Acı Pizza</h2>
        <div>
          <p>85.50₺</p>
          <p>4.9</p>
          <p>(200)</p>
        </div>
        <p>Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir. . Küçük bir pizzaya bazen pizzetta denir</p>
      </div>



      {/* Boyut-Hamur bölümü........................................... */}

      <div>
        <div>
          <Form>
            <h2>Boyut Seç <span style={{color: "red"}}>*</span></h2>

            {boyutlar.map((boyut)=>{
              return <FormGroup>
              <Input id={boyut} name="boyut" type="radio"/>{" "}
              <Label htmlFor={boyut}>{boyut}</Label>
            </FormGroup>
            })}
  
          </Form>
        </div>

        <div>
          <h2>Hamur Seç<span style={{color: "red"}}>*</span></h2>
          <select >
            <option value="Hamur Kalınlığı" placeholder="Hamur Kalınlığı">İnce</option>
            <option value="Hamur Kalınlığı" placeholder="Hamur Kalınlığı">Orta</option>
            <option value="Hamur Kalınlığı" placeholder="Hamur Kalınlığı">Kalın</option>
          </select>
        </div>
      </div>
      
      {/* Ek Malzemeler................................................... */}

      <div>
        <Form>
          <h2>Ek Malzemeler</h2>
          <p>En Fazla 10 malzeme seçebilirsiniz. 5₺ <span style={{color: "red"}}>*</span></p>

          { malzemeler.map((malz,index)=>{
            return <FormGroup key={index}>
            <Input id={malz} name="malzeme" type="checkbox"/>{" "}
            <Label htmlFor={malz}>{malz}</Label>
          </FormGroup>
          })}
          
        </Form>
      </div>

      {/* Sipariş Notu........................................... */}
      <div>
        <div>
        <FormGroup>
          <Label>Sipariş Notu</Label>
          <Input type="textarea" placeholder='Siparişinize eklemek istediğiniz bir not var mı?'/>
        </FormGroup>
        </div>
        
        <hr></hr>  {/* ÇİZGİ........................................... */}

        <div>
          <ButtonGroup>
            <Button>-</Button>
            <Button>1</Button>
            <Button>+</Button>
          </ButtonGroup>

          <div>
            <h2>Sipariş Toplamı</h2>
            <div>
              <p>Seçimler</p>
              <p>25</p>
            </div>

            <div>
              <p>Toplam</p>
              <p>110</p>
            </div>
          </div>

          <Button>SİPARİŞ VER</Button>

        </div>
      </div>
     
    </>
  )
}

export default App
