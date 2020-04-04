
//
// StyleDictionaryColor.m
//
// Do not edit directly
// Generated on Sat, 04 Apr 2020 12:33:26 GMT
//

#import "StyleDictionaryColor.h"


@implementation StyleDictionaryColor

+ (UIColor *)color:(StyleDictionaryColorName)colorEnum{
  return [[self values] objectAtIndex:colorEnum];
}

+ (NSArray *)values {
  static NSArray* colorArray;
  static dispatch_once_t onceToken;

  dispatch_once(&onceToken, ^{
    colorArray = @[
[UIColor colorWithRed:1.000f green:0.663f blue:0.051f alpha:1.000f],
[UIColor colorWithRed:0.898f green:0.212f blue:0.227f alpha:1.000f],
[UIColor colorWithRed:0.063f green:0.612f blue:0.259f alpha:1.000f],
[UIColor colorWithRed:1.000f green:1.000f blue:1.000f alpha:1.000f],
[UIColor colorWithRed:0.949f green:0.949f blue:0.949f alpha:1.000f],
[UIColor colorWithRed:0.557f green:0.557f blue:0.596f alpha:1.000f],
[UIColor colorWithRed:0.600f green:0.600f blue:0.600f alpha:1.000f],
[UIColor colorWithRed:0.200f green:0.200f blue:0.200f alpha:1.000f],
[UIColor colorWithRed:0.145f green:0.145f blue:0.145f alpha:1.000f],
[UIColor colorWithRed:0.067f green:0.067f blue:0.067f alpha:1.000f],
[UIColor colorWithRed:0.863f green:0.863f blue:0.863f alpha:1.000f]
    ];
  });

  return colorArray;
}

@end
