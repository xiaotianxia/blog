<template>
    <div class="wrapper">
        <div class="titles">
            <h4>scroll-snap-type: y mandatory;</h4>
            <h4>scroll-snap-type: y proximity;</h4>
        </div>
        <div class="scroll-wrapper">
            <div class="scroll-container y y-mandatory">
                <ul>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                    <li>5</li>
                    <li>6</li>
                </ul>
            </div>
            <div class="scroll-container y y-proximity">
                <ul>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                    <li>5</li>
                    <li>6</li>
                </ul>
            </div>
        </div>

        <div class="titles">
            <h4>scroll-snap-type: x mandatory;</h4>
            <h4>scroll-snap-type: x proximity;</h4>
        </div>
        <div class="scroll-wrapper">
            <div class="scroll-container x x-mandatory">
                <ul>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                    <li>5</li>
                    <li>6</li>
                </ul>
            </div>
            <div class="scroll-container x x-proximity">
                <ul>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                    <li>5</li>
                    <li>6</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    .wrapper {
        margin: 10px auto;
    }
    .titles {
        display: flex;
    }
    .titles h4 {
        flex-basis: 48%;
        margin-bottom: 4px;
        text-align: center;
    }
    .scroll-wrapper {
        display: flex;
        overscroll-behavior: contain;
        margin-bottom: 10px;
    }
    .scroll-container {
        display: flex;
        flex-basis: 48%;
        height: 300px;
        border: 1px solid #b2bec3;
    }
    .scroll-container.y {
        flex-flow: column nowrap;
        overflow-y: scroll;
    }
    .scroll-container.x {
        overflow-x: scroll;
        overflow-y: hidden;
        flex-flow: row nowrap;
    }
    .scroll-container:nth-child(1) {
        margin-right: 10px;
    }
    .scroll-container ul {
        list-style: none;
        margin: 0;
        padding: 0;
    }
    .scroll-container ul li {
        text-align: center;
        line-height: 300px;
        color: #fff;
        font-size: 40px;
    }

    .scroll-container.y ul li {
        height: 300px;
        scroll-snap-align: start;
    }

    .scroll-container.x ul {
        display: flex;
        display: flex;
        flex-flow: row nowrap;
    }

    .scroll-container.x ul li {
        margin: 0 30px;
        scroll-snap-align: center;
    }
    .y-mandatory {
        scroll-snap-type: y mandatory;
    }
    .y-proximity {
        scroll-snap-type: y proximity;
    }
    .x-mandatory {
        scroll-snap-type: x mandatory;
    }
    .x-proximity {
        scroll-snap-type: x proximity;
    }
    .scroll-container ul li:nth-child(1) {
        background-color: #636e72;
    }
    .scroll-container ul li:nth-child(2) {
        background-color: #e17055;
    }
    .scroll-container ul li:nth-child(3) {
        background-color: #00cec9;
    }
    .scroll-container ul li:nth-child(4) {
        background-color: #fdcb6e;
    }
    .scroll-container ul li:nth-child(5) {
        background-color: #55efc4;
    }
    .scroll-container ul li:nth-child(6) {
        background-color: #ff7675;
    }

    .scroll-container.x ul li:nth-child(1) {
        width: 250px;
    }
    .scroll-container.x ul li:nth-child(2) {
        width: 150px;
    }
    .scroll-container.x ul li:nth-child(3) {
        width: 450px;
    }
    .scroll-container.x ul li:nth-child(4) {
        width: 300px;
    }
    .scroll-container.x ul li:nth-child(5) {
        width: 320px;
    }
    .scroll-container.x ul li:nth-child(6) {
        width: 220px;
    }
</style>

