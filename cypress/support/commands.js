Cypress.Commands.add('registerUser', ()=>{
    cy.step('Dado que eu visito a pagina register.html')
    cy.visit('/Register.html')
    cy.get('h1').should('have.text', 'Automation Demo Site ')
    cy.step('Quando eu preencher todos os dados')
    cy.get('input[placeholder="First Name"]').type(Cypress.env('firstName'))
    cy.get('input[placeholder="Last Name"]').type(Cypress.env('firstName'))
    cy.get('textarea[ng-model="Adress"]').type(Cypress.env('adress'))
    cy.get('input[type="email"]').type(Cypress.env('digitalAdress'))
    cy.get('input[type="tel"]').type(Cypress.env('phoneNumber'))
    cy.get('input[value="Male"]').check()
    cy.get('input[value="Movies"]').check()
    cy.get('#Skills').select(Cypress.env('skill'))
    cy.get('span[role="combobox"]').type('new{enter}')
    cy.get('#yearbox').select('2004')
    cy.get('select[ng-model="monthbox"]').select(Cypress.env('month'))
    cy.get('#daybox').select('17')
    cy.get('#firstpassword').type(Cypress.env('password'))
    cy.get('#secondpassword').type(Cypress.env('password'))
    cy.step('E clicar no botão de submeter o cadastro')
    cy.get('#submitbtn').click()

})
Cypress.Commands.add('demoIframe', ()=>{
    cy.step('Dado que eu acesse a o endpoint Frames.html')
    cy.visit('/Frames.html')
    /* O comando cy.iframe não é uma função nativa do cypress, precisei instalar uma biblioteca
      para que eu pudesse acessar o iframe, após isso peguei o input e inseri uma descrição*/
    cy.step('Quando eu inserir o texto no iframe')
    cy.iframe('#singleframe').find('input[type="text"]').type(Cypress.env('describeCypress'))
    cy.step('Então deve ficar visivel')
    cy.iframe('#singleframe').find('input[type="text"]').should('be.visible')
})
Cypress.Commands.add('inputDate', ()=>{
    cy.step('Dado que eu acesse a o endpoint Datepicker.html')
    cy.visit('/Datepicker.html')
    /* A função invoke() serve para executar um método no elemento desativado e alterar o valor do atributo value 
     E o método attr() é usado para obter ou definir um atributo em um elemento selecionado */
    cy.step('Quando eu inserir a minha data de nascimentoa data no dataPicker desabilitado')
    cy.get('#datepicker1').invoke('attr', 'value', `${Cypress.env('birthDate')}`)
    //Com o datePicker desativo apenas inseri a data, após isso verifiquei se continha a data do meu nascimento
    cy.step('E inserir a minha data de nascimento no dataPicker habilitado')
    cy.get('#datepicker2').type(`${Cypress.env('birthDate')}`)
    cy.step('Então a data que eu adicionei deve estar nos dois campos')
    cy.get('#datepicker1').should('have.value', `${Cypress.env('birthDate')}`)
    cy.get('#datepicker2').should('have.value',`${Cypress.env('birthDate')}` )
})
Cypress.Commands.add('clickCenterSlider', ()=>{
    cy.step('Dado que eu acesse a o endpoint Slider.html')
    cy.visit('/Slider.html')
    /*O cypress por padão ele clica sempre no centro de um elemento,  
     então eu peguei o id do slider e cliquei */
     cy.step('Quando eu clicar no slider')
    cy.get('#slider').click()
    cy.step('Então o cypress deve clicar no meio dele')
})

