// Serves as default response generator to use accross methods
export default class {
    constructor({meta = {}, data = {}, errors = {}}) {
        Object.assign(this, { meta, data, errors })
      }

      testMethod(){
          console.log('AY')
      }
}