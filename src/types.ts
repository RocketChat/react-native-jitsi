export interface JitsiUserInfo {
  displayName: string;
  avatar: string;
}

export interface JitsiConferenceOptions {
  serverUrl: string;
  userInfo: JitsiUserInfo;
}

export interface JitsiType {
  launchJitsi: (options: JitsiConferenceOptions) => Promise<void>;
}
