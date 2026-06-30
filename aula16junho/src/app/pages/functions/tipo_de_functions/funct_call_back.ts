//Função CALLBACK são funções que retornam outra função

export function processar(valor:number,callback:(n:number) => void) {
    console.log('Processando .........');
    callback(valor);
};

processar(10,(n) => console.log(`Valor processado: ${n}`));

export function saudacao(){
    console.log("Bem-vindo!");
}

setTimeout(saudacao,3000); ///executa após 3 segundos