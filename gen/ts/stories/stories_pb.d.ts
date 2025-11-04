// package: stories
// file: stories/stories.proto

import * as jspb from "google-protobuf";

export class GetUserInfoRequest extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUserInfoRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetUserInfoRequest): GetUserInfoRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetUserInfoRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUserInfoRequest;
  static deserializeBinaryFromReader(message: GetUserInfoRequest, reader: jspb.BinaryReader): GetUserInfoRequest;
}

export namespace GetUserInfoRequest {
  export type AsObject = {
    id: string,
  }
}

export class GetUserInfoResponse extends jspb.Message {
  hasUserInfo(): boolean;
  clearUserInfo(): void;
  getUserInfo(): DTOUserInfo | undefined;
  setUserInfo(value?: DTOUserInfo): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUserInfoResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetUserInfoResponse): GetUserInfoResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetUserInfoResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUserInfoResponse;
  static deserializeBinaryFromReader(message: GetUserInfoResponse, reader: jspb.BinaryReader): GetUserInfoResponse;
}

export namespace GetUserInfoResponse {
  export type AsObject = {
    userInfo?: DTOUserInfo.AsObject,
  }
}

export class GetUserBalanceRequest extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUserBalanceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetUserBalanceRequest): GetUserBalanceRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetUserBalanceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUserBalanceRequest;
  static deserializeBinaryFromReader(message: GetUserBalanceRequest, reader: jspb.BinaryReader): GetUserBalanceRequest;
}

export namespace GetUserBalanceRequest {
  export type AsObject = {
    id: string,
  }
}

export class GetUserBalanceResponse extends jspb.Message {
  getBalance(): number;
  setBalance(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUserBalanceResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetUserBalanceResponse): GetUserBalanceResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetUserBalanceResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUserBalanceResponse;
  static deserializeBinaryFromReader(message: GetUserBalanceResponse, reader: jspb.BinaryReader): GetUserBalanceResponse;
}

export namespace GetUserBalanceResponse {
  export type AsObject = {
    balance: number,
  }
}

export class PostUserActivityRequest extends jspb.Message {
  hasActivity(): boolean;
  clearActivity(): void;
  getActivity(): DTOUserActivity | undefined;
  setActivity(value?: DTOUserActivity): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PostUserActivityRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PostUserActivityRequest): PostUserActivityRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PostUserActivityRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PostUserActivityRequest;
  static deserializeBinaryFromReader(message: PostUserActivityRequest, reader: jspb.BinaryReader): PostUserActivityRequest;
}

export namespace PostUserActivityRequest {
  export type AsObject = {
    activity?: DTOUserActivity.AsObject,
  }
}

export class PostUserActivityResponse extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PostUserActivityResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PostUserActivityResponse): PostUserActivityResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PostUserActivityResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PostUserActivityResponse;
  static deserializeBinaryFromReader(message: PostUserActivityResponse, reader: jspb.BinaryReader): PostUserActivityResponse;
}

export namespace PostUserActivityResponse {
  export type AsObject = {
    id: string,
  }
}

export class DTOUserInfo extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getVkId(): string;
  setVkId(value: string): void;

  getName(): string;
  setName(value: string): void;

  getSurname(): string;
  setSurname(value: string): void;

  getAge(): string;
  setAge(value: string): void;

  getRegion(): string;
  setRegion(value: string): void;

  getUniversity(): string;
  setUniversity(value: string): void;

  getDirection(): string;
  setDirection(value: string): void;

  getCurse(): string;
  setCurse(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DTOUserInfo.AsObject;
  static toObject(includeInstance: boolean, msg: DTOUserInfo): DTOUserInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DTOUserInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DTOUserInfo;
  static deserializeBinaryFromReader(message: DTOUserInfo, reader: jspb.BinaryReader): DTOUserInfo;
}

export namespace DTOUserInfo {
  export type AsObject = {
    id: string,
    vkId: string,
    name: string,
    surname: string,
    age: string,
    region: string,
    university: string,
    direction: string,
    curse: string,
  }
}

export class DTOUserActivity extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): void;

  getSphere(): SphereMap[keyof SphereMap];
  setSphere(value: SphereMap[keyof SphereMap]): void;

  getStep(): string;
  setStep(value: string): void;

  getIncome(): number;
  setIncome(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DTOUserActivity.AsObject;
  static toObject(includeInstance: boolean, msg: DTOUserActivity): DTOUserActivity.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DTOUserActivity, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DTOUserActivity;
  static deserializeBinaryFromReader(message: DTOUserActivity, reader: jspb.BinaryReader): DTOUserActivity;
}

export namespace DTOUserActivity {
  export type AsObject = {
    userId: string,
    sphere: SphereMap[keyof SphereMap],
    step: string,
    income: number,
  }
}

export class DTOStory extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getSphere(): SphereMap[keyof SphereMap];
  setSphere(value: SphereMap[keyof SphereMap]): void;

  getStep(): string;
  setStep(value: string): void;

  getIncome(): number;
  setIncome(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DTOStory.AsObject;
  static toObject(includeInstance: boolean, msg: DTOStory): DTOStory.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DTOStory, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DTOStory;
  static deserializeBinaryFromReader(message: DTOStory, reader: jspb.BinaryReader): DTOStory;
}

export namespace DTOStory {
  export type AsObject = {
    id: string,
    sphere: SphereMap[keyof SphereMap],
    step: string,
    income: number,
  }
}

export interface SphereMap {
  UNKNOWN: 0;
  IT: 2;
  SOC: 4;
  EDU: 8;
  CREATIVE: 16;
}

export const Sphere: SphereMap;

