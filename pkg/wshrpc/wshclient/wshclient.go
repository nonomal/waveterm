// Copyright 2024, Command Line Inc.
// SPDX-License-Identifier: Apache-2.0

// generated by cmd/generatewshclient/main-generatewshclient.go

package wshclient

import (
	"github.com/wavetermdev/thenextwave/pkg/wshutil"
	"github.com/wavetermdev/thenextwave/pkg/wshrpc"
	"github.com/wavetermdev/thenextwave/pkg/waveobj"
)

// command "authenticate", wshserver.AuthenticateCommand
func AuthenticateCommand(w *wshutil.WshRpc, data string, opts *wshrpc.WshRpcCommandOpts) error {
    _, err := sendRpcRequestCallHelper[any](w, "authenticate", data, opts)
    return err
}

// command "controllerinput", wshserver.ControllerInputCommand
func ControllerInputCommand(w *wshutil.WshRpc, data wshrpc.CommandBlockInputData, opts *wshrpc.WshRpcCommandOpts) error {
    _, err := sendRpcRequestCallHelper[any](w, "controllerinput", data, opts)
    return err
}

// command "controllerrestart", wshserver.ControllerRestartCommand
func ControllerRestartCommand(w *wshutil.WshRpc, data wshrpc.CommandBlockRestartData, opts *wshrpc.WshRpcCommandOpts) error {
    _, err := sendRpcRequestCallHelper[any](w, "controllerrestart", data, opts)
    return err
}

// command "createblock", wshserver.CreateBlockCommand
func CreateBlockCommand(w *wshutil.WshRpc, data wshrpc.CommandCreateBlockData, opts *wshrpc.WshRpcCommandOpts) (waveobj.ORef, error) {
    resp, err := sendRpcRequestCallHelper[waveobj.ORef](w, "createblock", data, opts)
    return resp, err
}

// command "deleteblock", wshserver.DeleteBlockCommand
func DeleteBlockCommand(w *wshutil.WshRpc, data wshrpc.CommandDeleteBlockData, opts *wshrpc.WshRpcCommandOpts) error {
    _, err := sendRpcRequestCallHelper[any](w, "deleteblock", data, opts)
    return err
}

// command "eventpublish", wshserver.EventPublishCommand
func EventPublishCommand(w *wshutil.WshRpc, data wshrpc.WaveEvent, opts *wshrpc.WshRpcCommandOpts) error {
    _, err := sendRpcRequestCallHelper[any](w, "eventpublish", data, opts)
    return err
}

// command "eventrecv", wshserver.EventRecvCommand
func EventRecvCommand(w *wshutil.WshRpc, data wshrpc.WaveEvent, opts *wshrpc.WshRpcCommandOpts) error {
    _, err := sendRpcRequestCallHelper[any](w, "eventrecv", data, opts)
    return err
}

// command "eventsub", wshserver.EventSubCommand
func EventSubCommand(w *wshutil.WshRpc, data wshrpc.SubscriptionRequest, opts *wshrpc.WshRpcCommandOpts) error {
    _, err := sendRpcRequestCallHelper[any](w, "eventsub", data, opts)
    return err
}

// command "eventunsub", wshserver.EventUnsubCommand
func EventUnsubCommand(w *wshutil.WshRpc, data wshrpc.SubscriptionRequest, opts *wshrpc.WshRpcCommandOpts) error {
    _, err := sendRpcRequestCallHelper[any](w, "eventunsub", data, opts)
    return err
}

// command "eventunsuball", wshserver.EventUnsubAllCommand
func EventUnsubAllCommand(w *wshutil.WshRpc, opts *wshrpc.WshRpcCommandOpts) error {
    _, err := sendRpcRequestCallHelper[any](w, "eventunsuball", nil, opts)
    return err
}

// command "fileappend", wshserver.FileAppendCommand
func FileAppendCommand(w *wshutil.WshRpc, data wshrpc.CommandFileData, opts *wshrpc.WshRpcCommandOpts) error {
    _, err := sendRpcRequestCallHelper[any](w, "fileappend", data, opts)
    return err
}

