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
<card title="已选风格" subtitle="点击已选可替换">
    <view class="preview">
        <block qq:for="{{previewList}}">
            <style-selector-item class="preview-item" url="{{item.url}}" name="{{item.name}}"
                                 bind:tap="onTapSelected" data-id="{{item.id}}"/>
        </block>
        <block qq:for="{{placeholderList}}" qq:for-index="idx">
            <view class="preview-item preview-placeholder preview-next"></view>
        </block>
    </view>
</card>
