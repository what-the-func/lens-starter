import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../common";
export declare namespace DataTypes {
    type EIP712SignatureStruct = {
        v: BigNumberish;
        r: BytesLike;
        s: BytesLike;
        deadline: BigNumberish;
    };
    type EIP712SignatureStructOutput = [
        number,
        string,
        string,
        BigNumber
    ] & {
        v: number;
        r: string;
        s: string;
        deadline: BigNumber;
    };
    type CollectWithSigDataStruct = {
        collector: string;
        profileId: BigNumberish;
        pubId: BigNumberish;
        data: BytesLike;
        sig: DataTypes.EIP712SignatureStruct;
    };
    type CollectWithSigDataStructOutput = [
        string,
        BigNumber,
        BigNumber,
        string,
        DataTypes.EIP712SignatureStructOutput
    ] & {
        collector: string;
        profileId: BigNumber;
        pubId: BigNumber;
        data: string;
        sig: DataTypes.EIP712SignatureStructOutput;
    };
    type CommentDataStruct = {
        profileId: BigNumberish;
        contentURI: string;
        profileIdPointed: BigNumberish;
        pubIdPointed: BigNumberish;
        referenceModuleData: BytesLike;
        collectModule: string;
        collectModuleInitData: BytesLike;
        referenceModule: string;
        referenceModuleInitData: BytesLike;
    };
    type CommentDataStructOutput = [
        BigNumber,
        string,
        BigNumber,
        BigNumber,
        string,
        string,
        string,
        string,
        string
    ] & {
        profileId: BigNumber;
        contentURI: string;
        profileIdPointed: BigNumber;
        pubIdPointed: BigNumber;
        referenceModuleData: string;
        collectModule: string;
        collectModuleInitData: string;
        referenceModule: string;
        referenceModuleInitData: string;
    };
    type CommentWithSigDataStruct = {
        profileId: BigNumberish;
        contentURI: string;
        profileIdPointed: BigNumberish;
        pubIdPointed: BigNumberish;
        referenceModuleData: BytesLike;
        collectModule: string;
        collectModuleInitData: BytesLike;
        referenceModule: string;
        referenceModuleInitData: BytesLike;
        sig: DataTypes.EIP712SignatureStruct;
    };
    type CommentWithSigDataStructOutput = [
        BigNumber,
        string,
        BigNumber,
        BigNumber,
        string,
        string,
        string,
        string,
        string,
        DataTypes.EIP712SignatureStructOutput
    ] & {
        profileId: BigNumber;
        contentURI: string;
        profileIdPointed: BigNumber;
        pubIdPointed: BigNumber;
        referenceModuleData: string;
        collectModule: string;
        collectModuleInitData: string;
        referenceModule: string;
        referenceModuleInitData: string;
        sig: DataTypes.EIP712SignatureStructOutput;
    };
    type CreateProfileDataStruct = {
        to: string;
        handle: string;
        imageURI: string;
        followModule: string;
        followModuleInitData: BytesLike;
        followNFTURI: string;
    };
    type CreateProfileDataStructOutput = [
        string,
        string,
        string,
        string,
        string,
        string
    ] & {
        to: string;
        handle: string;
        imageURI: string;
        followModule: string;
        followModuleInitData: string;
        followNFTURI: string;
    };
    type FollowWithSigDataStruct = {
        follower: string;
        profileIds: BigNumberish[];
        datas: BytesLike[];
        sig: DataTypes.EIP712SignatureStruct;
    };
    type FollowWithSigDataStructOutput = [
        string,
        BigNumber[],
        string[],
        DataTypes.EIP712SignatureStructOutput
    ] & {
        follower: string;
        profileIds: BigNumber[];
        datas: string[];
        sig: DataTypes.EIP712SignatureStructOutput;
    };
    type ProfileStructStruct = {
        pubCount: BigNumberish;
        followModule: string;
        followNFT: string;
        handle: string;
        imageURI: string;
        followNFTURI: string;
    };
    type ProfileStructStructOutput = [
        BigNumber,
        string,
        string,
        string,
        string,
        string
    ] & {
        pubCount: BigNumber;
        followModule: string;
        followNFT: string;
        handle: string;
        imageURI: string;
        followNFTURI: string;
    };
    type PublicationStructStruct = {
        profileIdPointed: BigNumberish;
        pubIdPointed: BigNumberish;
        contentURI: string;
        referenceModule: string;
        collectModule: string;
        collectNFT: string;
    };
    type PublicationStructStructOutput = [
        BigNumber,
        BigNumber,
        string,
        string,
        string,
        string
    ] & {
        profileIdPointed: BigNumber;
        pubIdPointed: BigNumber;
        contentURI: string;
        referenceModule: string;
        collectModule: string;
        collectNFT: string;
    };
    type MirrorDataStruct = {
        profileId: BigNumberish;
        profileIdPointed: BigNumberish;
        pubIdPointed: BigNumberish;
        referenceModuleData: BytesLike;
        referenceModule: string;
        referenceModuleInitData: BytesLike;
    };
    type MirrorDataStructOutput = [
        BigNumber,
        BigNumber,
        BigNumber,
        string,
        string,
        string
    ] & {
        profileId: BigNumber;
        profileIdPointed: BigNumber;
        pubIdPointed: BigNumber;
        referenceModuleData: string;
        referenceModule: string;
        referenceModuleInitData: string;
    };
    type MirrorWithSigDataStruct = {
        profileId: BigNumberish;
        profileIdPointed: BigNumberish;
        pubIdPointed: BigNumberish;
        referenceModuleData: BytesLike;
        referenceModule: string;
        referenceModuleInitData: BytesLike;
        sig: DataTypes.EIP712SignatureStruct;
    };
    type MirrorWithSigDataStructOutput = [
        BigNumber,
        BigNumber,
        BigNumber,
        string,
        string,
        string,
        DataTypes.EIP712SignatureStructOutput
    ] & {
        profileId: BigNumber;
        profileIdPointed: BigNumber;
        pubIdPointed: BigNumber;
        referenceModuleData: string;
        referenceModule: string;
        referenceModuleInitData: string;
        sig: DataTypes.EIP712SignatureStructOutput;
    };
    type PostDataStruct = {
        profileId: BigNumberish;
        contentURI: string;
        collectModule: string;
        collectModuleInitData: BytesLike;
        referenceModule: string;
        referenceModuleInitData: BytesLike;
    };
    type PostDataStructOutput = [
        BigNumber,
        string,
        string,
        string,
        string,
        string
    ] & {
        profileId: BigNumber;
        contentURI: string;
        collectModule: string;
        collectModuleInitData: string;
        referenceModule: string;
        referenceModuleInitData: string;
    };
    type PostWithSigDataStruct = {
        profileId: BigNumberish;
        contentURI: string;
        collectModule: string;
        collectModuleInitData: BytesLike;
        referenceModule: string;
        referenceModuleInitData: BytesLike;
        sig: DataTypes.EIP712SignatureStruct;
    };
    type PostWithSigDataStructOutput = [
        BigNumber,
        string,
        string,
        string,
        string,
        string,
        DataTypes.EIP712SignatureStructOutput
    ] & {
        profileId: BigNumber;
        contentURI: string;
        collectModule: string;
        collectModuleInitData: string;
        referenceModule: string;
        referenceModuleInitData: string;
        sig: DataTypes.EIP712SignatureStructOutput;
    };
    type SetDefaultProfileWithSigDataStruct = {
        wallet: string;
        profileId: BigNumberish;
        sig: DataTypes.EIP712SignatureStruct;
    };
    type SetDefaultProfileWithSigDataStructOutput = [
        string,
        BigNumber,
        DataTypes.EIP712SignatureStructOutput
    ] & {
        wallet: string;
        profileId: BigNumber;
        sig: DataTypes.EIP712SignatureStructOutput;
    };
    type SetDispatcherWithSigDataStruct = {
        profileId: BigNumberish;
        dispatcher: string;
        sig: DataTypes.EIP712SignatureStruct;
    };
    type SetDispatcherWithSigDataStructOutput = [
        BigNumber,
        string,
        DataTypes.EIP712SignatureStructOutput
    ] & {
        profileId: BigNumber;
        dispatcher: string;
        sig: DataTypes.EIP712SignatureStructOutput;
    };
    type SetFollowModuleWithSigDataStruct = {
        profileId: BigNumberish;
        followModule: string;
        followModuleInitData: BytesLike;
        sig: DataTypes.EIP712SignatureStruct;
    };
    type SetFollowModuleWithSigDataStructOutput = [
        BigNumber,
        string,
        string,
        DataTypes.EIP712SignatureStructOutput
    ] & {
        profileId: BigNumber;
        followModule: string;
        followModuleInitData: string;
        sig: DataTypes.EIP712SignatureStructOutput;
    };
    type SetFollowNFTURIWithSigDataStruct = {
        profileId: BigNumberish;
        followNFTURI: string;
        sig: DataTypes.EIP712SignatureStruct;
    };
    type SetFollowNFTURIWithSigDataStructOutput = [
        BigNumber,
        string,
        DataTypes.EIP712SignatureStructOutput
    ] & {
        profileId: BigNumber;
        followNFTURI: string;
        sig: DataTypes.EIP712SignatureStructOutput;
    };
    type SetProfileImageURIWithSigDataStruct = {
        profileId: BigNumberish;
        imageURI: string;
        sig: DataTypes.EIP712SignatureStruct;
    };
    type SetProfileImageURIWithSigDataStructOutput = [
        BigNumber,
        string,
        DataTypes.EIP712SignatureStructOutput
    ] & {
        profileId: BigNumber;
        imageURI: string;
        sig: DataTypes.EIP712SignatureStructOutput;
    };
}
export declare namespace IERC721Time {
    type TokenDataStruct = {
        owner: string;
        mintTimestamp: BigNumberish;
    };
    type TokenDataStructOutput = [string, BigNumber] & {
        owner: string;
        mintTimestamp: BigNumber;
    };
}
export interface LensHubInterface extends utils.Interface {
    functions: {
        "approve(address,uint256)": FunctionFragment;
        "balanceOf(address)": FunctionFragment;
        "burn(uint256)": FunctionFragment;
        "burnWithSig(uint256,(uint8,bytes32,bytes32,uint256))": FunctionFragment;
        "collect(uint256,uint256,bytes)": FunctionFragment;
        "collectWithSig((address,uint256,uint256,bytes,(uint8,bytes32,bytes32,uint256)))": FunctionFragment;
        "comment((uint256,string,uint256,uint256,bytes,address,bytes,address,bytes))": FunctionFragment;
        "commentWithSig((uint256,string,uint256,uint256,bytes,address,bytes,address,bytes,(uint8,bytes32,bytes32,uint256)))": FunctionFragment;
        "createProfile((address,string,string,address,bytes,string))": FunctionFragment;
        "defaultProfile(address)": FunctionFragment;
        "emitCollectNFTTransferEvent(uint256,uint256,uint256,address,address)": FunctionFragment;
        "emitFollowNFTTransferEvent(uint256,uint256,address,address)": FunctionFragment;
        "exists(uint256)": FunctionFragment;
        "follow(uint256[],bytes[])": FunctionFragment;
        "followWithSig((address,uint256[],bytes[],(uint8,bytes32,bytes32,uint256)))": FunctionFragment;
        "getApproved(uint256)": FunctionFragment;
        "getCollectModule(uint256,uint256)": FunctionFragment;
        "getCollectNFT(uint256,uint256)": FunctionFragment;
        "getCollectNFTImpl()": FunctionFragment;
        "getContentURI(uint256,uint256)": FunctionFragment;
        "getDispatcher(uint256)": FunctionFragment;
        "getDomainSeparator()": FunctionFragment;
        "getFollowModule(uint256)": FunctionFragment;
        "getFollowNFT(uint256)": FunctionFragment;
        "getFollowNFTImpl()": FunctionFragment;
        "getFollowNFTURI(uint256)": FunctionFragment;
        "getGovernance()": FunctionFragment;
        "getHandle(uint256)": FunctionFragment;
        "getProfile(uint256)": FunctionFragment;
        "getProfileIdByHandle(string)": FunctionFragment;
        "getPub(uint256,uint256)": FunctionFragment;
        "getPubCount(uint256)": FunctionFragment;
        "getPubPointer(uint256,uint256)": FunctionFragment;
        "getPubType(uint256,uint256)": FunctionFragment;
        "getReferenceModule(uint256,uint256)": FunctionFragment;
        "getState()": FunctionFragment;
        "initialize(string,string,address)": FunctionFragment;
        "isApprovedForAll(address,address)": FunctionFragment;
        "isCollectModuleWhitelisted(address)": FunctionFragment;
        "isFollowModuleWhitelisted(address)": FunctionFragment;
        "isProfileCreatorWhitelisted(address)": FunctionFragment;
        "isReferenceModuleWhitelisted(address)": FunctionFragment;
        "mintTimestampOf(uint256)": FunctionFragment;
        "mirror((uint256,uint256,uint256,bytes,address,bytes))": FunctionFragment;
        "mirrorWithSig((uint256,uint256,uint256,bytes,address,bytes,(uint8,bytes32,bytes32,uint256)))": FunctionFragment;
        "name()": FunctionFragment;
        "ownerOf(uint256)": FunctionFragment;
        "permit(address,uint256,(uint8,bytes32,bytes32,uint256))": FunctionFragment;
        "permitForAll(address,address,bool,(uint8,bytes32,bytes32,uint256))": FunctionFragment;
        "post((uint256,string,address,bytes,address,bytes))": FunctionFragment;
        "postWithSig((uint256,string,address,bytes,address,bytes,(uint8,bytes32,bytes32,uint256)))": FunctionFragment;
        "safeTransferFrom(address,address,uint256)": FunctionFragment;
        "safeTransferFrom(address,address,uint256,bytes)": FunctionFragment;
        "setApprovalForAll(address,bool)": FunctionFragment;
        "setDefaultProfile(uint256)": FunctionFragment;
        "setDefaultProfileWithSig((address,uint256,(uint8,bytes32,bytes32,uint256)))": FunctionFragment;
        "setDispatcher(uint256,address)": FunctionFragment;
        "setDispatcherWithSig((uint256,address,(uint8,bytes32,bytes32,uint256)))": FunctionFragment;
        "setEmergencyAdmin(address)": FunctionFragment;
        "setFollowModule(uint256,address,bytes)": FunctionFragment;
        "setFollowModuleWithSig((uint256,address,bytes,(uint8,bytes32,bytes32,uint256)))": FunctionFragment;
        "setFollowNFTURI(uint256,string)": FunctionFragment;
        "setFollowNFTURIWithSig((uint256,string,(uint8,bytes32,bytes32,uint256)))": FunctionFragment;
        "setGovernance(address)": FunctionFragment;
        "setProfileImageURI(uint256,string)": FunctionFragment;
        "setProfileImageURIWithSig((uint256,string,(uint8,bytes32,bytes32,uint256)))": FunctionFragment;
        "setState(uint8)": FunctionFragment;
        "sigNonces(address)": FunctionFragment;
        "supportsInterface(bytes4)": FunctionFragment;
        "symbol()": FunctionFragment;
        "tokenByIndex(uint256)": FunctionFragment;
        "tokenDataOf(uint256)": FunctionFragment;
        "tokenOfOwnerByIndex(address,uint256)": FunctionFragment;
        "tokenURI(uint256)": FunctionFragment;
        "totalSupply()": FunctionFragment;
        "transferFrom(address,address,uint256)": FunctionFragment;
        "whitelistCollectModule(address,bool)": FunctionFragment;
        "whitelistFollowModule(address,bool)": FunctionFragment;
        "whitelistProfileCreator(address,bool)": FunctionFragment;
        "whitelistReferenceModule(address,bool)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "approve" | "balanceOf" | "burn" | "burnWithSig" | "collect" | "collectWithSig" | "comment" | "commentWithSig" | "createProfile" | "defaultProfile" | "emitCollectNFTTransferEvent" | "emitFollowNFTTransferEvent" | "exists" | "follow" | "followWithSig" | "getApproved" | "getCollectModule" | "getCollectNFT" | "getCollectNFTImpl" | "getContentURI" | "getDispatcher" | "getDomainSeparator" | "getFollowModule" | "getFollowNFT" | "getFollowNFTImpl" | "getFollowNFTURI" | "getGovernance" | "getHandle" | "getProfile" | "getProfileIdByHandle" | "getPub" | "getPubCount" | "getPubPointer" | "getPubType" | "getReferenceModule" | "getState" | "initialize" | "isApprovedForAll" | "isCollectModuleWhitelisted" | "isFollowModuleWhitelisted" | "isProfileCreatorWhitelisted" | "isReferenceModuleWhitelisted" | "mintTimestampOf" | "mirror" | "mirrorWithSig" | "name" | "ownerOf" | "permit" | "permitForAll" | "post" | "postWithSig" | "safeTransferFrom(address,address,uint256)" | "safeTransferFrom(address,address,uint256,bytes)" | "setApprovalForAll" | "setDefaultProfile" | "setDefaultProfileWithSig" | "setDispatcher" | "setDispatcherWithSig" | "setEmergencyAdmin" | "setFollowModule" | "setFollowModuleWithSig" | "setFollowNFTURI" | "setFollowNFTURIWithSig" | "setGovernance" | "setProfileImageURI" | "setProfileImageURIWithSig" | "setState" | "sigNonces" | "supportsInterface" | "symbol" | "tokenByIndex" | "tokenDataOf" | "tokenOfOwnerByIndex" | "tokenURI" | "totalSupply" | "transferFrom" | "whitelistCollectModule" | "whitelistFollowModule" | "whitelistProfileCreator" | "whitelistReferenceModule"): FunctionFragment;
    encodeFunctionData(functionFragment: "approve", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "balanceOf", values: [string]): string;
    encodeFunctionData(functionFragment: "burn", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "burnWithSig", values: [BigNumberish, DataTypes.EIP712SignatureStruct]): string;
    encodeFunctionData(functionFragment: "collect", values: [BigNumberish, BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "collectWithSig", values: [DataTypes.CollectWithSigDataStruct]): string;
    encodeFunctionData(functionFragment: "comment", values: [DataTypes.CommentDataStruct]): string;
    encodeFunctionData(functionFragment: "commentWithSig", values: [DataTypes.CommentWithSigDataStruct]): string;
    encodeFunctionData(functionFragment: "createProfile", values: [DataTypes.CreateProfileDataStruct]): string;
    encodeFunctionData(functionFragment: "defaultProfile", values: [string]): string;
    encodeFunctionData(functionFragment: "emitCollectNFTTransferEvent", values: [BigNumberish, BigNumberish, BigNumberish, string, string]): string;
    encodeFunctionData(functionFragment: "emitFollowNFTTransferEvent", values: [BigNumberish, BigNumberish, string, string]): string;
    encodeFunctionData(functionFragment: "exists", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "follow", values: [BigNumberish[], BytesLike[]]): string;
    encodeFunctionData(functionFragment: "followWithSig", values: [DataTypes.FollowWithSigDataStruct]): string;
    encodeFunctionData(functionFragment: "getApproved", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "getCollectModule", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "getCollectNFT", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "getCollectNFTImpl", values?: undefined): string;
    encodeFunctionData(functionFragment: "getContentURI", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "getDispatcher", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "getDomainSeparator", values?: undefined): string;
    encodeFunctionData(functionFragment: "getFollowModule", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "getFollowNFT", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "getFollowNFTImpl", values?: undefined): string;
    encodeFunctionData(functionFragment: "getFollowNFTURI", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "getGovernance", values?: undefined): string;
    encodeFunctionData(functionFragment: "getHandle", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "getProfile", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "getProfileIdByHandle", values: [string]): string;
    encodeFunctionData(functionFragment: "getPub", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "getPubCount", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "getPubPointer", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "getPubType", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "getReferenceModule", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "getState", values?: undefined): string;
    encodeFunctionData(functionFragment: "initialize", values: [string, string, string]): string;
    encodeFunctionData(functionFragment: "isApprovedForAll", values: [string, string]): string;
    encodeFunctionData(functionFragment: "isCollectModuleWhitelisted", values: [string]): string;
    encodeFunctionData(functionFragment: "isFollowModuleWhitelisted", values: [string]): string;
    encodeFunctionData(functionFragment: "isProfileCreatorWhitelisted", values: [string]): string;
    encodeFunctionData(functionFragment: "isReferenceModuleWhitelisted", values: [string]): string;
    encodeFunctionData(functionFragment: "mintTimestampOf", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "mirror", values: [DataTypes.MirrorDataStruct]): string;
    encodeFunctionData(functionFragment: "mirrorWithSig", values: [DataTypes.MirrorWithSigDataStruct]): string;
    encodeFunctionData(functionFragment: "name", values?: undefined): string;
    encodeFunctionData(functionFragment: "ownerOf", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "permit", values: [string, BigNumberish, DataTypes.EIP712SignatureStruct]): string;
    encodeFunctionData(functionFragment: "permitForAll", values: [string, string, boolean, DataTypes.EIP712SignatureStruct]): string;
    encodeFunctionData(functionFragment: "post", values: [DataTypes.PostDataStruct]): string;
    encodeFunctionData(functionFragment: "postWithSig", values: [DataTypes.PostWithSigDataStruct]): string;
    encodeFunctionData(functionFragment: "safeTransferFrom(address,address,uint256)", values: [string, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "safeTransferFrom(address,address,uint256,bytes)", values: [string, string, BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "setApprovalForAll", values: [string, boolean]): string;
    encodeFunctionData(functionFragment: "setDefaultProfile", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "setDefaultProfileWithSig", values: [DataTypes.SetDefaultProfileWithSigDataStruct]): string;
    encodeFunctionData(functionFragment: "setDispatcher", values: [BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "setDispatcherWithSig", values: [DataTypes.SetDispatcherWithSigDataStruct]): string;
    encodeFunctionData(functionFragment: "setEmergencyAdmin", values: [string]): string;
    encodeFunctionData(functionFragment: "setFollowModule", values: [BigNumberish, string, BytesLike]): string;
    encodeFunctionData(functionFragment: "setFollowModuleWithSig", values: [DataTypes.SetFollowModuleWithSigDataStruct]): string;
    encodeFunctionData(functionFragment: "setFollowNFTURI", values: [BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "setFollowNFTURIWithSig", values: [DataTypes.SetFollowNFTURIWithSigDataStruct]): string;
    encodeFunctionData(functionFragment: "setGovernance", values: [string]): string;
    encodeFunctionData(functionFragment: "setProfileImageURI", values: [BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "setProfileImageURIWithSig", values: [DataTypes.SetProfileImageURIWithSigDataStruct]): string;
    encodeFunctionData(functionFragment: "setState", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "sigNonces", values: [string]): string;
    encodeFunctionData(functionFragment: "supportsInterface", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "symbol", values?: undefined): string;
    encodeFunctionData(functionFragment: "tokenByIndex", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "tokenDataOf", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "tokenOfOwnerByIndex", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "tokenURI", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "totalSupply", values?: undefined): string;
    encodeFunctionData(functionFragment: "transferFrom", values: [string, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "whitelistCollectModule", values: [string, boolean]): string;
    encodeFunctionData(functionFragment: "whitelistFollowModule", values: [string, boolean]): string;
    encodeFunctionData(functionFragment: "whitelistProfileCreator", values: [string, boolean]): string;
    encodeFunctionData(functionFragment: "whitelistReferenceModule", values: [string, boolean]): string;
    decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "burn", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "burnWithSig", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "collect", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "collectWithSig", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "comment", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "commentWithSig", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "createProfile", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "defaultProfile", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "emitCollectNFTTransferEvent", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "emitFollowNFTTransferEvent", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "exists", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "follow", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "followWithSig", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getApproved", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getCollectModule", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getCollectNFT", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getCollectNFTImpl", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getContentURI", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getDispatcher", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getDomainSeparator", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getFollowModule", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getFollowNFT", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getFollowNFTImpl", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getFollowNFTURI", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getGovernance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getHandle", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getProfile", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getProfileIdByHandle", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPub", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPubCount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPubPointer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPubType", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getReferenceModule", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getState", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isApprovedForAll", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isCollectModuleWhitelisted", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isFollowModuleWhitelisted", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isProfileCreatorWhitelisted", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isReferenceModuleWhitelisted", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mintTimestampOf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mirror", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mirrorWithSig", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "ownerOf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "permit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "permitForAll", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "post", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "postWithSig", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "safeTransferFrom(address,address,uint256)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "safeTransferFrom(address,address,uint256,bytes)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setApprovalForAll", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setDefaultProfile", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setDefaultProfileWithSig", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setDispatcher", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setDispatcherWithSig", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setEmergencyAdmin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setFollowModule", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setFollowModuleWithSig", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setFollowNFTURI", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setFollowNFTURIWithSig", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setGovernance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setProfileImageURI", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setProfileImageURIWithSig", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setState", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sigNonces", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "supportsInterface", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "symbol", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "tokenByIndex", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "tokenDataOf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "tokenOfOwnerByIndex", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "tokenURI", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalSupply", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferFrom", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "whitelistCollectModule", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "whitelistFollowModule", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "whitelistProfileCreator", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "whitelistReferenceModule", data: BytesLike): Result;
    events: {
        "Approval(address,address,uint256)": EventFragment;
        "ApprovalForAll(address,address,bool)": EventFragment;
        "Transfer(address,address,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "Approval"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ApprovalForAll"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Transfer"): EventFragment;
}
export interface ApprovalEventObject {
    owner: string;
    approved: string;
    tokenId: BigNumber;
}
export declare type ApprovalEvent = TypedEvent<[
    string,
    string,
    BigNumber
], ApprovalEventObject>;
export declare type ApprovalEventFilter = TypedEventFilter<ApprovalEvent>;
export interface ApprovalForAllEventObject {
    owner: string;
    operator: string;
    approved: boolean;
}
export declare type ApprovalForAllEvent = TypedEvent<[
    string,
    string,
    boolean
], ApprovalForAllEventObject>;
export declare type ApprovalForAllEventFilter = TypedEventFilter<ApprovalForAllEvent>;
export interface TransferEventObject {
    from: string;
    to: string;
    tokenId: BigNumber;
}
export declare type TransferEvent = TypedEvent<[
    string,
    string,
    BigNumber
], TransferEventObject>;
export declare type TransferEventFilter = TypedEventFilter<TransferEvent>;
export interface LensHub extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: LensHubInterface;
    queryFilter<TEvent extends TypedEvent>(event: TypedEventFilter<TEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TEvent>>;
    listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
    listeners(eventName?: string): Array<Listener>;
    removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
    removeAllListeners(eventName?: string): this;
    off: OnEvent<this>;
    on: OnEvent<this>;
    once: OnEvent<this>;
    removeListener: OnEvent<this>;
    functions: {
        approve(to: string, tokenId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        balanceOf(owner: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        burn(tokenId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        burnWithSig(tokenId: BigNumberish, sig: DataTypes.EIP712SignatureStruct, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        collect(profileId: BigNumberish, pubId: BigNumberish, data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        collectWithSig(vars: DataTypes.CollectWithSigDataStruct, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        comment(vars: DataTypes.CommentDataStruct, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        commentWithSig(vars: DataTypes.CommentWithSigDataStruct, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        createProfile(vars: DataTypes.CreateProfileDataStruct, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        defaultProfile(wallet: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        emitCollectNFTTransferEvent(profileId: BigNumberish, pubId: BigNumberish, collectNFTId: BigNumberish, from: string, to: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        emitFollowNFTTransferEvent(profileId: BigNumberish, followNFTId: BigNumberish, from: string, to: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        exists(tokenId: BigNumberish, overrides?: CallOverrides): Promise<[boolean]>;
        follow(profileIds: BigNumberish[], datas: BytesLike[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        followWithSig(vars: DataTypes.FollowWithSigDataStruct, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        getApproved(tokenId: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
        getCollectModule(profileId: BigNumberish, pubId: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
        getCollectNFT(profileId: BigNumberish, pubId: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
        getCollectNFTImpl(overrides?: CallOverrides): Promise<[string]>;
        getContentURI(profileId: BigNumberish, pubId: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
        getDispatcher(profileId: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
        getDomainSeparator(overrides?: CallOverrides): Promise<[string]>;
        getFollowModule(profileId: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
        getFollowNFT(profileId: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
        getFollowNFTImpl(overrides?: CallOverrides): Promise<[string]>;
        getFollowNFTURI(profileId: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
        getGovernance(overrides?: CallOverrides): Promise<[string]>;
        getHandle(profileId: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
        getProfile(profileId: BigNumberish, overrides?: CallOverrides): Promise<[DataTypes.ProfileStructStructOutput]>;
        getProfileIdByHandle(handle: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        getPub(profileId: BigNumberish, pubId: BigNumberish, overrides?: CallOverrides): Promise<[DataTypes.PublicationStructStructOutput]>;
        getPubCount(profileId: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        getPubPointer(profileId: BigNumberish, pubId: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber, BigNumber]>;
        getPubType(profileId: BigNumberish, pubId: BigNumberish, overrides?: CallOverrides): Promise<[number]>;
        getReferenceModule(profileId: BigNumberish, pubId: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
        getState(overrides?: CallOverrides): Promise<[number]>;
        initialize(name: string, symbol: string, newGovernance: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        isApprovedForAll(owner: string, operator: string, overrides?: CallOverrides): Promise<[boolean]>;
        isCollectModuleWhitelisted(collectModule: string, overrides?: CallOverrides): Promise<[boolean]>;
        isFollowModuleWhitelisted(followModule: string, overrides?: CallOverrides): Promise<[boolean]>;
        isProfileCreatorWhitelisted(profileCreator: string, overrides?: CallOverrides): Promise<[boolean]>;
        isReferenceModuleWhitelisted(referenceModule: string, overrides?: CallOverrides): Promise<[boolean]>;
        mintTimestampOf(tokenId: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        mirror(vars: DataTypes.MirrorDataStruct, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        mirrorWithSig(vars: DataTypes.MirrorWithSigDataStruct, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        name(overrides?: CallOverrides): Promise<[string]>;
        ownerOf(tokenId: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
        permit(spender: string, tokenId: BigNumberish, sig: DataTypes.EIP712SignatureStruct, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        permitForAll(owner: string, operator: string, approved: boolean, sig: DataTypes.EIP712SignatureStruct, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        post(vars: DataTypes.PostDataStruct, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        postWithSig(vars: DataTypes.PostWithSigDataStruct, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        "safeTransferFrom(address,address,uint256)"(from: string, to: string, tokenId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        "safeTransferFrom(address,address,uint256,bytes)"(from: string, to: string, tokenId: BigNumberish, _data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setApprovalForAll(operator: string, approved: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setDefaultProfile(profileId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setDefaultProfileWithSig(vars: DataTypes.SetDefaultProfileWithSigDataStruct, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setDispatcher(profileId: BigNumberish, dispatcher: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setDispatcherWithSig(vars: DataTypes.SetDispatcherWithSigDataStruct, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setEmergencyAdmin(newEmergencyAdmin: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setFollowModule(profileId: BigNumberish, followModule: string, followModuleInitData: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setFollowModuleWithSig(vars: DataTypes.SetFollowModuleWithSigDataStruct, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setFollowNFTURI(profileId: BigNumberish, followNFTURI: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setFollowNFTURIWithSig(vars: DataTypes.SetFollowNFTURIWithSigDataStruct, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setGovernance(newGovernance: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setProfileImageURI(profileId: BigNumberish, imageURI: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setProfileImageURIWithSig(vars: DataTypes.SetProfileImageURIWithSigDataStruct, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setState(newState: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        sigNonces(arg0: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<[boolean]>;
        symbol(overrides?: CallOverrides): Promise<[string]>;
        tokenByIndex(index: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        tokenDataOf(tokenId: BigNumberish, overrides?: CallOverrides): Promise<[IERC721Time.TokenDataStructOutput]>;
        tokenOfOwnerByIndex(owner: string, index: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        tokenURI(tokenId: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
        totalSupply(overrides?: CallOverrides): Promise<[BigNumber]>;
        transferFrom(from: string, to: string, tokenId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        whitelistCollectModule(collectModule: string, whitelist: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        whitelistFollowModule(followModule: string, whitelist: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        whitelistProfileCreator(profileCreator: string, whitelist: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        whitelistReferenceModule(referenceModule: string, whitelist: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    approve(to: string, tokenId: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    balanceOf(owner: string, overrides?: CallOverrides): Promise<BigNumber>;
    burn(tokenId: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    burnWithSig(tokenId: BigNumberish, sig: DataTypes.EIP712SignatureStruct, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    collect(profileId: BigNumberish, pubId: BigNumberish, data: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    collectWithSig(vars: DataTypes.CollectWithSigDataStruct, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    comment(vars: DataTypes.CommentDataStruct, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    commentWithSig(vars: DataTypes.CommentWithSigDataStruct, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    createProfile(vars: DataTypes.CreateProfileDataStruct, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    defaultProfile(wallet: string, overrides?: CallOverrides): Promise<BigNumber>;
    emitCollectNFTTransferEvent(profileId: BigNumberish, pubId: BigNumberish, collectNFTId: BigNumberish, from: string, to: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    emitFollowNFTTransferEvent(profileId: BigNumberish, followNFTId: BigNumberish, from: string, to: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    exists(tokenId: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
    follow(profileIds: BigNumberish[], datas: BytesLike[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    followWithSig(vars: DataTypes.FollowWithSigDataStruct, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    getApproved(tokenId: BigNumberish, overrides?: CallOverrides): Promise<string>;
    getCollectModule(profileId: BigNumberish, pubId: BigNumberish, overrides?: CallOverrides): Promise<string>;
    getCollectNFT(profileId: BigNumberish, pubId: BigNumberish, overrides?: CallOverrides): Promise<string>;
    getCollectNFTImpl(overrides?: CallOverrides): Promise<string>;
    getContentURI(profileId: BigNumberish, pubId: BigNumberish, overrides?: CallOverrides): Promise<string>;
    getDispatcher(profileId: BigNumberish, overrides?: CallOverrides): Promise<string>;
    getDomainSeparator(overrides?: CallOverrides): Promise<string>;
    getFollowModule(profileId: BigNumberish, overrides?: CallOverrides): Promise<string>;
    getFollowNFT(profileId: BigNumberish, overrides?: CallOverrides): Promise<string>;
    getFollowNFTImpl(overrides?: CallOverrides): Promise<string>;
    getFollowNFTURI(profileId: BigNumberish, overrides?: CallOverrides): Promise<string>;
    getGovernance(overrides?: CallOverrides): Promise<string>;
    getHandle(profileId: BigNumberish, overrides?: CallOverrides): Promise<string>;
    getProfile(profileId: BigNumberish, overrides?: CallOverrides): Promise<DataTypes.ProfileStructStructOutput>;
    getProfileIdByHandle(handle: string, overrides?: CallOverrides): Promise<BigNumber>;
    getPub(profileId: BigNumberish, pubId: BigNumberish, overrides?: CallOverrides): Promise<DataTypes.PublicationStructStructOutput>;
    getPubCount(profileId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    getPubPointer(profileId: BigNumberish, pubId: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber, BigNumber]>;
    getPubType(profileId: BigNumberish, pubId: BigNumberish, overrides?: CallOverrides): Promise<number>;
    getReferenceModule(profileId: BigNumberish, pubId: BigNumberish, overrides?: CallOverrides): Promise<string>;
    getState(overrides?: CallOverrides): Promise<number>;
    initialize(name: string, symbol: string, newGovernance: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    isApprovedForAll(owner: string, operator: string, overrides?: CallOverrides): Promise<boolean>;
    isCollectModuleWhitelisted(collectModule: string, overrides?: CallOverrides): Promise<boolean>;
    isFollowModuleWhitelisted(followModule: string, overrides?: CallOverrides): Promise<boolean>;
    isProfileCreatorWhitelisted(profileCreator: string, overrides?: CallOverrides): Promise<boolean>;
    isReferenceModuleWhitelisted(referenceModule: string, overrides?: CallOverrides): Promise<boolean>;
    mintTimestampOf(tokenId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    mirror(vars: DataTypes.MirrorDataStruct, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    mirrorWithSig(vars: DataTypes.MirrorWithSigDataStruct, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    name(overrides?: CallOverrides): Promise<string>;
    ownerOf(tokenId: BigNumberish, overrides?: CallOverrides): Promise<string>;
    permit(spender: string, tokenId: BigNumberish, sig: DataTypes.EIP712SignatureStruct, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    permitForAll(owner: string, operator: string, approved: boolean, sig: DataTypes.EIP712SignatureStruct, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    post(vars: DataTypes.PostDataStruct, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    postWithSig(vars: DataTypes.PostWithSigDataStruct, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    "safeTransferFrom(address,address,uint256)"(from: string, to: string, tokenId: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    "safeTransferFrom(address,address,uint256,bytes)"(from: string, to: string, tokenId: BigNumberish, _data: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setApprovalForAll(operator: string, approved: boolean, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setDefaultProfile(profileId: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setDefaultProfileWithSig(vars: DataTypes.SetDefaultProfileWithSigDataStruct, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setDispatcher(profileId: BigNumberish, dispatcher: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setDispatcherWithSig(vars: DataTypes.SetDispatcherWithSigDataStruct, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setEmergencyAdmin(newEmergencyAdmin: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setFollowModule(profileId: BigNumberish, followModule: string, followModuleInitData: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setFollowModuleWithSig(vars: DataTypes.SetFollowModuleWithSigDataStruct, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setFollowNFTURI(profileId: BigNumberish, followNFTURI: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setFollowNFTURIWithSig(vars: DataTypes.SetFollowNFTURIWithSigDataStruct, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setGovernance(newGovernance: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setProfileImageURI(profileId: BigNumberish, imageURI: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setProfileImageURIWithSig(vars: DataTypes.SetProfileImageURIWithSigDataStruct, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setState(newState: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    sigNonces(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
    supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    symbol(overrides?: CallOverrides): Promise<string>;
    tokenByIndex(index: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    tokenDataOf(tokenId: BigNumberish, overrides?: CallOverrides): Promise<IERC721Time.TokenDataStructOutput>;
    tokenOfOwnerByIndex(owner: string, index: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    tokenURI(tokenId: BigNumberish, overrides?: CallOverrides): Promise<string>;
    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
    transferFrom(from: string, to: string, tokenId: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    whitelistCollectModule(collectModule: string, whitelist: boolean, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    whitelistFollowModule(followModule: string, whitelist: boolean, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    whitelistProfileCreator(profileCreator: string, whitelist: boolean, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    whitelistReferenceModule(referenceModule: string, whitelist: boolean, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        approve(to: string, tokenId: BigNumberish, overrides?: CallOverrides): Promise<void>;
        balanceOf(owner: string, overrides?: CallOverrides): Promise<BigNumber>;
        burn(tokenId: BigNumberish, overrides?: CallOverrides): Promise<void>;
        burnWithSig(tokenId: BigNumberish, sig: DataTypes.EIP712SignatureStruct, overrides?: CallOverrides): Promise<void>;
        collect(profileId: BigNumberish, pubId: BigNumberish, data: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        collectWithSig(vars: DataTypes.CollectWithSigDataStruct, overrides?: CallOverrides): Promise<BigNumber>;
        comment(vars: DataTypes.CommentDataStruct, overrides?: CallOverrides): Promise<BigNumber>;
        commentWithSig(vars: DataTypes.CommentWithSigDataStruct, overrides?: CallOverrides): Promise<BigNumber>;
        createProfile(vars: DataTypes.CreateProfileDataStruct, overrides?: CallOverrides): Promise<BigNumber>;
        defaultProfile(wallet: string, overrides?: CallOverrides): Promise<BigNumber>;
        emitCollectNFTTransferEvent(profileId: BigNumberish, pubId: BigNumberish, collectNFTId: BigNumberish, from: string, to: string, overrides?: CallOverrides): Promise<void>;
        emitFollowNFTTransferEvent(profileId: BigNumberish, followNFTId: BigNumberish, from: string, to: string, overrides?: CallOverrides): Promise<void>;
        exists(tokenId: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
        follow(profileIds: BigNumberish[], datas: BytesLike[], overrides?: CallOverrides): Promise<BigNumber[]>;
        followWithSig(vars: DataTypes.FollowWithSigDataStruct, overrides?: CallOverrides): Promise<BigNumber[]>;
        getApproved(tokenId: BigNumberish, overrides?: CallOverrides): Promise<string>;
        getCollectModule(profileId: BigNumberish, pubId: BigNumberish, overrides?: CallOverrides): Promise<string>;
        getCollectNFT(profileId: BigNumberish, pubId: BigNumberish, overrides?: CallOverrides): Promise<string>;
        getCollectNFTImpl(overrides?: CallOverrides): Promise<string>;
        getContentURI(profileId: BigNumberish, pubId: BigNumberish, overrides?: CallOverrides): Promise<string>;
        getDispatcher(profileId: BigNumberish, overrides?: CallOverrides): Promise<string>;
        getDomainSeparator(overrides?: CallOverrides): Promise<string>;
        getFollowModule(profileId: BigNumberish, overrides?: CallOverrides): Promise<string>;
        getFollowNFT(profileId: BigNumberish, overrides?: CallOverrides): Promise<string>;
        getFollowNFTImpl(overrides?: CallOverrides): Promise<string>;
        getFollowNFTURI(profileId: BigNumberish, overrides?: CallOverrides): Promise<string>;
        getGovernance(overrides?: CallOverrides): Promise<string>;
        getHandle(profileId: BigNumberish, overrides?: CallOverrides): Promise<string>;
        getProfile(profileId: BigNumberish, overrides?: CallOverrides): Promise<DataTypes.ProfileStructStructOutput>;
        getProfileIdByHandle(handle: string, overrides?: CallOverrides): Promise<BigNumber>;
        getPub(profileId: BigNumberish, pubId: BigNumberish, overrides?: CallOverrides): Promise<DataTypes.PublicationStructStructOutput>;
        getPubCount(profileId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getPubPointer(profileId: BigNumberish, pubId: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber, BigNumber]>;
        getPubType(profileId: BigNumberish, pubId: BigNumberish, overrides?: CallOverrides): Promise<number>;
        getReferenceModule(profileId: BigNumberish, pubId: BigNumberish, overrides?: CallOverrides): Promise<string>;
        getState(overrides?: CallOverrides): Promise<number>;
        initialize(name: string, symbol: string, newGovernance: string, overrides?: CallOverrides): Promise<void>;
        isApprovedForAll(owner: string, operator: string, overrides?: CallOverrides): Promise<boolean>;
        isCollectModuleWhitelisted(collectModule: string, overrides?: CallOverrides): Promise<boolean>;
        isFollowModuleWhitelisted(followModule: string, overrides?: CallOverrides): Promise<boolean>;
        isProfileCreatorWhitelisted(profileCreator: string, overrides?: CallOverrides): Promise<boolean>;
        isReferenceModuleWhitelisted(referenceModule: string, overrides?: CallOverrides): Promise<boolean>;
        mintTimestampOf(tokenId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        mirror(vars: DataTypes.MirrorDataStruct, overrides?: CallOverrides): Promise<BigNumber>;
        mirrorWithSig(vars: DataTypes.MirrorWithSigDataStruct, overrides?: CallOverrides): Promise<BigNumber>;
        name(overrides?: CallOverrides): Promise<string>;
        ownerOf(tokenId: BigNumberish, overrides?: CallOverrides): Promise<string>;
        permit(spender: string, tokenId: BigNumberish, sig: DataTypes.EIP712SignatureStruct, overrides?: CallOverrides): Promise<void>;
        permitForAll(owner: string, operator: string, approved: boolean, sig: DataTypes.EIP712SignatureStruct, overrides?: CallOverrides): Promise<void>;
        post(vars: DataTypes.PostDataStruct, overrides?: CallOverrides): Promise<BigNumber>;
        postWithSig(vars: DataTypes.PostWithSigDataStruct, overrides?: CallOverrides): Promise<BigNumber>;
        "safeTransferFrom(address,address,uint256)"(from: string, to: string, tokenId: BigNumberish, overrides?: CallOverrides): Promise<void>;
        "safeTransferFrom(address,address,uint256,bytes)"(from: string, to: string, tokenId: BigNumberish, _data: BytesLike, overrides?: CallOverrides): Promise<void>;
        setApprovalForAll(operator: string, approved: boolean, overrides?: CallOverrides): Promise<void>;
        setDefaultProfile(profileId: BigNumberish, overrides?: CallOverrides): Promise<void>;
        setDefaultProfileWithSig(vars: DataTypes.SetDefaultProfileWithSigDataStruct, overrides?: CallOverrides): Promise<void>;
        setDispatcher(profileId: BigNumberish, dispatcher: string, overrides?: CallOverrides): Promise<void>;
        setDispatcherWithSig(vars: DataTypes.SetDispatcherWithSigDataStruct, overrides?: CallOverrides): Promise<void>;
        setEmergencyAdmin(newEmergencyAdmin: string, overrides?: CallOverrides): Promise<void>;
        setFollowModule(profileId: BigNumberish, followModule: string, followModuleInitData: BytesLike, overrides?: CallOverrides): Promise<void>;
        setFollowModuleWithSig(vars: DataTypes.SetFollowModuleWithSigDataStruct, overrides?: CallOverrides): Promise<void>;
        setFollowNFTURI(profileId: BigNumberish, followNFTURI: string, overrides?: CallOverrides): Promise<void>;
        setFollowNFTURIWithSig(vars: DataTypes.SetFollowNFTURIWithSigDataStruct, overrides?: CallOverrides): Promise<void>;
        setGovernance(newGovernance: string, overrides?: CallOverrides): Promise<void>;
        setProfileImageURI(profileId: BigNumberish, imageURI: string, overrides?: CallOverrides): Promise<void>;
        setProfileImageURIWithSig(vars: DataTypes.SetProfileImageURIWithSigDataStruct, overrides?: CallOverrides): Promise<void>;
        setState(newState: BigNumberish, overrides?: CallOverrides): Promise<void>;
        sigNonces(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<boolean>;
        symbol(overrides?: CallOverrides): Promise<string>;
        tokenByIndex(index: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        tokenDataOf(tokenId: BigNumberish, overrides?: CallOverrides): Promise<IERC721Time.TokenDataStructOutput>;
        tokenOfOwnerByIndex(owner: string, index: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        tokenURI(tokenId: BigNumberish, overrides?: CallOverrides): Promise<string>;
        totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
        transferFrom(from: string, to: string, tokenId: BigNumberish, overrides?: CallOverrides): Promise<void>;
        whitelistCollectModule(collectModule: string, whitelist: boolean, overrides?: CallOverrides): Promise<void>;
        whitelistFollowModule(followModule: string, whitelist: boolean, overrides?: CallOverrides): Promise<void>;
        whitelistProfileCreator(profileCreator: string, whitelist: boolean, overrides?: CallOverrides): Promise<void>;
        whitelistReferenceModule(referenceModule: string, whitelist: boolean, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "Approval(address,address,uint256)"(owner?: string | null, approved?: string | null, tokenId?: BigNumberish | null): ApprovalEventFilter;
        Approval(owner?: string | null, approved?: string | null, tokenId?: BigNumberish | null): ApprovalEventFilter;
        "ApprovalForAll(address,address,bool)"(owner?: string | null, operator?: string | null, approved?: null): ApprovalForAllEventFilter;
        ApprovalForAll(owner?: string | null, operator?: string | null, approved?: null): ApprovalForAllEventFilter;
        "Transfer(address,address,uint256)"(from?: string | null, to?: string | null, tokenId?: BigNumberish | null): TransferEventFilter;
        Transfer(from?: string | null, to?: string | null, tokenId?: BigNumberish | null): TransferEventFilter;
    };
    estimateGas: {
        approve(to: string, tokenId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        balanceOf(owner: string, overrides?: CallOverrides): Promise<BigNumber>;
        burn(tokenId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        burnWithSig(tokenId: BigNumberish, sig: DataTypes.EIP712SignatureStruct, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        collect(profileId: BigNumberish, pubId: BigNumberish, data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        collectWithSig(vars: DataTypes.CollectWithSigDataStruct, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        comment(vars: DataTypes.CommentDataStruct, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        commentWithSig(vars: DataTypes.CommentWithSigDataStruct, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        createProfile(vars: DataTypes.CreateProfileDataStruct, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        defaultProfile(wallet: string, overrides?: CallOverrides): Promise<BigNumber>;
        emitCollectNFTTransferEvent(profileId: BigNumberish, pubId: BigNumberish, collectNFTId: BigNumberish, from: string, to: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        emitFollowNFTTransferEvent(profileId: BigNumberish, followNFTId: BigNumberish, from: string, to: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        exists(tokenId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        follow(profileIds: BigNumberish[], datas: BytesLike[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        followWithSig(vars: DataTypes.FollowWithSigDataStruct, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        getApproved(tokenId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getCollectModule(profileId: BigNumberish, pubId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getCollectNFT(profileId: BigNumberish, pubId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getCollectNFTImpl(overrides?: CallOverrides): Promise<BigNumber>;
        getContentURI(profileId: BigNumberish, pubId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getDispatcher(profileId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getDomainSeparator(overrides?: CallOverrides): Promise<BigNumber>;
        getFollowModule(profileId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getFollowNFT(profileId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getFollowNFTImpl(overrides?: CallOverrides): Promise<BigNumber>;
        getFollowNFTURI(profileId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getGovernance(overrides?: CallOverrides): Promise<BigNumber>;
        getHandle(profileId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getProfile(profileId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getProfileIdByHandle(handle: string, overrides?: CallOverrides): Promise<BigNumber>;
        getPub(profileId: BigNumberish, pubId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getPubCount(profileId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getPubPointer(profileId: BigNumberish, pubId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getPubType(profileId: BigNumberish, pubId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getReferenceModule(profileId: BigNumberish, pubId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getState(overrides?: CallOverrides): Promise<BigNumber>;
        initialize(name: string, symbol: string, newGovernance: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        isApprovedForAll(owner: string, operator: string, overrides?: CallOverrides): Promise<BigNumber>;
        isCollectModuleWhitelisted(collectModule: string, overrides?: CallOverrides): Promise<BigNumber>;
        isFollowModuleWhitelisted(followModule: string, overrides?: CallOverrides): Promise<BigNumber>;
        isProfileCreatorWhitelisted(profileCreator: string, overrides?: CallOverrides): Promise<BigNumber>;
        isReferenceModuleWhitelisted(referenceModule: string, overrides?: CallOverrides): Promise<BigNumber>;
        mintTimestampOf(tokenId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        mirror(vars: DataTypes.MirrorDataStruct, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        mirrorWithSig(vars: DataTypes.MirrorWithSigDataStruct, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        name(overrides?: CallOverrides): Promise<BigNumber>;
        ownerOf(tokenId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        permit(spender: string, tokenId: BigNumberish, sig: DataTypes.EIP712SignatureStruct, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        permitForAll(owner: string, operator: string, approved: boolean, sig: DataTypes.EIP712SignatureStruct, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        post(vars: DataTypes.PostDataStruct, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        postWithSig(vars: DataTypes.PostWithSigDataStruct, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        "safeTransferFrom(address,address,uint256)"(from: string, to: string, tokenId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        "safeTransferFrom(address,address,uint256,bytes)"(from: string, to: string, tokenId: BigNumberish, _data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setApprovalForAll(operator: string, approved: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setDefaultProfile(profileId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setDefaultProfileWithSig(vars: DataTypes.SetDefaultProfileWithSigDataStruct, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setDispatcher(profileId: BigNumberish, dispatcher: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setDispatcherWithSig(vars: DataTypes.SetDispatcherWithSigDataStruct, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setEmergencyAdmin(newEmergencyAdmin: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setFollowModule(profileId: BigNumberish, followModule: string, followModuleInitData: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setFollowModuleWithSig(vars: DataTypes.SetFollowModuleWithSigDataStruct, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setFollowNFTURI(profileId: BigNumberish, followNFTURI: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setFollowNFTURIWithSig(vars: DataTypes.SetFollowNFTURIWithSigDataStruct, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setGovernance(newGovernance: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setProfileImageURI(profileId: BigNumberish, imageURI: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setProfileImageURIWithSig(vars: DataTypes.SetProfileImageURIWithSigDataStruct, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setState(newState: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        sigNonces(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        symbol(overrides?: CallOverrides): Promise<BigNumber>;
        tokenByIndex(index: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        tokenDataOf(tokenId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        tokenOfOwnerByIndex(owner: string, index: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        tokenURI(tokenId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
        transferFrom(from: string, to: string, tokenId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        whitelistCollectModule(collectModule: string, whitelist: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        whitelistFollowModule(followModule: string, whitelist: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        whitelistProfileCreator(profileCreator: string, whitelist: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        whitelistReferenceModule(referenceModule: string, whitelist: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        approve(to: string, tokenId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        balanceOf(owner: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        burn(tokenId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        burnWithSig(tokenId: BigNumberish, sig: DataTypes.EIP712SignatureStruct, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        collect(profileId: BigNumberish, pubId: BigNumberish, data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        collectWithSig(vars: DataTypes.CollectWithSigDataStruct, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        comment(vars: DataTypes.CommentDataStruct, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        commentWithSig(vars: DataTypes.CommentWithSigDataStruct, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        createProfile(vars: DataTypes.CreateProfileDataStruct, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        defaultProfile(wallet: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        emitCollectNFTTransferEvent(profileId: BigNumberish, pubId: BigNumberish, collectNFTId: BigNumberish, from: string, to: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        emitFollowNFTTransferEvent(profileId: BigNumberish, followNFTId: BigNumberish, from: string, to: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        exists(tokenId: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        follow(profileIds: BigNumberish[], datas: BytesLike[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        followWithSig(vars: DataTypes.FollowWithSigDataStruct, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        getApproved(tokenId: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getCollectModule(profileId: BigNumberish, pubId: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getCollectNFT(profileId: BigNumberish, pubId: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getCollectNFTImpl(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getContentURI(profileId: BigNumberish, pubId: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getDispatcher(profileId: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getDomainSeparator(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getFollowModule(profileId: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getFollowNFT(profileId: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getFollowNFTImpl(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getFollowNFTURI(profileId: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getGovernance(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getHandle(profileId: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getProfile(profileId: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getProfileIdByHandle(handle: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getPub(profileId: BigNumberish, pubId: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getPubCount(profileId: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getPubPointer(profileId: BigNumberish, pubId: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getPubType(profileId: BigNumberish, pubId: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getReferenceModule(profileId: BigNumberish, pubId: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getState(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        initialize(name: string, symbol: string, newGovernance: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        isApprovedForAll(owner: string, operator: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isCollectModuleWhitelisted(collectModule: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isFollowModuleWhitelisted(followModule: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isProfileCreatorWhitelisted(profileCreator: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isReferenceModuleWhitelisted(referenceModule: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        mintTimestampOf(tokenId: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        mirror(vars: DataTypes.MirrorDataStruct, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        mirrorWithSig(vars: DataTypes.MirrorWithSigDataStruct, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        name(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        ownerOf(tokenId: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        permit(spender: string, tokenId: BigNumberish, sig: DataTypes.EIP712SignatureStruct, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        permitForAll(owner: string, operator: string, approved: boolean, sig: DataTypes.EIP712SignatureStruct, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        post(vars: DataTypes.PostDataStruct, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        postWithSig(vars: DataTypes.PostWithSigDataStruct, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        "safeTransferFrom(address,address,uint256)"(from: string, to: string, tokenId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        "safeTransferFrom(address,address,uint256,bytes)"(from: string, to: string, tokenId: BigNumberish, _data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setApprovalForAll(operator: string, approved: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setDefaultProfile(profileId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setDefaultProfileWithSig(vars: DataTypes.SetDefaultProfileWithSigDataStruct, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setDispatcher(profileId: BigNumberish, dispatcher: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setDispatcherWithSig(vars: DataTypes.SetDispatcherWithSigDataStruct, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setEmergencyAdmin(newEmergencyAdmin: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setFollowModule(profileId: BigNumberish, followModule: string, followModuleInitData: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setFollowModuleWithSig(vars: DataTypes.SetFollowModuleWithSigDataStruct, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setFollowNFTURI(profileId: BigNumberish, followNFTURI: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setFollowNFTURIWithSig(vars: DataTypes.SetFollowNFTURIWithSigDataStruct, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setGovernance(newGovernance: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setProfileImageURI(profileId: BigNumberish, imageURI: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setProfileImageURIWithSig(vars: DataTypes.SetProfileImageURIWithSigDataStruct, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setState(newState: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        sigNonces(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        symbol(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        tokenByIndex(index: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        tokenDataOf(tokenId: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        tokenOfOwnerByIndex(owner: string, index: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        tokenURI(tokenId: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        transferFrom(from: string, to: string, tokenId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        whitelistCollectModule(collectModule: string, whitelist: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        whitelistFollowModule(followModule: string, whitelist: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        whitelistProfileCreator(profileCreator: string, whitelist: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        whitelistReferenceModule(referenceModule: string, whitelist: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
