
import stock from "../DB/Db";

const dataRequest = () => {
    return new Promise((resolve,reject) => {

      setTimeout(() => {
        resolve(stock);
      },2000)
      } )
  }

