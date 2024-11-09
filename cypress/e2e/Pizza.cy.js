import { errors } from "../../src/components/OrderForm"

describe('Order Form', () => {
  describe('Error Messages', () => {
    it('hamur tipi seçili değilse hata mesajı versin', () => {
      cy.visit('http://localhost:5173/')
      cy.get('[data-cy="hamur"]').select("")
      cy.contains(errors.hamurlar)
    })

    it('dörtten az malzeme seçilmişse uyarı mesajı versin', () => {
      cy.visit('http://localhost:5173/')
      cy.get('[data-cy="malzeme"]').click(["Pepperoni","Sosis","Domates"])
      cy.contains(errors.malzeme)
    })

    it('boyut seçili değilse bir hata mesajı dönsün', () => {
      cy.visit('http://localhost:5173/')
      cy.get('[data-cy="boyut"]').select("")
      cy.contains(errors.boyut)
    })

    it('yorum 3 karakterden azsa hata mesajı dönsün', () => {
      cy.visit('http://localhost:5173/')
      cy.get('[data-cy="not"]').type("12")
      cy.contains(errors.not)
    })
  })
})
describe('Success Order', () => {
  it('buton enabled ise sipariş verilmiş olsun', () => {
    cy.visit('http://localhost:5173/')
    cy.get('[data-cy="hamur"]').select("ince")
    cy.get('[data-cy="malzeme"]').click(["Pepperoni","Sosis","Domates","Soğan"])
    cy.get('[data-cy="boyut"]').select("orta")
    cy.get('[data-cy="not"]').type("merve")
    
  }) 
})

