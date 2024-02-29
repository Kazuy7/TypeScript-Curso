// Essa é a view pai, que passa herança para mensagem-view e negociacoes-view, por isso ela precisa ser do tipo 'T'(genérica)
// Essa view é feita com métodos para reutilizar, porém, alguns parâmetros são definidos na classe filha

export abstract class View<T> {
  // Só a própria classe ou as filhas que herdarem dessa classe podem ter acessa às propriedades protegidas
  protected elemento: HTMLElement;

  // Recebendo no seletor o ID do elemento
  constructor(seletor: string) {
    this.elemento = document.querySelector(seletor);
  }

  // Chamando o update do modelo e também o template para adicionar no HTML
  public update(model: T): void {
    const template = this.template(model);
    this.elemento.innerHTML = template;
  }

  // O método se torna abstrato para que não possa ser instanciado diretamente, ele dever ser instanciado pela classe filha
  // Usa-se o protected para que o método só possa ser acessado pela classe pai e seus herdeiros(mensagem-view e negociacoes-view)
  protected abstract template(model: T): string;
}
