// package: action
// file: actions/action.proto

var actions_action_pb = require("../actions/action_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var ActionService = (function () {
  function ActionService() {}
  ActionService.serviceName = "action.ActionService";
  return ActionService;
}());

ActionService.GetActionsByBoard = {
  methodName: "GetActionsByBoard",
  service: ActionService,
  requestStream: false,
  responseStream: false,
  requestType: actions_action_pb.GetActionsByBoardRequest,
  responseType: actions_action_pb.GetActionsByBoardResponse
};

ActionService.ReorderActionsOnBoard = {
  methodName: "ReorderActionsOnBoard",
  service: ActionService,
  requestStream: false,
  responseStream: false,
  requestType: actions_action_pb.ReorderActionsOnBoardRequest,
  responseType: actions_action_pb.ReorderActionsOnBoardResponse
};

exports.ActionService = ActionService;

function ActionServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

ActionServiceClient.prototype.getActionsByBoard = function getActionsByBoard(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ActionService.GetActionsByBoard, {
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

ActionServiceClient.prototype.reorderActionsOnBoard = function reorderActionsOnBoard(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ActionService.ReorderActionsOnBoard, {
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

exports.ActionServiceClient = ActionServiceClient;

