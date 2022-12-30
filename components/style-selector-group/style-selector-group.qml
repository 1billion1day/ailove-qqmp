<view class="preview">
    <block qq:for="{{previewList}}" qq:key="id">
        <style-selector-item class="preview-item" url="{{item.url}}" name="{{item.name}}" size="small"
                             withClose="true"
                             bind:tap="onTapSelected" data-id="{{item.id}}"/>
    </block>
    <block qq:for="{{placeholderList}}" qq:key="*this">
        <style-selector-item class="preview-item" size="small"/>
    </block>
</view>
<view class="style-selector-view">
    <scroll-view class="style-selector" scroll-x="true">
        <view class="style-selector-inner">
            <block qq:for="{{styleList}}" qq:for-index="idx" qq:key="id">
                <style-selector-item url="{{item.url}}" name="{{item.name}}" selected="{{previewSelected[idx]}}"
                                     size="default"
                                     bind:tap="onTapStyle" data-id="{{idx}}" data-item="{{item}}"/>
            </block>
        </view>
    </scroll-view>
    <view class="more-hint">更多</view>
</view>
