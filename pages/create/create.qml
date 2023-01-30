<view class="container">
    <view qq:if="{{tempFilePath==null}}" class="button">
        <love-button bind:tap="bindChooseImageTap">从相册选择</love-button>
    </view>
    <view qq:else class="photo-container">
        <view class="back-c">
            <love-button bind:tap="bindBackToHome">返回</love-button>
        </view>
        <block qq:if="{{state !=2 }}">
            <view class="photo">
                <image mode="aspectFit" src="{{tempFilePath}}"></image>
            </view>
            <view class="next-c">
                <block qq:if="{{state == 0}}">
                    <love-button bind:tap="bindNextTap">下一步</love-button>
                </block>
                <block qq:if="{{state == 1}}">
                    <love-button bind:tap="bindNextTap">取消</love-button>
                </block>
            </view>
        </block>
        <block qq:else>
            <view class="result-c">
                <view class="photo-c" qq:for="{{urls}}" qq:key="*this">
                    <image mode="aspectFit" src="{{item}}"></image>
                    <love-button bind:tap="bindDownloadTap" data-url="{{item}}">下载</love-button>
                </view>
            </view>
        </block>
    </view>
</view>