<view class="container">
    <view class="finish-view">
        <scroll-view class="finish-scroll" scroll-x="true">
            <view class="scroll-frame">
                <block qq:for="{{convertUrls}}" qq:key="*this">
                    <view class="item">
                        <image src="{{item}}"></image>
                    </view>
                </block>
            </view>
        </scroll-view>
    </view>
    <view class="control">
        <love-button openType="share">分享</love-button>
    </view>
</view>