/* tslint:disable */
import { Injectable } from '@angular/core';
import { User } from '../../models/User';
import { Account } from '../../models/Account';
import { Unggah } from '../../models/Unggah';
import { Profile } from '../../models/Profile';
import { Event } from '../../models/Event';
import { Rekam_jejak } from '../../models/Rekam_jejak';
import { Paslon } from '../../models/Paslon';
import { Profile_pendidikan } from '../../models/Profile_pendidikan';
import { Setting } from '../../models/Setting';
import { Pendidikan_terakhir } from '../../models/Pendidikan_terakhir';
import { Jadwal } from '../../models/Jadwal';

export interface Models { [name: string]: any }

@Injectable()
export class SDKModels {

  private models: Models = {
    User: User,
    Account: Account,
    Unggah: Unggah,
    Profile: Profile,
    Event: Event,
    Rekam_jejak: Rekam_jejak,
    Paslon: Paslon,
    Profile_pendidikan: Profile_pendidikan,
    Setting: Setting,
    Pendidikan_terakhir: Pendidikan_terakhir,
    Jadwal: Jadwal,
    
  };

  public get(modelName: string): any {
    return this.models[modelName];
  }

  public getAll(): Models {
    return this.models;
  }

  public getModelNames(): string[] {
    return Object.keys(this.models);
  }
}
