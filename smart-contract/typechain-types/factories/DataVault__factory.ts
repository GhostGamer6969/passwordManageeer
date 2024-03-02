/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../common";
import type { DataVault, DataVaultInterface } from "../DataVault";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "enum DataVault.DataType",
        name: "dataType",
        type: "uint8",
      },
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "string",
        name: "fileHash",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "decryptKey",
        type: "string",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "uploadTime",
        type: "uint256",
      },
    ],
    name: "DataAdded",
    type: "event",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "enum DataVault.DataType",
            name: "dataType",
            type: "uint8",
          },
          {
            internalType: "string",
            name: "dataName",
            type: "string",
          },
          {
            internalType: "string",
            name: "dataHash",
            type: "string",
          },
          {
            internalType: "string",
            name: "decryptKey",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "uploadTime",
            type: "uint256",
          },
        ],
        internalType: "struct DataVault.DataStruct",
        name: "_data",
        type: "tuple",
      },
    ],
    name: "addData",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getAllData",
    outputs: [
      {
        components: [
          {
            internalType: "enum DataVault.DataType",
            name: "dataType",
            type: "uint8",
          },
          {
            internalType: "string",
            name: "dataName",
            type: "string",
          },
          {
            internalType: "string",
            name: "dataHash",
            type: "string",
          },
          {
            internalType: "string",
            name: "decryptKey",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "uploadTime",
            type: "uint256",
          },
        ],
        internalType: "struct DataVault.DataStruct[]",
        name: "allData",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "userAllDataCount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "enum DataVault.DataType",
        name: "_dataType",
        type: "uint8",
      },
    ],
    name: "userSpecifcDataCount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b50610dea806100206000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c80632d10fa28146100515780635e8107061461006f578063909fc07e1461008d578063da58cb45146100a9575b600080fd5b6100596100d9565b6040516100669190610966565b60405180910390f35b6100776103e2565b6040516100849190610997565b60405180910390f35b6100a760048036038101906100a29190610c36565b61042b565b005b6100c360048036038101906100be9190610c7f565b610533565b6040516100d09190610997565b60405180910390f35b606060006100e56103e2565b90508067ffffffffffffffff811115610101576101006109cb565b5b60405190808252806020026020018201604052801561013a57816020015b610127610613565b81526020019060019003908161011f5790505b50915060005b818110156103dd576000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020818154811061019857610197610cac565b5b90600052602060002090600502016040518060a00160405290816000820160009054906101000a900460ff1660038111156101d6576101d5610723565b5b60038111156101e8576101e7610723565b5b81526020016001820180546101fc90610d0a565b80601f016020809104026020016040519081016040528092919081815260200182805461022890610d0a565b80156102755780601f1061024a57610100808354040283529160200191610275565b820191906000526020600020905b81548152906001019060200180831161025857829003601f168201915b5050505050815260200160028201805461028e90610d0a565b80601f01602080910402602001604051908101604052809291908181526020018280546102ba90610d0a565b80156103075780601f106102dc57610100808354040283529160200191610307565b820191906000526020600020905b8154815290600101906020018083116102ea57829003601f168201915b5050505050815260200160038201805461032090610d0a565b80601f016020809104026020016040519081016040528092919081815260200182805461034c90610d0a565b80156103995780601f1061036e57610100808354040283529160200191610399565b820191906000526020600020905b81548152906001019060200180831161037c57829003601f168201915b505050505081526020016004820154815250508382815181106103bf576103be610cac565b5b602002602001018190525080806103d590610d6b565b915050610140565b505090565b60008060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002080549050905090565b428160800181815250506000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081908060018154018082558091505060019003906000526020600020906005020160009091909190915060008201518160000160006101000a81548160ff021916908360038111156104c8576104c7610723565b5b021790555060208201518160010190805190602001906104e9929190610654565b506040820151816002019080519060200190610506929190610654565b506060820151816003019080519060200190610523929190610654565b5060808201518160040155505050565b60008061053e6103e2565b90506000805b828110156106085784600381111561055f5761055e610723565b5b6000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002082815481106105af576105ae610cac565b5b906000526020600020906005020160000160009054906101000a900460ff1660038111156105e0576105df610723565b5b14156105f55781806105f190610d6b565b9250505b808061060090610d6b565b915050610544565b508092505050919050565b6040518060a001604052806000600381111561063257610631610723565b5b8152602001606081526020016060815260200160608152602001600081525090565b82805461066090610d0a565b90600052602060002090601f01602090048101928261068257600085556106c9565b82601f1061069b57805160ff19168380011785556106c9565b828001600101855582156106c9579182015b828111156106c85782518255916020019190600101906106ad565b5b5090506106d691906106da565b5090565b5b808211156106f35760008160009055506001016106db565b5090565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b6004811061076357610762610723565b5b50565b600081905061077482610752565b919050565b600061078482610766565b9050919050565b61079481610779565b82525050565b600081519050919050565b600082825260208201905092915050565b60005b838110156107d45780820151818401526020810190506107b9565b838111156107e3576000848401525b50505050565b6000601f19601f8301169050919050565b60006108058261079a565b61080f81856107a5565b935061081f8185602086016107b6565b610828816107e9565b840191505092915050565b6000819050919050565b61084681610833565b82525050565b600060a083016000830151610864600086018261078b565b506020830151848203602086015261087c82826107fa565b9150506040830151848203604086015261089682826107fa565b915050606083015184820360608601526108b082826107fa565b91505060808301516108c5608086018261083d565b508091505092915050565b60006108dc838361084c565b905092915050565b6000602082019050919050565b60006108fc826106f7565b6109068185610702565b93508360208202850161091885610713565b8060005b85811015610954578484038952815161093585826108d0565b9450610940836108e4565b925060208a0199505060018101905061091c565b50829750879550505050505092915050565b6000602082019050818103600083015261098081846108f1565b905092915050565b61099181610833565b82525050565b60006020820190506109ac6000830184610988565b92915050565b6000604051905090565b600080fd5b600080fd5b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b610a03826107e9565b810181811067ffffffffffffffff82111715610a2257610a216109cb565b5b80604052505050565b6000610a356109b2565b9050610a4182826109fa565b919050565b600080fd5b60048110610a5857600080fd5b50565b600081359050610a6a81610a4b565b92915050565b600080fd5b600080fd5b600067ffffffffffffffff821115610a9557610a946109cb565b5b610a9e826107e9565b9050602081019050919050565b82818337600083830152505050565b6000610acd610ac884610a7a565b610a2b565b905082815260208101848484011115610ae957610ae8610a75565b5b610af4848285610aab565b509392505050565b600082601f830112610b1157610b10610a70565b5b8135610b21848260208601610aba565b91505092915050565b610b3381610833565b8114610b3e57600080fd5b50565b600081359050610b5081610b2a565b92915050565b600060a08284031215610b6c57610b6b6109c6565b5b610b7660a0610a2b565b90506000610b8684828501610a5b565b600083015250602082013567ffffffffffffffff811115610baa57610ba9610a46565b5b610bb684828501610afc565b602083015250604082013567ffffffffffffffff811115610bda57610bd9610a46565b5b610be684828501610afc565b604083015250606082013567ffffffffffffffff811115610c0a57610c09610a46565b5b610c1684828501610afc565b6060830152506080610c2a84828501610b41565b60808301525092915050565b600060208284031215610c4c57610c4b6109bc565b5b600082013567ffffffffffffffff811115610c6a57610c696109c1565b5b610c7684828501610b56565b91505092915050565b600060208284031215610c9557610c946109bc565b5b6000610ca384828501610a5b565b91505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680610d2257607f821691505b60208210811415610d3657610d35610cdb565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000610d7682610833565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415610da957610da8610d3c565b5b60018201905091905056fea2646970667358221220163ef08a1b2ac25b3a794d18e1eb48d0af2aba888408eb9030aa1ef2008614b964736f6c634300080b0033";

type DataVaultConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: DataVaultConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class DataVault__factory extends ContractFactory {
  constructor(...args: DataVaultConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
      DataVault & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): DataVault__factory {
    return super.connect(runner) as DataVault__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): DataVaultInterface {
    return new Interface(_abi) as DataVaultInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): DataVault {
    return new Contract(address, _abi, runner) as unknown as DataVault;
  }
}
