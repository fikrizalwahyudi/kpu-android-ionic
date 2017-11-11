/* tslint:disable */
import {
  Profile
} from '../index';

declare var Object: any;
export interface Rekam_jejakInterface {
  "id"?: number;
  "id_profile"?: number;
  "keterangan"?: string;
  "tahun"?: number;
  profile?: Profile;
}

export class Rekam_jejak implements Rekam_jejakInterface {
  "id": number = 0;
  "id_profile": number = 0;
  "keterangan": string = '';
  "tahun": number = 0;
  profile: Profile = null;
  constructor(data?: Rekam_jejakInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Rekam_jejak`.
   */
  public static getModelName() {
    return "Rekam_jejak";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Rekam_jejak for dynamic purposes.
  **/
  public static factory(data: Rekam_jejakInterface): Rekam_jejak{
    return new Rekam_jejak(data);
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
      name: 'Rekam_jejak',
      plural: 'Rekam_jejaks',
      path: 'Rekam_jejaks',
      idName: 'id',
      properties: {
        "id": {
          name: 'id',
          type: 'number'
        },
        "id_profile": {
          name: 'id_profile',
          type: 'number'
        },
        "keterangan": {
          name: 'keterangan',
          type: 'string'
        },
        "tahun": {
          name: 'tahun',
          type: 'number'
        },
      },
      relations: {
        profile: {
          name: 'profile',
          type: 'Profile',
          model: 'Profile',
          relationType: 'belongsTo',
                  keyFrom: 'id_profile',
          keyTo: 'id'
        },
      }
    }
  }
}
