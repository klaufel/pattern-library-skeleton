
//
// StyleDictionaryColor.h
//
// Do not edit directly
// Generated on Sat, 04 Apr 2020 14:51:01 GMT
//

#import <UIKit/UIKit.h>


typedef NS_ENUM(NSInteger, StyleDictionaryColorName) {
ColorAlertWarning,
ColorAlertError,
ColorAlertSuccess,
ColorNeutral00,
ColorNeutral05,
ColorNeutral20,
ColorNeutral40,
ColorNeutral80,
ColorPrimaryDark,
ColorPrimaryMain,
ColorPrimaryLight
};

@interface StyleDictionaryColor : NSObject
+ (NSArray *)values;
+ (UIColor *)color:(StyleDictionaryColorName)color;
@end
