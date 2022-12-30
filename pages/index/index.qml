<view class="container">
    <view class="avatar-upload">
        <view class="avatar-upload-button" bind:tap="bindChooseImageTap"
              style='background-image:url("{{avatarUrl? avatarUrl : "https://iph.href.lu/600x800?text=点击上传人像照片"}}")'>
        </view>
    </view>
    <card class="card">
        <style-selector-group styleList="{{styleList}}" onSelected="{{onSelected}}"/>
    </card>
    <view class="padding-footer"></view>
    <view class="generator">
        <button>制作头像</button>
    </view>
</view>
