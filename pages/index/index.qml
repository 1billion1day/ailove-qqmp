<view class="container">
    <view class="avatar-upload">
        <view class="avatar-upload-button" bind:tap="bindChooseImageTap">
            <view style='background-image:url("{{avatarUrl? avatarUrl : "https://iph.href.lu/400x400?text=点击上传人像照片"}}")'>
<!--            <view >-->
<!--                <image src='{{avatarUrl? avatarUrl : "https://iph.href.lu/400x400?text=点击上传人像照片"}}'></image>-->
            </view>
        </view>
    </view>
    <card class="card" title="风格">
        <style-selector-group styleList="{{styleList}}"></style-selector-group>
    </card>
    <view class="padding-footer"></view>
    <view class="generator">
        <button>制作头像</button>
    </view>
</view>
