const el = require('./elements').ELEMENTS

const articleTitle = 'Título do Artigo ' + new Date().getTime()

class Articles {
  acessarFormulario () {
    cy.get(el.linkNovoArtigo).click()
  }

  preencherFormulario () {
    cy.get(el.inputTitle).type(articleTitle)
    cy.get(el.inputDescription).type('Descrição do Artigo')
    cy.get(el.inputBody).type('Corpo do Artigo')
    cy.get(el.inputTags).type('Campo com as Tags')
  }

  submeterFormulario () {
    cy.contains('button', 'Publish Article').click()
  }

  verificarSeArtigoFoiCriado () {
    cy.contains(articleTitle).should('be.visible')
  }
}
export default new Articles()
