/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  EventFragment,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from "./common";

export declare namespace DataVault {
  export type DataStructStruct = {
    dataType: BigNumberish;
    dataName: string;
    dataHash: string;
    decryptKey: string;
    uploadTime: BigNumberish;
  };

  export type DataStructStructOutput = [
    dataType: bigint,
    dataName: string,
    dataHash: string,
    decryptKey: string,
    uploadTime: bigint
  ] & {
    dataType: bigint;
    dataName: string;
    dataHash: string;
    decryptKey: string;
    uploadTime: bigint;
  };
}

export interface DataVaultInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "addData"
      | "getAllData"
      | "userAllDataCount"
      | "userSpecifcDataCount"
  ): FunctionFragment;

  getEvent(nameOrSignatureOrTopic: "DataAdded"): EventFragment;

  encodeFunctionData(
    functionFragment: "addData",
    values: [DataVault.DataStructStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "getAllData",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "userAllDataCount",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "userSpecifcDataCount",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "addData", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getAllData", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "userAllDataCount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "userSpecifcDataCount",
    data: BytesLike
  ): Result;
}

export namespace DataAddedEvent {
  export type InputTuple = [
    dataType: BigNumberish,
    user: AddressLike,
    fileHash: string,
    decryptKey: string,
    uploadTime: BigNumberish
  ];
  export type OutputTuple = [
    dataType: bigint,
    user: string,
    fileHash: string,
    decryptKey: string,
    uploadTime: bigint
  ];
  export interface OutputObject {
    dataType: bigint;
    user: string;
    fileHash: string;
    decryptKey: string;
    uploadTime: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface DataVault extends BaseContract {
  connect(runner?: ContractRunner | null): DataVault;
  waitForDeployment(): Promise<this>;

  interface: DataVaultInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  addData: TypedContractMethod<
    [_data: DataVault.DataStructStruct],
    [void],
    "nonpayable"
  >;

  getAllData: TypedContractMethod<
    [],
    [DataVault.DataStructStructOutput[]],
    "view"
  >;

  userAllDataCount: TypedContractMethod<[], [bigint], "view">;

  userSpecifcDataCount: TypedContractMethod<
    [_dataType: BigNumberish],
    [bigint],
    "view"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "addData"
  ): TypedContractMethod<
    [_data: DataVault.DataStructStruct],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "getAllData"
  ): TypedContractMethod<[], [DataVault.DataStructStructOutput[]], "view">;
  getFunction(
    nameOrSignature: "userAllDataCount"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "userSpecifcDataCount"
  ): TypedContractMethod<[_dataType: BigNumberish], [bigint], "view">;

  getEvent(
    key: "DataAdded"
  ): TypedContractEvent<
    DataAddedEvent.InputTuple,
    DataAddedEvent.OutputTuple,
    DataAddedEvent.OutputObject
  >;

  filters: {
    "DataAdded(uint8,address,string,string,uint256)": TypedContractEvent<
      DataAddedEvent.InputTuple,
      DataAddedEvent.OutputTuple,
      DataAddedEvent.OutputObject
    >;
    DataAdded: TypedContractEvent<
      DataAddedEvent.InputTuple,
      DataAddedEvent.OutputTuple,
      DataAddedEvent.OutputObject
    >;
  };
}