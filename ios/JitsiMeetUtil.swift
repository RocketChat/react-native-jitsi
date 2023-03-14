import Foundation
import JitsiMeetSDK

struct JitsiMeetUtil {
  static func buildConferenceOptions(_ options: NSDictionary) -> JitsiMeetConferenceOptions {
    return JitsiMeetConferenceOptions.fromBuilder { (builder) in
      guard let url = options["url"] as? String else {
        fatalError("url must not be empty")
      }
      
      builder.room = url
            
      if let userInfo = options["userInfo"] as? NSDictionary {
        let conferenceUserInfo = JitsiMeetUserInfo()
        
        if let displayName = userInfo["displayName"] as? String {
          conferenceUserInfo.displayName = displayName
        }
        
        if let avatar = userInfo["avatar"] as? String {
          conferenceUserInfo.avatar = URL(string: avatar)
        }
        
        builder.userInfo = conferenceUserInfo
      }

      builder.setFeatureFlag("prejoinpage.enabled", withBoolean: false)
      
    }
  }
}
