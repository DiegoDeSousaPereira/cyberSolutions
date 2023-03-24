Cypress.Commands.add('registerUser', ()=>{
    cy.visit('/Register.html')
    cy.get('h1').should('have.text', 'Automation Demo Site ')
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
    cy.get('#submitbtn').click()
})
Cypress.Commands.add('demoIframe', ()=>{
    cy.visit('/Frames.html')
    /* O comando cy.iframe não é uma função nativa do cypress, precisei instalar uma biblioteca
      para que eu pudesse acessar o iframe, após isso peguei o input e inseri uma descrição*/
    cy.iframe('#singleframe').find('input[type="text"]').type(Cypress.env('describeCypress'))
})
Cypress.Commands.add('inputDate', ()=>{
    cy.visit('/Datepicker.html')
    /* A função invoke() serve para executar um método no elemento desativado e alterar o valor do atributo value 
     E o método attr() é usado para obter ou definir um atributo em um elemento selecionado */
    cy.get('#datepicker1').invoke('attr', 'value', `${Cypress.env('birthDate')}`)
    cy.get('#datepicker1').should('have.value', `${Cypress.env('birthDate')}`)
    //Com o datePicker desativo apenas inseri a data, após isso verifiquei se continha a data do meu nascimento
    cy.get('#datepicker2').type(`${Cypress.env('birthDate')}`)
    cy.get('#datepicker2').should('have.value',`${Cypress.env('birthDate')}` )
})
Cypress.Commands.add('clickCenterSlider', ()=>{
    cy.visit('/Slider.html')
    /*O cypress por padão ele clica sempre no centro de um elemento,  
     então eu peguei o id do slider e cliquei */
    cy.get('#slider').click()
})

