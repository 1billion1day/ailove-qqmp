<view class="container">
    <view class="tabs-group">
        <view class="tab {{selectedTab==='my'? 'activate': 'deactivate'}}" bind:tap="onTapTab" data-name="my">
            <view class="tab-content">我的</view>
            <view class="line"></view>
        </view>
        <view class="tab {{selectedTab==='hot'? 'activate': 'deactivate'}}" bind:tap="onTapTab" data-name="hot">
            <view class="tab-content">热门</view>
            <view class="line"></view>
        </view>
    </view>
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