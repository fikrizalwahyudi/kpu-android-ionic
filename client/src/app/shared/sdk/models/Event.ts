/* tslint:disable */

declare var Object: any;
export interface EventInterface {
  "id"?: number;
  "nama"?: string;
  "keterangan"?: string;
  "tanggal"?: Date;
}

export class Event implements EventInterface {
  "id": number = 0;
  "nama": string = '';
  "keterangan": string = '';
  "tanggal": Date = new Date(0);
  constructor(data?: EventInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Event`.
   */
  public static getModelName() {
    return "Event";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Event for dynamic purposes.
  **/
  public static factory(data: EventInterface): Event{
    return new Event(data);
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
      name: 'Event',
      plural: 'Events',
      path: 'Events',
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
        "tanggal": {
          name: 'tanggal',
          type: 'Date'
        },
      },
      relations: {
      }
    }
  }
}
