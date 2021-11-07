<template>
  <div class="bg" ref="bg">
    <canvas id="canvas01" ref="canvas01"></canvas>
    <canvas id="canvas02" ref="canvas02"></canvas>
  </div>
</template>
<script>
import { setShadow, clearShadow, Rect, Vector, triangulationCreate, voronoiCreate } from "@js/voronoiDiagram.js";
export default {
  name: "bg",

  mounted() {
    const resetPosList = (w, h, quantity) =>
      new Array(quantity).fill([0, 0]).map(() => [Math.random() * w, Math.random() * h]);

    const drawVoronoi = (ctx, polygonList, options = {}) => {
      options = { strokeStyle: "#0000ff", fillStyle: "", lineWidth: 1, pos: [0, 0], ...options };
      ctx.strokeStyle = options.strokeStyle;
      ctx.lineWidth = options.lineWidth;
      ctx.fillStyle = options.fillStyle;
      polygonList.forEach((polygon, i) => {
        ctx.beginPath();
        drawPolygon(
          ctx,
          polygon.map((el) => Vector.add(el, options.pos))
        );
        ctx.closePath();
        options.fillStyle && ctx.fill();
        options.strokeStyle && ctx.stroke();
      });
    };
    function drawPolygon(ctx, polygon) {
      if (polygon.length > 0) {
        ctx.moveTo(polygon[0][0], polygon[0][1]);
      }
      let index;
      for (let i = 0, len = polygon.length; i < len; i++) {
        index = (i + 1) % len;
        ctx.lineTo(polygon[index][0], polygon[index][1]);
      }
    }
    function calcVoronoi(posList) {
      triangulationData = triangulationCreate(posList);
      polygon = voronoiCreate(posList, triangulationData.triangleList, triangulationData.shell, mainRect);
      polygonList = polygon.polygonListShow;
    }
    let cWidth, cHeight;
    const canvas01 = this.$refs.canvas01;
    const ctx01 = canvas01.getContext("2d");
    const canvas02 = this.$refs.canvas02;
    const ctx02 = canvas02.getContext("2d");
    const bg = this.$refs.bg;

    cWidth = canvas01.width = canvas02.width = bg.clientWidth;
    cHeight = canvas01.height = canvas02.height = bg.clientHeight;

    let mainRect = new Rect(0, 0, cWidth, cHeight);
    let posList;
    let triangulationData;
    let polygonList;
    let polygon;

    let lineLink;

    function draw(ctx) {
      ctx.clearRect(0, 0, cWidth, cHeight);
      setShadow(ctx, 0, 0, 20, "rgba(255,255,255,1)");
      drawVoronoi(ctx, polygonList, {
        strokeStyle: "rgba(45,52,80,1)",
        lineWidth: 0.25,
      });
      clearShadow(ctx);
    }
    function init() {
      const N = Math.ceil((cWidth * cHeight) / 1000);
      //console.log(N);
      posList = resetPosList(cWidth, cHeight, N);
      calcVoronoi(posList);
      lineLink = [];
      polygon.polygonIndexList.forEach((indexList) => {
        for (let i = 0; i < indexList.length; i++) {
          if (!lineLink[indexList[i]]) {
            lineLink[indexList[i]] = [];
          }
          let data;
          data = indexList[(i - 1 + indexList.length) % indexList.length];
          if (!lineLink[indexList[i]].some((value) => value === data)) {
            lineLink[indexList[i]].push(data);
          }
          data = indexList[(i + 1) % indexList.length];
          if (!lineLink[indexList[i]].some((value) => value === data)) {
            lineLink[indexList[i]].push(data);
          }
        }
      });
      draw(ctx01);
      list = [];
      for (let i = 0; i < 10; i++) {
        list.push(createDragLine());
      }
    }
    const createDragLine = () => {
      return {
        moveIndexList: createMoveIndexList(),
        lifeTime: 0,
        lifeTimeMax: 2 + Math.random() * 10,
        moveTime: 0,
        moveInterval: 0.1 + Math.random() * 0.1,
      };
    };
    const createMoveIndexList = () => {
      const list = [];
      addMoveIndex(list);
      addMoveIndex(list, list[list.length - 1]);
      addMoveIndex(list, list[list.length - 1]);
      addMoveIndex(list, list[list.length - 1]);
      addMoveIndex(list, list[list.length - 1]);
      addMoveIndex(list, list[list.length - 1]);
      addMoveIndex(list, list[list.length - 1]);
      addMoveIndex(list, list[list.length - 1]);
      addMoveIndex(list, list[list.length - 1]);
      addMoveIndex(list, list[list.length - 1]);
      addMoveIndex(list, list[list.length - 1]);
      return list;
    };
    const debounce = function(func, delay = 250) {
      let timeout = null;
      return function() {
        const context = this;
        const args = arguments;
        clearTimeout(timeout);
        timeout = setTimeout(() => {
          func.apply(context, args);
        }, delay);
      };
    };
    function resize() {
      mainRect.width = cWidth = canvas01.width = canvas02.width = bg.clientWidth;
      mainRect.height = cHeight = canvas01.height = canvas02.height = bg.clientHeight;
      init();
    }

    let oldTime = Date.now();
    let list;

    function addMoveIndex(moveIndexList, index = -1) {
      for (let i = 0; i < 10; i++) {
        let num =
          index === -1
            ? Math.floor(Math.random() * polygon.polygonPosList.length)
            : lineLink[index][Math.floor(Math.random() * lineLink[index].length)];
        if (!moveIndexList.some((value) => value === num)) {
          moveIndexList.push(num);
          return;
        }
      }
    }
    let time = 0;
    let interval = 1 / 12;
    function animate() {
      requestAnimationFrame(animate);
      const nowTime = Date.now();
      const delta = (nowTime - oldTime) / 1000;
      oldTime = nowTime;
      time += delta;
      if (time < interval) {
        return;
      }
      list.forEach((el) => {
        el.moveTime += time;
        if (el.moveTime >= el.moveInterval) {
          el.moveTime %= el.moveInterval;
          addMoveIndex(el.moveIndexList, el.moveIndexList[el.moveIndexList.length - 1]);
          el.moveIndexList.shift();
        }
      });

      ctx02.save();
      ctx02.globalCompositeOperation = "destination-out";
      ctx02.fillStyle = "rgba(0,0,0,0.1)";
      ctx02.fillRect(0, 0, cWidth, cHeight);
      ctx02.restore();

      ctx02.globalCompositeOperation = "source-over";
      ctx02.lineWidth = 1;
      ctx02.fillStyle = "none";
      ctx02.lineJoin = "round";
      ctx02.lineCap = "round";
      ctx02.beginPath();

      list.forEach((el, index, array) => {
        el.lifeTime += time;
        if (el.lifeTime >= el.lifeTimeMax) {
          array.splice(index, 1);
        }
      });
      if (list.length < 20) {
        if (Math.random() > 0.5) {
          list.push(createDragLine());
        }
      }

      list.forEach((el) => {
        ctx02.strokeStyle = "rgba(45,52,80,1)";
        el.moveIndexList.forEach((value, index, array) => {
          let p = polygon.polygonPosList[value];
          if (index == 0) {
            let p1 = polygon.polygonPosList[array[(index + 1) % array.length]];
            let p2 = Vector.mix(p, p1, el.moveTime / el.moveInterval);
            ctx02.moveTo(p2[0], p2[1]);
          } else if (index == array.length - 1) {
            let p1 = polygon.polygonPosList[array[(index - 1 + array.length) % array.length]];
            let p2 = Vector.mix(p, p1, 1 - el.moveTime / el.moveInterval);
            ctx02.lineTo(p2[0], p2[1]);
          } else {
            ctx02.lineTo(p[0], p[1]);
          }
        });
        ctx02.stroke();
      });
      clearShadow(ctx02);

      time -= interval;
    }
    window.addEventListener("resize", debounce(resize));
    resize();
    animate();
  },
};
</script>
<style lang="scss" scoped>
.bg {
  position: absolute;
  left: 0px;
  top: 0px;
  height: 100%;
  width: 100%;
  overflow: hidden;
  #canvas01,
  #canvas02 {
    position: absolute;
    display: block;
    left: 0px;
    top: 0px;
  }
}
</style>
