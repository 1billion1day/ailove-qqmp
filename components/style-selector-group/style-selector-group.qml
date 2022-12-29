<scroll-view class="style-selector" scroll-x="true">
    <view class="style-selector-inner">
        <block qq:for="{{styleList}}" qq:for-index="idx">
            <style-selector-item url="{{item.url}}" name="{{item.name}}" selected="true"></style-selector-item>
        </block>
    </view>
</scroll-view>
