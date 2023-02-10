export interface JitsiMeetUserInfo {
  displayName: string;
  avatar: string;
}

export interface JitsiMeetConferenceOptions {
  url: string;
  userInfo: JitsiMeetUserInfo;
}

export interface JitsiMeetType {
  launchJitsiMeet: (options: JitsiMeetConferenceOptions) => Promise<void>;
}
