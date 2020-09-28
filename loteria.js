var numSort = []
var numEsco = []
let sort
let cont

function sortearNumeros()
{
  numSort = []

  for (var i=0; i<6; i++)
  {
    do
    {
      sort = Math.ceil(Math.random() * 60)
      sort = (sort == 0) ? 1 : sort


    }
    while (numSort.includes(sort))

    numSort.push(sort)
  }

}

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

function verificarAcertos()
{
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
          printNumSort()
          document.getElementById('totalAcertos').innerHTML = "O total de acertos foi: " + cont
      }
}

function printNumSort()
{
    document.getElementById('numSort').innerHTML = ""
    for (var i=0; i<numSort.length; i++)
    {
        let li = document.createElement("li")
        li.append(numSort[i])
        li.classList.add("result")
        document.getElementById('numSort').append(li)
    }
}
