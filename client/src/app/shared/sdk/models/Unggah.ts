/* tslint:disable */

declare var Object: any;
export interface UnggahInterface {
  "id"?: number;
}

export class Unggah implements UnggahInterface {
  "id": number = 0;
  constructor(data?: UnggahInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Unggah`.
   */
  public static getModelName() {
    return "Unggah";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Unggah for dynamic purposes.
  **/
  public static factory(data: UnggahInterface): Unggah{
    return new Unggah(data);
  }
  /**
  * @method getModelDefinition
  * @author Julien Ledun
  * @license MIT
  * This method returns an object that represents some of the model
  * definitions.
  **/
  public static getModelDefinition() {
    return {
      name: 'Unggah',
      plural: 'Unggahs',
      path: 'Unggahs',
      idName: 'id',
      properties: {
        "id": {
          name: 'id',
          type: 'number'
        },
      },
      relations: {
      }
    }
  }
}
