/* tslint:disable */
import {
  Profile
} from '../index';

declare var Object: any;
export interface Profile_pendidikanInterface {
  "id"?: number;
  "id_profile"?: number;
  "keterangan"?: string;
  "tahun"?: number;
  profile?: Profile;
}

export class Profile_pendidikan implements Profile_pendidikanInterface {
  "id": number = 0;
  "id_profile": number = 0;
  "keterangan": string = '';
  "tahun": number = 0;
  profile: Profile = null;
  constructor(data?: Profile_pendidikanInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Profile_pendidikan`.
   */
  public static getModelName() {
    return "Profile_pendidikan";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Profile_pendidikan for dynamic purposes.
  **/
  public static factory(data: Profile_pendidikanInterface): Profile_pendidikan{
    return new Profile_pendidikan(data);
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
      name: 'Profile_pendidikan',
      plural: 'Profile_pendidikans',
      path: 'Profile_pendidikans',
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
