import { NativeModules } from 'react-native';
import type { JitsiType } from './types';

const { JitsiMeet } = NativeModules;

export default JitsiMeet as JitsiType;
