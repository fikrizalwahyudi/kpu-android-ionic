/* tslint:disable */
import {
  Event,
  Profile
} from '../index';

declare var Object: any;
export interface PaslonInterface {
  "id"?: number;
  "id_event"?: number;
  "id_calon"?: number;
  "id_wakil"?: number;
  "nomor"?: number;
  event?: Event;
  calon?: Profile;
  wakil?: Profile;
}

export class Paslon implements PaslonInterface {
  "id": number = 0;
  "id_event": number = 0;
  "id_calon": number = 0;
  "id_wakil": number = 0;
  "nomor": number = 0;
  event: Event = null;
  calon: Profile = null;
  wakil: Profile = null;
  constructor(data?: PaslonInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Paslon`.
   */
  public static getModelName() {
    return "Paslon";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Paslon for dynamic purposes.
  **/
  public static factory(data: PaslonInterface): Paslon{
    return new Paslon(data);
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
      name: 'Paslon',
      plural: 'Paslons',
      path: 'Paslons',
      idName: 'id',
      properties: {
        "id": {
          name: 'id',
          type: 'number'
        },
        "id_event": {
          name: 'id_event',
          type: 'number'
        },
        "id_calon": {
          name: 'id_calon',
          type: 'number'
        },
        "id_wakil": {
          name: 'id_wakil',
          type: 'number'
        },
        "nomor": {
          name: 'nomor',
          type: 'number'
        },
      },
      relations: {
        event: {
          name: 'event',
          type: 'Event',
          model: 'Event',
          relationType: 'belongsTo',
                  keyFrom: 'id_event',
          keyTo: 'id'
        },
        calon: {
          name: 'calon',
          type: 'Profile',
          model: 'Profile',
          relationType: 'belongsTo',
                  keyFrom: 'id_calon',
          keyTo: 'id'
        },
        wakil: {
          name: 'wakil',
          type: 'Profile',
          model: 'Profile',
          relationType: 'belongsTo',
                  keyFrom: 'id_wakil',
          keyTo: 'id'
        },
      }
    }
  }
}
