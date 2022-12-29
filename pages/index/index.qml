<view class="container">
    <view class="avatar-upload">
        <view class="avatar-upload-button" bindtap="bindChooseImageTap">
            <view style='background-image:url("{{avatarUrl? avatarUrl : "https://iph.href.lu/400x400?text=点击上传人像照片"}}")'></view>
        </view>
    </view>
    <view class="style-card-group">
        <view class="style-title">
            <view class="style-hint"></view>
            样式
        </view>
        <view class="style-selector-view">
            <scroll-view class="style-selector" scroll-x="true">
                <view class="style-selector-inner">
                    <block qq:for="{{styleList}}" qq:for-index="idx">
                        <style-selector-item url="{{item.url}}" name="{{item.name}}" selected="true"></style-selector-item>
                    </block>
                </view>
            </scroll-view>
        </view>
    </view>
    <view class="number-card-group">
        <view class="style-title">
            <view class="style-hint"></view>
            生成数量
            <view class="style-subtitle">一次生成多张图片，超高性价比</view>
        </view>
<!--        <view class="number-group">-->
<!--            <button class="number-button" hover-class="number-button-hover">1</button>-->
<!--            <button class="number-button">4</button>-->
<!--            <button class="number-button">8</button>-->
<!--            <button class="number-button">16</button>-->
<!--        </view>-->
    </view>
    <view class="padding-footer"></view>
    <view class="generator">
        <button >制作头像</button>
    </view>
</view>
