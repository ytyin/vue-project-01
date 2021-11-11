<template>
    <div class="try-map">
        <baidu-map class="bm-view"  :center="center" :zoom="15"  @ready="handler" @moving="syncCenterAndZoom"
        @moveend="syncCenterAndZoom"
        @zoomend="syncCenterAndZoom">
            <bm-scale anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-scale>
            <bm-navigation anchor="BMAP_ANCHOR_BOTTOM_LEFT"></bm-navigation>
            <bm-overview-map anchor="BMAP_ANCHOR_BOTTOM_RIGHT" :isOpen="true"></bm-overview-map>
            <bm-geolocation anchor="BMAP_ANCHOR_BOTTOM_RIGHT" :showAddressBar="true" :autoLocation="true"></bm-geolocation>
            <bm-city-list anchor="BMAP_ANCHOR_TOP_LEFT"></bm-city-list>
            <bm-panorama></bm-panorama>
            <bm-boundary name="北京市海淀区" :strokeWeight="2" strokeColor="blue"></bm-boundary>
            <bm-driving start="天安门" end="1+1大厦" @searchcomplete="handleSearchComplete" :panel="false" :autoViewport="true"></bm-driving>
            <bml-lushu
                @stop="reset"
                :path="path"
                :icon="icon"
                :play="play"
                :rotation="true">
            </bml-lushu>
        </baidu-map>  
        <!-- mapType="BMAP_SATELLITE_MAP" 显示卫星图 :scroll-wheel-zoom="true" 缩放不起作用-->
        <div class="num-tip">
            <label for="">经度：</label> <input v-model.number="center.lng">
            <label for="">纬度：</label> <input v-model.number="center.lat">
            <label for="">缩放比例：</label><input v-model.number="zoom">
        </div>
    </div>
</template>

<script>
import {BmlLushu} from 'vue-baidu-map'
export default {
    components: {
        BmlLushu
    },
    data () {
        return {
            center: {lng: 0, lat: 0},
            zoom: 15,
            play: true, //路书
            path: [],
            icon: {
                url: 'http://api.map.baidu.com/library/LuShu/1.2/examples/car.png',
                size: { width: 52, height: 26},
                opts: {anchor: {width: 27, height:13}}
            }
        }
    },
    methods: {
        handler ({BMap, map}) {
            console.log(BMap, map)
            this.center.lng = 116.404
            this.center.lat = 39.915
        },
        syncCenterAndZoom (e) {
            const {lng, lat} = e.target.getCenter()
            this.center.lng = lng
            this.center.lat = lat
            this.zoom = e.target.getZoom()
        },
        reset () {
            this.play = false
        },
        handleSearchComplete (res) {
            this.path = res.getPlan(0).getRoute(0).getPath()
        }
    }
}
</script>

<style lang="scss" scoped>
    .try-map{
        display: flex;
        flex-direction: column;
        .num-tip{
            flex: 1;
            display: flex;
            flex-wrap: wrap;
            border: greenyellow 3px solid;
            label,input{
                display: inline-block;
                width: 50%;
                line-height: 30px;
                border: yellowgreen 1px solid;
            }
        }
        .bm-view {
            width: 100%;
            height: 500px;
        }
    }
    

</style>