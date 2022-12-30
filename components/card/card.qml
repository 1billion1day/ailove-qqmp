<view class="card-group">
    <view qq:if="{{title!==''}}" class="title">
        <view class="hint"></view>
        {{title}}
        <view class="subtitle">{{subtitle}}</view>
    </view>
    <slot></slot>
</view>