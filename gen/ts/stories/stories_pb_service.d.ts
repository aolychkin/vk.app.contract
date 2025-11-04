// package: stories
// file: stories/stories.proto

import * as stories_stories_pb from "../stories/stories_pb";
import {grpc} from "@improbable-eng/grpc-web";

type StoriesServiceGetUserInfo = {
  readonly methodName: string;
  readonly service: typeof StoriesService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof stories_stories_pb.GetUserInfoRequest;
  readonly responseType: typeof stories_stories_pb.GetUserInfoResponse;
};

type StoriesServiceGetUserBalance = {
  readonly methodName: string;
  readonly service: typeof StoriesService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof stories_stories_pb.GetUserBalanceRequest;
  readonly responseType: typeof stories_stories_pb.GetUserBalanceResponse;
};

type StoriesServicePostUserActivity = {
  readonly methodName: string;
  readonly service: typeof StoriesService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof stories_stories_pb.PostUserActivityRequest;
  readonly responseType: typeof stories_stories_pb.PostUserActivityResponse;
};

export class StoriesService {
  static readonly serviceName: string;
  static readonly GetUserInfo: StoriesServiceGetUserInfo;
  static readonly GetUserBalance: StoriesServiceGetUserBalance;
  static readonly PostUserActivity: StoriesServicePostUserActivity;
}

export type ServiceError = { message: string, code: number; metadata: grpc.Metadata }
export type Status = { details: string, code: number; metadata: grpc.Metadata }

interface UnaryResponse {
  cancel(): void;
}
interface ResponseStream<T> {
  cancel(): void;
  on(type: 'data', handler: (message: T) => void): ResponseStream<T>;
  on(type: 'end', handler: (status?: Status) => void): ResponseStream<T>;
  on(type: 'status', handler: (status: Status) => void): ResponseStream<T>;
}
interface RequestStream<T> {
  write(message: T): RequestStream<T>;
  end(): void;
  cancel(): void;
  on(type: 'end', handler: (status?: Status) => void): RequestStream<T>;
  on(type: 'status', handler: (status: Status) => void): RequestStream<T>;
}
interface BidirectionalStream<ReqT, ResT> {
  write(message: ReqT): BidirectionalStream<ReqT, ResT>;
  end(): void;
  cancel(): void;
  on(type: 'data', handler: (message: ResT) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'end', handler: (status?: Status) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'status', handler: (status: Status) => void): BidirectionalStream<ReqT, ResT>;
}

export class StoriesServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  getUserInfo(
    requestMessage: stories_stories_pb.GetUserInfoRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: stories_stories_pb.GetUserInfoResponse|null) => void
  ): UnaryResponse;
  getUserInfo(
    requestMessage: stories_stories_pb.GetUserInfoRequest,
    callback: (error: ServiceError|null, responseMessage: stories_stories_pb.GetUserInfoResponse|null) => void
  ): UnaryResponse;
  getUserBalance(
    requestMessage: stories_stories_pb.GetUserBalanceRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: stories_stories_pb.GetUserBalanceResponse|null) => void
  ): UnaryResponse;
  getUserBalance(
    requestMessage: stories_stories_pb.GetUserBalanceRequest,
    callback: (error: ServiceError|null, responseMessage: stories_stories_pb.GetUserBalanceResponse|null) => void
  ): UnaryResponse;
  postUserActivity(
    requestMessage: stories_stories_pb.PostUserActivityRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: stories_stories_pb.PostUserActivityResponse|null) => void
  ): UnaryResponse;
  postUserActivity(
    requestMessage: stories_stories_pb.PostUserActivityRequest,
    callback: (error: ServiceError|null, responseMessage: stories_stories_pb.PostUserActivityResponse|null) => void
  ): UnaryResponse;
}

