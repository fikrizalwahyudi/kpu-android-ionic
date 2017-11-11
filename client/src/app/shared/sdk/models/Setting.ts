/* tslint:disable */

declare var Object: any;
export interface SettingInterface {
  "id"?: number;
  "device"?: string;
  "skip"?: number;
}

export class Setting implements SettingInterface {
  "id": number = 0;
  "device": string = '';
  "skip": number = 0;
  constructor(data?: SettingInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Setting`.
   */
  public static getModelName() {
    return "Setting";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Setting for dynamic purposes.
  **/
  public static factory(data: SettingInterface): Setting{
    return new Setting(data);
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
      name: 'Setting',
      plural: 'Settings',
      path: 'Settings',
      idName: 'id',
      properties: {
        "id": {
          name: 'id',
          type: 'number'
        },
        "device": {
          name: 'device',
          type: 'string'
        },
        "skip": {
          name: 'skip',
          type: 'number'
        },
      },
      relations: {
      }
    }
  }
}
