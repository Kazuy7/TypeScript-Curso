// Essa é a view pai, que passa herança para mensagem-view e negociacoes-view, por isso ela precisa ser do tipo 'T'(genérica)
// Essa view é feita com métodos para reutilizar, porém, alguns parâmetros são definidos na classe filha
export class View {
    // Recebendo no seletor o ID do elemento
    constructor(seletor) {
        this.elemento = document.querySelector(seletor);
    }
    // Chamando o update do modelo e também o template para adicionar no HTML
    update(model) {
        const template = this.template(model);
        this.elemento.innerHTML = template;
    }
}
