//
//  CachedImageLoader.h
//  Catalog
//

#import <Foundation/Foundation.h>

@interface CachedImageLoader : NSObject

-(void)loadImage:(NSURL*)url onLoad:(void (^)(UIImage* image, BOOL wasCached))callback;
-(void)precacheImage:(NSURL*)url;
-(void)flush;
-(UIImage*)cachedImageForURL:(NSURL*)url;

@end