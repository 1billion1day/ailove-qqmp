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
        <view class="member-card">
开通会员
        </view>
        <card title="常见问题">
            <view class="card-text">
                如果你在使用情侣头像的过程中遇到任何问题或者希望进行反馈，可以发送邮件到官方邮箱xxx@xxx.com，也可以通过官方客服微信1234567或直接扫描下方二维码添加客服与我们联系，并可立即加入AI情侣头像交流群，与志同道合的朋友们一起研究无限可能~
            </view>
        </card>
    </view>
</view>