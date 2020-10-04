import { rootApi } from "./src/services/root"
const rootIndex = rootApi()

export function selectedAssets() {

const asset1 = [require('./src/services/mock/assets_api1/1.png'),
  require(`./src/services/mock/assets_api1/2.png`),
  require(`./src/services/mock/assets_api1/3.png`),
  require(`./src/services/mock/assets_api1/4.png`),
  require(`./src/services/mock/assets_api1/5.png`)]

const asset2 = [require('./src/services/mock/assets_api2/1.png'),
  require(`./src/services/mock/assets_api2/2.png`),
  require(`./src/services/mock/assets_api2/3.png`),
  require(`./src/services/mock/assets_api2/4.png`),
  require(`./src/services/mock/assets_api2/5.png`)]


 const asset3 = [require('./src/services/mock/assets_api3/1.png'),
  require(`./src/services/mock/assets_api3/2.png`),
  require(`./src/services/mock/assets_api3/3.png`),
  require(`./src/services/mock/assets_api3/4.png`),
  require(`./src/services/mock/assets_api3/5.png`)]


    if(rootIndex === 1){
        return asset1
    }

    else if ( rootIndex === 2){
        return asset2
    }
    
    else if ( rootIndex === 3){
        return asset3
    }
    return 

}