// Copyright 2024, Command Line Inc.
// SPDX-License-Identifier: Apache-2.0

// generated by cmd/generate/main-generate.go

declare global {

    // wconfig.AiConfigType
    type AiConfigType = {
        baseurl: string;
        apitoken: string;
        name: string;
        model: string;
        maxtokens: number;
        timeoutms: number;
    };

    // wconfig.AutoUpdateOpts
    type AutoUpdateOpts = {
        enabled: boolean;
        intervalms: number;
    };

    // wstore.Block
    type Block = WaveObj & {
        blockdef: BlockDef;
        runtimeopts?: RuntimeOpts;
        stickers?: StickerType[];
    };

    // blockcontroller.BlockControllerRuntimeStatus
    type BlockControllerRuntimeStatus = {
        blockid: string;
        status: string;
        shellprocstatus?: string;
    };

    // wstore.BlockDef
    type BlockDef = {
        files?: {[key: string]: FileDef};
        meta?: MetaType;
    };

    // wconfig.BlockHeaderOpts
    type BlockHeaderOpts = {
        showblockids: boolean;
    };

    // webcmd.BlockInputWSCommand
    type BlockInputWSCommand = {
        wscommand: "blockinput";
        blockid: string;
        inputdata64: string;
    };

    // wstore.Client
    type Client = WaveObj & {
        windowids: string[];
        tosagreed?: number;
    };

    // wshrpc.CommandAppendIJsonData
    type CommandAppendIJsonData = {
        zoneid: string;
        filename: string;
        data: {[key: string]: any};
    };

    // wshrpc.CommandBlockInputData
    type CommandBlockInputData = {
        blockid: string;
        inputdata64?: string;
        signame?: string;
        termsize?: TermSize;
    };

    // wshrpc.CommandBlockRestartData
    type CommandBlockRestartData = {
        blockid: string;
    };

    // wshrpc.CommandBlockSetViewData
    type CommandBlockSetViewData = {
        blockid: string;
        view: string;
    };

    // wshrpc.CommandCreateBlockData
    type CommandCreateBlockData = {
        tabid: string;
        blockdef: BlockDef;
        rtopts: RuntimeOpts;
    };

    // wshrpc.CommandDeleteBlockData
    type CommandDeleteBlockData = {
        blockid: string;
    };

    // wshrpc.CommandFileData
    type CommandFileData = {
        zoneid: string;
        filename: string;
        data64?: string;
    };

    // wshrpc.CommandGetMetaData
    type CommandGetMetaData = {
        oref: ORef;
    };

    // wshrpc.CommandMessageData
    type CommandMessageData = {
        oref: ORef;
        message: string;
    };

    // wshrpc.CommandResolveIdsData
    type CommandResolveIdsData = {
        ids: string[];
    };

    // wshrpc.CommandResolveIdsRtnData
    type CommandResolveIdsRtnData = {
        resolvedids: {[key: string]: ORef};
    };

    // wshrpc.CommandSetMetaData
    type CommandSetMetaData = {
        oref: ORef;
        meta: MetaType;
    };

    // wshrpc.CpuDataRequest
    type CpuDataRequest = {
        id: string;
    };

    // wshrpc.CpuDataType
    type CpuDataType = {
        time: number;
        value: number;
    };

    // wstore.FileDef
    type FileDef = {
        filetype?: string;
        path?: string;
        url?: string;
        content?: string;
        meta?: {[key: string]: any};
    };

    // fileservice.FileInfo
    type FileInfo = {
        path: string;
        name: string;
        notfound?: boolean;
        size: number;
        mode: number;
        modestr: string;
        modtime: number;
        isdir?: boolean;
        mimetype?: string;
    };

    // filestore.FileOptsType
    type FileOptsType = {
        maxsize?: number;
        circular?: boolean;
        ijson?: boolean;
        ijsonbudget?: number;
    };

    // fileservice.FullFile
    type FullFile = {
        info: FileInfo;
        data64: string;
    };

    // wstore.LayoutNode
    type LayoutNode = WaveObj & {
        node?: any;
        magnifiednodeid?: string;
    };

    // wstore.MetaTSType
    type MetaType = {
        view?: string;
        controller?: string;
        title?: string;
        file?: string;
        url?: string;
        connection?: string;
        icon?: string;
        "icon:color"?: string;
        frame?: boolean;
        "frame:*"?: boolean;
        "frame:bordercolor"?: string;
        "frame:bordercolor:focused"?: string;
        cmd?: string;
        "cmd:*"?: boolean;
        "cmd:interactive"?: boolean;
        "cmd:login"?: boolean;
        "cmd:runonstart"?: boolean;
        "cmd:clearonstart"?: boolean;
        "cmd:clearonrestart"?: boolean;
        "cmd:env"?: {[key: string]: string};
        "cmd:cwd"?: string;
        "cmd:nowsh"?: boolean;
        bg?: string;
        "bg:*"?: boolean;
        "bg:opacity"?: number;
        "bg:blendmode"?: string;
        "term:*"?: boolean;
        "term:fontsize"?: number;
        "term:fontfamily"?: string;
        "term:mode"?: string;
        "term:theme"?: string;
    };

    // tsgenmeta.MethodMeta
    type MethodMeta = {
        Desc: string;
        ArgNames: string[];
        ReturnDesc: string;
    };

    // wconfig.MimeTypeConfigType
    type MimeTypeConfigType = {
        icon: string;
        color: string;
    };

    // waveobj.ORef
    type ORef = string;

    // wshrpc.OpenAIOptsType
    type OpenAIOptsType = {
        model: string;
        apitoken: string;
        baseurl?: string;
        maxtokens?: number;
        maxchoices?: number;
        timeout?: number;
    };

    // wshrpc.OpenAIPacketType
    type OpenAIPacketType = {
        type: string;
        model?: string;
        created?: number;
        finish_reason?: string;
        usage?: OpenAIUsageType;
        index?: number;
        text?: string;
        error?: string;
    };

    // wshrpc.OpenAIPromptMessageType
    type OpenAIPromptMessageType = {
        role: string;
        content: string;
        name?: string;
    };

    // wshrpc.OpenAIUsageType
    type OpenAIUsageType = {
        prompt_tokens?: number;
        completion_tokens?: number;
        total_tokens?: number;
    };

    // wshrpc.OpenAiStreamRequest
    type OpenAiStreamRequest = {
        clientid?: string;
        opts: OpenAIOptsType;
        prompt: OpenAIPromptMessageType[];
    };

    // wstore.Point
    type Point = {
        x: number;
        y: number;
    };

    // wshutil.RpcMessage
    type RpcMessage = {
        command?: string;
        reqid?: string;
        resid?: string;
        timeout?: number;
        cont?: boolean;
        cancel?: boolean;
        error?: string;
        datatype?: string;
        data?: any;
    };

    // wstore.RuntimeOpts
    type RuntimeOpts = {
        termsize?: TermSize;
        winsize?: WinSize;
    };

    // webcmd.SetBlockTermSizeWSCommand
    type SetBlockTermSizeWSCommand = {
        wscommand: "setblocktermsize";
        blockid: string;
        termsize: TermSize;
    };

    // wconfig.SettingsConfigType
    type SettingsConfigType = {
        mimetypes: {[key: string]: MimeTypeConfigType};
        term: TerminalConfigType;
        ai: AiConfigType;
        widgets: WidgetsConfigType[];
        blockheader: BlockHeaderOpts;
        autoupdate: AutoUpdateOpts;
        termthemes: {[key: string]: TermThemeType};
        window: WindowSettingsType;
        defaultmeta?: MetaType;
        presets?: {[key: string]: MetaType};
    };

    // wstore.StickerClickOptsType
    type StickerClickOptsType = {
        sendinput?: string;
        createblock?: BlockDef;
    };

    // wstore.StickerDisplayOptsType
    type StickerDisplayOptsType = {
        icon: string;
        imgsrc: string;
        svgblob?: string;
    };

    // wstore.StickerType
    type StickerType = {
        stickertype: string;
        style: {[key: string]: any};
        clickopts?: StickerClickOptsType;
        display: StickerDisplayOptsType;
    };

    // wshrpc.SubscriptionRequest
    type SubscriptionRequest = {
        event: string;
        scopes?: string[];
        allscopes?: boolean;
    };

    // wstore.Tab
    type Tab = WaveObj & {
        name: string;
        layoutnode: string;
        blockids: string[];
    };

    // shellexec.TermSize
    type TermSize = {
        rows: number;
        cols: number;
    };

    // wconfig.TermThemeType
    type TermThemeType = {
        black: string;
        red: string;
        green: string;
        yellow: string;
        blue: string;
        magenta: string;
        cyan: string;
        white: string;
        brightBlack: string;
        brightRed: string;
        brightGreen: string;
        brightYellow: string;
        brightBlue: string;
        brightMagenta: string;
        brightCyan: string;
        brightWhite: string;
        gray: string;
        cmdtext: string;
        foreground: string;
        selectionBackground: string;
        background: string;
        cursorAccent: string;
    };

    // wconfig.TerminalConfigType
    type TerminalConfigType = {
        fontsize?: number;
        fontfamily?: string;
    };

    // wstore.UIContext
    type UIContext = {
        windowid: string;
        activetabid: string;
    };

    // userinput.UserInputRequest
    type UserInputRequest = {
        requestid: string;
        querytext: string;
        responsetype: string;
        title: string;
        markdown: boolean;
        timeoutms: number;
        checkboxmsg: string;
        publictext: boolean;
    };

    // userinput.UserInputResponse
    type UserInputResponse = {
        type: string;
        requestid: string;
        text?: string;
        confirm?: boolean;
        errormsg?: string;
        checkboxstat?: boolean;
    };

    // vdom.Elem
    type VDomElem = {
        id?: string;
        tag: string;
        props?: {[key: string]: any};
        children?: VDomElem[];
        text?: string;
    };

    // vdom.VDomFuncType
    type VDomFuncType = {
        #func: string;
        #stopPropagation?: boolean;
        #preventDefault?: boolean;
        #keys?: string[];
    };

    // vdom.VDomRefType
    type VDomRefType = {
        #ref: string;
        current: any;
    };

    type WSCommandType = {
        wscommand: string;
    } & ( SetBlockTermSizeWSCommand | BlockInputWSCommand | WSRpcCommand );

    // eventbus.WSEventType
    type WSEventType = {
        eventtype: string;
        oref?: string;
        data: any;
    };

    // eventbus.WSFileEventData
    type WSFileEventData = {
        zoneid: string;
        filename: string;
        fileop: string;
        data64: string;
    };

    // eventbus.WSLayoutActionData
    type WSLayoutActionData = {
        tabid: string;
        actiontype: string;
        blockid: string;
    };

    // webcmd.WSRpcCommand
    type WSRpcCommand = {
        wscommand: "rpc";
        message: RpcMessage;
    };

    // wconfig.WatcherUpdate
    type WatcherUpdate = {
        settings: SettingsConfigType;
        error: string;
    };

    // wshrpc.WaveEvent
    type WaveEvent = {
        event: string;
        scopes?: string[];
        sender?: string;
        data?: any;
    };

    // filestore.WaveFile
    type WaveFile = {
        zoneid: string;
        name: string;
        opts: FileOptsType;
        createdts: number;
        size: number;
        modts: number;
        meta: {[key: string]: any};
    };

    // waveobj.WaveObj
    type WaveObj = {
        otype: string;
        oid: string;
        version: number;
        meta: MetaType;
    };

    // wstore.WaveObjUpdate
    type WaveObjUpdate = {
        updatetype: string;
        otype: string;
        oid: string;
        obj?: WaveObj;
    };

    // wstore.Window
    type WaveWindow = WaveObj & {
        workspaceid: string;
        activetabid: string;
        activeblockid?: string;
        activeblockmap: {[key: string]: string};
        pos: Point;
        winsize: WinSize;
        lastfocusts: number;
    };

    // service.WebCallType
    type WebCallType = {
        service: string;
        method: string;
        uicontext?: UIContext;
        args: any[];
    };

    // service.WebReturnType
    type WebReturnType = {
        success?: boolean;
        error?: string;
        data?: any;
        updates?: WaveObjUpdate[];
    };

    // wconfig.WidgetsConfigType
    type WidgetsConfigType = {
        icon: string;
        color?: string;
        label?: string;
        description?: string;
        blockdef: BlockDef;
    };

    // wstore.WinSize
    type WinSize = {
        width: number;
        height: number;
    };

    // wconfig.WindowSettingsType
    type WindowSettingsType = {
        transparent: boolean;
        blur: boolean;
        opacity: number;
        bgcolor: string;
    };

    // wstore.Workspace
    type Workspace = WaveObj & {
        name: string;
        tabids: string[];
    };

    // wshrpc.WshRpcCommandOpts
    type WshRpcCommandOpts = {
        timeout: number;
        noresponse: boolean;
    };

    // wshrpc.WshServerCommandMeta
    type WshServerCommandMeta = {
        commandtype: string;
    };

}

export {}
