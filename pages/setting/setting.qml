<view class="container">
    <view class="header">
        <view class="header-left">
            <block qq:if="{{!hasUserInfo && canIUse}}">
                <image src="{{headerLeftIcon}}" class="header-left-icon"></image>
            </block>
            <block qq:else>
                <image src="{{userInfo.avatarUrl}}" class="header-left-icon"></image>
            </block>
        </view>
        <view class="header-center">
            <block qq:if="{{!hasUserInfo && canIUse}}">
                <love-button open-type="getUserInfo" bind:getUserInfo="getUserInfo">
                    <text class="header-center-text">{{headerCenterText}}</text>
                </love-button>
            </block>
            <block qq:else>
                <love-button>
                    <text class="header-center-text">{{userInfo.nickName}}</text>
                </love-button>
            </block>
        </view>
    </view>
    <view class="content">
<!--        <view class="member-card">-->
<!--开通会员-->
<!--        </view>-->
        <card title="我的图片">
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
        </card>
    </view>
</view>