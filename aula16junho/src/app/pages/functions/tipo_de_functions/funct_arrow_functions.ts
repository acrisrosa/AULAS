///Arrow functions

//quando eu não tenhi bloco { .....} o Js já coloca um returno invisivel para nós
export const somar = (a: number, b: number) => a + b;

/**quando eu tenho o bloco {.... eu posso ter mais de uma execução e retornar o que eu quero} */
export const somarcomBlocoRetorno = (a: number, b: number) => {
  console.log('antes da soma variável a:  ' + a);
  console.log('antes da soma variável b:  ' + b);
  return a + b;
};
