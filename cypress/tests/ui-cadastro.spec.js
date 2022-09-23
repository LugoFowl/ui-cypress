/// <reference types = "Cypress" />

describe('Cadastro', () => {
  it('Cadastro com sucesso', () => {
    cy.intercept({
      method: 'POST',
      path: '/api/users'
    },
    {
      statusCode: 200,
      fixture: 'cadastro-com-sucesso'
    }).as('postUsers')

    cy.visit('register')

    cy.get('input[placeholder="Username"]').type('Luguinhooppppppeeeee')
    cy.get('input[placeholder="Email"]').type('luguinhoopppppppeeee@gmail.com')
    cy.get('input[placeholder="Password"]').type('123456')

    cy.get('button.btn-primary').click()

    cy.contains('No articles are here... yet.').should('be.visible')
  })

  it('Cadastro com usuário já existente na base de dados', () => {
    cy.intercept({
      method: 'POST',
      path: '/api/users'
    },
    {
      statusCode: 422,
      fixture: 'cadastro-com-usuario-existente'
    }).as('postUsers')

    cy.visit('register')

    cy.get('input[placeholder="Username"]').type('Luguinhooppppppeeeee')
    cy.get('input[placeholder="Email"]').type('luguinhoopppppppeeee@gmail.com')
    cy.get('input[placeholder="Password"]').type('123456')

    cy.get('button.btn-primary').click()

    cy.contains('username has already been taken').should('be.visible')
  })

  it('Cadastro com usuário já existente na base de dados', () => {
    cy.intercept({
      method: 'POST',
      path: '/api/users'
    },
    {
      statusCode: 422,
      fixture: 'cadastro-com-email-existente'
    }).as('postUsers')

    cy.visit('register')

    cy.get('input[placeholder="Username"]').type('Luguinhooppppppeeeee')
    cy.get('input[placeholder="Email"]').type('luguinhoopppppppeeee@gmail.com')
    cy.get('input[placeholder="Password"]').type('123456')

    cy.get('button.btn-primary').click()

    cy.contains('email has already been taken').should('be.visible')
  })
})
