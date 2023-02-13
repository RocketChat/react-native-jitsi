export interface JitsiMeetUserInfo {
  displayName: string;
  avatar: string;
}

export interface JitsiMeetConferenceOptions {
  url: string;
  userInfo: JitsiMeetUserInfo;
}

export interface JitsiMeetType {
  launch: (options: JitsiMeetConferenceOptions) => Promise<void>;
}
