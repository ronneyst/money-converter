//link with the convert button
const convertButton = document.querySelector(".convert-button");
const selectFirstValue = document.querySelector(".first-value");
const selectValue = document.querySelector(".value-select");

//main function to convert values
function convertValue() {
  //takes the value from the input with the value currency
  const inputCurrencyValue = document.querySelector(".input-currency").value;
  const valueToConvert = document.querySelector(".currency-value"); //value to convert
  const valueConverted = document.querySelector(".currency-converted"); //value converted

  //fixed value for currencies by real:
  const dollarReal = 4.96;
  const euroReal = 5.35;
  const poundReal = 6.16;
  const bitcoinReal = 134290.15;
  //fixed value for currencies by dollar:
  const realDollar = 0.2;
  const euroDollar = 1.08;
  const poundDollar = 1.24;
  const bitcoinDollar = 26865.55;
  //fixed value for currencies by euro:
  const realEuro = 0.19;
  const dollarEuro = 0.93;
  const poundEuro = 1.15;
  const bitcoinEuro = 24858.36;
  //fixed value for currencies by pound:
  const realPound = 0.16;
  const dollarPound = 0.80;
  const euroPound = 0.87;
  const bitcoinPound = 21583.09;
  //fixed value for currencies by bitcoin:
  const realBitcoin = 134290.15;
  const dollarBitcoin = 26865.55;
  const euroBitcoin = 24858.36;
  const poundBitcoin = 21583.09;

  //if for real conversion
  if (selectFirstValue.value === "real") {
    switch (selectValue.value) {
      case "dollar":
        //format the output currency value to chosen currency and modifies html value
        valueConverted.innerHTML = new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
        }).format(inputCurrencyValue / dollarReal);
        break;
      case "euro":
        valueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
          style: "currency",
          currency: "EUR",
        }).format(inputCurrencyValue / euroReal);
        break;
      case "pound":
        valueConverted.innerHTML = new Intl.NumberFormat("en-UK", {
          style: "currency",
          currency: "GBP",
        }).format(inputCurrencyValue / poundReal);
        break;
      case "bitcoin":
        valueConverted.innerHTML = new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "BTC",
        }).format(inputCurrencyValue / bitcoinReal);
        break;
        case "real":
        //format the output currency value to chosen currency and modifies html value
        valueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        }).format(inputCurrencyValue);
        break;
    }
    //format the input value, to BRL pattern and modifies html value
    valueToConvert.innerHTML = new Intl.NumberFormat("pt-br", {
      style: "currency",
      currency: "BRL",
    }).format(inputCurrencyValue);
  }
