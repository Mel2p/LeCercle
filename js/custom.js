var sliderWeight = document.getElementById('slider-weight');
// sliderWeight.onchange = function() {
//     refreshEdgeBySliderWeight()
// }

$("#slider-weight").on("input change", function() { 
    refreshEdgeBySliderWeight()
})

function refreshEdgeBySliderWeight(){
    let a = sigInst._core.graph.edges
    a.forEach(element => {
        if (element.size < getSliderWeightValue()){
            element.hidden = true;
        } else {
            element.hidden = false;
        }
    });
    sigInst.refresh();
    sigInst.draw();
    console.log("refresh")
}

function getSliderWeightValue() {
    return sliderWeight.value
}