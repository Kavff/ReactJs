
import products from "../DB/Db";

const dataRequest = () => {
    return new Promise((resolve,reject) => {

      setTimeout(() => {
        resolve(products);
      },2000)
      } )
  }

export default dataRequest