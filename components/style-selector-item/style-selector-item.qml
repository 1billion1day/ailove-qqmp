<view qq:if="{{url!==''}}" class="style-item {{selected?'style-item-border-selected':'style-item-border'}} {{size}}">
    <!--    <view class="style-item-img" style='background-image: url("{{url}}")'>-->
    <view class="style-item-img {{size}}">
        <image src="{{url}}" class="{{size}}"></image>
    </view>
    <view class="style-item-mask {{size}}">
        <view class="padding {{size}}-padding"></view>
        <view class="style-desc-title {{size}}-title">{{name}}</view>
    </view>
    <icon qq:if="{{withClose}}" class="preview-close {{size}}-close" size="10" type="clear"></icon>
</view>
<view qq:else class="{{size}} style-item-empty preview-next"></view>