// command "fileappendijson", wshserver.FileAppendIJsonCommand
func FileAppendIJsonCommand(w *wshutil.WshRpc, data wshrpc.CommandAppendIJsonData, opts *wshrpc.WshRpcCommandOpts) error {
    _, err := sendRpcRequestCallHelper[any](w, "fileappendijson", data, opts)
    return err
}

// command "fileread", wshserver.FileReadCommand
func FileReadCommand(w *wshutil.WshRpc, data wshrpc.CommandFileData, opts *wshrpc.WshRpcCommandOpts) (string, error) {
    resp, err := sendRpcRequestCallHelper[string](w, "fileread", data, opts)
    return resp, err
}

// command "filewrite", wshserver.FileWriteCommand
func FileWriteCommand(w *wshutil.WshRpc, data wshrpc.CommandFileData, opts *wshrpc.WshRpcCommandOpts) error {
    _, err := sendRpcRequestCallHelper[any](w, "filewrite", data, opts)
    return err
}

// command "getmeta", wshserver.GetMetaCommand
func GetMetaCommand(w *wshutil.WshRpc, data wshrpc.CommandGetMetaData, opts *wshrpc.WshRpcCommandOpts) (waveobj.MetaMapType, error) {
    resp, err := sendRpcRequestCallHelper[waveobj.MetaMapType](w, "getmeta", data, opts)
    return resp, err
}

// command "message", wshserver.MessageCommand
func MessageCommand(w *wshutil.WshRpc, data wshrpc.CommandMessageData, opts *wshrpc.WshRpcCommandOpts) error {
    _, err := sendRpcRequestCallHelper[any](w, "message", data, opts)
    return err
}

// command "resolveids", wshserver.ResolveIdsCommand
func ResolveIdsCommand(w *wshutil.WshRpc, data wshrpc.CommandResolveIdsData, opts *wshrpc.WshRpcCommandOpts) (wshrpc.CommandResolveIdsRtnData, error) {
    resp, err := sendRpcRequestCallHelper[wshrpc.CommandResolveIdsRtnData](w, "resolveids", data, opts)
    return resp, err
}

// command "setmeta", wshserver.SetMetaCommand
func SetMetaCommand(w *wshutil.WshRpc, data wshrpc.CommandSetMetaData, opts *wshrpc.WshRpcCommandOpts) error {
    _, err := sendRpcRequestCallHelper[any](w, "setmeta", data, opts)
    return err
}

// command "setview", wshserver.SetViewCommand
func SetViewCommand(w *wshutil.WshRpc, data wshrpc.CommandBlockSetViewData, opts *wshrpc.WshRpcCommandOpts) error {
    _, err := sendRpcRequestCallHelper[any](w, "setview", data, opts)
    return err
}

// command "streamcpudata", wshserver.StreamCpuDataCommand
func StreamCpuDataCommand(w *wshutil.WshRpc, data wshrpc.CpuDataRequest, opts *wshrpc.WshRpcCommandOpts) chan wshrpc.RespOrErrorUnion[wshrpc.CpuDataType] {
    return sendRpcRequestResponseStreamHelper[wshrpc.CpuDataType](w, "streamcpudata", data, opts)
}

// command "streamtest", wshserver.StreamTestCommand
func StreamTestCommand(w *wshutil.WshRpc, opts *wshrpc.WshRpcCommandOpts) chan wshrpc.RespOrErrorUnion[int] {
    return sendRpcRequestResponseStreamHelper[int](w, "streamtest", nil, opts)
}

// command "streamwaveai", wshserver.StreamWaveAiCommand
func StreamWaveAiCommand(w *wshutil.WshRpc, data wshrpc.OpenAiStreamRequest, opts *wshrpc.WshRpcCommandOpts) chan wshrpc.RespOrErrorUnion[wshrpc.OpenAIPacketType] {
    return sendRpcRequestResponseStreamHelper[wshrpc.OpenAIPacketType](w, "streamwaveai", data, opts)
}


