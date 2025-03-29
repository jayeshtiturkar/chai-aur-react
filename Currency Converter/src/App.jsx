import { useState } from 'react'
import useCurrencyInfo from './hooks/useCurrencyHook';
import { InputBox } from './componants';

function App() {
  const [amount, setAmount] = useState(0);
  const [convertedAmount, setConvertedamount] = useState(0);
  const [from, setFrom] = useState("usd")
  const [to, SetTo] = useState("inr")

  const currencyInfo = useCurrencyInfo(from)

  const option = Object.keys(currencyInfo)
  const BackgroundImag = "https://images.pexels.com/photos/378570/pexels-photo-378570.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"

  const swap = () => {
    setAmount(convertedAmount)
    setConvertedamount(amount)
    setFrom(to)
    SetTo(from)
  }

  const convert = () => {
    setConvertedamount(amount * currencyInfo[to])
  }

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('${BackgroundImag}')`,
      }}
    >
      <div className="">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <h1 className='text-white bg-green-600 font-serif text-center rounded-2xl my-5 text-3xl py-2'>Currency Calculator</h1>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert()
            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="From"
                amount={amount}
                currencyOptions={option}
                selectdCurrency={from}
                onAmountChange={(updatedAmount) => setAmount(updatedAmount)}
                onCurrencyChange={(currency) => setFrom(currency)}

              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swap}
              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                amount={convertedAmount}
                currencyOptions={option}
                onCurrencyChange={(currency) => SetTo(currency)}
                selectdCurrency={to}
                amountDisable

              />
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App
