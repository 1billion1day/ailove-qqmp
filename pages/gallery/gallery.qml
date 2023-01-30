<view class="container">
    <view class="gallery-view">
        <scroll-view scroll-y="true">
            <view class="scroll-view">
                <view class="scroll-column">
                    <block qq:for="{{imgUrls}}" qq:key="id" qq:for-index="idx">
                        <image class="img" qq:if="{{idx%2===0}}" mode="widthFix" src="{{item.url}}"></image>
                    </block>
                </view>
                <view class="scroll-column">
                    <block qq:for="{{imgUrls}}" qq:key="id" qq:for-index="idx">
                        <image class="img" qq:if="{{idx%2===1}}" mode="widthFix" src="{{item.url}}"></image>
                    </block>
                </view>
            </view>
        </scroll-view>
    </view>
</view>