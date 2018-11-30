# react-native-swift-bridge-sample
This is sample app of React-Native, with Swift bridge.

![swiftsample](https://user-images.githubusercontent.com/40135056/49287855-5293bc00-f4e2-11e8-955a-94e00173de33.gif)

Counter.swift

```swift
import Foundation

@objc(Counter)
class Counter: NSObject {
  
  static func requiresMainQueueSetup() -> Bool {
    return false
  }
  
  @objc
  func increment(_ origin: Int, withCallback callback: RCTResponseSenderBlock) -> Void {
    callback([origin + 1])
  }
  
  @objc
  func decrement(_ origin: Int, withResolve resolve: RCTPromiseResolveBlock, withReject reject: RCTPromiseRejectBlock) -> Void{
    
    if(origin <= 0){
      reject("E_COUNT", "You can't decrement any more!!", nil)
      return
    }
    
    resolve(origin - 1)
    
  }
  
}
```
Counter.m
```objectivec
#import <Foundation/Foundation.h>
#import "React/RCTBridgeModule.h"

@interface RCT_EXTERN_MODULE(Counter, NSObject)
RCT_EXTERN_METHOD(increment: (NSInteger)origin withCallback:(RCTResponseSenderBlock)callback)
RCT_EXTERN_METHOD(decrement: (NSInteger)origin withResolve:(RCTPromiseResolveBlock)resolve withReject:(RCTPromiseRejectBlock)reject)
@end

```
