import { NativeModules } from 'react-native';
import type { JitsiMeetType } from './types';

const { JitsiMeet } = NativeModules;

export default JitsiMeet as JitsiMeetType;
