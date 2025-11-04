// package: stories
// file: stories/stories.proto

var stories_stories_pb = require("../stories/stories_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var StoriesService = (function () {
  function StoriesService() {}
  StoriesService.serviceName = "stories.StoriesService";
  return StoriesService;
}());

StoriesService.GetUserInfo = {
  methodName: "GetUserInfo",
  service: StoriesService,
  requestStream: false,
  responseStream: false,
  requestType: stories_stories_pb.GetUserInfoRequest,
  responseType: stories_stories_pb.GetUserInfoResponse
};

StoriesService.GetUserBalance = {
  methodName: "GetUserBalance",
  service: StoriesService,
  requestStream: false,
  responseStream: false,
  requestType: stories_stories_pb.GetUserBalanceRequest,
  responseType: stories_stories_pb.GetUserBalanceResponse
};

StoriesService.PostUserActivity = {
  methodName: "PostUserActivity",
  service: StoriesService,
  requestStream: false,
  responseStream: false,
  requestType: stories_stories_pb.PostUserActivityRequest,
  responseType: stories_stories_pb.PostUserActivityResponse
};

exports.StoriesService = StoriesService;

function StoriesServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

StoriesServiceClient.prototype.getUserInfo = function getUserInfo(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(StoriesService.GetUserInfo, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

StoriesServiceClient.prototype.getUserBalance = function getUserBalance(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(StoriesService.GetUserBalance, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

StoriesServiceClient.prototype.postUserActivity = function postUserActivity(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(StoriesService.PostUserActivity, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

exports.StoriesServiceClient = StoriesServiceClient;

