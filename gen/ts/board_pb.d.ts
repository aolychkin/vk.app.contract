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

  clearFieldConfigsList(): void;
  getFieldConfigsList(): Array<DTOFieldConfig>;
  setFieldConfigsList(value: Array<DTOFieldConfig>): void;
  addFieldConfigs(value?: DTOFieldConfig, index?: number): DTOFieldConfig;

  clearCardConfigsList(): void;
  getCardConfigsList(): Array<DTOCardConfig>;
  setCardConfigsList(value: Array<DTOCardConfig>): void;
  addCardConfigs(value?: DTOCardConfig, index?: number): DTOCardConfig;

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
    fieldConfigsList: Array<DTOFieldConfig.AsObject>,
    cardConfigsList: Array<DTOCardConfig.AsObject>,
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

  clearOnBoardActionList(): void;
  getOnBoardActionList(): Array<DTOCard>;
  setOnBoardActionList(value: Array<DTOCard>): void;
  addOnBoardAction(value?: DTOCard, index?: number): DTOCard;

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
    onBoardActionList: Array<DTOCard.AsObject>,
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

export class DTOCard extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getOrder(): number;
  setOrder(value: number): void;

  getColumnId(): string;
  setColumnId(value: string): void;

  getActionNum(): number;
  setActionNum(value: number): void;

  getCurrentStepId(): string;
  setCurrentStepId(value: string): void;

  clearSprintIdsList(): void;
  getSprintIdsList(): Array<string>;
  setSprintIdsList(value: Array<string>): void;
  addSprintIds(value: string, index?: number): string;

  clearFieldsList(): void;
  getFieldsList(): Array<DTOActionField>;
  setFieldsList(value: Array<DTOActionField>): void;
  addFields(value?: DTOActionField, index?: number): DTOActionField;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DTOCard.AsObject;
  static toObject(includeInstance: boolean, msg: DTOCard): DTOCard.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DTOCard, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DTOCard;
  static deserializeBinaryFromReader(message: DTOCard, reader: jspb.BinaryReader): DTOCard;
}

export namespace DTOCard {
  export type AsObject = {
    id: string,
    order: number,
    columnId: string,
    actionNum: number,
    currentStepId: string,
    sprintIdsList: Array<string>,
    fieldsList: Array<DTOActionField.AsObject>,
  }
}

export class DTOActionField extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getValue(): string;
  setValue(value: string): void;

  getConfigId(): string;
  setConfigId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DTOActionField.AsObject;
  static toObject(includeInstance: boolean, msg: DTOActionField): DTOActionField.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DTOActionField, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DTOActionField;
  static deserializeBinaryFromReader(message: DTOActionField, reader: jspb.BinaryReader): DTOActionField;
}

export namespace DTOActionField {
  export type AsObject = {
    id: string,
    value: string,
    configId: string,
  }
}

export class DTOCardConfig extends jspb.Message {
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
    rowOrder: number,
    columnOrder: number,
    size: number,
    fieldConfigId: string,
  }
}

export class DTOFieldConfig extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getName(): string;
  setName(value: string): void;

  getAlias(): string;
  setAlias(value: string): void;

  hasFieldType(): boolean;
  clearFieldType(): void;
  getFieldType(): DTOFieldType | undefined;
  setFieldType(value?: DTOFieldType): void;

  getDefaultvalue(): string;
  setDefaultvalue(value: string): void;

  getAvailablevalues(): string;
  setAvailablevalues(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DTOFieldConfig.AsObject;
  static toObject(includeInstance: boolean, msg: DTOFieldConfig): DTOFieldConfig.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DTOFieldConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DTOFieldConfig;
  static deserializeBinaryFromReader(message: DTOFieldConfig, reader: jspb.BinaryReader): DTOFieldConfig;
}

export namespace DTOFieldConfig {
  export type AsObject = {
    id: string,
    name: string,
    alias: string,
    fieldType?: DTOFieldType.AsObject,
    defaultvalue: string,
    availablevalues: string,
  }
}

export class DTOFieldType extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getName(): string;
  setName(value: string): void;

  getAlias(): string;
  setAlias(value: string): void;

  getIsCustom(): boolean;
  setIsCustom(value: boolean): void;

  clearAvailableSizesList(): void;
  getAvailableSizesList(): Array<string>;
  setAvailableSizesList(value: Array<string>): void;
  addAvailableSizes(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DTOFieldType.AsObject;
  static toObject(includeInstance: boolean, msg: DTOFieldType): DTOFieldType.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DTOFieldType, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DTOFieldType;
  static deserializeBinaryFromReader(message: DTOFieldType, reader: jspb.BinaryReader): DTOFieldType;
}

export namespace DTOFieldType {
  export type AsObject = {
    id: string,
    name: string,
    alias: string,
    isCustom: boolean,
    availableSizesList: Array<string>,
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

