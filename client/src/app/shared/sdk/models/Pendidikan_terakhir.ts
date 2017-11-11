/* tslint:disable */

declare var Object: any;
export interface Pendidikan_terakhirInterface {
  "id"?: number;
  "nama"?: string;
  "keterangan"?: string;
}

export class Pendidikan_terakhir implements Pendidikan_terakhirInterface {
  "id": number = 0;
  "nama": string = '';
  "keterangan": string = '';
  constructor(data?: Pendidikan_terakhirInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Pendidikan_terakhir`.
   */
  public static getModelName() {
    return "Pendidikan_terakhir";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Pendidikan_terakhir for dynamic purposes.
  **/
  public static factory(data: Pendidikan_terakhirInterface): Pendidikan_terakhir{
    return new Pendidikan_terakhir(data);
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
      name: 'Pendidikan_terakhir',
      plural: 'Pendidikan_terakhirs',
      path: 'Pendidikan_terakhirs',
      idName: 'id',
      properties: {
        "id": {
          name: 'id',
          type: 'number'
        },
        "nama": {
          name: 'nama',
          type: 'string'
        },
        "keterangan": {
          name: 'keterangan',
          type: 'string'
        },
      },
      relations: {
      }
    }
  }
}
