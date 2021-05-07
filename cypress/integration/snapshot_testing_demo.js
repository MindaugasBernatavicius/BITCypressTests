import { fixCypressSpec } from '../support'

beforeEach(fixCypressSpec(__filename))

describe('Visual testing', () => {
  it('Matches snapshot', () => {
    // given
    let url = 'http://127.0.0.1:5500/app'
    // when
    cy.visit(url)
    cy.get('#name_input').type('Mindaugai')
    cy.get('button').click() 
    // then
    cy.get('p').toMatchImageSnapshot({
        imageConfig: {
          threshold: 0.001,
        },
    })
})
})