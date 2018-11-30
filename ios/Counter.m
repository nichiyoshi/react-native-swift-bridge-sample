//
//  Counter.m
//  SwiftSample
//
//  Created by nichika_yoshida on 2018/11/30.
//  Copyright © 2018 Facebook. All rights reserved.
//

#import <Foundation/Foundation.h>
#import "React/RCTBridgeModule.h"

@interface RCT_EXTERN_MODULE(Counter, NSObject)
RCT_EXTERN_METHOD(increment: (NSInteger)origin withCallback:(RCTResponseSenderBlock)callback)
RCT_EXTERN_METHOD(decrement: (NSInteger)origin withResolve:(RCTPromiseResolveBlock)resolve withReject:(RCTPromiseRejectBlock)reject)
@end
