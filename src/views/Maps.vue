<template>
  <div class="maps">
    <l-map
      :zoom="zoom"
      :center="center"
      style="height: 100%"
      @update:center="centerUpdate"
      @update:zoom="zoomUpdate"
    >
      <l-tile-layer :url="url" :attribution="attribution"/>
      <l-marker :lat-lng="marker">
        <l-popup>
          <div @click="popupClick">I am a tooltip
            <p
              v-show="showParagraph"
            >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sed pretium nisl, ut sagittis sapien. Sed vel sollicitudin nisi. Donec finibus semper metus id malesuada.</p>
          </div>
        </l-popup>
      </l-marker>
    </l-map>
  </div>
</template>

<script>
import { LMap, LTileLayer, LMarker, LPopup } from "vue2-leaflet";
export default {
  name: "Example",
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LPopup
  },
  data() {
    return {
      zoom: 13,
      center: L.latLng(42.69751, 23.32415),
      url: "http://{s}.tile.osm.org/{z}/{x}/{y}.png",
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      marker: L.latLng(42.69751, 23.32415),
      currentZoom: 13,
      currentCenter: L.latLng(42.69751, 23.32415),
      showParagraph: false
    };
  },
  methods: {
    zoomUpdate(zoom) {
      this.currentZoom = zoom;
    },
    centerUpdate(center) {
      this.currentCenter = center;
    },
    showLongText() {
      this.showParagraph = !this.showParagraph;
    },
    popupClick() {
      alert("Popup Click!");
    }
  }
};
</script>

<style lang="scss">
.maps {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: hsla(240, 7%, 81%, 0.15);
  width: 100%;
  overflow: hidden;
  height: calc(100% - 60px);
  box-sizing: border-box;
}
</style>
