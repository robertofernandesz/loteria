# Loteria

este projeto é um simulador da *mega sena*, onde o usuario digita seis numeros.
e sorteamos aleatoriamente outros seis numeros e comparamos para verificar quantos você acertou.

**Não é para jogos oficiais.**

## Tecnologias Utilizadas
1- **HTML**   
  HTML pode ser utilizada para consetrução de páginas WEB.    
2- **CSS**   
  CSS pode ser utilizado para estilizar as páginas de HTML.   
3- **JS**                           
  É uma linguagem de programação que possui um script complexo que pode ser denominado um dos mais populares do mundo.  
4- ~~**JQUERRY**~~    
  Não foi utilizado.  

### Funções Principais
Aqui sera apresentado as duas principais funções do site.

## Sortear Números
Nessa função os número são sorteados aleatoriamente.
```
sortearNumeros()

let cont = 0
if (numEsco.length !== 6)
{
  alert("A quantidade de números escolhidos é menor que seis(6)." + "\n" + "Digite seis(6) númeors de 01 a 60 com duas casas decimais.")
}

  else
  {
      for (var i=0; i<6; i++)
      {
          if (numSort.includes(parseInt(numEsco[i])))
          {
              cont++
          }
      }
```

### Lendo os Números Digitados  
Lê as entradas dos números digitados pelo usuário.
```
function addToList(num, pos)
{
  if(num.length == 2)
  {
    if (numEsco.includes(num))
    {
        alert("Número escolhido anteriormente. Favor escolher outro número.")
    }

    else if (parseInt(num) > 60)
    {
      alert("O número digitado não pode ser maior que 60!")
    }

        else
        {
            numEsco[pos-1] = num
        }
  }
}
```

## Como rodar o Código
> Apenas baixe o arquivo do código, extraia e execute no seu navegador, caso queira saber sobre as matrizes do código, o executar no Atom ou qualquer outro editor de texto.  

##  Exemplo de Tabela:  

| Exemplo | Valor Exemplo |
| ------- | ------------- |
| Maçã    | R$4,00
| Banana  | R$3,00
| Kiwi    | R$1,50        |

## Imagens da Tela  
Tela 1:
![](/imagens/Capturar.jpg)

Tela 2:
![](/imagens/Capturar2.jpg)


#### Referências:
Meu cérebro ousado.
