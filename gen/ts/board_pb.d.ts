// package: board
// file: board.proto

import * as jspb from "google-protobuf";

export class GetBoardRequest extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBoardRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetBoardRequest): GetBoardRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetBoardRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetBoardRequest;
  static deserializeBinaryFromReader(message: GetBoardRequest, reader: jspb.BinaryReader): GetBoardRequest;
}

export namespace GetBoardRequest {
  export type AsObject = {
    id: string,
  }
}

export class GetBoardResponse extends jspb.Message {
  hasBoard(): boolean;
  clearBoard(): void;
  getBoard(): DTOBoard | undefined;
  setBoard(value?: DTOBoard): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBoardResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetBoardResponse): GetBoardResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetBoardResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetBoardResponse;
  static deserializeBinaryFromReader(message: GetBoardResponse, reader: jspb.BinaryReader): GetBoardResponse;
}

export namespace GetBoardResponse {
  export type AsObject = {
    board?: DTOBoard.AsObject,
  }
}

export class DTOBoard extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getKey(): string;
  setKey(value: string): void;

  clearColumnsList(): void;
  getColumnsList(): Array<DTOColumn>;
  setColumnsList(value: Array<DTOColumn>): void;
  addColumns(value?: DTOColumn, index?: number): DTOColumn;

  clearSprintsList(): void;
  getSprintsList(): Array<DTOSprint>;
  setSprintsList(value: Array<DTOSprint>): void;
  addSprints(value?: DTOSprint, index?: number): DTOSprint;

  clearCardConfigsList(): void;
  getCardConfigsList(): Array<DTOCardConfig>;
  setCardConfigsList(value: Array<DTOCardConfig>): void;
  addCardConfigs(value?: DTOCardConfig, index?: number): DTOCardConfig;

  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DTOBoard.AsObject;
  static toObject(includeInstance: boolean, msg: DTOBoard): DTOBoard.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DTOBoard, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DTOBoard;
  static deserializeBinaryFromReader(message: DTOBoard, reader: jspb.BinaryReader): DTOBoard;
}

export namespace DTOBoard {
  export type AsObject = {
    id: string,
    key: string,
    columnsList: Array<DTOColumn.AsObject>,
    sprintsList: Array<DTOSprint.AsObject>,
    cardConfigsList: Array<DTOCardConfig.AsObject>,
    name: string,
  }
}

export class DTOColumn extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getName(): string;
  setName(value: string): void;

  clearStepsList(): void;
  getStepsList(): Array<DTOCurrentStep>;
  setStepsList(value: Array<DTOCurrentStep>): void;
  addSteps(value?: DTOCurrentStep, index?: number): DTOCurrentStep;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DTOColumn.AsObject;
  static toObject(includeInstance: boolean, msg: DTOColumn): DTOColumn.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DTOColumn, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DTOColumn;
  static deserializeBinaryFromReader(message: DTOColumn, reader: jspb.BinaryReader): DTOColumn;
}

export namespace DTOColumn {
  export type AsObject = {
    id: string,
    name: string,
    stepsList: Array<DTOCurrentStep.AsObject>,
  }
}

export class DTOCurrentStep extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getName(): string;
  setName(value: string): void;

  getWorkflowStatus(): string;
  setWorkflowStatus(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DTOCurrentStep.AsObject;
  static toObject(includeInstance: boolean, msg: DTOCurrentStep): DTOCurrentStep.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DTOCurrentStep, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DTOCurrentStep;
  static deserializeBinaryFromReader(message: DTOCurrentStep, reader: jspb.BinaryReader): DTOCurrentStep;
}

export namespace DTOCurrentStep {
  export type AsObject = {
    id: string,
    name: string,
    workflowStatus: string,
  }
}

export class DTOSprint extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DTOSprint.AsObject;
  static toObject(includeInstance: boolean, msg: DTOSprint): DTOSprint.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DTOSprint, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DTOSprint;
  static deserializeBinaryFromReader(message: DTOSprint, reader: jspb.BinaryReader): DTOSprint;
}

export namespace DTOSprint {
  export type AsObject = {
    id: string,
    name: string,
  }
}

export class DTOCardConfig extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getName(): string;
  setName(value: string): void;

  clearActionFieldsList(): void;
  getActionFieldsList(): Array<ActionFieldInCardConfig>;
  setActionFieldsList(value: Array<ActionFieldInCardConfig>): void;
  addActionFields(value?: ActionFieldInCardConfig, index?: number): ActionFieldInCardConfig;

  getState(): string;
  setState(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DTOCardConfig.AsObject;
  static toObject(includeInstance: boolean, msg: DTOCardConfig): DTOCardConfig.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DTOCardConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DTOCardConfig;
  static deserializeBinaryFromReader(message: DTOCardConfig, reader: jspb.BinaryReader): DTOCardConfig;
}

export namespace DTOCardConfig {
  export type AsObject = {
    id: string,
    name: string,
    actionFieldsList: Array<ActionFieldInCardConfig.AsObject>,
    state: string,
  }
}

export class ActionFieldInCardConfig extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getRowOrder(): number;
  setRowOrder(value: number): void;

  getColumnOrder(): number;
  setColumnOrder(value: number): void;

  getSize(): number;
  setSize(value: number): void;

  getFieldConfigId(): string;
  setFieldConfigId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ActionFieldInCardConfig.AsObject;
  static toObject(includeInstance: boolean, msg: ActionFieldInCardConfig): ActionFieldInCardConfig.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ActionFieldInCardConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ActionFieldInCardConfig;
  static deserializeBinaryFromReader(message: ActionFieldInCardConfig, reader: jspb.BinaryReader): ActionFieldInCardConfig;
}

export namespace ActionFieldInCardConfig {
  export type AsObject = {
    id: string,
    rowOrder: number,
    columnOrder: number,
    size: number,
    fieldConfigId: string,
  }
}

