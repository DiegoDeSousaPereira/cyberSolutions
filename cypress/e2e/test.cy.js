describe('teste Cyber Solutions', ()=>{
    
    it('Registrando um usuário', ()=>{
        cy.registerUser()
    })
    it('Inputando algo no iframe', ()=>{
        cy.demoIframe()
    })
    it('inserindo a data de nascimento', ()=>{
        cy.inputDate()
    })

    it('Clicando no meio do slider', ()=>{
        cy.clickCenterSlider()
    })

})  