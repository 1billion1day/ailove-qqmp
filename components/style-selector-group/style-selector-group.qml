<view class="style-selector-view">
    <scroll-view class="style-selector" scroll-x="true">
        <view class="style-selector-inner">
            <block qq:for="{{styleList}}" qq:for-index="idx">
                <style-selector-item url="{{item.url}}" name="{{item.name}}" selected="{{previewSelected[idx]}}"
                                     bind:tap="onTapStyle" data-id="{{idx}}" data-item="{{item}}"/>
            </block>
        </view>
    </scroll-view>
</view>
<card title="已选风格" >
    <view class="preview">
        <block qq:for="{{previewList}}">
            <view class="preview-item preview-item-close"
                  bind:tap="onTapSelected" data-id="{{item.id}}">
                <style-selector-item class="preview-item preview-selector" url="{{item.url}}" name="{{item.name}}"/>
                <icon class="preview-close" type="clear"></icon>
            </view>
        </block>
        <block qq:for="{{placeholderList}}" qq:for-index="idx">
            <view class="preview-item preview-placeholder preview-next"></view>
        </block>
    </view>
</card>