//if for dollar conversion
  if (selectFirstValue.value === "dollar") {
    switch (selectValue.value) {
        case "dollar":
        valueConverted.innerHTML = new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
        }).format(inputCurrencyValue);
        break;
      case "real":
        valueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        }).format(inputCurrencyValue / realDollar);
        break;
      case "euro":
        valueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
          style: "currency",
          currency: "EUR",
        }).format(inputCurrencyValue / euroDollar);

        break;
      case "pound":
        valueConverted.innerHTML = new Intl.NumberFormat("en-UK", {
          style: "currency",
          currency: "GBP",
        }).format(inputCurrencyValue / poundDollar);
        break;
      case "bitcoin":
        valueConverted.innerHTML = new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "BTC",
        }).format(inputCurrencyValue / bitcoinDollar);
        break;
    }
    valueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(inputCurrencyValue);
  }
  //if for euro conversion
  if (selectFirstValue.value === "euro") {
        switch (selectValue.value) {
            case "dollar":
            valueConverted.innerHTML = new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
            }).format(inputCurrencyValue / dollarEuro);
            break;
          case "real":
            valueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(inputCurrencyValue / realEuro);
            break;
          case "euro":
            valueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
              style: "currency",
              currency: "EUR",
            }).format(inputCurrencyValue);
    
            break;
          case "pound":
            valueConverted.innerHTML = new Intl.NumberFormat("en-UK", {
              style: "currency",
              currency: "GBP",
            }).format(inputCurrencyValue / poundEuro);
            break;
          case "bitcoin":
            valueConverted.innerHTML = new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "BTC",
            }).format(inputCurrencyValue / bitcoinEuro);
            break;
        }
        valueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "EUR",
          }).format(inputCurrencyValue);
      }
 //if for pound
      if (selectFirstValue.value === "pound") {
        switch (selectValue.value) {
            case "dollar":
            valueConverted.innerHTML = new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
            }).format(inputCurrencyValue / dollarPound);
            break;
          case "real":
            valueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(inputCurrencyValue / realPound);
            break;
          case "euro":
            valueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
              style: "currency",
              currency: "EUR",
            }).format(inputCurrencyValue / euroPound);
            break;
          case "pound":
            valueConverted.innerHTML = new Intl.NumberFormat("en-UK", {
              style: "currency",
              currency: "GBP",
            }).format(inputCurrencyValue);
            break;
          case "bitcoin":
            valueConverted.innerHTML = new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "BTC",
            }).format(inputCurrencyValue / bitcoinPound);
            break;
        }
        valueToConvert.innerHTML = new Intl.NumberFormat("en-UK", {
                style: "currency",
                currency: "GBP",
          }).format(inputCurrencyValue);
      }
 //if for bitcoin
 if (selectFirstValue.value === "bitcoin") {
        switch (selectValue.value) {
            case "dollar":
            valueConverted.innerHTML = new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
            }).format(inputCurrencyValue / dollarBitcoin);
            break;
          case "real":
            valueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(inputCurrencyValue / realBitcoin);
            break;
          case "euro":
            valueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
              style: "currency",
              currency: "EUR",
            }).format(inputCurrencyValue / euroBitcoin);
            break;
          case "pound":
            valueConverted.innerHTML = new Intl.NumberFormat("en-UK", {
              style: "currency",
              currency: "GBP",
            }).format(inputCurrencyValue / poundBitcoin);
            break;
          case "bitcoin":
            valueConverted.innerHTML = new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "BTC",
            }).format(inputCurrencyValue);
            break;
        }
        valueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "BTC",
          }).format(inputCurrencyValue);
      }
      
}

//this function changes the image and currency description, when selected
function changeCurrency() {
  
  const currencyName = document.getElementById ("currency-name");
  const currencyNameConverted = document.getElementById ("currency-name-converted");
  const firstFlag = document.getElementById("first-flag");
  const secondFlag = document.getElementById("second-flag");

 //switch for the first flag and description
  switch (selectFirstValue.value) {
    case "real":
      currencyName.innerHTML = "Real";
      firstFlag.src = "./assets/real.png";
      break;
    case "dollar":
      currencyName.innerHTML = "USA Dollar";
      firstFlag.src = "./assets/usa_dolar.png";
      break;
    case "euro":
      currencyName.innerHTML = "Euro";
      firstFlag.src = "./assets/euro.png";
      break;
    case "pound":
      currencyName.innerHTML = "Pound";
      firstFlag.src = "./assets/pound.png";
      break;
    case "bitcoin":
      currencyName.innerHTML = "Bitcoin";
      firstFlag.src = "./assets/bitcoin.png";
      break;
  }
   //switch for the second flag and description
  switch (selectValue.value) {
        case "real":
          currencyNameConverted.innerHTML = "Real";
          secondFlag.src = "./assets/real.png";
          break;
        case "dollar":
          currencyNameConverted.innerHTML = "USA Dollar";
          secondFlag.src = "./assets/usa_dolar.png";
          break;
        case "euro":
          currencyNameConverted.innerHTML = "Euro";
          secondFlag.src = "./assets/euro.png";
          break;
        case "pound":
          currencyNameConverted.innerHTML = "Pound";
          secondFlag.src = "./assets/pound.png";
          break;
        case "bitcoin":
          currencyNameConverted.innerHTML = "Bitcoin";
          secondFlag.src = "./assets/bitcoin.png";
          break;
      }
  //at change, refresh the conversion
  convertValue();
}

//when clicked the button performs the function above
convertButton.addEventListener("click", convertValue);
selectValue.addEventListener("change", changeCurrency);
selectFirstValue.addEventListener("change", changeCurrency);
