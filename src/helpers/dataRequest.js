
import products from "../Data/Data";

const dataRequest = () => {
    return new Promise((resolve,reject) => {

      setTimeout(() => {
        resolve(products);
      },2000)
      } )
  }

export default dataRequest