import { View } from "./view.js";

// Tipo definido no extends
export class MensagemView extends View<string> {

    // Se não for definido um template, será herdado do pai(view.ts)
    // É necessário usar o protected aqui também para que o template protected não seja sobrescrito pelo template public
    protected template(model: string): string {
        return `
            <p class="alert alert-info">${model}</p>
        `
    }
}